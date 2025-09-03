#!/bin/bash
set -euo pipefail

# Helper to print error and exit
fail() {
  echo "❌ $1" >&2
  exit 1
}

# Install nvm if not present
if ! command -v nvm &> /dev/null; then
  echo "🌐 Installing nvm..."
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash || fail "Failed to install nvm."
fi
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
echo "✅ nvm loaded."

# Ensure Node.js v22 is installed and used
NODE_VERSION="22"
if ! nvm ls "$NODE_VERSION" | grep -q "$NODE_VERSION"; then
  echo "🔢 Installing Node.js v$NODE_VERSION..."
  nvm install "$NODE_VERSION" || fail "Failed to install Node.js $NODE_VERSION."
fi
nvm use "$NODE_VERSION" || fail "Failed to use Node.js $NODE_VERSION."
# Ensure the shell uses the correct node version
export PATH="$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH"
echo "🟢 Using Node.js $(node --version), npm $(npm --version)"

# Check for required commands
git --version >/dev/null 2>&1 || fail "git not found"
php --version >/dev/null 2>&1 || fail "php not found"

# Composer check
if ! test -f ~/composer.phar; then
  echo "❌ composer.phar not found in home directory. Downloading..."
  curl -sS https://getcomposer.org/installer | php -- --install-dir=$HOME --filename=composer.phar || fail "Failed to download composer.phar."
fi

# Frontend deploy
echo "🔄 Fetching latest frontend code..."
git fetch
GIT_CHANGES=$(git status --porcelain)
if [ -n "$GIT_CHANGES" ]; then
  echo "🔄 Pulling changes..."
  git pull || fail "git pull failed."
else
  echo "🟢 No changes to pull."
fi

echo "📦 Installing frontend dependencies..."
npm install || fail "npm install failed."

echo "⚙️ Building frontend..."
npm run build || fail "npm run build failed."

echo "🚚 Deploying build files..."
cp -a ./build/. ./public/ || fail "Failed to copy build files."

echo "🧹 Cleaning up build and node_modules..."
rm -rf ./build ./node_modules

# Backend deploy
if [ ! -d "aapdpp-api" ]; then
  fail "Backend directory aapdpp-api not found."
fi
cd aapdpp-api

echo "🔄 Fetching latest backend code..."
git fetch
GIT_CHANGES=$(git status --porcelain)
if [ -n "$GIT_CHANGES" ]; then
  echo "🔄 Pulling changes..."
  git pull || fail "git pull failed."
else
  echo "🟢 No changes to pull."
fi

echo "📦 Installing backend dependencies..."
php ~/composer.phar install --no-dev --no-ansi --no-scripts --no-interaction --optimize-autoloader || fail "Composer install failed."

echo "🗄️ Running migrations..."
php artisan migrate --force || fail "Migrations failed."

echo "⚡ Optimizing Laravel..."
php artisan optimize || fail "Laravel optimize failed."

# Summary
cd ..
echo "\n🎯 Deployment completed successfully!"
echo "Node.js: $(node --version)"
echo "npm: $(npm --version)"
echo "Composer: $(php ~/composer.phar --version | head -n1)"
echo "Laravel: $(cd aapdpp-api && php artisan --version)"
echo "✅ All done! 🎉"

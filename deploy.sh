#!/bin/bash
git pull \
&& export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" \
&& nvm install 16 \
&& nvm use 16 \
&& npm install \
&& npm run build \
&& cp -a ./build/. . \
&& rm -rf ./build \
&& rm -rf ./node_modules \
&& cd aapdpp-api \
&& git pull \
&& php ~/composer.phar install \
&& php artisan migrate --force \
&& php artisan optimize \
&& php artisan event:cache
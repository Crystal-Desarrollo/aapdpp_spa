#!/bin/bash
wget -qO- https://cdn.rawgit.com/creationix/nvm/master/install.sh | bash \
&& export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" \
&& nvm install 16.10.0 \
&& npm install \
&& npm run build \
&& cp -a ./build/. . \
&& rm -rf ./build \
&& rm -rf ./node_modules
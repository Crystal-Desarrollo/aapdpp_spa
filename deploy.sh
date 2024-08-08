#!/bin/bash
git pull \
&& npm install \
&& npm run build \
&& cp -a ./build/. . \
&& rm -rf ./build \
&& rm -rf ./node_modules \
&& cd aapdpp-api \
&& git pull \
&& php ~/composer.phar install --no-dev --no-ansi --no-scripts --no-interaction --optimize-autoloader \
&& php artisan migrate --force \
&& php artisan optimize

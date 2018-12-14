#!/bin/bash

npx rollup --silent -f iife -i index.js | npx uglifyjs > build.js

rm -f vendor.js
curl -L https://unpkg.com/vue/dist/vue.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor.js
curl -L https://unpkg.com/animejs/anime.min.js >> vendor.js
curl -L https://unpkg.com/d3 >> vendor.js
curl -L https://unpkg.com/three/build/three.min.js >> vendor.js
cat ./three.js | npx uglifyjs >> vendor.js

rm -f vendor_aframe.js
curl -L https://unpkg.com/vue/dist/vue.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor_aframe.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor_aframe.js
curl -L https://unpkg.com/animejs/anime.min.js >> vendor_aframe.js
curl -L https://unpkg.com/d3 >> vendor_aframe.js
curl -L https://unpkg.com/aframe | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/aframe-rounded | npx uglifyjs >> vendor_aframe.js
cat ./three.js | npx uglifyjs >> vendor_aframe.js

# Offline

npx rollup -f es -i framework.js | npx uglifyjs > ../templates/offline/framework.js
npx rollup -f es -i utils.js | npx uglifyjs > ../templates/offline/utils.js
cp vendor.js ../templates/offline/.
cp vendor_aframe.js ../templates/offline/.
cp style.css ../templates/offline/.
cp components/Css.js ../templates/offline/.
cp components/Init.js ../templates/offline/.


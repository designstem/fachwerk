#!/bin/bash

npx rollup -f iife -i index.js | npx uglifyjs > build.js

rm -f vendor.js
curl -L https://unpkg.com/vue/dist/vue.min.js >> vendor.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor.js
curl -L https://unpkg.com/animejs/anime.min.js >> vendor.js
curl -L https://unpkg.com/d3 >> vendor.js
curl -L https://unpkg.com/three/build/three.min.js >> vendor.js
cat ./three.js | npx uglifyjs >> vendor.js

rm -f vendor_aframe.js
curl -L https://unpkg.com/vue/dist/vue.min.js >> vendor_aframe.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor_aframe.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor_aframe.js
curl -L https://unpkg.com/animejs/anime.min.js >> vendor_aframe.js
curl -L https://unpkg.com/d3 >> vendor_aframe.js
curl -L https://unpkg.com/aframe | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/aframe-rounded | npx uglifyjs >> vendor_aframe.js
cat ./three.js | npx uglifyjs >> vendor_aframe.js

# Offline

npx rollup -f es -i framework.js | npx uglifyjs > ../template/offline/framework.js
npx rollup -f es -i utils.js | npx uglifyjs > ../template/offline/utils.js
cp vendor.js ../template/offline/.
cp vendor_aframe.js ../template/offline/.
cp style.css ../template/offline/.


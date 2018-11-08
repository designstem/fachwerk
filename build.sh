#!/bin/bash

npx rollup -f iife -i index.js | npx uglifyjs > build.js

rm vendor.js
curl -L https://unpkg.com/vue/dist/vue.min.js >> vendor.js
curl -L https://unpkg.com/three/build/three.min.js >> vendor.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor.js
curl -L https://unpkg.com/animejs/anime.min.js >> vendor.js
curl -L https://unpkg.com/d3 >> vendor.js
cat ./three.js | npx uglifyjs >> vendor.js
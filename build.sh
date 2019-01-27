#!/bin/bash

# Temporary duplicates

cp components.js framework.js

npx rollup --silent -f iife -i index.js | npx uglifyjs > build.js
npx rollup --silent -f iife -i docs/index.js | npx uglifyjs > docs/build.js

rm -f vendor.js
curl -L https://unpkg.com/vue@2.5/dist/vue.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/animejs@2/anime.min.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor.js
curl -L https://unpkg.com/d3 >> vendor.js
curl -L https://unpkg.com/three/build/three.min.js >> vendor.js
curl -L https://unpkg.com/codemirror | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/xml/xml.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/css/css.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/javascript/javascript.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/htmlmixed/htmlmixed.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/addon/mode/overlay.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/markdown/markdown.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/codemirror/mode/gfm/gfm.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/standalone.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/parser-babylon.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/parser-postcss.js | npx uglifyjs >> vendor.js
#curl -L https://unpkg.com/prettier/parser-markdown.js | npx uglifyjs >> vendor.js

cat ./three_svg.js | npx uglifyjs >> vendor.js

rm -f vendor_aframe.js
curl -L https://unpkg.com/vue@2.5/dist/vue.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/animejs@2/anime.min.js | npx uglifyjs >> vendor.js
curl -L https://unpkg.com/katex/dist/katex.min.js >> vendor_aframe.js
curl -L https://unpkg.com/marked/marked.min.js >> vendor_aframe.js
curl -L https://unpkg.com/d3 >> vendor_aframe.js
curl -L https://unpkg.com/aframe | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/aframe-rounded | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/xml/xml.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/css/css.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/javascript/javascript.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/htmlmixed/htmlmixed.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/addon/mode/overlay.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/markdown/markdown.js | npx uglifyjs >> vendor_aframe.js
curl -L https://unpkg.com/codemirror/mode/gfm/gfm.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/standalone.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/parser-babylon.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/parser-postcss.js | npx uglifyjs >> vendor_aframe.js
#curl -L https://unpkg.com/prettier/parser-markdown.js | npx uglifyjs >> vendor_aframe.js

cat ./three_svg.js | npx uglifyjs >> vendor_aframe.js

# Offline

npx rollup -f es -i framework.js | npx uglifyjs > ../templates/offline/components.js
npx rollup -f es -i utils.js | npx uglifyjs > ../templates/offline/utils.js
npx rollup -f es -i mixins.js | npx uglifyjs > ../templates/offline/mixins.js
cp vendor.js ../templates/offline/.
cp vendor_aframe.js ../templates/offline/.
cp styles.css ../templates/offline/.


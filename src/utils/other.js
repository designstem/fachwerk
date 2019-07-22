import { shuffle } from "../../fachwerk.js"

export const debounce_help = () => `

\`debounce(function, time)\`

Delays function execution until \`time\` milliseconds.

`

export const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};


export const log_help = () => `

\`log(message)\`

Logs a value from a template to the console

`;

export const log = value => console.log(value);

export const randomid_help = () => `

\`randomid()\`

Genrates a random alphabetical ID

#### Example

    randomid()

#### Output

<output>{{ randomid() }}</output>
`;

export const randomid = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return shuffle(letters).slice(0,8).join('')
}

export const isimageurl_help = () => `

\`isimageurl()\`

Checks whenever URL is a link to an image

#### Output

<output>{{ isimageurl('./images/image.png') ? 'true' : 'false' }}</output>
`;

export const isimageurl = url => {
  return url.match(/(data:|https?:|\/\/)?\.(?:png|jpg|jpeg|gif|png|svg)/g)
}
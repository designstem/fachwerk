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

\`isimageurl(url)\`

Checks whenever URL is a link to an image

#### Example

    isimageurl("./images/image.png") ? "true" : "false"

#### Output

<output>{{ isimageurl("./images/image.png") ? "true" : "false" }}</output>
`;

export const isimageurl = url => {
  return url.match(/(data:|https?:|\/\/)?\.(?:png|jpg|jpeg|gif|png|svg)/g)
}

// https://stackoverflow.com/revisions/5717133/6

export const isurl_help = () => `

\`isurl(url)\`

Checks whenever URL is a link to an image

#### Example

    isurl("google.com") ? 'true' : 'false'

#### Output

<output>{{ isurl("google.com") ? 'true' : 'false' }}</output>
`;

export const isurl = url => {
  const pattern = new RegExp('^(https?:\\/\\/)?'+       // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+                      // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+                  // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+                         // query string
    '(\\#[-a-z\\d_]*)?$','i');                          // fragment locator
  return !!pattern.test(url);
}
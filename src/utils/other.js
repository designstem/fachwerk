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
  console.log(letters)
  return shuffle(letters).slice(0,8).join('')
}
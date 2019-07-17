export const titlecase_help = () => `

\`titlecase(string)\`

Converts string to **Title Case**

#### Example

    titlecase('das ist wunderbar')

#### Output

<output>{{ titlecase('das ist wunderbar') }}</output>

`;

export const titlecase = string =>
  string
    .split(" ")
    .map(([h, ...t]) => h.toUpperCase() + t.join("").toLowerCase())
    .join(" ");

export const kebabcase_help = () => `

\`kebabcase(string)\`

Converts string to **kebab-case**

#### Example

    kebabcase('DonnerWetter')

#### Output

<output>{{ kebabcase('DonnerWetter') }}</output>

`;

export const kebabcase = string =>
  string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();


export const camelcase_help = () => `

\`camelcase(string)\`

Converts string to **camelCase**

#### Example

    camelcase('donner-wetter')

#### Output

<output>{{ camelcase('donnerWetter') }}</output>

`;

// https://matthiashager.com/converting-snake-case-to-camel-case-object-keys-with-javascript

export const camelcase = string => {
  return string.replace(/([-_][a-z])/gi, $1 => {
    return $1
      .toUpperCase()
      .replace("-", "")
      .replace("_", "");
  });
};

export const join_help = () => `

\`join(value1, value2, value3)\`

Joins a set of values to a space-separated string, useful for A-Frame integration.

#### Input

    join([1,2,3])
    join(4,5,6)

#### Output

    {{ join([1,2,3]) }}
    {{ join(4,5,6) }}

`;

export const join = function(arr) {
  return arr instanceof Array ? arr.join(" ") : Array.from(arguments).join(" ");
};

export const shorten_help = () => `

\`shorten(string, length = 50, suffix = "...")\`

Shortens the \`string\` to given \`length\` and with optional \`suffix\`.

#### Input

    join([1,2,3])
    join(4,5,6)

#### Output

    {{ join([1,2,3]) }}
    {{ join(4,5,6) }}

`;

export const shorten = (str, length = 50, suffix = "...") =>
  `${str.slice(0, length)}${str.length - 1 > length ? suffix : ""}`;

export const str = value =>
  Object.entries(value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ")
    .trim();

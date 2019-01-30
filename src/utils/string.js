export const titlecase_help = () => `

\`titleCase(string)\`

Converts string to **Title Case**

#### Example

    titleCase('das ist wunderbar')

#### Output

    {{ titleCase('das ist wunderbar') }}

`;

export const titleCase = string =>
  string
    .split(" ")
    .map(([h, ...t]) => h.toUpperCase() + t.join("").toLowerCase())
    .join(" ");

export const kebabcase_help = () => `

\`kebabCase(string)\`

Converts string to **kebab-case**

#### Example

    kebabCase('DonnerWetter')

#### Output

    {{ kebabCase('DonnerWetter') }}

`;

export const kebabCase = string =>
  string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

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

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

    shorten('A metal umlaut is a diacritic that is sometimes used gratuitously or decoratively over letters in the names of hard rock or heavy metal bands—for example those of Blue Öyster Cult, Queensrÿche, Motörhead, The Accüsed and Mötley Crüe.')

#### Output

<output>{{ shorten('A metal umlaut is a diacritic that is sometimes used gratuitously or decoratively over letters in the names of hard rock or heavy metal bands—for example those of Blue Öyster Cult, Queensrÿche, Motörhead, The Accüsed and Mötley Crüe.') }}</output>

`;

export const shorten = (str, length = 50, suffix = "...") =>
  `${str.slice(0, length)}${str.length - 1 > length ? suffix : ""}`;

// @TODO Add help

export const str = value =>
  Object.entries(value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("; ")
    .trim();

export const slug_help = () => `

\`slug(string)\`

Creates an URL-friendly version of a string.

#### Input

    slug('March ör Die by Motörhead')

#### Output

 <output>{{ slug('March ör Die by Motörhead') }}</output>

`;

// https://gist.github.com/mathewbyrne/1280286#gistcomment-2614193

export const slug = text => {
  text = text
    .toString()
    .toLowerCase()
    .trim();

  const sets = [
    { to: "a", from: "[ÀÁÂÃÄÅÆĀĂĄẠẢẤẦẨẪẬẮẰẲẴẶ]" },
    { to: "c", from: "[ÇĆĈČ]" },
    { to: "d", from: "[ÐĎĐÞ]" },
    { to: "e", from: "[ÈÉÊËĒĔĖĘĚẸẺẼẾỀỂỄỆ]" },
    { to: "g", from: "[ĜĞĢǴ]" },
    { to: "h", from: "[ĤḦ]" },
    { to: "i", from: "[ÌÍÎÏĨĪĮİỈỊ]" },
    { to: "j", from: "[Ĵ]" },
    { to: "ij", from: "[Ĳ]" },
    { to: "k", from: "[Ķ]" },
    { to: "l", from: "[ĹĻĽŁ]" },
    { to: "m", from: "[Ḿ]" },
    { to: "n", from: "[ÑŃŅŇ]" },
    { to: "o", from: "[ÒÓÔÕÖØŌŎŐỌỎỐỒỔỖỘỚỜỞỠỢǪǬƠ]" },
    { to: "oe", from: "[Œ]" },
    { to: "p", from: "[ṕ]" },
    { to: "r", from: "[ŔŖŘ]" },
    { to: "s", from: "[ßŚŜŞŠ]" },
    { to: "t", from: "[ŢŤ]" },
    { to: "u", from: "[ÙÚÛÜŨŪŬŮŰŲỤỦỨỪỬỮỰƯ]" },
    { to: "w", from: "[ẂŴẀẄ]" },
    { to: "x", from: "[ẍ]" },
    { to: "y", from: "[ÝŶŸỲỴỶỸ]" },
    { to: "z", from: "[ŹŻŽ]" },
    { to: "-", from: "[·/_,:;']" }
  ];

  sets.forEach(set => {
    text = text.replace(new RegExp(set.from, "gi"), set.to);
  });

  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

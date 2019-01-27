/* Internal use */

let d = [];

let d2 = {};

let u = {
  color: {},
  math: {},
  array: {},
  string: {},
  state: {},
  other: {}
};

/* Internal */

const getCssVariable = (value, el = document.body) =>
  getComputedStyle(el).getPropertyValue(value);

const setCssVariable = (key, value, el = document.body.style) =>
  el.setProperty(key, value);

/* Colors */

u.color.color = `

\`color('name')\`

Returns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.

#### Example

    color('red')
    color('rebeccapurple')

#### Output

    {{ color('red') }}
    {{ color('rebeccapurple')}}

`;

const color = name => {
  const color = getCssVariable(`--${name}`);
  return color ? color.trim() : name.trim();
};

/* Color functions */

u.color.rgb = `

\`rgb(r, g, b, a = false)\`

Outputs a CSS \`rgba()\` string

#### Example

    rgb(50,100,50,0.5)
    rgb(50,100,50)

#### Output

    {{ rgb(50,100,50,0.5) }}
    {{ rgb(50,100,50) }}

`;

const rgb = (r, g, b, a = false) =>
  a ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;


u.color.hsl = `

\`hsl(h, s = 100, l = 50, a = 1)\`

Outputs a CSS \`hsla()\` string

#### Example

    hsl(50,100,50,0.5)
    hsl(50,100,50)
    hsl(50)

#### Output

    {{ hsl(50,100,50,0.5) }}
    {{ hsl(50,100,50) }}
    {{ hsl(50) }}

`;

const hsl = (h, s = 100, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`;

u.math.scale = `

\`scale(value, start1, stop1, start2 = -2, stop2 = 2)\`

Scales linearily the input \`value\`
from the input range between \`start1\` and \`stop1\`
to the output range  \`start2\` and \`stop2\`.

#### Example

    scale(50, 0, 100, 0, 1)

#### Output

    {{ scale(50, 0, 100, 0, 1) }}

`;

const scale = (value, start1, stop1, start2 = -2, stop2 = 2) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

u.math.round = `

\`round(value, decimals = 0)\`

Rounds a number \`value\` to optional \`decimals\`.

Example
    
    round(0.1234)
    round(0.1234, 2)

Output
  
    {{ round(0.1234) }}
    {{ round(0.1234, 2) }}

`;

const round = (value, decimals = 0) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

u.string.trunc = `

\`trunc(value, count)\`

Truncates a \`value\` to \`count\` characters.

Example
    
    trunc('Hello', 4)
    trunc(Math.PI, 4)

Output
  
    {{ trunc('Hello', 4) }}
    {{ trunc(Math.PI, 4) }}

`;

const trunc = (value, count) => {
  return String(value).slice(0, count)
}

u.math.random = `

\`random(from, to, float = false)\`

Generates a random integer number between \`from\` and \`to\`. 
If \`float = true\`, the output value will be floating point number.

Example
    
    random(0, 2)
    random(0, 2, true)

Output
  
    {{ random(0, 2) }}
    {{ random(0, 2, true) }}
`;

const random = (from, to, float = false) => {
  const r = from + Math.random() * (to - from);
  return float ? r : Math.floor(r, 2);
};

u.math.range = `

\`range(from, to, step = 1)\`

Generates an array of integer numbers in between \`from\` and \`to\` with optional \`step\` parameter.

Example

    range(-1, 1, 0.5)

Output

    {{ range(-1, 1, 0.5) }}

`;

const range = (from, to, step = 1) => {
  const length = Math.floor((to - from) / step) + 1;
  return Array.from({ length }).map((_, i) => from + i * step);
};

// Trigonometry

u.math.polarx = `

\`polarx(angle, radius = 1)\`

Given the polar coordinates \`angle radius\`, return cartesian coordinates \`x y\`.

#### Example

    polarx(90, 10)

#### Output

    {{ polarx(90, 10) }}

`;

const polarx = (deg = 0, radius = 1) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

u.math.polarx = `

\`polary(angle, radius = 1)\`

Given the polar coordinates \`angle radius\`, return cartesian coordinates \`x y\`.

#### Example

    polary(90, 10)

#### Output

    {{ polary(90, 10) }}

`;

const polary = (deg = 0, radius = 1) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

const cx = (deg, radius) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

const cy = (deg, radius) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

u.math.polarpoints = `

\`polarpoints(count = 6, radius = 1)\`

Calculates \`count\` of \`{ x, y }\` points on the circle.

#### Example

    polarpoints(4,10)

#### Output

    {{ polarpoints(4,10) }}
`;

const polarpoints = (count = 6, radius = 1) => {
  return Array.from({
    length: count
  }).map((p, i) => ({
    x: cx((360 / count) * i, radius),
    y: cy((360 / count) * i, radius)
  }));
};

const cpoints = (count = 6, radius = 1) => {
  return Array.from({
    length: count
  }).map((p, i) => ({
    x: cx((360 / count) * i, radius),
    y: cy((360 / count) * i, radius)
  }));
};

u.math.deg2rad = `

\`deg2rad(angle)\`

Converts angle in degrees to radians.

#### Example

<f-math>
radians = \\frac{degrees \\cdot \\pi}{180} = \\frac{180 \\cdot \\pi}{180} = \\pi
</f-math>

    deg2rad(180)

#### Output

    {{ deg2rad(180) }}
`;

const deg2rad = deg => (deg * Math.PI) / 180;

u.math.rad2deg = `

\`rad2deg(angle)\`

Converts angle in radians to degrees.

#### Example

    rad2deg(Math.PI)

#### Output

    {{ rad2deg(Math.PI) }}
`;

const rad2deg = rad => (rad * 180) / Math.PI;

// Array

u.array.shuffle = `

\`shuffle(array)\`

Sorts the array in random order.

#### Example

    shuffle(range(0,3))

#### Output

    {{ shuffle(range(0,3)) }}

`;

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

u.array.any = `

\`any(array)\`

Picks a random element from the array.
Supports both array and function argument syntax.

#### Example

    any([0,1,2])
    any(0,1,2)

#### Output

    {{ any([0,1,2]) }}
    {{ any(0,1,2) }}

`;

const any = function(arr) {
  return arr instanceof Array
    ? shuffle(arr)[0]
    : shuffle(Array.from(arguments))[0];
};

u.array.flatten = `

\`flatten(array)\`

Flattens multidimensional array

#### Example

    flatten([0,1,[2,[3,4]]])

#### Output

    {{ flatten([0,1,[2,[3,4]]]) }}

`;

const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

u.array.chunk = `

\`chunk(array, length)\`

Chunks array into smaller \`length\`-sizeu.arrays

#### Example

    chunk([0,1,2,3],2)

#### Output

    {{ chunk([0,1,2,3],2) }}

`;

const chunk = (arr, length) =>
  Array.from({ length: Math.ceil(arr.length / length) }).map((_, n) =>
    arr.slice(n * length, n * length + length)
  );

u.array.unique = `

\`unique(array)\`

Removes duplicates from the array

#### Example

    unique([0,0,1,2])

#### Output

    {{ unique([0,0,1,2]) }}

`;

const unique = arr => [...new Set(arr)];

u.string.titleCase = `

\`titleCase(string)\`

Converts string to **Title Case**

#### Example

    titleCase('das ist wunderbar')

#### Output

    {{ titleCase('das ist wunderbar') }}

`;

const titleCase = string =>
  string
    .split(" ")
    .map(([h, ...t]) => h.toUpperCase() + t.join("").toLowerCase())
    .join(' ')


u.string.kebabCase = `

\`kebabCase(string)\`

Converts string to **kebab-case**

#### Example

    kebabCase('DonnerWetter')

#### Output

    {{ kebabCase('DonnerWetter') }}

`;

const kebabCase = string =>
  string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();


u.string.join = `

\`join(value1, value2, value3)\`

Joins a set of values to a space-separated string, useful for A-Frame integration.

#### Input

    join([1,2,3])
    join(4,5,6)

#### Output

    {{ join([1,2,3]) }}
    {{ join(4,5,6) }}

`;

const join = function(arr) {
  return arr instanceof Array ? arr.join(" ") : Array.from(arguments).join(" ");
};

// TODO: document this

export const shorten = (str,length = 50, suffix = '...') => 
  `${str.slice(0, length)}${str.length - 1 > length ? suffix : '' }`

// State

u.state.send = `

\`send(name, value)\`

Description to be written.

`

const send = function(channel, value) {
  if (this.$global) {
    const v = parseFloat(value);
    this.$global.$emit(channel, value == NaN ? value : v);
  }
};

u.state.receive = `

\`receive(name, callback)\`

Description to be written.

`

const receive = function(channel, callback) {
  if (this.$global) {
    this.$global.$on(channel, callback);
  }
};

u.state.get = `

\`get(key, default = null)\`

Description to be written.

`
const get = function(key, def = null) {
  if (this.$global) {
    const state = this.$global.$data.state[key];
    return state !== undefined ? state : def;
  }
  return null;
};

u.state.set = `

\`set(key, value)\`

Description to be written.

`

const set = function(key, value) {
  if (this.$global) {
    const arr = Array.from(arguments);
    if (arr.length == 1) {
      key = "value";
      value = arr[0];
    }
    Vue.set(this.$global.$data.state, key, JSON.parse(JSON.stringify(value)));
  }
  return null;
};

// Other utils

u.other.debounce = `

\`debounce = (fn, time)\`

Description to be written.

`

const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

u.other.snapToGrid = `

\`snapToGrid(value, gridsize)\`

Returns the value in the closest point of 2D grid.

#### Input

    snapToGrid(0.51,0.5)

#### Output

    {{ snapToGrid(0.51,0.5) }}
`;

const snapToGrid = (value, gridsize) => {
  return value % gridsize < gridsize / 2
    ? value - (value % gridsize)
    : value + gridsize - (value % gridsize);
};

u.other.log = `

\`log(message)\`

Logs a value from a template to the console

`;

const log = value => console.log(value);

// For internal use

const parseSheet = data => {
  return data.feed.entry.map(entry => {
    return Object.keys(entry)
      .map(field => {
        if (field.startsWith("gsx$")) {
          return [field.split("$")[1], entry[field].$t];
        }
      })
      .filter(field => field)
      .reduce((field, item) => {
        field[item[0]] = item[1];
        return field;
      }, {});
  });
};

const cleanColumns = content => {
  const pattern = /(\|[0-9\s]+\n)/g;
  return content.replace(pattern, "");
};

const parseColumns = slide => {
  const pattern = /(\|[0-9\s]+\n)/g;
  const match = slide.match(pattern);
  if (match) {
    const rowCount = match.length;
    const cols = match.map(m => {
      return m
        .trim()
        .replace(/\|/g, "")
        .split("")
        .filter(m => !m.match(/\s+/));
    });
    const colCount = cols[0].length;
    const areas = cols
      .map(m => `'${m.map(m => `a${m}`).join(" ")}'`)
      .join("\n");
    const content = slide.split(/\n-\n/).map(c => c.replace(pattern, ""));

    return { rowCount, colCount, areas, content };
  } else {
    const content = slide.split(/\n-\n/);
    return {
      rowCount: 1,
      colCount: content.length,
      areas: `'${content.map((_, i) => `a${i + 1}`).join(" ")}'`,
      content: content
    };
  }
};

// Coordinates

export const positionTransform = coords => {
  const c = parseCoords(coords);
  return `translate(${c[0][0]} ${c[0][1]})`;
};

export const positionTransform3 = coords => {
  const c = parseCoords(coords);
  if (c === null) {
    return {x: 1, y: 1, z: 1}
  }
  return {
    x: c[0][0],
    y: c[0][1],
    z: c[0][2]
  };
};

export const rotationTransform3 = coords => {
  const c = parseCoords(coords, normalizeRotation3);
  if (c === null) {
    return {x: 0, y: 0, z: 0}
  }
  return {
    x: deg2rad(c[0][0]),
    y: deg2rad(c[0][1]),
    z: deg2rad(c[0][2])
  };
};

export const scaleTransform3 = coords => {
  const c = parseCoords(coords, normalizeScale);
  if (c === null) {
    return {x: 1, y: 1, z: 1}
  }
  return {
    x: c[0][0],
    y: c[0][1],
    z: c[0][2]
  };
};

export const rotationTransform = coords => {
  const c = parseCoords(coords);
  return `rotate(${c[0][0]})`;
};

export const scaleTransform = coords => {
  const c = parseCoords(coords, normalizeScale);
  return `scale(${c[0][0]} ${c[0][1]})`;
};

const padArrayRight = (arr, length, fill) => {
  return [...arr, ...Array(length).fill(fill)].slice(0, length);
};

const isObject = object => typeof object == "object" && !Array.isArray(object);

export const normalizeDefault = arr => {
  if (arr == null) {
    return [0, 0, 0];
  }
  return padArrayRight(arr, 3, 0).map(value => makeNumber(value));
};

export const normalizeScale = arr => {
  if (arr === null || arr.length === 0) {
    return [1, 1, 1];
  }
  if (arr.length == 1) {
    return [arr[0], arr[0], arr[0]];
  }
  return normalizeDefault(arr);
};

export const normalizeRotation3 = arr => {
  if (arr === null) {
    return [[1, 1, 1]];
  }
  if (arr.length == 1) {
    return [0, 0, arr[0]];
  }
  return normalizeDefault(arr);
};

export const coordsTextToArray = (text, normalizer) => {
  if (text.trim().length === 0) {
    return [normalizer(null)]
  }
  return text
    .split(";")
    .map(t =>
      t
        .trim()
        .replace(/\s+/g, " ")
        .split(" ")
        .map(value => makeNumber(value))
    )
    .map(normalizer);
};

export const coordsNumberToArray = (number, normalizer) => {
  return [normalizer([number])];
};

export const coordsArrayToArray = (arr, normalizer) => {
  const containsArrays = arr.length && arr.filter(a => Array.isArray(a)).length;
  const coords = arr.map(a => {
    if (Array.isArray(a)) {
      return normalizer(a);
    }
    if (typeof a == "string") {
      if (a.split(/\s+/g).length > 1) {
        return coordsTextToArray(a, normalizer)[0];
      }
      return containsArrays ? normalizer([a]) : makeNumber(a);
    }
    if (typeof a == "number") {
      return containsArrays ? normalizer([a]) : a;
    }
    if (isObject(a)) {
      return coordsObjectToArray(a, normalizer)[0];
    }
    // TODO How to fail?
    return a;
  });
  if (Array.isArray(coords[0])) {
    return coords;
  }
  return [normalizer(coords)];
};

export const coordsObjectToArray = (obj, normalizer = normalizeDefault) => {
  if (
    obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, obj.y, obj.z])];
  }
  if (
    obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    !obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, obj.y, null])];
  }
  if (
    obj.hasOwnProperty("x") &&
    !obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, null, obj.z])];
  }
  if (
    !obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, null, obj.z])];
  }
  if (
    obj.hasOwnProperty("x") &&
    !obj.hasOwnProperty("y") &&
    !obj.hasOwnProperty("z")
  ) {
    return [normalizer([obj.x, null, null])];
  }
  if (
    !obj.hasOwnProperty("x") &&
    obj.hasOwnProperty("y") &&
    !obj.hasOwnProperty("z")
  ) {
    return [normalizer([null, obj.y, null])];
  }
  if (
    !obj.hasOwnProperty("x") &&
    !obj.hasOwnProperty("y") &&
    obj.hasOwnProperty("z")
  ) {
    return [normalizer([null, null, obj.z])];
  }
  return [normalizer([])];
};

export const makeNumber = value => {
  const float = parseFloat(value);
  if (isNaN(float)) {
    return 0;
  }
  return float;
};

export const parseCoords = (c, normalizer = normalizeDefault) => {
  if (typeof c == "string") {
    return coordsTextToArray(c, normalizer);
  }
  if (typeof c == "number") {
    return coordsNumberToArray(c, normalizer);
  }
  if (Array.isArray(c)) {
    return coordsArrayToArray(c, normalizer);
  }
  if (isObject(c)) {
    return coordsObjectToArray(c, normalizer);
  }
  return null;
};

export const equal = (c, d) => {
  const seen = new Map();
  return (function compare(a, b) {
    if (Object.is(a, b)) {
      return true;
    }
    if (a && typeof a === "object" && b && typeof b === "object") {
      if (seen.get(a) === b) {
        return true;
      }
      if (Object.keys(a || {}).length !== Object.keys(b || {}).length) {
        return false;
      }
      const merged = { ...a, ...b };
      for (const key in merged) {
        if (!compare(a && a[key], b && b[key])) {
          return false;
        }
      }
      seen.set(a, b);
      return true;
    }
    return false;
  })(c, d);
};


/* Export */

const docs = () => d;
const utilsDocs = () => u;

export {
  getCssVariable,
  setCssVariable,
  color,
  rgb,
  hsl,
  scale,
  round,
  random,
  range,
  polarx,
  polary,
  polarpoints,
  cx,
  cy,
  cpoints,
  deg2rad,
  rad2deg,
  shuffle,
  any,
  chunk,
  unique,
  flatten,
  snapToGrid,
  log,
  join,
  parseSheet,
  parseColumns,
  cleanColumns,
  trunc,
  kebabCase,
  titleCase,
  debounce,
  send,
  receive,
  set,
  get,
  utilsDocs
};

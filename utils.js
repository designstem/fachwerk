/* Internal use */

let d = [];

let d2 = {};

const getCssVariable = (variable, el = document.body) =>
  getComputedStyle(document.body).getPropertyValue(variable);

/* Colors */

d2.color = `

\`color('name')\`

Returns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.

#### Example:

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

d2.rgb = `

\`rgb(r, g, b, a = false)\`

Outputs a CSS \`rgba()\` string

#### Example:

    rgb(50,100,50,0.5)
    rgb(50,100,50)

#### Output:

    {{ rgb(50,100,50,0.5) }}
    {{ rgb(50,100,50) }}

`;

const rgb = (r, g, b, a = false) =>
  a ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;

d2.hsl = `

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

d2.scale = `

\`scale(value, start1, stop1, start2 = -2, stop2 = 2)\`

Scales linearily the input \`value\`
from the input range between \`start1\` and \`stop1\`
to the output range  \`start2\` and \`stop2\`.

#### Example:

    scale(50, 0, 100, 0, 1)

#### Output:

    {{ scale(50, 0, 100, 0, 1) }}

`;

const scale = (value, start1, stop1, start2 = -2, stop2 = 2) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

d2.round = `

\`round(value, decimals = 0)\`

Rounds a number \`value\` to optional \`decimals\`.

Example:
    
    round(0.1234)
    round(0.1234, 2)

Output:
  
    {{ round(0.1234) }}
    {{ round(0.1234, 2) }}

`;

const round = (value, decimals = 0) => {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
};

d2.random = `

\`random(from, to, float = false)\`

Generates a random integer number between \`from\` and \`to\`. 
If \`float = true\`, the output value will be floating point number.

Example:
    
    random(0, 2)
    random(0, 2, true)

Output:
  
    {{ random(0, 2) }}
    {{ random(0, 2, true) }}
`;

const random = (from, to, float = false) => {
  const r = from + Math.random() * (to - from);
  return float ? r : Math.floor(r, 2);
};

d2.range = `

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

d2.polarx = `

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

d2.polarx = `

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

d2.polarpoints = `

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

d2.deg2rad = `

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

d2.rad2deg = `

\`rad2deg(angle)\`

Converts angle in radians to degrees.

#### Example

    rad2deg(Math.PI)

#### Output

    {{ rad2deg(Math.PI) }}
`;

const rad2deg = rad => (rad * 180) / Math.PI;

// Array

d2.shuffle = `

\`shuffle(array)\`

Sorts the array in random order.

#### Example

    shuffle(range(0,3))

#### Output

    {{ shuffle(range(0,3)) }}

`;

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

d2.any = `

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

d2.flatten = `

\`flatten(array)\`

Flattens multidimensional array

#### Example

    flatten([0,1,[2,[3,4]]])

#### Output

    {{ flatten([0,1,[2,[3,4]]]) }}

`;

const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

d2.chunk = `

\`chunk(array, length)\`

Chunks array into smaller \`length\`-sized arrays

#### Example

    chunk([0,1,2,3],2)

#### Output

    {{ chunk([0,1,2,3],2) }}

`;

const chunk = (arr, length) =>
  Array.from({ length: Math.ceil(arr.length / length) }).map((_, n) =>
    arr.slice(n * length, n * length + length)
  );

d2.unique = `

\`unique(array)\`

Removes duplicates from the array

#### Example

    unique([0,0,1,2])

#### Output

    {{ unique([0,0,1,2]) }}

`;

const unique = arr => [...new Set(arr)];

// Other utils

d2.snapToGrid = `

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

d2.log = `

\`log(message)\`

Logs a value from a template to the console

`;

const log = value => console.log(value);

d2.join = `

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

const kebabCase = string =>
  string.replace(/([a-zA-Z])(?=[A-Z])/g, "$1-").toLowerCase();

const debounce = (fn, time) => {
  let timeout;
  return function() {
    const functionCall = () => fn.apply(this, arguments);
    clearTimeout(timeout);
    timeout = setTimeout(functionCall, time);
  };
};

const send = function(channel, value) {
  if (this.$global) {
    const v = parseFloat(value);
    this.$global.$emit(channel, value == NaN ? value : v);
  }
};

const receive = function(channel, callback) {
  if (this.$global) {
    this.$global.$on(channel, callback);
  }
};

const set = function(key, value) {
  if (this.$global) {
    const arr = Array.from(arguments);
    if (arr.length == 1) {
      key = "value";
      value = arr[0];
    }
    Vue.set(this.$global.$data.state, key, parseFloat(value));
  }
  return null;
};

const get = function(key, def = null) {
  if (this.$global) {
    const state = this.$global.$data.state[key];
    return state !== undefined ? state : def;
  }
  return null;
};

const coordsTextToArray = text => {
  return text.split(",").map(t =>
    t
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map(c => parseFloat(c))
  );
};

const coordsArrayToObject = array => {
  return array.map(a => ({ x: a[0], y: a[1] || 0, z: a[2] || 0 }));
};

const coordsObjectToObject = a => {
  return { x: a.x || 0, y: a.y || 0, z: a.z || 0 };
};

const parseCoords = c => {
  if (typeof c == "string") {
    return coordsArrayToObject(coordsTextToArray(c));
  }
  if (Array.isArray(c)) {
    return coordsArrayToObject(c);
  }
  if (!Array.isArray(c) && typeof c == "object") {
    return c;
  }
  return null;
};

/* Export */

const docs = () => d;
const utilsDocs = () => d2;

export {
  getCssVariable,
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
  kebabCase,
  debounce,
  send,
  receive,
  set,
  get,
  parseCoords,
  docs,
  utilsDocs
};

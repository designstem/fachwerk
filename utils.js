let d = []

d.push(`
  ### <code>scale = (value, start1, stop1, start2 = -2, stop2 = 2)</code>

  Scales linearily the input <code>value</code> from the input range between <code>start1</code> and <code>stop1</code> to the output range  <code>start2</code> and <code>stop2</code>.
  
  Example:

    // Scaling 50 in 0-100 range to 0-1 range
    scale(50, 0, 100, 0, 1)
  
  Output:

    {{ scale(50, 0, 100, 0, 1) }}

  ...
`)

const scale = (value, start1, stop1, start2 = -2, stop2 = 2) => {
  return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2
}


d.push(`
### <code>round = (value, decimals = 0)</code>

  Rounds a number <code>value</code> to optional <code>decimals</code>.
`)

const round = (value, decimals = 0) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

d.push(`
  ### <code>const random = (a, b, int = false)</code>

  Generates a random _floating_ number between <code>a</code> and <code>b</code>. If <code>int = true</code>, the output value will be _integer_.

  Example:
    
    random(0, 1);
    random(0, 1, true);

  Output:
  
    {{ random(0, 1) }}
    {{ random(0, 1, true) }}

`)

const random = (a, b, int = false) => {
  const r = a + Math.random() * (b - a)
  return int ? Math.floor(r, 2) : r
}

const range = (a, b) => [...Array(n).keys()]

// Trigonometry

const cx = (deg, radius) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

const cy = (deg, radius) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

const cpoints = (count, radius) => {
  return Array.from({
    length: count
  })
  .map((p, i) => ({
    x: cx((360 / count) * i, radius),
    y: cy((360 / count) * i, radius)
  }));
}

const deg2rad = deg => (deg * Math.PI) / 180;

const rad2deg = rad => (rad * 180) / Math.PI;

// Array

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

const any = function(arr) { return typeof arr == 'array' ? shuffle(arr)[0] : shuffle(Array.from(arguments))[0]}

// Color

const hsl = (h, s = 100, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`

// Other utils

const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

const snapToGrid = (value, snap) => {
  return value % snap < snap / 2
    ? value - (value % snap)
    : value + snap - (value % snap);
};

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

const log = value => console.log(value)

const docs = () => d

export {
  scale,
  round,
  random,
  range,
  cx,
  cy,
  cpoints,
  deg2rad,
  rad2deg,
  shuffle,
  any,
  hsl,
  flatten,
  snapToGrid,
  parseSheet,
  docs
};

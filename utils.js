// Math

const scale = (value, start1, stop1, start2 = -2, stop2 = 2) => {
  return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2
}

const round = (value, decimals = 0) => {
  return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

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
};

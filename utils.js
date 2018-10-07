const cx = (deg, radius) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

const cy = (deg, radius) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

const scale = (value, start1, stop1, start2, stop2) => {
  return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
};

const deg2rad = deg => (deg * Math.PI) / 180;

const rad2deg = rad => (rad * 180) / Math.PI;

const flatten = list => list.reduce(
  (a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []
);

// From https://bl.ocks.org/danasilver/cc5f33a5ba9f90be77d96897768802ca
const snapToGrid = (value, snap) => {
  return value % snap < snap / 2 ? value - (value % snap) : value + snap - (value % snap)
}
export { cx, cy, scale, deg2rad, rad2deg, flatten, snapToGrid };

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

export const snapgrid_help = () => `

\`snapgrid(value, gridsize)\`

Snaps object to grid

`;

export const snapgrid = (value, gridsize) => {
  return value % gridsize < gridsize / 2
      ? value - (value % gridsize)
      : value + gridsize - (value % gridsize);
};

export const snapcircle_help = () => `

\`snapcircle_help(value, gridsize)\`

Snaps object to circle

`;

export const snapcircle = (value, radius, center) => {
  // From https://math.stackexchange.com/questions/127613/closest-point-on-circle-edge-from-point-outside-inside-the-circle
  return center + (radius * (value - center) / Math.sqrt(Math.pow(value - center, 2) + Math.pow(value - center, 2)));
};


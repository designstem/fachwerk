export const polarx_help = () => `

\`polarx(angle, radius = 1)\`

Given the polar coordinates \`angle radius\`, return cartesian coordinates \`x y\`.

#### Example

    polarx(90, 10)

#### Output

    {{ polarx(90, 10) }}

`;

export const polarx = (deg = 0, radius = 1) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};


export const polary_help = () => `

\`polary(angle, radius = 1)\`

Given the polar coordinates \`angle radius\`, return cartesian coordinates \`x y\`.

#### Example

    polary(90, 10)

#### Output

    {{ polary(90, 10) }}

`;

export const polary = (deg = 0, radius = 1) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};


export const polarpoints_help = () => `

\`polarpoints(count = 6, radius = 1)\`

Calculates \`count\` of \`{ x, y }\` points on the circle.

#### Example

    polarpoints(4,10)

#### Output

    {{ polarpoints(4,10) }}
`;

export const polarpoints = (count = 6, radius = 1) => {
  return Array.from({
    length: count
  }).map((p, i) => ({
    x: polarx((360 / count) * i, radius),
    y: polary((360 / count) * i, radius)
  }));
};


export const deg2rad_help = () => `

\`deg2rad(angle)\`

Converts angle in degrees to radians.

#### Example

    deg2rad(180)

#### Output

    {{ deg2rad(180) }}
`;

export const deg2rad = deg => (deg * Math.PI) / 180;


export const rad2deg_help = () => `

\`rad2deg(angle)\`

Converts angle in radians to degrees.

#### Example

    rad2deg(Math.PI)

#### Output

    {{ rad2deg(Math.PI) }}
`;

export const rad2deg = rad => (rad * 180) / Math.PI;

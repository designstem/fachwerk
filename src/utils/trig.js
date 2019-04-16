export const polarx_help = () => `

\`polarx(angle, radius = 1)\`

Given the polar coordinates \`angle\` and \`radius\`, return cartesian coordinates \`x\`.

#### Example

    polarx(90, 10)

#### Output

<output>{{ polarx(90, 10) }}</output>

`;

export const polarx = (deg = 0, radius = 1) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};


export const polary_help = () => `

\`polary(angle, radius = 1)\`

Given the polar coordinates \`angle\` and \`radius\`, return cartesian coordinate \`y\`.

#### Example

    polary(90, 10)

#### Output

<output>{{ polary(90, 10) }}</output>

`;

export const polary = (deg = 0, radius = 1) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};


export const polarxy_help = () => `

\`polarxy(angle, radius = 1)\`

Given the polar coordinates \`angle\` and \`radius\`, return array of cartesian coordinates \`[x,y]\`.

#### Example

    polarxy(90, 10)

#### Output

<output>{{ polarxy(90, 10) }}</output>
`;

export const polarxy = (deg = 0, radius = 1) => {
  return [polarx(deg, radius),polary(deg, radius)]
};

export const polarpoints_help = () => `

\`polarpoints(count = 6, radius = 1)\`

Calculates \`count\` of \`{ x, y }\` points on the circle.

#### Example

    polarpoints(4,10)

#### Output

<output>{{ polarpoints(4,10) }}</output>
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

<output>{{ deg2rad(180) }}</output>
`;

export const deg2rad = deg => (deg * Math.PI) / 180;


export const rad2deg_help = () => `

\`rad2deg(angle)\`

Converts angle in radians to degrees.

#### Example

    rad2deg(Math.PI)

#### Output

<output>{{ rad2deg(Math.PI) }}</output>
`;

export const rad2deg = rad => (rad * 180) / Math.PI;

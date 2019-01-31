import { getCssVariable } from '../../utils.js'

export const color_help = () => `

\`color('name')\`

Returns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.

#### Example

    color('red')
    color('rebeccapurple')

#### Output

    {{ color('red') }}
    {{ color('rebeccapurple')}}

`;

export const color = name => {
  const color = getCssVariable(`--${name}`);
  return color ? color.trim() : name.trim();
};

/* Color functions */

export const rgb_help = () => `

\`rgb(r, g, b, a = false)\`

Outputs a CSS \`rgba()\` string

#### Example

    rgb(50,100,50,0.5)
    rgb(50,100,50)

#### Output

    {{ rgb(50,100,50,0.5) }}
    {{ rgb(50,100,50) }}

`;

export const rgb = (r, g, b, a = false) =>
  a ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;


export const hsl_help = () => `

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

export const hsl = (h, s = 100, l = 50, a = 1) => `hsl(${h},${s}%,${l}%,${a})`;

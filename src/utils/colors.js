import { getCssVariable } from "../../utils.js";

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

export const rgb = (r, g, b, a = null) =>
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

export const hsl = (h, s = 100, l = 50, a = null) =>
  a ? `hsla(${h},${s}%,${l}%,${a})` : `hsl(${h},${s}%,${l}%)`;

export function rgb2hsl(r, g = 0, b = 0, a = null) {
  let c = null;
  if (typeof r === "string") {
    c = window.chroma(r);
  } else {
    c = window.chroma({ r, g, b });
  }
  if (a) {
    return c.alpha(a).css("hsla");
  }
  return c.css("hsl");
}

export function hsl2rgb(h, s = 100, l = 50, a = null) {
  let c = null;
  if (typeof h === "string") {
    c = window.chroma(h);
  } else {
    c = window.chroma({ h, s: s / 100, l: l / 100 });
  }
  if (a) {
    return c.alpha(a).css("rgba");
  }
  return c.css("rgb");
}

export const colorblind = (color, type = "deuteranomaly") =>
  window.chroma(window.colorBlind[type](color)).css('rgb')

export const contrast = (color1, color2) => window.chroma.contrast(color1, color2)

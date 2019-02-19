import { chroma, colorBlind, getCssVariable, range } from "../../fachwerk.js";

export const color_help = () => `

\`color('name')\`

Returns a color value. If \`name\` matches one of framework colors, framework color value is returned. If not, a standard CSS color name is returned.

#### Example

    color('red')
    color('rebeccapurple')

#### Output

<output>{{ color('red') }}
{{ color('rebeccapurple')}}</output>

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

<output>{{ rgb(50,100,50,0.5) }}
{{ rgb(50,100,50) }}
</output>

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

<output>{{ hsl(50,100,50,0.5) }}
{{ hsl(50,100,50) }}
{{ hsl(50) }}
</output>

`;

export const hsl = (h, s = 100, l = 50, a = null) =>
  a ? `hsla(${h},${s}%,${l}%,${a})` : `hsl(${h},${s}%,${l}%)`;

export const rgb2hsl_help = () => `

\`rgb2hsl(r, g = 0, b = 0, a = null, array = false)\`

Converts RGB to HSL, outputting CSS string. You can also pass \`array = true\` setting to output the values as an array.

#### Example

    rgb2hsl(255,0,0)
    rgb2hsl(255,0,0,0.5)
    rgb2hsl(255,0,0,0.5,true)

#### Output

<output>{{ rgb2hsl(255,0,0) }}
{{ rgb2hsl(255,0,0,0.5) }}
{{ rgb2hsl(255,0,0,0.5,true) }}
</output>
`;

export function rgb2hsl(r, g = 0, b = 0, a = null, array = false) {
  let c = null;
  if (typeof r === "string") {
    c = chroma(r);
  } else {
    c = chroma({ r, g, b });
  }
  if (array) {
    const hsl = c.hsl();
    const arr = [hsl[0], hsl[1] * 100, hsl[2] * 100];
    return a ? [...arr, a] : arr;
  }
  return a ? c.alpha(a).css("hsla") : c.css("hsl");
}

export const hsl2rgb_help = () => `

Converts HSL to RGB, outputting CSS string. You can also pass \`array = true\` setting to output the values as an array.

\`hsl2rgb(h, s = 100, l = 50, a = null, array = false)\`

#### Example

    hsl2rgb(0,100,50)
    hsl2rgb(0,100,50,0.5)
    hsl2rgb(0,100,50,0.5,true)

#### Output

<output>{{ hsl2rgb(0,100,50) }}
{{ hsl2rgb(0,100,50,0.5) }}
{{ hsl2rgb(0,100,50,0.5,true) }}
</output>
`;

export function hsl2rgb(h, s = 100, l = 50, a = null, array = false) {
  let c = null;
  if (typeof h === "string") {
    c = chroma(h);
  } else {
    c = chroma({ h, s: s / 100, l: l / 100 });
  }
  if (array) {
    return a ? [...c.alpha(a).rgb(), a] : c.rgb();
  }
  return a ? c.alpha(a).css("rgba") : c.css("rgb");
}

export const colorblind_help = () => `

\`colorblind(color, type = "deuteranomaly")\`

Converts color values to simulated colorblindess color values. \`type\` can be one of these:

    achromatomaly   // ?
    achromatopsia   // 0.0001%
    deuteranomaly   // 2.7%
    deuteranopia    // 0.56%
    protanomaly     // 0.66%
    protanopia      // 0.59%
    tritanomaly     // 0.01%
    tritanopia      // 0.016%

#### Example

    colorblind(rgb(255,0,0))

#### Output

<output>{{ colorblind(rgb(255,0,0)) }}</output>
`;

export const colorblind = (color, type = "deuteranomaly") =>
  chroma(colorBlind[type](chroma(color).css("rgb"))).css("rgb");

export const contrast_help = () => `

\`contrast(color1, color2)\`

Calculates a color contrast ratio between two colors. It is [recommended](https://www.w3.org/TR/WCAG20-TECHS/G18.html) to have a contrast ration at least \`4.5\` between colors.

#### Example

    contrast(rgb(255,0,0),rgb(0,255,0))

#### Output

<output>{{ contrast(rgb(255,0,0),rgb(0,255,0)) }}</output>

`;

export const contrast = (color1, color2) => chroma.contrast(color1, color2);

export const colorscale_help = () => `
\`colorscale = (start, stop, count = 6, mode = 'hsl')\`

Generates a color scale between \`start\` and \`stop\` colors with \`count\` steps. Optionally an [interpolation mode](https://vis4.net/chromajs/#scale-mode) can be specified.

#### Example

    colorscale('red','yellow')

#### Output

<output>{{ colorscale('red','yellow') }}</output>

`

export const colorscale = (start, stop, count = 6, mode = 'hsl') => {
  const color = chroma.scale([start, stop]).domain([0, count - 1]).mode(mode);
  return Array.from({ length: count }).map((_, i) => color(i).css('hsl'));
};

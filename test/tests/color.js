import { rgb, rgb2hsl, hsl, hsl2rgb, colorblind, contrast } from "../../utils.js";

// RGB formatting

export const rgb_to_css = () => {
  const actual = rgb(255, 0, 0);
  const expected = "rgb(255,0,0)";
  return [expected, actual];
};

export const rgba_to_css = () => {
  const actual = rgb(255, 0, 0, 0.5);
  const expected = "rgba(255,0,0,0.5)";
  return [expected, actual];
};

// RGB Conversions

export const rgb_to_hsl = () => {
  const actual = rgb2hsl(255, 0, 0);
  const expected = "hsl(0,100%,50%)";
  return [expected, actual];
};

export const rgba_to_hsl = () => {
  const actual = rgb2hsl(255, 0, 0, 0.5);
  const expected = "hsla(0,100%,50%,0.5)";
  return [expected, actual];
};

export const rgb_string_to_hsl = () => {
  const actual = rgb2hsl(rgb(255, 0, 0));
  const expected = "hsl(0,100%,50%)";
  return [expected, actual];
};

export const rgba_string_to_hsl = () => {
  const actual = rgb2hsl(rgb(255, 0, 0, 0.5));
  const expected = "hsla(0,100%,50%,0.5)";
  return [expected, actual];
};

export const rgba_to_hsl_array = () => {
  const actual = rgb2hsl(255, 0, 0, 0.5, true);
  const expected = [0,100,50,0.5];
  return [expected, actual];
};

// HSL formatting

export const hsl_to_css = () => {
  const actual = hsl(360, 0, 0);
  const expected = "hsl(360,0%,0%)";
  return [expected, actual];
};

export const hsl_default_l_to_css = () => {
  const actual = hsl(360, 0);
  const expected = "hsl(360,0%,50%)";
  return [expected, actual];
};

export const hsl_default_s_l_to_css = () => {
  const actual = hsl(360);
  const expected = "hsl(360,100%,50%)";
  return [expected, actual];
};

export const hsla_to_css = () => {
  const actual = hsl(360, 0, 0, 0.5);
  const expected = "hsla(360,0%,0%,0.5)";
  return [expected, actual];
};

// HSL conversion

export const hsl_to_rgb = () => {
  const actual = hsl2rgb(0, 100, 50);
  const expected = "rgb(255,0,0)";
  return [expected, actual];
};

export const hsla_to_rgb = () => {
  const actual = hsl2rgb(0, 100, 50, 0.5);
  const expected = "rgba(255,0,0,0.5)";
  return [expected, actual];
};

export const hsl_string_to_rgb = () => {
  const actual = hsl2rgb(hsl(0, 100, 50));
  const expected = "rgb(255,0,0)";
  return [expected, actual];
};

export const hsla_string_to_rgb = () => {
  const actual = hsl2rgb(hsl(0, 100, 50, 0.5));
  const expected = "rgba(255,0,0,0.5)";
  return [expected, actual];
};

export const hsla_to_rgb_array = () => {
  const actual = hsl2rgb(0, 100, 50, 0.5, true);
  const expected = [255,0,0,0.5];
  return [expected, actual];
};

// Colorblindness

export const rgb_to_default_colorblind = () => {
  const actual = colorblind(rgb(255, 0, 0));
  const expected = "rgb(195,76,0)";
  return [expected, actual];
};

// export const rgba_to_default_colorblind = () => {
//   const actual = colorblind(rgb(255,0,0,0.5));
//   const expected = "rgba(195,76,0,0.5)";
//   return [expected, actual];
// };

export const hsl_to_default_colorblind = () => {
  const actual = colorblind(hsl(360, 100, 50, 0.5));
  const expected = "rgb(195,76,0)";
  return [expected, actual];
};

// export const hsla_to_default_colorblind = () => {
//   const actual = colorblind(hsl(360,100,50,0.5));
//   const expected = "rgba(195,76,0,0.5)";
//   return [expected, actual];
// };

export const rgb_contrast = () => {
  const actual = contrast([0, 0, 0], [255, 0, 0]);
  const expected = 5.252;
  return [expected, actual];
};

export const rgb_string_contrast = () => {
  const actual = contrast(rgb(0, 0, 0), rgb(255, 0, 0));
  const expected = 5.252;
  return [expected, actual];
};

export const rgba_string_contrast = () => {
  const actual = contrast(rgb(0, 0, 0, 0.5), rgb(255, 0, 0, 0.5));
  const expected = 5.252;
  return [expected, actual];
};

export const hsl_string_contrast = () => {
  const actual = contrast(hsl(0, 0, 0), hsl(0, 100, 50));
  const expected = 5.252;
  return [expected, actual];
};

export const hsla_string_contrast = () => {
  const actual = contrast(hsl(0, 0, 0, 0.5), hsl(0, 100, 50, 0.5));
  const expected = 5.252;
  return [expected, actual];
};
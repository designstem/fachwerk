import { rgb, rgb2hsl, hsl, hsl2rgb } from "../utils.js";

// Css formatting

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

// Conversions

export const rgb_to_hsl_browser = () => {
  const actual = rgb2hsl(255, 0, 0);
  const expected = "hsl(0,100%,50%)";
  return [expected, actual];
};

export const rgba_to_hsl_browser = () => {
  const actual = rgb2hsl(255, 0, 0, 0.5);
  const expected = "hsla(0,100%,50%,0.5)";
  return [expected, actual];
};

export const rgb_string_to_hsl_browser = () => {
  const actual = rgb2hsl(rgb(255, 0, 0));
  const expected = "hsl(0,100%,50%)";
  return [expected, actual];
};

export const rgba_string_to_hsl_browser = () => {
  const actual = rgb2hsl(rgb(255, 0, 0, 0.5));
  const expected = "hsla(0,100%,50%,0.5)";
  return [expected, actual];
};

export const hsl_to_rgb_browser = () => {
  const actual = hsl2rgb(0, 100, 50);
  const expected = "rgb(255,0,0)";
  return [expected, actual];
};

export const hsla_to_rgb_browser = () => {
  const actual = hsl2rgb(0, 100, 50, 0.5);
  const expected = "rgba(255,0,0,0.5)";
  return [expected, actual];
};

export const hsl_string_to_rgb_browser = () => {
  const actual = hsl2rgb(hsl(0, 100, 50));
  const expected = "rgb(255,0,0)";
  return [expected, actual];
};

export const hsla_string_to_rgb_browser = () => {
  const actual = hsl2rgb(hsl(0, 100, 50, 0.5));
  const expected = "rgba(255,0,0,0.5)";
  return [expected, actual];
};

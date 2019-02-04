export const equal = (c, d) => {
  const seen = new Map();
  return (function compare(a, b) {
    if (Object.is(a, b)) {
      return true;
    }
    if (a && typeof a === "object" && b && typeof b === "object") {
      if (seen.get(a) === b) {
        return true;
      }
      if (Object.keys(a || {}).length !== Object.keys(b || {}).length) {
        return false;
      }
      const merged = Object.assign(a, b);
      for (const key in merged) {
        if (!compare(a && a[key], b && b[key])) {
          return false;
        }
      }
      seen.set(a, b);
      return true;
    }
    return false;
  })(c, d);
};

export const parseSheet = data => {
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

export const cleanColumns = content => {
  const pattern = /(\|[0-9\s]+\n)/g;
  return content.replace(pattern, "");
};

const parseMeta = row => {
  const meta = row
    .replace(/\|/g, "")
    .split(":")
    .map(s => s.trim());
  return { [meta[0]]: meta[1] };
};
export const parseColumns = slide => {
  let meta = {};
  const metaPattern = /(\|\s(.*):\s+(.*)\n)/g;
  const metaMatch = slide.match(metaPattern);
  if (metaMatch.length) {
    meta = metaMatch.map(parseMeta);
    slide = slide.replace(metaPattern,'')
  }
  const pattern = /(\|[0-9\s]+\n)/g;
  const match = slide.match(pattern);
  if (match) {
    const rowCount = match.length;
    const cols = match.map(m => {
      return m
        .trim()
        .replace(/\|/g, "")
        .split("")
        .filter(m => !m.match(/\s+/));
    });
    const colCount = cols[0].length;
    const areas = cols
      .map(m => `'${m.map(m => `a${m}`).join(" ")}'`)
      .join("\n");
    const content = slide.split(/\n-\n/)
      .map(c => c.replace(pattern, ""))

    return Object.assign({ rowCount, colCount, areas, content }, ...meta);
  } else {
    const content = slide.split(/\n-\n/);
    return Object.assign(
      {
        rowCount: 1,
        colCount: content.length,
        areas: `'${content.map((_, i) => `a${i + 1}`).join(" ")}'`,
        content: content
      },
      ...meta
    );
  }
};

export const getCssVariable = (value, el = document.body) =>
  getComputedStyle(el).getPropertyValue(value);

export const setCssVariable = (key, value, el = document.body.style) =>
  el.setProperty(key, value);

export const snapToGrid = (value, gridsize) => {
  return value % gridsize < gridsize / 2
    ? value - (value % gridsize)
    : value + gridsize - (value % gridsize);
};

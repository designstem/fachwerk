import { shorten } from '../../../fachwerk.js'

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

export const test = tests => {
  const reset = "\x1b[0m";
  const red = "\x1b[31m";
  const redbg = "\x1b[41m";
  const green = "\x1b[32m";
  const greenbg = "\x1b[42m";
  const dim = "\x1b[2m";

  console.log(`\n  ${dim}Running Fachwerk tests${reset}\n`);

  const filteredKey = typeof process !== "undefined" ? process.argv[2] : null;

  let passed = 0;
  let failed = 0;

  tests.forEach(([name,test]) => {
      const [expected, actual] = test();
      if (equal(expected, actual)) {
        passed++;
        console.log(`  ${shorten(name).padEnd(53)}\t${green}OK${reset}`);
      } else {
        failed++;
        console.log(`  ${shorten(name).padEnd(53)}\t${red}Failed${reset}${dim}
 
${String(test)
  .split("\n")
  .map(row => `    ${row}`)
  .join("\n")}

    Actual: ${reset}${red}${JSON.stringify(actual)}${reset}${dim}

    Expected: ${JSON.stringify(expected)}
${reset}`);
      }
    });

  if (passed || failed) {
    console.log(`

  ${greenbg} Tests passed: ${passed} ${reset} ${
      failed ? `${redbg} Tests failed: ${failed} ${reset}` : ""
    }

`);
  } else {
    console.log(`
  No tests found

`);
  }
};

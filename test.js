// npm install esm
// node -r esm test.js
// node -r esm test.js test_name_here

import { test } from "./utils.js";
import * as tests from "./test/tests.js";

const filteredTests = Object.entries(tests)
  .filter(([name, test]) =>
    process.argv[2] ? name.startsWith(process.argv[2]) : true
  )
  .filter(([name, test]) => !name.endsWith("_browser"));

test(filteredTests);

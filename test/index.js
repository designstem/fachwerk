import { test } from "../utils.js";
import * as tests from "./tests.js";

const filteredTests = Object.entries(tests).filter(([name, test]) => name.startsWith('hsl'))

test(filteredTests)

import { test } from "../utils.js";
import * as tests from "./tests.js";

const url = new URL(window.location.href);
const filter = url.hash ? url.hash.replace('#','') : null

const filteredTests = Object.entries(tests).filter(([name, test]) => filter ? name.startsWith(filter) : true)

test(filteredTests)

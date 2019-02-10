import { test } from "../src/../fachwerk.js";

import * as color from './tests/color.js'
import * as coordinates from './tests/coordinates.js'

const tests = { ...color, ...coordinates }

const url = new URL(window.location.href);
const filter = url.hash ? url.hash.replace('#','') : null

const filteredTests = Object.entries(tests).filter(([name, test]) => filter ? name.startsWith(filter) : true)

test(filteredTests)

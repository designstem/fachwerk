## Testing

> Fachwerk uses a custom test runner, inspired by Deno [testing utility](https://deno.land/x/testing/mod.ts) and Zeit [best](
https://github.com/zeit/best) project.

### Unit tests

Unit tests are simple functions, located in `/test/tests` directory. Each test exports a function with a array as a return value `[expected,actual]`.

#### Example test

```
// ./my_utils.js
//
// export const addone = value => value + 1

import { addone } from './my_utils.js`

export const test_addone = () => {
  const expected = 2;
  const actual = addone(1);
  return [expected, actual];
};
```

### Test runner

> Point your browser to [/test](../test) page and follow the instructions.

Each test function is going through following steps:

1. It is imported using Javascript imports
2. Function is executed, getting `[expected,actual]` return values
3. Return values are compared using custom `equal()` function.
4. If the values are equal, test is passing, if not, test is failing.



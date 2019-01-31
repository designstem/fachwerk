# Testing

> Fachwerk uses a custom test runner, inspired by Deno [testing utility](https://deno.land/x/testing/mod.ts) and Zeit [best](
https://github.com/zeit/best) project.

## Unit tests

Unit tests are simple functions, located in `/test` directory. Each test exports a function with a array as a return value `[expected,actual]`.

#### Example test

```
// export const add = (first, second) => first + second

import { add } from './my/functions.js`

export const test_add = () => {
  const expected = 2;
  const actual = add(1, 1);
  return [expected, actual];
};
```

## Test runner

### Installing and running tests

Test runner expects NodeJS to be installed. Run the following command in Fachwerk directory:

<output>npm install esm
node -r esm test.js
</output>

Each test function is going through following steps:

1. It is imported using Javascript imports
2. Function is executed, getting `[expected,actual]` return values
3. Return values are compared using custom `equal()` function.
4. If the values are equal, test is passing, if not, test is failing.
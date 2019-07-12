export const shuffle_help = () => `

\`shuffle(array)\`

Sorts the array in random order.

#### Example

    shuffle(range(0,3))

#### Output

<output>{{ shuffle(range(0,3)) }}</output>

`;

export const shuffle = arr => arr.sort(() => Math.random() - 0.5);

export const any_help = () => `

\`any(array)\`

Picks a random element from the array.
Supports both array and function argument syntax.

#### Example

    any([0,1,2])
    any(0,1,2)

#### Output

<output>{{ any([0,1,2]) }}
{{ any(0,1,2) }}
<output>

`;

export const any = function(arr) {
  return arr instanceof Array
    ? shuffle(arr)[0]
    : shuffle(Array.from(arguments))[0];
};

export const flatten_help = () => `

\`flatten(array)\`

Flattens multidimensional array

#### Example

    flatten([0,1,[2,[3,4]]])

#### Output

<output>{{ flatten([0,1,[2,[3,4]]]) }}</output>

`;

export const flatten = list =>
  list.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(b) : b), []);

export const chunk_help = () => `

\`chunk(array, length)\`

Chunks \`array\` into smaller \`length\`-sized arrays

#### Example

    chunk([0,1,2,3],2)

#### Output

<output>{{ chunk([0,1,2,3],2) }}</output>

`;

export const chunk = (arr, length) =>
  Array.from({ length: Math.ceil(arr.length / length) }).map((_, n) =>
    arr.slice(n * length, n * length + length)
  );

export const unique_help = () => `

\`unique(array)\`

Removes duplicates from the array

#### Example

    unique([0,0,1,2])

#### Output

<output>{{ unique([0,0,1,2]) }}</output>

`;

export const unique = arr => [...new Set(arr)];

export const intersection_help = () => `

\`intersection(array1, array2)\`

Returns intersection of two arrays

#### Example

    intersection([0,1,2],[1,2,3])

#### Output

<output>{{ intersection([0,1,2],[1,2,3]) }}</output>

`;

export const intersection = (arr1, arr2) => arr1.filter(n => arr2.includes(n));

export const isarray_help = () => `

\`isarray(value)\`

Returns \`true\` when \`value\` is an array, \`false\` if not

#### Example

    isarray(['a','b'])
    isarray('a, b')

#### Output

<output>{{ isarray(['a','b']) }}
{{ isarray('a, b') }}
</output>
`;

export const isarray = value => Array.isArray(value)


export const array2object_help = () => `

\`array2object(array)\`

Converts a twodimensional array to object with key and value pairs

#### Example

    array2object([['a','b'],['c','d']])

#### Output

<output>{{ array2object([['a','b'],['c','d']]) }}</output>
`;

export const array2object = array => array.reduce((acc, el) => {
  acc[el[0]] = el[1]
  return acc
}, {})
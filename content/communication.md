## Communication between components

### Get and set values

First lets set and get a simple value, `a`:

Setting it up to be `10`... {{ set('a',10) }} 

```
a is currently {{ get('a') }}
```

### Using the button

Lets set up a button to set value `b` to `20`. We need to set `v-on:click` parameter to be `set('b',20)`:

<button v-on:click="set('b',20)">Set b to 20</button>

```
b is currently {{ get('b') }}
```

### Using the slider

Lets set up a slider to control value `c`. We need to set `:value` parameter to `get('c')` and set `v-on:input` parameter to `set('c')`, Note that we get the current value using `$event` variable so setting the value becomes `set('c', $event)`

<f-slider :value="get('c')" v-on:input="set('c',$event)" />

```
c is currently: {{ get('c') }}
```



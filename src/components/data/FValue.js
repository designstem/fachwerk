import { Vue } from "../../../fachwerk.js";

export default {
  description: `
Sets a global or local value. Value can be a string, number, array or object.

### Setting and getting global values

#### String

<f-value value="Hello" set="b" />

    b is {{ get('b', '') }}

#### Number

<f-value :value="1" set="a" />

    a {{ get('a', 0) }}

#### Array

<f-value :value="[1,2,3]" set="c" />

    First element of c is {{ get('c',[])[0] }}

#### Object

<f-value :value="{ hello: 1 }" set="d" />

    Object d property "hello" is  {{ get('d',{}).hello }}


### Example 

Note that the \`value\` is **evaluated only on initial page load** so it can useful when you need random numbers in your page that are not recalculated on each page refresh.

Here is an example that sets up array of random coordinates and colors and animates the result:

<f-value :value="range(0,100).map(_ => random(-2,2,true))" set="randoms" />

<f-value :value="range(0,50).map(_ => any(colors()))" set="colors" />

<f-scene>
  <f-rotation>
  <f-circle
    v-for="(c,i) in chunk(get('randoms',[]),2)"
    :position="c"
    r="0.1"
    :fill="color(get('colors',[])[i])"
    stroke
  />
  </f-rotation>
</f-scene>
  `,
  props: {
    value: { default: "", type: [Number, String, Array, Object, Boolean] },
    set: {
      default: "",
      type: String,
      description: "Name for a global value to set"
    }
  },
  mounted() {
    if (this.set) {
      Vue.set(this.$global.$data.state, this.set, this.value);
    }
  },
  template: `
  <div>
    <slot :value="value" />
  </div>
  `
};

## Drawing with functions

> This tutorial works best when you are in edit mode <f-edit-icon  />

Let's have a small challenge, let's create an interactive a <var>spiral</var>, drawn with <var>functions</var>.

### Setting up a scene

First, lets draw a reference circle with a `<f-circle />` component.

<f-scene grid>
  <f-circle r="1" :opacity="0.1" />
</f-scene>

Given the `angle` and `radius`, lets calculate a point location in `x y` coordinates, using  <f-link to="/polarx">`polarx()`</f-link> and <f-link to="/polary">`polary()`</f-link> helper function.

<f-scene grid>
  <f-circle r="1" :opacity="0.1" />
  <f-point
    :x="polarx(0,1)"
    :y="polary(0,1)"
    :stroke="color('red')"
  />
</f-scene>

### From points to a circle

OK, lets to a full circle made of points. To generate 360 points, lets use <f-link to="/range">`range()`</f-link> helper function: 

<f-scene grid>
  <f-circle r="1" :opacity="0.1" />
  <f-point
    v-for="a in range(1,360)"
    :key="a"
    :x="polarx(a,1)"
    :y="polary(a,1)"
    :stroke="color('red')"
  />
</f-scene>

A perfect circle! No, it is a actually still just a set of points, just very closely together. Let's increase the step between each point to `10`:

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-point
    v-for="a in range(1,360,10)"
    :key="a"
    :x="polarx(a,1)"
    :y="polary(a,1)"
    :stroke="color('red')"
  />
</f-scene>

### From points to a circle, take two

How to make a real line out of discreet points? To do that we need to first draw out points in a bit different way. 

Instead of looping using `v-for` and passing `:x` and `:y` props, let's pass the `:points` prop to `<f-point>`. 


It accepts an array of number pairs, like this:

    [[firstx,firsty],[secondx,secondy],...etc...]

To do that we generate a number range with `range()` helper and pass result to Javascript `map()` function, something like this:

    range(0,359,10).map(a => [polarx(a,1),polary(a,1)])

Here are out points:

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-point
    :points="range(0,359,10).map(a => [polarx(a,1),polary(a,1)])"
    :stroke="color('red')"
  />
</f-scene>

### From points to a line

Now, lets replace points with a line, `<f-point>` becomes a `<f-line>`:

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,359,20).map(a => [polarx(a,1),polary(a,1)])"
    :stroke="color('red')"
  />
</f-scene>

Ok but how to make a **closed** and **curved** line, to give us back our original circle?

We add a `closed` and `curved` parameters:

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,359,20).map(a => [polarx(a,1),polary(a,1)])"
    :stroke="color('red')"
    closed
    curved
  />
</f-scene>

### Time for a spiral

Now the preparations are done, we are ready to draw a spiral. Instead of hardcoding the second parameter `radius` in `polarx()` and `polary()` functions be `1`, we use a <f-link to="/scale">`scale()`</f-link> helper function to gradually decrease the radius from `1` to `0`:

    range(0,359,20)
      .map(a => [
        polarx(a,scale(a,0,360,1,0)),
        polary(a,scale(a,0,360,1,0))
      ])

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,359,20)
      .map(a => [
        polarx(a,scale(a,0,360,1,0)),
        polary(a,scale(a,0,360,1,0))
      ])"
    :stroke="color('red')"
    curved
  />
</f-scene>

### Making it interactive

Why just one spin? Let's make it user-controllable with a slider:

<f-slider set="spin" value="5" from="0" to="10" step="0.001">

Number of spins: `{{ get('spin',5) }}`

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,360 * get('spin',5),20)
      .map(a => [
        polarx(a,scale(a,0,360 * get('spin',5),1,0)),
        polary(a,scale(a,0,360 * get('spin',5),1,0))
      ])"
    :stroke="color('red')"
    curved
  />
</f-scene>
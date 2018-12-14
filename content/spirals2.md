## Spirals tutorial

First, lets draw a reference circle:

<f-scene grid>
  <f-circle r="1" :opacity="0.1" />
</f-scene>

Given the `angle` and `radius`, lets calculate a point location in `x y` coordinates, using  `polarx()` and `polary()` helper functions.

<f-scene grid>
  <f-circle r="1" :opacity="0.1" />
  <f-point
    :x="polarx(0,1)"
    :y="polary(0,1)"
    :stroke="color('red')"
  />
</f-scene>

OK, lets to a full circle made of points. To generate 360 points, lets use `range(1,360)` helper:

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

A perfect circle! No, it is a actually still just a set of points, just very closely together. Let's increase the step between each point:

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

How to make a real line out of discreet points? To do that we need to first draw out points in a bit different way. Instead of looping using `v-for` lets try to pass the points as a array of number pairs, something like `[[firstx,firsty],[secondx,secondy]]` etc.

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-point
    :points="range(0,359,10).map(a => [polarx(a,1),polary(a,1)])"
    :stroke="color('red')"
  />
</f-scene>

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,359,20).map(a => [polarx(a,1),polary(a,1)])"
    :stroke="color('red')"
  />
</f-scene>

Ok but how to make a **curved** line? We add a `curved` parameter.

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,359,20).map(a => [polarx(a,1),polary(a,1)])"
    :stroke="color('red')"
    curved
  />
</f-scene>

Now the preparations are done, we are ready to draw a spiral. Instead of hardcoding the radius to be `1`, we use a scaling function to reduce the radius from `1` to `0`: `polarx(a,scale(a,0,360,1,0))`.

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

Why just one spin? Let's have more of it and make it user-controllable.

<f-slider-data value="1" from="1" to="10" step="0.001">
<f-scene grid slot-scope="{value}">
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,360 * value,20)
      .map(a => [
        polarx(a,scale(a,0,360 * value,1,0)),
        polary(a,scale(a,0,360 * value,1,0))
      ])"
    :stroke="color('red')"
    curved
  />
</f-scene>
</f-slider-data>
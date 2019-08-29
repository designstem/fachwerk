<!-- Start of ./index.md -->

| chapter: Patterns
| section: Introduction

| background: https://c.pxhere.com/photos/85/e4/photo-365034.jpg!d
| tint: 0
| theme: dark

# <big>2D and 3D<br />patterns</big>

<f-next-button title="Start" />

<f-notes title="Credits">

https://pxhere.com/en/photo/365034

</f-notes>


---

| section: Exercise: Look for patterns
| padding: 0

<section>

<caption>🤔 Exercise</caption>

## Look for patterns

Answers these question and find some inspirational images to stimulate your brain:

1. How do you **define** a pattern?

2. How would you **describe** a pattern?

3. Find at least three **meaningful examples** of patterns from 
your daily life. Take pictures of them, make sketches, etc.

4. Find at least three patterns **from other cultures**.

5. And at last: what pattern **defines you**? Think about your daily habits.

</section>

-

<f-image src="https://upload.wikimedia.org/wikipedia/commons/7/7f/Igreja_de_Campanha_Azulejo_4.jpg" />

<f-notes title="Credits">

https://commons.wikimedia.org/wiki/Pattern#/media/File:Igreja_de_Campanha_Azulejo_4.jpg

</f-notes>

---

| padding: 0
| 2 1

<section>

<caption>🛠️ Do</caption>

## Share the patterns

1. Make a moodboard or poster to show others the examples of 2D & 3D pattern designs that have inspired your ideas and findings.

2. Explain during group discussions the ideas and constructions on your moodboard / poster. 

3. Give each other feedback on the work.

</section>

-

<f-image src="./images/floor.jpg" />

---

| section: Textures & structures
| padding: 0

<section>

## Textures & structures

A <var>pattern</var> is made when a shape is copied repeatedly while geometric transformations are applied to it

A<var>texture</var> is a 2D surface where the pattern is only repeated in X and Y axes. 

A <var>structure</var> is a 3D object where pattern is repeated in X, Y and Z axes.

Let's explore the geometric transformations and repetitions in the next section.

</section>

-

<f-image src="https://66.media.tumblr.com/46004abc5737531df4dbc7ef9a78c7b0/tumblr_ocdoorm7AE1qe593go1_1280.gifv" />

<f-notes title="Credits">

https://hyperglu.tumblr.com/post/149380467308/inspired-by-the-azulejo-tiles-that-i-saw-some

</f-notes>


---

| section: Translation

| background: lightergray
| cols: 2fr 2fr 4fr 2fr
| style: --base: 8px

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify: space-between">

# Translation

</f-inline>

-

#### Single translation

A <var>translation</var> is a <var class="gray">geometric transformation</var> that moves a shape in a certain direction, without changing its shape or angle,

> Adjust the translation along the axises to see the effect

-

<f-scene grid class="r" v-slot="{ svgscale }" responsive>
  <f-group :scale="svgscale">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  <f-group opacity="0.5" :position="[get('t_x1',1),get('t_y1',1)]">
    <f-group :scale="svgscale">
      <f-target transform="translate(-50, 50) scale(1,-1)" />
    </f-group>
  </f-group>
</f-scene>

##### x-axis translation `{{ get('t_x1', 1) }}`

<f-slider set="t_x1" value="1" from="-2" to="2" />

##### y-axis translation `{{ get('t_y1', 1) }}`

<f-slider set="t_y1" value="1" from="-2" to="2" />

-

<f-scene class="r" v-slot="{ svgscale }" responsive download>
  <f-group v-for="y in range(-2,2)">
    <f-group
      v-for="x in range(-2,2)"
      :position="[x * get('t_x2',0),y * get('t_y2',0)]"
    >
      <f-group :scale="svgscale">
        <f-target transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
  </f-group>
</f-scene>

-

#### Repeated translation

When <var>translation</var> is applied repeatedly, we willl see the visual patterns emerge.

Here is the simple grid repetition on x and y axis.

##### Repetition in x-axis `{{ get('t_x2',0) }}`

<f-slider set="t_x2" from="0" to="0.75" />

##### Repetition in y-axis `{{ get('t_y2',0) }}`

<f-slider set="t_y2" value="0" from="0" to="0.75" />





---




| chapter: Scaling transform
| section: Scaling
| background: lightergray
| cols: 2fr 2fr 4fr 2fr
| style: --base: 8px

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify: space-between">

# Scaling

</f-inline>

-

<!-- Commenting out the sliders -->

<div style="display: none">
  <f-slider title="rotation" set="r"  />
  <f-slider title="scale" set="s" value="1" from="0.1" to="4" />
  <f-source />
</div>

#### Single scaling

A <var>scaling</var> is a transformation that resizes a shape.

Unlike <var class="gray">translation</var> and <var class="gray">rotation</var> that generate <var class="gray">congurate</var> shapes, scaling generates <var>similar</var> shapes.

-

<f-scene grid class="r" v-slot="{ svgscale }" responsive>
  <f-group :scale="svgscale">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  <f-group opacity="0.5" :scale="get('s_s1', 2)">
    <f-group :scale="svgscale">
      <f-target transform="translate(-50, 50) scale(1,-1)" />
    </f-group>
  </f-group>
</f-scene>

##### Scaling factor `{{ get('s_s1',2) }} ×` 

<f-slider set="s_s1" value="2" step="0.1" from="0" to="25" />

-

<f-scene grid class="r" v-slot="{ svgscale }" responsive>
  <f-group v-for="s in range(0.5,10,1)" :scale="scale(s,0.5,10,0.5,get('s_s2',1))">
    <f-group :scale="svgscale">
      <f-target transform="translate(-50, 50) scale(1,-1)" />
    </f-group>
  </f-group>
</f-scene>

-

#### Repeated scaling

When <var>scaling</var> is repeated we will multiple shapes in incrementally bigger sizes.

##### Maximum scaling factor `{{ get('s_s2',1) }} ×`

<f-slider set="s_s2" value="1" from="1" to="25" />











---










| section: Rotation
| background: lightergray
| cols: 2fr 2fr 4fr 2fr
| style: --base: 8px

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify: space-between">

# Rotation

</f-inline>

-

<!-- Commenting out the sliders -->

<div style="display: none">
  <f-slider title="rotation" set="r"  />
  <f-slider title="scale" set="s" value="1" from="0.1" to="4" />
  <f-source />
</div>

#### Single rotation

A <var>rotation</var> is a transformation is a transformation that turns a shape by a certain angle around a fixed point. That point is called the<br><span style="color: var(--red)">●</span> <var>center of rotation</var>.

-

<f-scene step="1" class="r" v-slot="{ svgscale }" responsive>
  <f-group :scale="svgscale">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  <f-group opacity="0.75" :position="[-get('r_x1',1),-get('r_y1',1)]">
    <f-polargrid count="8" />
    <f-group :rotation="get('r_r1',45)">
      <f-group :scale="svgscale" :position="[get('r_x1',1),get('r_y1',1)]">
        <f-target transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
  </f-group>
  <f-circle :position="[-get('r_x1',1),-get('r_y1',1)]" r="0.08" stroke fill="var(--red)" />
</f-scene>

##### Rotation `{{ get('r_r1',45) }}°`

<f-slider set="r_r1" value="45" integer />

##### X of center `{{ get('r_x1',1) }}`

<f-slider set="r_x1" value="1" to="2" />

##### X of center `{{ get('r_y1',1) }}`

<f-slider set="r_y1" value="1" to="2" />

-

<f-scene step="1" class="r" v-slot="{ svgscale }" responsive>
    <f-group
      v-for="a in range(0,360,360 / get('r_c',1)).slice(0, get('r_c',1))"
      :rotation="a"
    >
      <f-line
        :x2="3"
        stroke-width="1"
        opacity="0.1"
      />
      <f-group :scale="svgscale" :position="[1,0]">
        <f-target transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
</f-scene>

-

#### Repeated rotation

By applying rotation to an element multiple times we can create a circular set of elements with all elements having <var>rotational symmetry</var>.

##### Number of rotations `{{ get('r_c',1) }}`

##### Rotation step `{{ round(360 / get('r_c',1),2) }}°`

<f-slider set="r_c" value="1" from="1" to="72" integer />



---

| section: Reflection

| background: lightergray
| cols: 2fr 2fr 4fr 2fr
| style: --base: 8px

| 1 1 1 1
| 2 2 5 6
| 3 4 5 6 

| rows: auto

<f-inline style="--inline-justify: space-between">

# Reflection

</f-inline>

-

A shape has <var>reflectional symmetry</var> if it looks the same after being reflected. The line of reflection is called the <var>axis of symmetry</var>, and it splits the shape into two <var class="gray">congruent</var> halves.

-

<f-scene grid class="r" v-slot="{ svgscale }" responsive>
  <f-mirror-x r="2" :step="get('r_dx1', 1)" v-slot="{ value }">
  <f-group :scale="svgscale" :opacity="[0.5,1][value]">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  </f-mirror-x>
</f-scene>

#### Reflection around X axis

##### Distance `{{ get('r_dx1', 1) }}`

<f-slider set="r_dx1" value="0" from="-0.25" to="2" />

-

<f-scene grid class="r" v-slot="{ svgscale }" responsive>
  <f-mirror-y r="2" :step="get('r_dy1', 1)" v-slot="{ value }">
  <f-group :scale="svgscale" :opacity="[0.5,1][value]">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  </f-mirror-y>
</f-scene>

#### Reflection around Y axis

##### Distance `{{ get('r_dy1', 1) }}`

<f-slider set="r_dy1" value="1" from="-0.25" to="2" />

-

<f-scene step="1" class="r" v-slot="{ svgscale }" responsive download>
    <f-group
      v-for="a in range(0,360,360 / get('r_c1',6)).slice(0, get('r_c1',6))"
      :rotation="a"
      style="mix-blend-mode: multiply;"
    >
      <f-line
        :x2="3"
        stroke-width="1"
        opacity="0.1"
      />
      <f-mirror-x r="4" :step="get('r_x2',0)">
        <f-mirror-y r="4" :step="get('r_y2',0)">
          <f-group :rotation="get('r_r1',0)" :scale="get('r_s1',1)">
          <f-group :scale="svgscale">
            <f-target transform="translate(-50, 50) scale(1,-1)" />
          </f-group>
          </f-group>
        </f-mirror-y>
      </f-mirror-x>
    </f-group>
</f-scene>

-

#### Repeated reflection

We can combine the <var>reflection</var> and transformations we learned ealier.

##### Arount x axis `{{ get('r_y2',0) }}`

<f-slider set="r_y2" from="0" to="1" />

##### Around in y axis `{{ get('r_x2',0) }}`

<f-slider set="r_x2" from="0" to="1" />

##### Element rotation `{{ get('r_r1', 0.5) }} ×`

<f-slider set="r_r1" />

##### Number of rotations `{{ get('r_c1',6) }}`

<f-slider set="r_c1" value="6" from="1" to="16" integer />

##### Element scale `{{ get('r_s1',1) }}`

<f-slider set="r_s1" value="1" from="0.5" to="4" />


---


| chapter: Combined transform
| section: Combined transformations

| background: lightergray
| cols: 2fr 2fr 4fr 2fr
| style: --base: 8px

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify : space-between">

# Combined transformations

</f-inline>

-

<!-- Commenting out the sliders -->

<div style="display: none">
  <f-slider title="rotation" set="r"  />
  <f-slider title="scale" set="s" value="1" from="0.1" to="4" />
  <f-source />
</div>

A true power of transformations will come out when they are combined, this means <var class="gray">translation</var>, <var class="gray">scaling</var>, <var class="gray">rotation</var> are applied all to the same shape, creating <var>affine transformation</var>.


> Adjust all the transformations on the shapes to see the *combined* effect.

-

#### Translation

##### x and y axis `{{ get('c_x1',0.05) }}`

<f-slider set="c_x1" value="0.05" from="0" to="4" />

#### Scaling

##### Element scaling `{{ get('c_s1', 4) }} ×`

<f-slider set="c_s1" value="4" from="0.1" to="5" />

#### Rotation

##### Element rotation `{{ get('c_r1', 1) }} ×`

<f-slider set="c_r1" />

<div v-show="get('c_p',0) == 1">

##### Number of rotations `{{ get('c_c',6) }}`

<f-slider set="c_c" value="6" from="1" to="36" integer />

</div>

-

<f-scene v-if="get('c_p',0) == 1" step="1" class="r" v-slot="{ svgscale }" responsive download>
    <f-group
      v-for="a in range(0,360,360 / get('c_c',6)).slice(0, get('c_c',6))"
      :rotation="a"
    >
      <f-line
        :x2="3"
        stroke-width="1"
        opacity="0.1"
      />
      <f-group
        :position="[get('c_x1',0.05),0]"
        :scale="get('c_s1',4)"
        :rotation="get('c_r1',0)"
      >
      <f-group :scale="svgscale">
        <f-target :mode="['normal','multiply','difference'][get('c_m',0)]" transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
      </f-group>
    </f-group>
</f-scene>

<f-scene v-else class="r" v-slot="{ svgscale }" responsive download>
  <f-group v-for="y in range(-2,2)">
    <f-group
      v-for="x in range(-2,2)"
      :position="[x * get('c_x1',0.75),y * get('c_x1',0.75)]"
      :scale="get('c_s1',1)"
      :rotation="get('c_r1',0)"
    >
      <f-group :scale="svgscale">
        <f-target :mode="['normal','multiply','difference'][get('c_m',0)]" transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
  </f-group>
</f-scene>

-

#### Choose pattern

<f-buttons :value="get('c_p',0)" v-on:value="v => set('c_p',v)" :buttons="['Grid pattern','Circle pattern']"  />

Choose between <var>translational</var> and <var>rotational</var> <var class="gray">symmetry</var>. 

#### Bring in creativity

To get more creative you can adjust the blend mode of the elements, creating a whole new set of pattern variations.

<f-buttons :value="get('c_m',0)" v-on:value="v => set('c_m',v)" :buttons="['normal','multiply','difference']"  />

---

| section: The fourth dimension

<caption>Exercise</caption>

## The fourth dimension: time


Another addition to designing patterns could be the fourth dimension: time. This can be achieved with **light** (moving shadows alter the 3D view as well), **rhythm** (tapping to a song is a pattern...), **nature**, etc. 

* Even rituals, social habits and cultures show a wide range of patterns. Can you name a few examples of these kind of patterns?

* Go explore the adding of 4D to your patterns. 

* What could be the changes to your designs? How do you sense it?

* What would be the purpose for your pattern? Can you explain why?

---

| section: Final assignment

<caption>Exercise</caption>

## Final assignment

Key steps

1. Now that you improved your knowledge and skills, find a way to produce your pattern, texture or structure. You can use stamp, stencil, cut out vinyl, 3D printers, laser cutters, AR/VR... Get your skates on!

2. When you think you're done with making your best 2D/3D pattern, find at least two students to get peer reviews. You will need them in the next stage to make improvements to the design.

---

<caption>Reflect</caption>

## Evaluation of your pattern skills 

After having worked with this scenario, your pattern skills have grown. Describe here what you have learned, for instance using these questions:

* How was your skills level on patterns before you started this scenario?

* What was your main goal with this exercise?

* In what step did you struggle the most?

* What have you learned doing this scenario?

* Will you see more patterns in your daily life from now on?

---

| padding: 0
| theme: dark
| 1 1 2

<section>

## More fun with patterns

Explore the following tools to create more patterns:

#### Try digital tools

<f-inline>
  <a class="primary" href="../patterns_editor">Go to tessellation editor</a>
  <a class="primary" href="../patterns_playground">Go to pattern playground</a>
</f-inline>

http://weavesilk.com/

Amaziograph https://amaziograph.com


#### Go analog

* Find similar leaves, stones, flowers, packaging, emoji, … etc.

* Investigate the world of tessellations http://tessellations.org/methods-diy-papercut.shtml

</section>

-

<f-image src="https://c.pxhere.com/photos/85/e4/photo-365034.jpg!d" />












<!-- End of ./index.md -->
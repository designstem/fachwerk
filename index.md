<center>
<f-scene>
  <f-circle-pattern :r="0.5 - (get('r', 1) / 2)" count="6">
    <f-circle-pattern :r="get('r', 1)" count="6">
      <component
        :is="['f-regularpolygon','f-circle','f-text'][get('type',0)]"
        :r="get('r', 1)"
        :stroke="color('purple')" 
      />
    </f-circle-pattern>
  </f-circle-pattern>
</f-scene>
</center>

<f-animation
  from="0"
  to="1"
  alternate
  easing="easeInQuad"
  v-on:value="r => set('r', r)"
/>


# <big><big><big>Fachwerk</big></big></big>

{{ get('c') }}

<big><big>Prefer <button v-on:click="set('type',0)">Hexagons</button> over <button v-on:click="set('type',1)">Circles</button> ? Here is **VueJS** and **Markdown** based framework for creating interactive learning materials.</big></big>

<br>

## **1**Play

<big>Best way to get the glimpse what the framework offers to try to edit the contents of this page. Everything here is **✍🏾editable** so you can make instant changes and explorations in code. </big>

<br>

## **2**Learn

<big>Our [documentation](./docs) contains helpful **🔮guides</mark>** to get started and references to more than **📦{{ get('componentCount') }} components**, everything from 2D/3D graphics, user interaction, beautiful math and more. Again, edit away!</big>

<big><a href="./docs" class="primary">Explore the docs</a></big>

<br>

## **3**Build

<big>Fachwerk is modular and flexible: if the built-in content authoring experience is not enough, one can build a totally custom application importing our components, utilities and styling as needed.</big>

<big>
  <a href="https://github.com/designstem/fachwerk" class="primary">Source on Github</a>&nbsp;
  <a href="https://github.com/designstem/templates" class="primary">Starter templates on Github</a>
</big>

---
  
| 1 1
| 2 3
| 2 4

# FAQ

-

### Inspiration?

***Lea Verou*** and her [Mavo](https://www.smashingmagazine.com/2017/05/introducing-mavo/) framework.

***Sara Vieira*** and her unstoppable drive to do [useful](https://fiddly.netlify.com/) and [fun](https://makefrontendshitagain.party/) things on the Web.

***Nadieh Bremer*** and her work all the way back to the [spirograph](https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3).

***Alan Kay*** ahd his lecture [Doing with Images Makes Symbols](https://www.youtube.com/watch?v=p2LZLYcu_JY) and its [spiritual following](https://www.youtube.com/watch?v=8pTEmbeENF4).

***John Gold*** and his articles [Taking Robots to Design School](https://jon.gold/2016/05/robot-design-school) and [Declarative Design Tools](https://jon.gold/2016/06/declarative-design-tools/).

***Rune Madsen*** and his book [Programming Design Systems](https://programmingdesignsystems.com/) book.

***Steven Wittens*** and his [eternal love for math](http://acko.net).

-

### Who are making this?

Fachwerk is a part of <a ref="https://designstem.github.io/homepage">DesignSTEM</a> education initiative that creates immersive experiences for future learning.

-

### Why not React?

We keep wondering as well. As big fans on React [MDX](https://github.com/mdx-js) ecosystem and tools like [Observable](observablehq.com) those ideas have been a great inspiration for us.

Our goal of the framework is make it instantly usable for everybody with the minimal knowledge of HTML. VueJS offers this and mixed with latest Javascript features it was a *Natürliche* choice for Fachwerk.
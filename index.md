<center>
<f-scene>
  <f-circle-pattern :count="get('c',8)" scale="0.75">
    <f-circle-pattern r="0.5" :count="get('c',8) * 2">
      <f-circle
        :r="get('r', 1)"
        stroke-width="1"
        :stroke="color('purple')" 
      />
    </f-circle-pattern>
  </f-circle-pattern>
</f-scene>
</center>

<f-animation
  to="1"
  alternate
  v-on:value="r => set('r', r)"
/>

# <big><big><big>Fachwerk</big></big></big>

<big><big>Love *Ordnung*? Here is [VueJS](https://vuejs.org/) and [Markdown](https://help.github.com/articles/basic-writing-and-formatting-syntax/) based framework for creating interactive learning materials.

<br>

## **1**Play

<f-slider
  title="Kreisqualität"
  from="3"
  to="10"
  integer
  :value="get('c', 8)"
  v-on:value="c => set('c', c)"
/>

<big>Best way to get the glimpse what the framework offers to try to edit the contents of this page. Everything here is **✍🏾editable** so you can make instant changes and explorations in code. </big>

<br>

## **2**Learn

<big>Our [documentation](./docs) contains helpful **🔮guides</mark>** to get started and references to more than **📦{{ get('componentCount') }} components**, everything from 2D/3D graphics, user interaction, beautiful math and more. Again, edit away!</big>

<big><a href="./docs" class="primary">Explore the docs</a></big>

<br>

## **3**Build

<big>Fachwerk is modular and flexible: if the built-in content authoring experience is not enough, one can build a totally custom application importing our components, utilities and styling as needed.

<big><a href="https://github.com/designstem/fachwerk" class="primary">Source on Github</a>&nbsp; <a href="https://github.com/designstem/templates" class="primary">Starter templates on Github</a></big>

---
  
| 1 1
| 2 3
| 2 4

# FAQ

-

### Inspiration?

***Lea Verou*** and her [Mavo](https://www.smashingmagazine.com/2017/05/introducing-mavo/) framework with just-write-HTML promise.

***Sara Vieira*** and her unstoppable drive to do [useful](https://fiddly.netlify.com/) and [fun](https://makefrontendshitagain.party/) things on the Web.

***Nadieh Bremer***'s work all the way back to the [spirograph](https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3).

***Alan Kay*** ahd his [Doing with Images Makes Symbols](https://www.youtube.com/watch?v=p2LZLYcu_JY) lecture and its [spiritual following](https://www.youtube.com/watch?v=8pTEmbeENF4).

***John Gold*** and his [Taking Robots to Design School](https://jon.gold/2016/05/robot-design-school) and [Declarative Design Tools](https://jon.gold/2016/06/declarative-design-tools/).

***Rune Madsen*** and his [Programming Design Systems](https://programmingdesignsystems.com/) book and [rune.js](http://runemadsen.github.io/rune.js/) framework.

***Steven Wittens*** and his [interactive math explorations](http://acko.net).

-

### Who are making this?

Fachwerk is a part of <a ref="https://designstem.github.io/homepage">DesignSTEM</a> education initiative that creates immersive experiences for future learning.

-

### Why not React?

We keep wondering as well. As big fans on React [MDX](https://github.com/mdx-js) ecosystem and tools like [Observable](observablehq.com) those ideas have been a great inspiration for us.

Our goal of the framework is make it instantly usable for everybody with the minimal knowledge of HTML. VueJS offers this and mixed with latest Javascript features it was a *Natürliche* choice for Fachwerk.
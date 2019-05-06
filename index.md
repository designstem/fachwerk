<center>
  <f-scene>
    <f-rotation>
      <f-circle-pattern :r="0.5 - (get('r') / 2)">
        <f-circle-pattern :r="get('r')">
          <f-hexagon stroke="var(--purple)" />
        </f-circle-pattern>
      </f-circle-pattern>
    </f-rotation>
  </f-scene>
</center>

# <big><big><big>Fachwerk</big></big></big>

<big><big>A **VueJS** and **Markdown** based framework for creating interactive learning materials.</big></big>


<f-slider
	set="r"
  value="0.5"
  from="0"
  to="1"
/>

<br>

## **1**Play

<big>Best way to get the glimpse what the framework offers to try to edit the contents of this page. Everything here **✍🏾 editable**  and can be stored in your browser so you can make instant changes and explorations in code. 

<big><a href="./playground" class="primary">Go to playground</a></big>

<br>

## **2**Learn

<big>Our [documentation](./docs) contains helpful **🔮 guides** to get started and references to **📦 {{ get('componentCount') }} components**, covering everything from 2D/3D graphics, user interaction, comprehensive layouts, beautiful math and more. Again, edit away!</big>

<big><a href="./docs" class="primary">Explore the docs</a></big>

<br>

## **3**Build

<big>Fachwerk is modular and flexible: if the built-in content authoring experience is not enough, one can build a totally custom application importing our components, utilities and styling as needed.</big>

<big>
  <a href="https://github.com/designstem/fachwerk#fachwerk" class="primary">README.md in Github</a>
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

***Nadieh Bremer*** and [her work ](https://www.visualcinnamon.com/) all the way back to the [spirograph](https://www.visualcinnamon.com/2016/01/animating-dashed-line-d3).

***Saskia Freeke*** and her stamina to create visual delight [every day](https://twitter.com/sasj_nl).

***Alan Kay*** and his lecture [Doing with Images Makes Symbols](https://www.youtube.com/watch?v=p2LZLYcu_JY) and [the future that never came to be](https://www.youtube.com/watch?v=8pTEmbeENF4).

***John Gold*** and his articles [Taking Robots to Design School](https://jon.gold/2016/05/robot-design-school) and [Declarative Design Tools](https://jon.gold/2016/06/declarative-design-tools/).

***Rune Madsen*** and his book [Programming Design Systems](https://programmingdesignsystems.com/).

***Steven Wittens*** and his [love letters to math](http://acko.net).

-

### Who are making this?

Fachwerk is a part of [DesignSTEM](https://designstem.github.io/homepage) education initiative that creates immersive experiences for future learning. We are educators, teachers, designers and engineers from 10 countries around Europe, 🇬🇧 🇩🇪 🇬🇷 🇮🇹 🇳🇱 🇵🇹 🇸🇮 🇫🇮 🇪🇪  in particular.

-

### Why not React?

Why indeed. React [MDX ecosystem](https://github.com/mdx-js) and tools like [Observable](observablehq.com) have been a great inspiration for us.

Our goal of the framework is make it instantly usable for everybody with the minimal knowledge of HTML. VueJS templates offer this and mixed with latest Javascript features such as module imports it was a *Natürliche* choice for Fachwerk.

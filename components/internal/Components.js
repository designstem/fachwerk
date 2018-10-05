import Render from "../Render.js";
import Editor from "../Editor.js"
import Markdown from "../Markdown.js";

import Anime from "../Anime.js";
import Buttons from "../Buttons.js";
import Math2 from "../Math.js";
import Slider from "../Slider.js";
import ThreeGrid from "../ThreeGrid.js";
import ThreeLine from "../ThreeLine.js";
import ThreePolygon from "../ThreePolygon.js";
import ThreeRegularPolygon from "../ThreeRegularPolygon.js"
import ThreeScene from "../ThreeScene.js";
import ThreeGroup from "../ThreeGroup.js";
import ThreeBox from "../ThreeBox.js";
import ThreeTriangle from "../ThreeTriangle.js";
import Transport from "../Transport.js";
import TwoGrid from "../TwoGrid.js";
import TwoLine from "../TwoLine.js";
import TwoGroup from "../TwoGroup.js";
import TwoPolygon from "../TwoPolygon.js";
import TwoRegularPolygon from "../TwoRegularPolygon.js";
import TwoScene from "../TwoScene.js";
import ThreePolyhedron from "../ThreePolyhedron.js";
import PolyhedronScope from "../PolyhedronScope.js";
import PolygonScope from "../PolygonScope.js";
import TwoBox from "../TwoBox.js";

// Experimental
import TwoSceneScope from "../experimental/TwoSceneScope.js";

const importedComponents = [
  Buttons,
  Math2,
  Transport,
  TwoScene,
  TwoGrid,
  TwoGroup,
  TwoBox,
  TwoLine,
  TwoPolygon,
  TwoRegularPolygon,
  ThreeScene,
  ThreeGroup,
  ThreeGrid,
  ThreeTriangle,
  ThreeLine,
  ThreeBox,
  ThreePolygon,
  ThreeRegularPolygon,
  ThreePolyhedron,
  Anime,
  Slider,
  PolygonScope,
  PolyhedronScope,
  // Experimental
  TwoSceneScope,
];

import componentList from "./componentList.js";
console.log(Object.entries(componentList))

const Props = {
  props: { props: { type: Object } }, // Arrays are Objects in JS
  computed: {
    propsData() {
      return (this.props instanceof Array)
        ? this.props.map(p => ({ name: p }))
        : Object.entries(this.props).map(p => ({ name: p[0] }));
    }
  },
  template: `
    <pre>{{ propsData }}</pre>
    <!--table>
      <tbody>
        <tr v-for"prop in propsData">
          <td>{{ prop[0] }}</td>
          <td>{{ prop[1].default ? prop[1].default : '' }}</td>
        </tr>
      </tbody>
    </table-->
  `
};

export default {
  components: { Render, Editor, Markdown, Props },
  data: () => ({
    componentData: Object.entries(componentList)
      .map(c => c[1])
      .map(({ name, example, description, props }) => ({
        name: name ? name : "Das Komponent",
        example: example ? example.trim() : "",
        description: description || "",
        props: props
      }))
  }),
  template: `
    <div>
        <div v-for="(c,i) in componentData" :style="{
          padding: '2rem 0',
          borderTop: i > 0 ? '3px solid var(--color-gray-light)' : '',
          minHeight: '15rem'
        }"
        >
          <h2>{{ c.name }}</h2>
          <div style="display: flex">
            <div style="width: 300px;">
              <Markdown :content="c.description" />
              <br>
              <template v-if="c.props">
                <h3>Props</h3>
                <pre style="
                  background: white;
                  max-height: 8rem;
                  overflow: auto;
                  padding: 0;
                  --white-space: normal;
                ">{{ c.props }}</pre>
              </template>
            </div>
            <div style="width: 500px; margin-left: 2rem;">
              <Editor v-model="c.example" />
            </div>
            <Render :t="'<div>'+c.example+'</div>'" style="flex: 1; align-items: flex-start; margin-left: 2rem;" />
          </div>
        </div>
    </div>
  `
};

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
import ThreeTriangle from "../ThreeTriangle.js";
import Transport from "../Transport.js";
import TwoGrid from "../TwoGrid.js";
import TwoLine from "../TwoLine.js";
import TwoPolygon from "../TwoPolygon.js";
import TwoRegularPolygon from "../TwoRegularPolygon.js";
import TwoScene from "../TwoScene.js";
import ThreeHedron from "../ThreeHedron.js";
import Hedron from "../Hedron.js";

const importedComponents = [
  Anime,
  Buttons,
  Math2,
  Slider,
  Transport,
  TwoScene,
  TwoGrid,
  TwoLine,
  TwoPolygon,
  TwoRegularPolygon,
  ThreeScene,
  ThreeGrid,
  ThreeTriangle,
  ThreeLine,
  ThreePolygon,
  ThreeRegularPolygon,
  ThreeHedron,
  Hedron
];

export default {
  components: { Render, Editor, Markdown },
  data: () => ({
    componentData: importedComponents.map(
      ({ name, example, description, props }) => ({
        name: name ? name : "Was ist das?",
        example: example ? example.trim() : "",
        description: description ? description : "",
        props: JSON.stringify(props, null, 2)
      })
    )
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

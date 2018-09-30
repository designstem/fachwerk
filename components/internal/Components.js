import Render from "../Render.js";
import Editor from "../Editor.js"

import Anime from "../Anime.js";
import Buttons from "../Buttons.js";
import Math2 from "../Math.js";
import Slider from "../Slider.js";
import ThreeLine from "../ThreeLine.js";
import ThreeRegularPolygon from "../ThreeRegularPolygon.js"
import ThreeTriangle from "../ThreeTriangle.js";
import Transport from "../Transport.js";

const importedComponents = [
  Anime,
  Buttons,
  Math2,
  Slider,
  ThreeLine,
  ThreeRegularPolygon,
  ThreeTriangle,
  Transport,
];

export default {
  components: { Render, Editor },
  data: () => ({
    componentData: importedComponents.map(
      ({ name, example, description, props }) => ({
        name,
        example: example.trim(),
        description: description ? description : '',
        props: JSON.stringify(props, null, 2)
      }),
    )
  }),
  template: `
    <div>
        <div v-for="c in componentData" style="
          padding: 2rem 0;
          border-top: 3px solid var(--color-gray-light); display: flex; margin-bottom: 2rem;">
        <div style="flex: 1.5">
          <h2>{{ c.name }}</h2>
          <p v-html="c.description" />
          <pre style="background: white; max-height: 12rem; overflow: auto;">{{ c.props }}</pre>
        </div>
        <div style="flex: 2; margin-left: 2rem;">
          <Editor v-model="c.example" />
        </div>
        <Render :t="'<div>'+c.example+'</div>'" style="flex: 2; align-items: flex-start; margin-left: 2rem;" />
        </div>
    </div>
  `
};

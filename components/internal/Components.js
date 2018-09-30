import Render from "../Render.js";

import Anime from "../Anime.js";
import Buttons from "../Buttons.js";
import Math2 from "../Math.js";
import Transport from "../Transport.js";
import Slider from "../Slider.js";
import ThreeRegularPolygon from "../ThreeRegularPolygon.js"
import ThreeLine from "../ThreeLine.js";

const importedComponents = [
  ThreeLine,
  ThreeRegularPolygon,
  Anime,
  Buttons,
  Math2,
  Transport,
  Slider
];

export default {
  components: { Render },
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
        <div v-for="c in componentData" style="display: flex; margin-bottom: 2rem;">
        <div style="flex: 1.5">
          <h2>{{ c.name }}</h2>
          <p>{{ c.description }}</p>
          <pre style="background: white">{{ c.props }}</pre>
        </div>
        <div style="flex: 2; margin-left: 2rem;">
          <textarea v-model="c.example" style="
            width: 90%;
            padding: 1rem;
            font-family: var(--font-mono);
            border: none;
            border-radius: var(--border-radius);
            line-height: 1.4rem;
            outline: none;
            color: var(--color-gray-darker);
            background: var(--color-gray-light);
            font-size: 0.9rem;
            min-height: 10rem;
          "/>
        </div>
        <Render :t="'<div>'+c.example+'</div>'" style="flex: 2; align-items: flex-start; margin-left: 2rem;" />
        </div>
    </div>
  `
};

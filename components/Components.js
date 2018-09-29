const components = [{ component: "Buttons", props: { buttons: ["a", "baa"] } }];

import Render from "./Render.js";

import Buttons from "./Buttons.js";
import Anime from "./Anime.js";

const importedComponents = [Buttons,Anime];

export default {
  components: { Render },
  data: () => ({
    componentData: importedComponents.map(({ name, example, description,props }) => ({
      name,
      example: example.trim(),
      description,
      props: JSON.stringify(props,null,2)
    }))
  }),
  template: `
    <div>
        <div v-for="c in componentData" style="display: flex; margin-bottom: 2rem;">
        <div style="flex: 1">
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
        <Render :t="c.example" style="flex: 2; align-items: flex-start; margin-left: 2rem;" />
        </div>
    </div>
  `
};

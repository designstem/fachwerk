import { fachwerk } from "../src/fachwerk.js";

import FFlower from "./FFlower.js"
import FFlower2 from "./FFlower2.js"
import FClock from "./FClock.js"
import FPlaceholder from "./FPlaceholder.js"

fachwerk({
  components: { FFlower, FFlower2, FClock, FPlaceholder },
  editor: "hide",
  home: false,
  pager: false,
  type: 'document',
  header: [
    { title: "Scenarios", src: "https://designstem.github.io/scenarios" },
    { title: "Project progress", src: "https://designstem.github.io/homepage" },
    { title: "Framework", src: "https://designstem.github.io/homepage" },
    { title: "Github", src: "https://designstem.github.io" }
  ],
  footer: true
});

import { fachwerk } from "../src/fachwerk.js";

import FMidiIn from "./FMidiIn.js";

fachwerk({
  menu: false,
  editor: "show",
  pager: false,
  src: "./midi.md",
  components: { FMidiIn }
});

import { fachwerk } from "../src/fachwerk.js";
import { range, flatten } from "../fachwerk.js";

import FMidiIn from "./FMidiIn.js";
import FSynth from "./FSynth.js";

const notes = () => {
  const keys = [
    { key: "C", sharp: false },
    { key: "C", sharp: true },
    { key: "D", sharp: false },
    { key: "D", sharp: true },
    { key: "E", sharp: false },
    { key: "F", sharp: false },
    { key: "F", sharp: true },
    { key: "G", sharp: false },
    { key: "G", sharp: true },
    { key: "A", sharp: false },
    { key: "A", sharp: true },
    { key: "B", sharp: false },
  ];
  return flatten(range(0,9).map(o => keys.map(k => ({...k, note: k.key + (k.sharp ? '#' : '') + o, octave: o}))))
};

fachwerk({
  menu: false,
  editor: "show",
  pager: false,
  src: "./midi.md",
  components: { FMidiIn, FSynth },
  utils: { notes }
});

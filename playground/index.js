import { fachwerk } from "../src/fachwerk.js";
import { range, flatten } from "../fachwerk.js";

import FMidiIn from "./FMidiIn.js";
import FMidiOut from "./FMidiOut.js";
import FSynth from "./FSynth.js";
import FSequencer from "./FSequencer.js";
import FDrum from "./FDrum.js";

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
  { key: "B", sharp: false }
];

const notes = () => {
  return flatten(
    range(0, 9).map(o =>
      keys.map(k => ({
        ...k,
        note: k.key + (k.sharp ? "#" : "") + o,
        octave: o
      }))
    )
  );
};

const octave = () => keys.map(k => k.key + (k.sharp ? "#" : ""));

const chords = () => Tonal.Chord.names();
const chord = (chord = "M", note = "C", octave = 5) =>
  Tonal.Chord.intervals(note + chord).map(i =>
    Tonal.Distance.transpose(note + octave, i)
  );

fachwerk({
  menu: false,
  editor: "show",
  pager: false,
  src: "./midi.md",
  components: { FMidiIn, FMidiOut, FSynth, FSequencer, FDrum },
  utils: { notes, chord, chords, octave }
});

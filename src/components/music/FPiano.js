import { color, flatten, range } from "../../../fachwerk.js";

const octave = o => [
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
].map(n => ({ ...n, note: `${n.key}${n.sharp ? "#" : ""}${o}` }));

const pianoNotes = flatten(range(3,5).map(octave))

export default {
  description: `
Displays a piano roll.

<f-piano  />

Piano roll can also display highlighted keys.

<f-piano notes="C4 E4 G4" />

Also, it emits \`noteon\` and \`noteoff\` events so it can be used as a virtual keyboard to play notes.

<f-synth v-slot="{ noteon, noteoff }">
  <f-piano
    v-on:noteon="noteon"
    v-on:noteoff="noteoff"
  />
</f-synth>
  `,
  data: () => ({ pianoNotes }),
  props: {
    notes: { default: "", type: [String, Array] }
  },
  methods: {
    color,
    noteFill(n) {
      const isActive = this.currentNotes.includes(n.note);
      if (isActive) {
        return color("yellow");
      }
      return n.sharp ? color("primary") : color("white");
    }
  },
  computed: {
    currentNotes() {
      const notes =
        typeof this.notes == "string"
          ? this.notes.replace(",", " ").split(" ")
          : this.notes;
      return notes.map(n => n).map(n => n.trim());
    }
  },
  template: `
  <f-artboard :width="pianoNotes.filter(n => !n.sharp).length * 14" height="55">
    <f-box
      v-for="(n,i) in pianoNotes.filter(n => !n.sharp)"
      :key="'w' + i"
      :x="i * 15 + 10"
      :y="25 + 3"
      width="15"
      height="50"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    />
    <f-box
      v-for="(n,i) in pianoNotes.filter(n => n.sharp)"
      :key="'b' + i"
      :x="i * 15 + [15,0,0,15,15][i % 4]"
      :y="25 / 2 + 3"
      width="10"
      height="25"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    />
  />
  </f-artboard>
  `
};

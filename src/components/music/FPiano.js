import { color, chunk, flatten, range } from "../../../fachwerk.js";

const octave = octave => [
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
].map(n => ({ ...n, octave, note: `${n.key}${n.sharp ? "#" : ""}${octave}` }));

const octaves = flatten(range(3,5).map(octave))

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
  data: () => ({ octaves }),
  props: {
    notes: { default: "", type: [String, Array] }
  },
  methods: {
    color,
    chunk,
    noteFill(n) {
      const isActive = this.currentNotes.includes(n.note);
      if (isActive) {
        return color("yellow");
      }
      return n.sharp ? color("primary") : color("white");
    },
    xOffset(i) {
      return (i - [0,0.5,1,1.5,2,2,2.5,3,3.5,4,4.5,5][i]) * 15 + 7.5 + 3
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
  <f-artboard :width="chunk(octaves,12).length * (7 * 15) + 6" height="55">
    <f-group
      v-for="(octave,i) in chunk(octaves,12)"
      :key="i"
      :position="[i * (7 * 15),0]"
    >
    <f-box
      v-for="(n,j) in octave"
      v-if="!n.sharp"
      :key="j"
      :x="xOffset(j)"
      :y="25 + 3"
      width="15"
      height="50"
      stroke-width="2"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    />
    <f-box
      v-for="(n,j) in octave"
      v-if="n.sharp"
      :key="j"
      :x="xOffset(j)"
      :y="25 / 2 + 3"
      width="10"
      height="25"
      stroke-width="2"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    />
    </f-group>
  />
  </f-artboard>
  `
};
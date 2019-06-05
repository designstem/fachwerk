import { color, intersection } from "../../../fachwerk.js";

const pianoNotes = [
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
].map(n => ({ ...n, note: `${n.key}${n.sharp ? "#" : ""}4` }));

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
  <f-artboard width="110" height="55">
    <f-box
      v-for="(n,i) in pianoNotes"
      v-if="!n.sharp"
      :key="i"
      :x="xOffset(i)"
      :y="25 + 3"
      width="15"
      height="50"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    />
    <f-box
      v-for="(n,i) in pianoNotes"
      v-if="n.sharp"
      :key="i"
      :x="(i - [0,0.5,1,1.5,2,2,2.5,3,3.5,4,4.5,5][i]) * 15 + 7.5 + 3"
      :y="25 / 2 + 3"
      width="10"
      height="25"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    />
    <!--f-box
      v-for="(n,i) in pianoNotes.filter(n => n.sharp)"
      :key="'b' + i"
      :x="i * 15 + 18 + (i > 1 ? 15 : 0)"
      :y="25 / 2 + 3"
      width="10"
      height="25"
      :fill="noteFill(n)"
      @mousedown.native="$emit('noteon', n.note); "
      @mouseup.native="$emit('noteoff', n.note); "
      style="cursor: pointer"
    /-->
  />
  </f-artboard>
  `
};
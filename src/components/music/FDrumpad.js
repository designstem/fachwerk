import {
  octave,
  range,
  chunk,
  scale,
  flatten,
  color
} from "../../../fachwerk.js";

export default {
  description: `
Displays a drum pad.

<f-drumpad />

There is also \`sharps\` prop that optionally displays sharp / flat notes.

<f-drumpad sharps />

Drum pad can also display highlighted keys.

<f-drumpad notes="C2 E2 G2" />

Also, it emits \`noteon\` and \`noteoff\` events so it can be used as a virtual keyboard to play notes.

<f-synth v-slot="{ noteon, noteoff }">
  <f-drumpad
    v-on:noteon="noteon"
    v-on:noteoff="noteoff"
  />
</f-synth>

<p />
  `,
  props: {
    notes: { default: "", type: [String, Array], description: "List of active notes.<br>Examples: `\"C2 E2\"`, `\"C2,E2\"`, `\"['C2','E2']\"`" },
    sharps: { default: false, type: Boolean, description: "Show sharp / flat keys?" }
  },
  methods: {
    chunk,
    scale,
    color,
    noteFill(n) {
      const isActive = this.activeNotes.includes(n.note);
      if (isActive) {
        return color("yellow");
      }
      return n.sharp && this.sharps ? color("lightgray") : color("white");
    }
  },
  computed: {
    currentNotes() {
      return flatten(range(2, 3).map(octave)).slice(0, 16);
    },
    activeNotes() {
      const notes =
        typeof this.notes == "string"
          ? this.notes.replace(",", " ").split(" ")
          : this.notes;
      return notes.map(n => n).map(n => n.trim());
    }
  },
  template: `
  <f-scene width="250" height="250">
    <f-group
      scale="0.97"
      v-for="(row,y) in chunk(currentNotes, 4)"
      :key="y"
    >
      <f-box
        v-for="(n, x) in row"
        :key="x"
        :x="scale(x,0,4-1,-1.5,1.5)"
        :y="scale(y,0,4-1,-1.5,1.5)"
        r="1"
        @mousedown.native="$emit('noteon', n.note)"
        @mouseup.native="$emit('noteoff', n.note)"
        @touchstart.native="$emit('noteon', n.note)"
        @touchend.native="$emit('noteoff', n.note)"
        :fill="noteFill(n)"
      />
    </f-group>
  </f-scene>
  `
};

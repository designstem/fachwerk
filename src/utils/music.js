export const octave_help = () => `

\`octave(octave = 4)\`

Returns notes of one octave.

> This component needs extra installation to work. See **Making music** tutorial.

#### Example

    octave(5)

#### Output

<output>
{{ octave().slice(0,2) }}
...</output>
`;

export const octave = (octave = 4) =>
  [
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
  ]
    .map((n) => ({
      ...n,
      octave,
      note: `${n.key}${n.sharp ? "#" : ""}${octave}`,
    }))
    .map((n) => ({
      ...n,
      // @TODO Bring Tonal back
      // flatnote: Tonal.Note.fromMidi(Tonal.Note.midi(n.note)),
      // freq: Tonal.Note.freq(n.note),
      // midi: Tonal.Note.midi(n.note)
    }));

export const chords_help = () => `

\`chords()\`

Returns the names on the common chords

> This component needs extra installation to work. See **Making music** tutorial.

#### Example

    chords()

#### Output

<output>
{{ chords().slice(0,2) }}
...
</output>
`;

export const chords = () => Tonal.Chord.names();

export const chord_help = () => `

\`chord(chord = "M", note = "C", octave = 4)\`

Returns notes for a chord

> This component needs extra installation to work. See **Making music** tutorial.

#### Example

    chord('M', 'C', 4) // Major C
    chord('m', 'C', 4) // Minor C

#### Output

<output>
{{ chord('M', 'C', 4) }}
{{ chord('m', 'C', 4) }}
</output>
`;

export const chord = (chord = "M", note = "C", octave = 4) =>
  Tonal.Chord.intervals(note + chord).map((n) =>
    Tonal.Note.fromMidi(
      Tonal.Note.midi(Tonal.Distance.transpose(note + octave, n)),
      true
    )
  );

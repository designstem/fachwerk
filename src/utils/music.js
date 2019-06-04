export const chords_help = () => `

\`chords()\`

Returns the names on the common chords

> This component needs extra installation to work. See **Making music** tutorial.

#### Example

    chords()

#### Output

<output>
{{ chords().slice(0,10) }}
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
  Tonal.Chord.intervals(note + chord).map(i =>
    Tonal.Distance.transpose(note + octave, i)
  );


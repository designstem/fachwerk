export default {
  tag: 'Layout',
  description: `
A \`<table>\`, accepting array of objects as \`:rows\`.
`,
  example: `
<f-table :rows="[
  { name: 'Klaus', born: 1926 },
  { name: 'Werner', born: 1942 }
]"/>  
  `,
  props: { rows: { default: [], type: Array } },
  template: `
  <div>
  <table>
    <thead>
      <th
        v-for="(k,i) in Object.keys(rows[0])"
        :key={i}
      >
        {{ k }}
      </th>
    </thead>
    <tbody>
      <tr v-for="(row,i) in rows" :key="i">
        <td
          v-for="(r,j) in Object.values(row)"
          :key="j"
          v-html="r"
        />
      </tr>
    </tbody>
  </table>
  </div>
`
}
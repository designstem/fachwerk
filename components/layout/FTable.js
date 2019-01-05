import Markdown from "../Markdown.js";

export default {
  components: { Markdown },
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
        v-for="(h,i) in Object.keys(rows[0])"
        :key="i"
      >
        <Markdown :content="h.trim()" />
      </th>
    </thead>
    <tbody>
      <tr v-for="(row,i) in rows" :key="i">
        <td
          v-for="(r,j) in Object.values(row)"
          :key="j"
        >
          <Markdown :content="r.trim()" />
        </td>
      </tr>
    </tbody>
  </table>
  </div>
`
}
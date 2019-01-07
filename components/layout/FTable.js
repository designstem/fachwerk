import FMarkdown from "../internal/FMarkdown.js";

export default {
  components: { FMarkdown },
  description: `
A \`<table>\`, accepting array of objects as \`:rows\`.

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
        <FMarkdown :content="h.trim()" />
      </th>
    </thead>
    <tbody>
      <tr v-for="(row,i) in rows" :key="i">
        <td
          v-for="(r,j) in Object.values(row)"
          :key="j"
        >
          <FMarkdown :content="r.trim()" />
        </td>
      </tr>
    </tbody>
  </table>
  </div>
`
}
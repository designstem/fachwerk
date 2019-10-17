import { isarray } from "../../../fachwerk.js";
import FMarkdown from "../internal/FMarkdown.js";

export default {
  components: { FMarkdown },
  description: `
A table, accepting data in \`:rows\` attribute, supporting multiple formats:

#### Array of arrays, no columns names

Column names are auto-generated.

<f-table
  :rows="[
    ['Klaus','1926','Actor'],
    ['Werner','1942','Director']
  ]"
/>

#### Array of arrays, with columns names

Column names come from \`:cols\` attribute.

<f-table
  :cols="['name','born','profession']"
  :rows="[
    ['Klaus','1926','Actor'],
    ['Werner','1942','Director']
  ]"
/>

#### Array of objects, no column names

Column names are extracted from object keys.

<f-table
  :rows="[
  {
  	name: 'Klaus',
    born: '1926',
    profession: 'Actor'
  },
  {
  	name: 'Werner',
    born: '1942',
    profession: 'Director'
  }
  ]"
/>

#### Array of objects, with column names

Column names come from \`:cols\` attribute.

<f-table
  :cols="['name','geboren','beruf']"
  :rows="[
  {
  	name: 'Klaus',
    born: '1926',
    profession: 'Actor'
  },
  {
  	name: 'Werner',
    born: '1942',
    profession: 'Director'
  }
  ]"
/>

  `,
  props: { rows: { default: () => [], type: Array }, cols: { default: () => [], type: Array } },
  computed: {
    currentRows() {
      if (isarray(this.rows[0])) {
        return this.rows.map(row => row.reduce((acc, el , index) => {
          acc[`column ${index + 1}`] = el
          return acc
        }, {}))
      }
      return this.rows
    }
  },
  template: `
  <div>
  <table>
    <thead>
      <th
        v-for="(h,i) in Object.keys(currentRows[0])"
        :key="i"
      >
        <FMarkdown :content="cols[i] ? cols[i] : String(h).trim()" />
      </th>
    </thead>
    <tbody>
      <tr v-for="(row,i) in currentRows" :key="i">
        <td
          v-for="(r,j) in Object.values(row)"
          :key="j"
        >
          <FMarkdown :content="String(r).trim()" />
        </td>
      </tr>
    </tbody>
  </table>
  </div>
`
}
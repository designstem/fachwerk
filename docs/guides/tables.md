# Adding tables

Tables can be created with several methods:
  
#### Text format

For simple tables, a following syntax can be used. Note that the table cells can contain additional formatting.

Name        | Born
----------- | -----------
Klaus       | `1926`
Werner      | `1942`  

<br>
  
#### Component format

When table data is coming from another datasorce, it makes sense to use a dedicated `<f-table>` component that accepts data as a Javascript collection `:rows`:

<f-table :rows="[
  { name: 'Klaus', born: '`1926`' },
  { name: 'Werner', born: '`1942`' }
]"/>

<br>
  
#### HTML format

There is also a classic HTML table format available:
<table>
  <thead>
    <th>Name</th>
    <th>Born</th>
  </thead>
  <tbody>
    <tr>
      <td>Klaus</td>
      <td><code>1926</code></td>
    </tr>
    <tr>
      <td>Werner</td>
      <td><code>1942</code></td>
    </tr>
  </tbody>
</table>

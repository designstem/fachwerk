## Adding tables

Tables can be created with several methods:
  
### Markdown format

For simple tables, a following syntax can be used. Note that the table cells can contain additional formatting.

Name        | Born        | Profession
----------- | ----------- | ----------
Klaus       | 1926        | Actor
Werner      | 1942        | Director
  
### HTML format

There is also a classic HTML table format available:
<table>
  <thead>
    <th>Name</th>
    <th>Born</th>
    <th>Profession</th>
  </thead>
  <tbody>
    <tr>
      <td>Klaus</td>
      <td>1926</td>
      <td>Actor</td>
    </tr>
    <tr>
      <td>Werner</td>
      <td>1942</td>
      <td>Director</td>
    </tr>
  </tbody>
</table>

### Component format

When table data is coming from another datasorce, it makes sense to use a dedicated `<f-table>` component.
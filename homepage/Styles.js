export default {
  template: `
  <div class="grid" style="--cols: 1fr 1fr 1fr;">
  <div>
    <dd>h2 .bullet</dd>
    <h2><span class="bullet">2</span>Here is the smaller subtitle</h2>
    <dd>h3 .bullet</dd>
    <h3><span class="bullet">3</span>Here is the even smaller subtitle</h3>
    <dd>h3 .bullet</dd>
    <h4><span class="bullet">4</span>Here is the even more smaller subtitle</h4>
    <dd>.intro</dd>
    <div class="intro">Here is a intro with <a href="https://en.wikipedia.org/wiki/Johannes_Gutenberg">some
        links</a> in it. Actually, it can be even longer if needed</div>
    <dd>p, p b, p i</dd>
    <p>This is just a regular paragraph text with some <b>basic</b> <i>formatting</i> if one so desires.</p>
    <dd>p small, p small b, p small i</dd>
    <p><small>This is just a small regular text wish some <b>basic</b> <i>formatting</i> if one so desires.</small></p>
  </div>

  <div>
    <dd>.text, .text b, .text i</dd>
    <div class="text">
      <p>Normal polygons are
        <b>polygons</b> with all sides and angles equal. Are formed by triangles, normally
        <i>isosceles</i>.
      </p>
      <dd>.text p, .text code, .text a</dd>
      <p>For example <code>6px</code> triangles connected together form a regular polygon. Normal polygons are characterized by the number of edges or sides.</p>
      <p>Normal polygons are characterized by the number of edges or sides. For example 6px triangles connected together form a regular polygon.</p>
      
      <dd>.text p small</dd>
      <small>
          For example 6px triangles connected together form a regular polygon. Normal polygons are characterized
          by the number of edges or sides.
      </small>
    </div>

    <dd>table</dd>
    
    <table>
      <thead>
        <th>First col</th>
        <th>Second col</th>
      </thead>
      <tbody>
        <tr>
          <td>First col</td>
          <td>Second col</td>
        </tr>
        <tr>
            <td>First col</td>
            <td>Second col</td>
          </tr>
      </tbody>
    </table>

  </div>

  <div>
    <dd>label, .label</dd>
    <label>Here is the label</label>
    <dd>.sublabel</dd>
    <div class="sublabel">Here is a longer description what does this widget actually do</div>
    <dd>input[text]</dd>
    <input type="text" />
    <dd>input[range]</dd>
    <input type="range" />
    <dd>.button_primary</dd>

    <div class="button_primary">I am a primary button</div>
    <dd>.button_secondary</dd>
    <div class="button_secondary">I am a secondary button</div>
    <dd>.button_tertiary</dd>
    <div class="button_tertiary">I am tertiary button</div>
    <dd>.buttons .button_tertiary</dd>
    <div class="buttons">
      <div class="button_tertiary">First</div>
      <div class="button_tertiary">Second</div>
    </div>

  </div>

  </div>
  `
}
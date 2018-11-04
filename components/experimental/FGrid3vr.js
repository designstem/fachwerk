export default {
  template: `
  <a-entity>
    <a-entity
      v-for="x in [-2,-1,0,1,2]"
      :line="'start: '+x+', -2, 0; end: '+x+' 2 0; color: black'"
      :key="'x'+x"
    />
    <a-entity
      v-for="y in [-2,-1,0,1,2]"
      :line="'start: -2, '+y+', 0; end: 2 '+y+' 0; color: black'"
      :key="'y'+y"
    />
    <a-entity
      v-for="z in [-2,-1,0,1,2]"
      :line="'start: 0, -2 '+z+'; end: 0 2 '+z+'; color: black'"
      :key="'z'+z"
    />
  </a-entity>
  `
};

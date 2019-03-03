import { utils } from '../fachwerk.js'

export default {
  methods: { ...utils },
  template: `
  <f-scene width="300" height="300">
	<f-spin-pattern scale="0.5" :count="any(3,6,9)">
    <component
    	:is="any(['f-circle','f-hexagon'])"
      count="3"
      :r="any(range(0.7,0.9,0.1))"
     	:fill="
      color(any('red','yellow','transparent'))"
    />
      <component :is="any(
        'f-group',
        'f-group',
        'f-spin-pattern',
      )"
        :count="any(3,6,12)"
      >
      <component
        :is="any(['f-circle','f-box','f-hexagon'])"
        :r="any(range(0.1,0.4,0.1))"
        :fill="
        color(any('red','transparent','purple'))"
      />
    </component>
    <component :is="any(
    	'f-group',
    	'f-group',
      'f-circle-pattern',
      'f-spin-pattern',
    )"
    	:count="any(3,6,12)"
    >
      <component
        :is="any(['f-circle','f-hexagon','f-box'])"
        :r="any(range(0.3,0.6,0.1))"
        :fill="color(any('red','purple'))"
      />
      <component
        :is="any(['f-circle','f-hexagon','f-box'])"
        :r="any(range(0.1,0.2,0.1))"
        :stroke="color(any('red','purple'))"
        fill="none"
      />
    </component>
  </f-spin-pattern>
</f-scene>
  `
}
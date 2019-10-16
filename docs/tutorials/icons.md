## Icons audit

<f-value set="icons" :value="[
  { icon: 'f-activity-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`. We have used contextual emojis instead:  🛠️ 💻 📺 📷 etc` ***Remove?***', res: '' },
  { icon: 'f-arrow-icon', props: '`:rotation` / angle', desc: 'Building block, use direction-specific icons `<f-right-icon>` etc on top of it. **Hide**' },
  { icon: 'f-clock-icon', props: '`:duration :duration2` ', desc: 'Overengineered and not the best element for 12+ h duration visualization. But we need it in scenario metainfo.' },
  { icon: 'f-close-icon', props: '', desc: ' ' },
  { icon: 'f-document-icon', props: '', desc: 'From Figma' },
  { icon: 'f-download-icon', props: '', desc: 'Needs visual improvement. **Move to Figma and fix**' },
  { icon: 'f-edit-icon', props: '', desc: 'From Figma' },
  { icon: 'f-external-icon', props: '', desc: 'From Figma' },
  { icon: 'f-fact-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`. We use 💡 instead. ***Remove?*** Or extract the main shape?' },
  { icon: 'f-github-icon', props: '', desc: 'Unknown source' },
  { icon: 'f-hamburger-icon', props: '', desc: '' },
  { icon: 'f-home-icon', props: '', desc: 'From Figma' },
  { icon: 'f-icon', props: '`:size` / medium', desc: 'Building block, `<f-rounded-hexagon>` + `<f-fact-icon>`. Too complex background code ***Remove*** ' },
  { icon: 'f-leftarrow-icon', props: '', desc: 'Based on `<f-arrow-icon />`. **Rename** to `<f-left-icon />`' },
  { icon: 'f-menu-icon', props: '', desc: 'From Figma' },
  { icon: 'f-note-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`. We use ✍️ instead. Its very similar to <f-edit-icon /> ***Remove?***' },
  { icon: 'f-people-icon', props: '', desc: 'Shape needs word (rounded base), more elegant shape. **Move to Figma and fix**' },
  { icon: 'f-rightarrow-icon', props: '', desc: 'Based on `<f-arrow-icon />`. **Rename** to `<f-right-icon />`' },
  { icon: 'f-slides-icon', props: '', desc: 'From Figma' },
  { icon: 'f-tools-icon', props: '', desc: '' },
  { icon: 'f-vr-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`. We use 🥽 instead. ***Remove?***' },
]" />

<f-table
  :rows="get('icons',[])
    .map(({ icon, props, desc }) => ({
      icon: '<' + icon + ' />',
      component: '&nbsp;&nbsp;&nbsp;&nbsp;`<' + icon + ' />`',
      desc,
      props,
    }))"
/>
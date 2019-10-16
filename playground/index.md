<f-value set="icons" :value="[
  { icon: 'f-activity-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`. We have used contextual emojis instead:  🛠️ 💻 📺 📷 etc` ***Remove?***', res: '' },
  { icon: 'f-arrow-icon', props: '`:rotation` / angle', desc: 'Building block, use direction-specific icons `<f-right-icon>` etc on top of it. **Hide**' },
  { icon: 'f-clock-icon', props: '`:duration :duration2` ', desc: ' ' },
  { icon: 'f-close-icon', props: '', desc: ' ' },
  { icon: 'f-document-icon', props: '', desc: 'From Figma' },
  { icon: 'f-download-icon', props: '', desc: '' },
  { icon: 'f-edit-icon', props: '', desc: 'From Figma' },
  { icon: 'f-external-icon', props: '', desc: 'From Figma' },
  { icon: 'f-fact-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`' },
  { icon: 'f-github-icon', props: '', desc: 'Unknown source' },
  { icon: 'f-hamburger-icon', props: '', desc: '' },
  { icon: 'f-home-icon', props: '', desc: 'From Figma' },
  { icon: 'f-icon', props: '', desc: '' },
  { icon: 'f-leftarrow-icon', props: '', desc: 'Based on `<f-arrow-icon />`' },
  { icon: 'f-menu-icon', props: '', desc: 'From Figma' },
  { icon: 'f-note-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`' },
  { icon: 'f-people-icon', props: '', desc: '' },
  { icon: 'f-rightarrow-icon', props: '', desc: 'Based on `<f-arrow-icon />`' },
  { icon: 'f-slides-icon', props: '', desc: 'From Figma' },
  { icon: 'f-tools-icon', props: '', desc: '' },
  { icon: 'f-vr-icon', props: '`:size` / medium', desc: 'Based on `<f-icon />`' },
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
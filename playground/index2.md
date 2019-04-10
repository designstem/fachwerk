<template v-for="i in ['fact','activity','note','headset']">

<code>icon="{{ i }}"</code>
<f-icon
	v-for="s in ['small','medium','large']"
  :icon="i"
  :size="s"
/>

</template>

-

> ### <f-icon size="small" /> Do you knew?
Some people are bigger than others

> ## <f-icon size="medium" /> Do you knew?
Some people are bigger than others
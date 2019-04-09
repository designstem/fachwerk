<template v-for="i in ['fact','activity','note','headset']">
	
<code>icon="{{ i }}"</code>
  
  <f-icon v-for="s in ['small','medium','large']" :icon="i" :size="s" />
  <p />
</template>

-

> ### <f-icon size="small" /> So did you knew?
Some people are bigger than others

> ## <f-icon size="medium" /> So did you knew?
Some people are bigger than others
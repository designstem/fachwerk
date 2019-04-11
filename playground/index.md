<template v-for="i in ['fact','activity','note','headset']">
  <code>icon="{{ i }}"</code>
  <f-icon
    v-for="s in ['small','medium','large']"
    :icon="i"
    :size="s"
  />
</template>
export default {
  description: `
Displays a page footer.

<f-footer />
  
<br>
  `,
  template: `
  <div class="grid" style="
    padding: var(--base3) var(--base3) var(--base8) var(--base3);
    --cols: auto 1fr auto
  ">
    <p style="opacity: 0.5">
      All code is licenced under <a href="https://choosealicense.com/licenses/mit/" rel="licence">MIT licence</a>. All content is licenced under
      <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons BY-NC-SA 4.0 International License</a>.
    </p>
    &nbsp;
    <img src="https://designstem.github.io/fachwerk/images/erasmus_logo.svg" style="width: 240px" />
  </div>
  `
}

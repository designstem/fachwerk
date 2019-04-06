# Release notes

### 0.0.1 / Mon 8 April 2018

* ***Depreciated***: `f-fetch` now accepts `src` prop for source file path. `url` prop is still supported but will be removed in next version.

* Upgrading to Vue 2.6. The update is likely smooth but make sure your interactive elements on slides still work.

* Slide options are simplified: `padding`, `gap` and `height` accept regular CSS values and  have sensible defaults.

* New docs page for slide options.

* New component `f-menu` for slide navigation, accepts a md file (`./menu.md` is default) or inline content. It is enabled by default, use `fachwerk({ menu: false })` to disable.

* `f-home` component and `home` setting on `fahcwerk()` are removed.

* Adding release notes.

### 0.0.0

Initial version




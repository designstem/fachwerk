# Release notes

### 0.0.2 / Mon 15 April 2018

#### Improvements

* New math functions: `distance()` to calculate distance between two points and `linepoint()` to calculate single point coordinates on the line.

* `goto(id)` utility function. Use it everywhere you used `emit('goto', id)`.

* To display the label for the slider, one has to set `<f-slider title="Some title">` (Previously when using `set` attribute, the variable name was added automatically).

* New content icons: `f-activity-icon`, `f-fact-icon`, `f-note-icon` and `f-arrow-icon`

* New navigation icons, mostly used internally: `f-note-icon`, `f-rightarrow-icon`, `f-leftarrow-icon`, `f-close-icon`

* Global CSS variable `--transition-speed` for transitions speeds

#### Experimental funcionality

* Initial work for having sections (group of slides) in content. Documentation in upcoming releases.

* Experimental `<f-secion-card>` component for constructing menus. Documentation in upcoming releases.

* `<f-inline>` component accepts `--inline-gap` `--inline-justify` and `--inline-align` CSS parameters. This is experimental: this functionality might later migrated to more generic `f-flex` component.

### 0.0.1 / Mon 8 April 2018

#### Improvements

* New component `<f-menu>` for slide navigation, accepts a md file (`./menu.md` is default) or inline content. It is enabled by default, use `fachwerk({ menu: false })` to disable in your scenario `index.js` file. This is the groundwork for upcoming navigation system.

* Slide options are simplified: `| padding`, `| gap` and `| height` accept regular CSS values and  have sensible defaults.

* `<f-drag>` now works properly and allows getting the dragged points using both local and global variables.

* `<f-buffer>` is fixed and working properly.

#### Depreciations

* ***Depreciated***: `<f-fetch>` now accepts `src` prop for source file path.
`url` prop is still supported but will be removed in next version.

* ***Depreciated***: `<f-grid-pattern>` `<f-brick-pattern>` `<f-hex-pattern>` now accept `rows` and `cols` props.
`width` and `height` props are still supported but will be removed in next version.

* `<f-home>` component and `home` setting on `fahcwerk()` are removed.

#### Docs

* Documentation page remembers last accessed page. This is the first step for actual per-page URLs for each documentation page.

* New docs page for slide options.

* Improved docs for dynamic data components

* Adding release notes.

### 0.0.0

Initial version.




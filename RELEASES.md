# Release notes

### 0.0.4 / Mon 29 April 2018

#### Improvements

* `<f-notes>` accepts `title` attribute and defaults to "Teacher notes"

* Initial improvements to the docs menu structure

* New icons for internal use: `<f-people>`, `<f-clock>`, `<f-tools>` (placeholder for now).

### 0.0.3 / Mon 22 April 2018

#### Improvements

* New `polarxy(angle, radius)` function, returns [x,y] coordinates, works nicely with `:position` prop on geometry components.

* Added `send('edit')` event that toggles edit mode for `<f-content-editor />`

### 0.0.2 / Mon 15 April 2018

#### Improvements

* New top navigaton for menu, editor, notes and paging buttons. This work is ongoing.

* Slides can be navigated with right / left buttons. alt + right / alt + left should be used when on-page editor is open

* New content icons: `<f-activity-icon />`, `<f-fact-icon />`, `<f-note-icon />` and `<f-vr-icon />`

* New navigation icons (mostly used internally): `<f-menu-icon />`, `<f-rightarrow-icon />`, `<f-leftarrow-icon />`, `<f-close-icon />`

* New math functions: `distance()` to calculate distance between two points and `linepoint()` to calculate single point coordinates on the line.

* Added `goto(id)` utility function. Use it everywhere you used `send('goto', id)`.

* Global CSS variable `--transition-duration` for setting CSS transition speeds

* `<f-animation>` now supports `delay` parameter

* Fading transitions on slides and sidebar / notes / menu appearances

* Currently active slide will be remembered on page reload

#### Experimental functionality

* Initial work for having sections (subgroup of slides) in content. Documentation will be added on upcoming releases.

* Experimental `<f-section-card>` component for setting up menus. Documentation will be added on upcoming releases.

* `<f-inline>` component accepts `--inline-gap` `--inline-justify` and `--inline-align` CSS parameters. This is experimental: this functionality might later migrated to more generic `f-flex` component.

* Experimental work on printing slides support.

#### Depreciations

* To display the label for the slider, one always has to set `<f-slider title="Some title">`. Previously when using `set` attribute, the variable name was added automatically, this is no longer the case.

#### Docs

* Dedicated icons section


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




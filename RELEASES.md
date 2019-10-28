# Release notes

### 0.0.9

#### Rewritten layout, editor and preview components

- There is a new version of layout / integrated editor. This includes some breaking changes in `fachwerk()` config:

`config.editor` is now `config.edit`

`config.menu` accepts values `none | hide | show`

`config.pager`, `config.header` and `config.footer` are no longer supported.

#### New features

- New `<f-triangle>` component.

- New `<f-polargrid>` component and `<f-scene polargrid>` option.

- `| backgroundposition: 50% 50%` option in slides to position background images.

- `--mobile-cols`, `--mobile-rows` and `--mobile-gap` options on `<div class="grid">`

- New `--area: a b'` option on `<div class="grid">` (children have to have `<div style="grid-area='a'">` and `<div style="grid-area='b'">` set).

- `<f-footer>` has now minimal styling and no padding by default.

#### Bug fixes

- `FSidbar` and other components work in full width on mobile

### 0.0.8 / Mon 15 Jul 2018

#### New features

- New `<f-toggle>` component

- `<f-scene>`, `<f-scene3>`, `<f-artboard>` and `<f-canvas>` now have `download` prop that allows download the scene as SVG or PNG

- `<f-scene>`, `<f-scene3>` and `<f-artboard>` have `responsive` tag to scale the scene to the container width

- `<f-scene3>` can have `static` drop that improves the performance when you do not need live editing or animations

- New pattern component `<f-grid-pattern3>`

- `<f-math>` now has `inline` prop for inline math and various color props for math coloring

- Slides can now have `style:` setting where you can set the CSS styles

- Slides `background:` setting can now be either a CSS variable color or an image

- New utility functions: `object2array()`, `camelcase()`

- `<f-scene3>` scenes now support retina screens

### 0.0.7 / Mon 10 Jun 2018

- Adding `<f-piano>` onscreen keyboard component

- Adding `chords()` and `chord()` music utility functions

- Adding `intersection()` array utility function

- Adding `colors()` function to return list of framework color names

- In `<f-fetch>`, `src` prop can be an array and load multiple files

#### Depreciations

- `url` prop is replaced with `scr` prop in `<f-fetch>`

### 0.0.6 / Mon 3 Jun 2018

#### New features

- Orthogonal / isometric rendering for 3d scenes. Can be set with `<f-scene3 isometric>` prop.

- `f-extrude3` component to create extruded geometry from 2D polyline.

- Experimental audio and MIDI components `f-synth`, `f-sequencer`, `f-drum`, `f-midi-info`, `f-midi-in`, `f-midi-out` and beginnings of music making tutorial.

#### Improvements

- Code editor now wraps long URLs in code and there is a `--content-editor-min-width` CSS variable to control minimum width.

- Ordered lists are now styled with bullets.

- `f-mirror-x` and `f-mirror-y` now accept `step` prop to control distance between original and mirrored element.

#### Depreciations

- `<f-scene3 renderer="webgl" />` prop has been replaced with `<f-scene3 webgl />`

### 0.0.5 / Mon 6 May 2018

#### Improvements

- Experimental `f-websocket` component, allowing bidirectional realtime communication

- Adding transparent color, accessible via `color('transparent')` function and `var(--transparent)` CSS variable

- Slides have now `| rows:` and `| cols:` parameters, allowing setting CSS grid rows and cols.

- Slide layouts are now responsive (ongoing work)

- `f-video` Youtube URL accepts `?start=` parameter for playing from specified timestamp

- Icon colors are set by `--icon-stroke` and `--icon-fill` CSS variables

#### Docs

- New docs structure, pages are consolidated by topic

- New introduction docs for layout, navigation and interaction

### 0.0.4 / Mon 29 April 2018

#### Improvements

- In scenario slides editor is hidden by default. You can control it in `index.js` by setting

  fachwerk({ editor: 'hide'})
  fachwerk({ editor: 'show'})
  fachwerk({ editor: 'none'})

- `<f-notes>` accepts `title` attribute and defaults to "Teacher notes"

- Initial improvements to the docs menu structure

- New icons for internal use: `<f-people>`, `<f-clock>`, `<f-tools>` (last one is placeholder for now)

### 0.0.3 / Mon 22 April 2018

#### Improvements

- New `polarxy(angle, radius)` function, returns [x,y] coordinates, works nicely with `:position` prop on geometry components

- Added `send('edit')` event that toggles edit mode for `<f-content-editor />`

### 0.0.2 / Mon 15 April 2018

#### Improvements

- New top navigaton for menu, editor, notes and paging buttons. This work is ongoing

- Slides can be navigated with right / left buttons. alt + right / alt + left should be used when on-page editor is open

- New content icons: `<f-activity-icon />`, `<f-fact-icon />`, `<f-note-icon />` and `<f-vr-icon />`

- New navigation icons (mostly used internally): `<f-menu-icon />`, `<f-rightarrow-icon />`, `<f-leftarrow-icon />`, `<f-close-icon />`

- New math functions: `distance()` to calculate distance between two points and `linepoint()` to calculate single point coordinates on the line

- Added `goto(id)` utility function. Use it everywhere you used `send('goto', id)`

- Global CSS variable `--transition-duration` for setting CSS transition speeds

- `<f-animation>` now supports `delay` parameter

- Fading transitions on slides and sidebar / notes / menu appearances

- Currently active slide will be remembered on page reload

#### Experimental functionality

- Initial work for having sections (subgroup of slides) in content. Documentation will be added on upcoming releases

- Experimental `<f-section-card>` component for setting up menus. Documentation will be added on upcoming releases

- `<f-inline>` component accepts `--inline-gap` `--inline-justify` and `--inline-align` CSS parameters. This is experimental: this functionality might later migrated to more generic `f-flex` component

- Experimental work on printing slides support

#### Depreciations

- To display the label for the slider, one always has to set `<f-slider title="Some title">`. Previously when using `set` attribute, the variable name was added automatically, this is no longer the case

#### Docs

- Dedicated icons section

### 0.0.1 / Mon 8 April 2018

#### Improvements

- New component `<f-menu>` for slide navigation, accepts a md file (`./menu.md` is default) or inline content. It is enabled by default, use `fachwerk({ menu: false })` to disable in your scenario `index.js` file. This is the groundwork for upcoming navigation system

- Slide options are simplified: `| padding`, `| gap` and `| height` accept regular CSS values and have sensible defaults

- `<f-drag>` now works properly and allows getting the dragged points using both local and global variables

- `<f-buffer>` is fixed and working properly

#### Depreciations

- **_Depreciated_**: `<f-fetch>` now accepts `src` prop for source file path.
  `url` prop is still supported but will be removed in next version

- **_Depreciated_**: `<f-grid-pattern>` `<f-brick-pattern>` `<f-hex-pattern>` now accept `rows` and `cols` props.
  `width` and `height` props are still supported but will be removed in next version

- `<f-home>` component and `home` setting on `fahcwerk()` are removed

#### Docs

- Documentation page remembers last accessed page. This is the first step for actual per-page URLs for each documentation page

- New docs page for slide options

- Improved docs for dynamic data components

- Adding release notes

### 0.0.0

Initial version

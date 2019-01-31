export default [
  {
    title: "🔮 Content guides",
    items: [
      {
        title: "Getting started",
        file: "../README.md"
      },
      {
        title: "Writing content",
        file: "./content/writing.md"
      },
      {
        title: "Images and video",
        tbd: true
      },
      {
        title: "Adding tables",
        file: "./content/tables.md"
      },
      {
        title: "Adding interaction",
        tbd: true
      },
      {
        title: "Bringing math alive",
        file: "./content/math.md"
      },
      {
        title: "Slides and navigation",
        file: "./content/slides.md"
      },
      {
        title: "Layout and grid",
        file: "./content/grid.md"
      },
      {
        title: "Using colors",
        file: "./content/colors.md"
      },
      {
        title: "Adding emojis",
        file: "./content/emoji.md"
      }
    ]
  },
  {
    title: "🔮 2D graphics guides",
    items: [
      {
        title: "Setting up 2D scene",
        tbd: true
      },
      {
        title: "Drawing spirals",
        file: "./2d/spirals.md"
      }
    ]
  },
  {
    title: "🔮 Advanced guides",
    items: [
      {
        title: "Global state",
        file: "./advanced/state.md"
      },
      {
        title: "Global events",
        file: "./advanced/events.md"
      },
      {
        title: "Testing",
        file: "./advanced/testing.md"
      }
    ]
  },
  {
    title: "📦2D graphics",
    items: [
      { component: "FScene" },
      { component: "FArtboard" },
      { component: "FGrid" },
      { component: "FAxis" },
      { component: "FPoint" },
      { component: "FLine" },
      { component: "FCircle" },
      { component: "FBox" },
      { component: "FHexagon" },
      { component: "FPolygon" },
      { component: "FRegularpolygon" },
      { component: "FGroup" },
      { component: "FText" },
      { component: "FRotation" }
    ]
  },
  {
    title: "📦2D patterns",
    items: [
      { component: "FGridPattern" },
      { component: "FBrickPattern" },
      { component: "FHexPattern" },
      { component: "FCirclePattern" },
      { component: "FSpinPattern" },
      { component: "FSlicePattern" },
      { component: "FMirrorX" },
      { component: "FMirrorY" }
    ]
  },
  {
    title: "📦3D graphics",
    items: [
      { component: "FScene3" },
      { component: "FGrid3" },
      { component: "FAxis3" },
      { component: "FPoint3" },
      { component: "FTriangle3" },
      { component: "FLine3" },
      { component: "FCircle3" },
      { component: "FBox3" },
      { component: "FPolygon3" },
      { component: "FRegularpolygon3" },
      { component: "FHedron3" },
      { component: "FPolyhedron3" },
      { component: "FLathe3" },
      { component: "FGroup3" },
      { component: "FRotation3" }
    ]
  },
  {
    title: "📦VR / A-Frame",
    items: [{ component: "FAframe" }, { component: "FAframeButton" }]
  },
  {
    title: "📦Dynamic data",
    items: [
      { component: "FAnimation" },
      { component: "FSlider" },
      { component: "FDragData" },
      { component: "FArrayData" },
      { component: "FBufferData" },
      { component: "FFetchData" },
      { component: "FSheetData" },
      { component: "FReceiveData" },
      { component: "FKeyboard" }
    ]
  },
  {
    title: "📦Content and layout",
    items: [
      { component: "FMath" },
      { component: "FSidebar" },
      { component: "FInline" },
      { component: "FCard" },
      { component: "FTable" },
      { component: "FHr" },
      { component: "FVr" },
      // { component: "FSlider" },
      { component: "FButtons" },
      { component: "FNextButton" },
      { component: "FPrevButton" },
      { component: "FTabs" },
      //{ component: "FMenu" },
      { component: "FTheme" },
      { component: "FEditor" },
      { component: "FContent" },
      { component: "FContentEditor" },
      { component: "FIconGithub" },
      { component: "FFade" },
      { component: "FBounce" }
    ]
  }
];

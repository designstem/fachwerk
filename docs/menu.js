export default [
  {
    title: "🔮Guides",
    files: true,
    items: [
      {
        title: "Getting started",
        file: "../README.md",
        preview: 0
      },
      {
        title: "Writing content",
        file: "./guides/writing.md",
        preview: 0
      },
      {
        title: "Math and graphs",
        file: "./guides/math.md",
        preview: 0
      },
      {
        title: "Drawing the spirals",
        file: "./guides/spirals2.md",
        preview: 0
      },
      {
        title: "Adding interactivity",
        file: "./guides/interactive.md",
        preview: 1
      },
      {
        title: "Using colors",
        file: "./guides/colors.md",
        preview: 0
      },
      {
        title: "Visualizing data",
        file: "./guides/dataviz.md",
        preview: 0
      },
      {
        title: "Making patterns",
        file: "./guides/patterns.md",
        preview: 0
      },
      {
        title: "Working with grid",
        file: "./guides/grid.md",
        preview: 0
      },
      {
        title: "Forms and controls",
        file: "./guides/controls.md",
        preview: 0
      },
      {
        title: "Component communication",
        file: "./guides/communication.md",
        preview: 0
      }
    ]
  },
  {
    title: "📦2D graphics",
    component: true,
    tag: "2D",
    items: [
      { component: "FScene" },
      { component: "FGrid" },
      { component: "FGroup" },
      { component: "FPoint" },
      { component: "FLine" },
      { component: "FCircle" },
      { component: "FBox" },
      { component: "FPolygon" },
      { component: "FRegularpolygon" },
      { component: "FText" },
      { component: "FArtboard" }
    ]
  },
  {
    title: "📦2D patterns",
    component: true,
    tag: "2D repeat",
    items: [
      { component: "FGridPattern" },
      { component: "FShiftPattern" },
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
    component: true,
    tag: "3D",
    items: [
      { component: "FScene3" },
      { component: "FGrid3" },
      { component: "FPoint3" },
      { component: "FGroup3" },
      { component: "FLine3" },
      { component: "FTriangle3" },
      { component: "FCircle3" },
      { component: "FBox3" },
      { component: "FPolygon3" },
      { component: "FRegularpolygon3" },
      { component: "FHedron3" },
      { component: "FPolyhedron3" }
    ]
  },
  {
    title: "📦Dynamic data",
    component: true,
    tag: "Data",
    items: [
      { component: "FAnimationData" },
      { component: "FSliderData" },
      { component: "FHslData" },
      { component: "FRgbData" },
      { component: "FRotationData " },
      { component: "FButtonsData" },
      { component: "FDragData" },
      { component: "FArrayData" },
      { component: "FBufferData" },
      { component: "FFetchData" },
      { component: "FSheetData" },
      { component: "FReceiveData" },
      { component: "FKeyboardData" }
    ]
  },
  {
    title: "📦Content writing",
    component: true,
    tag: "Content",
    items: [{ component: "FMath" }, { component: "FSidebar" }]
  },
  {
    title: "📦Layout building",
    component: true,
    tag: "Layout",
    items: [
      { component: "FInline" },
      { component: "FCard" },
      { component: "FTable" },
      { component: "FHr" },
      { component: "FVr" },
      { component: "FSlider" },
      { component: "FButtons" },
      { component: "FTabs" },
      { component: "FMenu" },
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

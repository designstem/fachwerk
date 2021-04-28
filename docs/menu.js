export default [
  {
    title: "About",
    items: [
      {
        title: "Read me first",
        file: "../README.md",
        home: true,
      },
    ],
  },
  {
    title: "🚀 Quickstart",
    items: [
      {
        title: "Start a new project",
        file: "./tutorials/quickstart/start.md",
      },
      {
        title: "Add 2d graphics",
        file: "./tutorials/quickstart/2d.md",
      },
      {
        title: "Add interaction",
        file: "./tutorials/quickstart/interaction.md",
      },
      {
        title: "Publish a project",
        file: "./tutorials/quickstart/publishing.md",
      },
    ],
  },
  {
    title: "🔮 Guides",
    items: [
      {
        title: "Formatting text",
        file: "./tutorials/formatting.md",
      },
      {
        title: "Make art with code",
        file: "./tutorials/art.md",
      },
      {
        title: "Drawing with math",
        file: "./tutorials/drawing.md",
      },
      {
        title: "Advanced interaction",
        file: "./tutorials/interaction.md",
      },
      {
        title: "Page layout and grid",
        file: "./tutorials/layout.md",
      },
      {
        title: "Adding navigation",
        file: "./tutorials/navigation.md",
      },

      // Drafts

      {
        title: "events",
        file: "./tutorials/drafts/events.md",
        hidden: true,
      },
      {
        title: "Making music",
        file: "./tutorials/drafts/music.md",
        type: "slides",
        hidden: false,
      },
      {
        title: "colors",
        file: "./tutorials/drafts/colors.md",
        hidden: true,
      },
      {
        title: "math",
        file: "./tutorials/drafts/math.md",
        hidden: true,
      },
      {
        title: "emoji",
        file: "./tutorials/drafts/emoji.md",
        hidden: true,
      },
      {
        title: "2dimport",
        file: "./tutorials/drafts/2dimport.md",
        hidden: true,
      },
      {
        title: "controls",
        file: "./tutorials/drafts/controls.md",
        hidden: true,
      },
    ],
  },
  {
    title: "📦 Rich content",
    items: [
      { component: "FImage" },
      { component: "FVideo" },
      { component: "FTable" },
      { component: "FSidebar" },
      { component: "FNotes" },
      { component: "FEmbed" },
      { component: "FCard" },
      // { component: "FIconHeading" },
      // { component: "FPager" },
      // { component: "FMenu" },
      // { component: "FSectionCard" },
      // { component: "FInline" },
      // { component: "FHr" },
      // { component: "FVr" },
      // { component: "FColors" },
    ],
  },
  {
    title: "📦 Navigation",
    items: [
      { component: "FLink" },
      { component: "FNextButton" },
      { component: "FPrevButton" },
    ],
  },
  {
    title: "📦 2D graphics",
    items: [
      { component: "FScene" },
      { component: "FArtboard" },
      { component: "FGrid" },
      { component: "FPolargrid" },
      { component: "FAxis" },
      { component: "FPoint" },
      { component: "FLine" },
      { component: "FCircle" },
      { component: "FArc" },
      { component: "FBox" },
      { component: "FRect" },
      { component: "FTriangle" },
      { component: "FHexagon" },
      { component: "FPolygon" },
      { component: "FRegularpolygon" },
      { component: "FRoundedpolygon" },
      { component: "FGroup" },
      { component: "FText" },
      { component: "FRotation" },
    ],
  },
  {
    title: "📦 2D patterns",
    items: [
      { component: "FGridPattern" },
      { component: "FBrickPattern" },
      { component: "FHexPattern" },
      { component: "FCirclePattern" },
      { component: "FSpinPattern" },
      { component: "FSlicePattern" },
      { component: "FMirrorX" },
      { component: "FMirrorY" },
    ],
  },
  {
    title: "📦 2D canvas",
    items: [
      { component: "FCanvas" },
      { component: "FPixel" },
      { component: "FPixels" },
    ],
  },
  {
    title: "📦 3D graphics",
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
      { component: "FExtrude3" },
      { component: "FGroup3" },
      { component: "FRotation3" },
    ],
  },
  {
    title: "📦 3D patterns",
    items: [{ component: "FGridPattern3" }],
  },
  {
    title: "📦 Interaction",
    items: [
      { component: "FValue" },
      { component: "FSlider" },
      { component: "FAnimation" },
      { component: "FToggle" },
      { component: "FButtons" },
      { component: "FKeyboard" },
      { component: "FMouse" },
      { component: "FDrag" },
    ],
  },
  {
    title: "📦 Math",
    items: [{ component: "FMath" }],
  },
  {
    title: "📦 Data structures",
    items: [{ component: "FArray" }, { component: "FBuffer" }],
  },
  {
    title: "📦 Remote data",
    items: [
      { component: "FFetch" },
      { component: "FSheet" },
      { component: "FWebsocket" },
    ],
  },
  // {
  //   title: "📦 Audio and MIDI",
  //   items: [
  //     { component: "FDrum" },
  //     { component: "FDrumpad" },
  //     { component: "FSynth" },
  //     { component: "FSequencer" },
  //     { component: "FMidiInfo" },
  //     { component: "FMidiIn" },
  //     { component: "FMidiOut" },
  //     { component: "FPiano" }
  //   ]
  // },
  {
    title: "📦 VR",
    items: [{ component: "FAframe" }, { component: "FAframeButton" }],
  },
  {
    title: "Icons",
    items: [
      {
        title: "Icons audit",
        file: "./tutorials/icons.md",
      },
      // { component: "FFactIcon" },
      // { component: "FActivityIcon" },
      // { component: "FNoteIcon" },
      // { component: "FVrIcon" },
      // { component: "FLeftarrowIcon" },
      // { component: "FRightarrowIcon" },
      // { component: "FMenuIcon" },
      // { component: "FGithubIcon" },
      // { component: "FIcon" },
      // { component: "FArrowIcon" },
      // { component: "FCloseIcon" },
      // { component: "FGithubIcon" },
      // { component: "FPeopleIcon" },
      // { component: "FToolsIcon" },
      // { component: "FClockIcon" },
      // { component: "FDownloadIcon" }
    ],
  },

  // {
  //   title: "Advanced",
  //   items: [
  //     { component: "FReceive" },
  //     { component: "FHeader" },
  //     { component: "FFooter" },
  //     { component: "FTabs" },
  //     { component: "FTheme" },
  //     { component: "FEditor" },
  //     { component: "FContent" },
  //     { component: "FContentEditor" },
  //     { component: "FFade" },
  //     { component: "FBounce" },
  //     { component: "FHr" },
  //     { component: "FVr" }
  //   ]
  // },
  {
    title: "Development",
    items: [
      {
        title: "Release notes",
        file: "../RELEASES.md",
      },
      {
        title: "Testing",
        file: "./tutorials/testing.md",
      },
    ],
  },
];

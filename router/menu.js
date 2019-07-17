export default [
  {
    title: "Getting started",
    items: [
      {
        title: "Getting started",
        file: "../README.md"
      },
      {
        title: "Playground",
        file: "playground.md"
      },
    ]
  },
  {
    title: "Content",
    items: [
      {
        title: "Creating content",
        file: "./content/writing.md"
      },
      {
        title: "Adding tables",
        file: "./content/tables.md"
      },
      { component: "FTable" },
      { component: "FImage" },
      { component: "FVideo" },
      { component: "FSidebar" },
      { component: "FNotes" },
      { component: "FEmbed" },
      { component: "FIconHeading" },
      {
        title: "Using color",
        file: "./content/colors.md"
      },
      {
        title: "Adding emojis",
        file: "./content/emoji.md"
      }
    ]
  },
  {
    title: "Layout and navigation",
    items: [
      {
        title: "Setting up grid",
        file: "./content/layout.md"
      },
      {
        title: "Creating pages",
        file: "./content/navigation.md",
        type: "slides"
      },
      { component: "FNextButton" },
      { component: "FPrevButton" },
      { component: "FPager" },
      { component: "FMenu" },
      { component: "FCard" },
      { component: "FSectionCard" },
      { component: "FInline" },
      { component: "FHr" },
      { component: "FVr" }
    ]
  },
  {
    title: "2D graphics",
    items: [
      { component: "FScene" },
      { component: "FArtboard" },
      { component: "FGrid" },
      { component: "FAxis" },
      { component: "FPoint" },
      { component: "FLine" },
      { component: "FCircle" },
      { component: "FArc" },
      { component: "FBox" },
      { component: "FHexagon" },
      { component: "FPolygon" },
      { component: "FRegularpolygon" },
      { component: "FRoundedpolygon" },
      { component: "FGroup" },
      { component: "FText" },
      { component: "FRotation" },
      {
        title: "Creating 2D graphics",
        file: "./content/2d.md"
      }
    ]
  },
  {
    title: "2D patterns",
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
    title: "2D canvas",
    items: [
      { component: "FCanvas" },
      { component: "FPixel" },
      { component: "FPixels" }
    ]
  },
  {
    title: "3D graphics",
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
      { component: "FRotation3" }
    ]
  },
  {
    title: "3D patterns",
    items: [{ component: "FGridPattern3" }]
  },
  {
    title: "Interaction",
    items: [
      {
        title: "Add interaction",
        file: "./content/interaction.md"
      },
      { component: "FSlider" },
      { component: "FAnimation" },
      { component: "FToggle" },
      { component: "FButtons" },
      { component: "FKeyboard" },
      { component: "FDrag" }
    ]
  },
  {
    title: "Math",
    items: [
      { component: "FMath" },
      {
        title: "Bringing math alive",
        file: "./content/math.md"
      }
    ]
  },
  {
    title: "Data structures",
    items: [{ component: "FArray" }, { component: "FBuffer" }]
  },
  {
    title: "Remote data",
    items: [
      { component: "FFetch" },
      { component: "FSheet" },
      { component: "FWebsocket" }
    ]
  },
  {
    title: "Audio and MIDI",
    items: [
      {
        title: "Making music",
        file: "./content/music.md",
        type: "slides"
      },
      { component: "FDrum" },
      { component: "FDrumpad" },
      { component: "FSynth" },
      { component: "FSequencer" },
      { component: "FMidiInfo" },
      { component: "FMidiIn" },
      { component: "FMidiOut" },
      { component: "FPiano" }
    ]
  },
  {
    title: "Icons",
    items: [
      { component: "FFactIcon" },
      { component: "FActivityIcon" },
      { component: "FNoteIcon" },
      { component: "FVrIcon" },
      { component: "FLeftarrowIcon" },
      { component: "FRightarrowIcon" },
      { component: "FMenuIcon" },
      { component: "FGithubIcon" },
      { component: "FIcon" },
      { component: "FArrowIcon" },
      { component: "FCloseIcon" },
      { component: "FGithubIcon" },
      { component: "FPeopleIcon" },
      { component: "FToolsIcon" },
      { component: "FClockIcon" },
      { component: "FDownloadIcon" }
    ]
  },
  {
    title: "VR",
    items: [{ component: "FAframe" }, { component: "FAframeButton" }]
  },
  {
    title: "Advanced",
    items: [
      {
        title: "Global events",
        file: "./advanced/events.md"
      },
      { component: "FReceive" },
      {
        title: "Testing",
        file: "./advanced/testing.md"
      },
      { component: "FHeader" },
      { component: "FFooter" },
      { component: "FTabs" },
      { component: "FTheme" },
      { component: "FEditor" },
      { component: "FContent" },
      { component: "FContentEditor" },
      { component: "FFade" },
      { component: "FBounce" },
      { component: "FHr" },
      { component: "FVr" }
    ]
  },
  {
    title: "Development",
    items: [
      {
        title: "Release notes",
        file: "../RELEASES.md"
      }
    ]
  },
];

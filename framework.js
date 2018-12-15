// Internal 2D

import FSvg from "./components/2d/FSvg.js";
export { FSvg };

import FBasegrid from "./components/2d/FBasegrid.js";
export { FBasegrid };

// 2D

import FScene from "./components/2d/FScene.js";
export { FScene };

import FGrid from "./components/2d/FGrid.js";
export { FGrid };

import FGroup from "./components/2d/FGroup.js";
export { FGroup };

import FBox from "./components/2d/FBox.js";
export { FBox };

import FPoint from "./components/2d/FPoint.js";
export { FPoint };

import FLine from "./components/2d/FLine.js";
export { FLine };

import FCircle from "./components/2d/FCircle.js";
export { FCircle };

import FPolygon from "./components/2d/FPolygon.js";
export { FPolygon };

import FRegularpolygon from "./components/2d/FRegularpolygon.js";
export { FRegularpolygon };

import FText from "./components/2d/FText.js";
export { FText };

import FRepeatGrid from "./components/2d/FRepeatGrid.js";
export { FRepeatGrid };

import FRepeatShift from "./components/2d/FRepeatShift.js";
export { FRepeatShift };

import FRepeatHex from "./components/2d/FRepeatHex.js";
export { FRepeatHex };

// 3D

import FScene3 from "./components/3d/FScene3.js";
export { FScene3 };

import FBox3 from "./components/3d/FBox3.js";
export { FBox3 };

import FGrid3 from "./components/3d/FGrid3.js";
export { FGrid3 };

import FGroup3 from "./components/3d/FGroup3.js";
export { FGroup3 };

import FPoint3 from "./components/3d/FPoint3.js";
export { FPoint3 };

import FLine3 from "./components/3d/FLine3.js";
export { FLine3 };

import FCircle3 from "./components/3d/FCircle3.js";
export { FCircle3 };

import FTriangle3 from "./components/3d/FTriangle3.js";
export { FTriangle3 };

import FPolygon3 from "./components/3d/FPolygon3.js";
export { FPolygon3 };

import FRegularpolygon3 from "./components/3d/FRegularpolygon3.js";
export { FRegularpolygon3 };

import FHedron3 from "./components/3d/FHedron3.js";
export { FHedron3 };

import FPolyhedron3 from "./components/3d/FPolyhedron3.js";
export { FPolyhedron3 };

// Transitions

import FFade from "./components/transitions/FFade.js";
export { FFade };

import FBounce from "./components/transitions/FBounce.js";
export { FBounce };

// Data

import FDragData from "./components/experimental/FDragData.js";
export { FDragData };

import FArrayData from "./components/data/FArrayData.js";
export { FArrayData };

import FBufferData from "./components/data/FBufferData.js";
export { FBufferData };

import FAnimationData from "./components/data/FAnimationData.js";
export { FAnimationData };

import FButtonsData from "./components/data/FButtonsData.js";
export { FButtonsData };

import FRgbData from "./components/data/FRgbData.js";
export { FRgbData };

import FHslData from "./components/data/FHslData.js";
export { FHslData };

import FSliderData from "./components/data/FSliderData.js";
export { FSliderData };

import FFetchData from "./components/data/FFetchData.js";
export { FFetchData };

import FSheetData from "./components/data/FSheetData.js";
export { FSheetData };

import FRotationData from "./components/data/FRotationData.js";
export { FRotationData };

import FReceiveData from "./components/data/FReceiveData.js";
export { FReceiveData };

// Content

import FMath from "./components/content/FMath.js";
export { FMath };

import FSidebar from "./components/content/FSidebar.js";
export { FSidebar };

// Icons

import FIconGithub from "./components/layout/FIconGithub.js";
export { FIconGithub };

// Layout

import FInline from "./components/layout/FInline.js";
export { FInline };

import FCard from "./components/layout/FCard.js";
export { FCard };

import FHr from "./components/layout/FHr.js";
export { FHr };

import FVr from "./components/layout/FVr.js";
export { FVr };

import FTable from "./components/layout/FTable.js";
export { FTable };

import FButtons from "./components/layout/FButtons.js";
export { FButtons };

import FTheme from "./components/layout/FTheme.js";
export { FTheme };

import FContentDocument from "./components/layout/FContentDocument.js";
export { FContentDocument };

import FContentSlides from "./components/layout/FContentSlides.js";
export { FContentSlides };

import FTabs from "./components/layout/FTabs.js";
export { FTabs };

import FMenu from "./components/layout/FMenu.js";
export { FMenu };

import FEditor from "./components/layout/FEditor.js";
export { FEditor };

import FContentEditor from "./components/layout/FContentEditor.js";
export { FContentEditor };

import FSlider from "./components/layout/FSlider.js";
export { FSlider };

// Internal & Experimental

import Markdown from "./components/Markdown.js";
export { Markdown };

import Render from "./components/Render.js";
export { Render };

import FContentCards from "./components/experimental/FContentCards.js";
export { FContentCards };

import FAframe from "./components/experimental/FAframe.js";
export { FAframe };

import FAframeGrid from "./components/experimental/FAframeGrid.js";
export { FAframeGrid };

import FLine3vr from "./components/experimental/FLine3vr.js";
export { FLine3vr };

import FKeyboardData from "./components/experimental/FKeyboardData.js";
export { FKeyboardData };

import FArtboard from "./components/experimental/FArtboard.js";
export { FArtboard };

export const sortedComponents = [
  // 2D

  { FScene },
  { FGrid },
  { FGroup },
  { FPoint },
  { FLine },
  { FCircle },
  { FBox },
  { FPolygon },
  { FRegularpolygon },
  { FText },
  { FRepeatGrid },
  { FRepeatShift },
  { FRepeatHex },

  // 3D

  { FScene3 },
  { FGrid3 },
  { FPoint3 },
  { FGroup3 },
  { FLine3 },
  { FTriangle3 },
  { FCircle3 },
  { FBox3 },
  { FPolygon3 },
  { FRegularpolygon3 },
  { FHedron3 },
  { FPolyhedron3 },

  // Content
  { FMath },
  { FSidebar },

  // Data
  
  { FDragData },
  { FAnimationData },
  { FSliderData },
  { FHslData },
  { FRgbData },
  { FRotationData },
  { FArrayData },
  { FBufferData },
  { FButtonsData },
  { FFetchData },
  { FSheetData },
  { FReceiveData },

  // Transitions

  { FFade },
  { FBounce },

  // Experimental
  { FKeyboardData },
  { FArtboard },

  // Layout
  { FInline },
  { FCard },
  { FTable },
  { FHr },
  { FVr },
  { FSlider },
  { FButtons },
  { FTabs },
  { FMenu },
  { FTheme },
  { FEditor },
  { FContentDocument },
  { FContentSlides },
  { FContentEditor },
  { FIconGithub },
];

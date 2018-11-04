import FScene from "./components/2d/FScene.js";
export { FScene };

import FGrid from "./components/2d/FGrid.js";
export { FGrid };

import FGroup from "./components/2d/FGroup.js";
export { FGroup };

import FBox from "./components/2d/FBox.js";
export { FBox };

import FLine from "./components/2d/FLine.js";
export { FLine };

import FCircle from "./components/2d/FCircle.js";
export { FCircle };

import FPolygon from "./components/2d/FPolygon.js";
export { FPolygon };

import FRegularpolygon from "./components/2d/FRegularpolygon.js";
export { FRegularpolygon };

// 3d

import FScene3 from "./components/3d/FScene3.js";
export { FScene3 }

import FBox3 from "./components/3d/FBox3.js";
export { FBox3 }

import FGrid3 from "./components/3d/FGrid3.js";
export { FGrid3 }

// Transitions

import FFade from "./components/transitions/FFade.js";
export { FFade };

import FBounce from "./components/transitions/FBounce.js";
export { FBounce };

// Data

import FArrayData from "./components/data/FArrayData.js";
export { FArrayData };

import FAnimationData from "./components/data/FAnimationData.js";
export { FAnimationData };

import FButtonsData from "./components/data/FButtonsData.js";
export { FButtonsData };

import FRgbData from "./components/data/FRgbData.js";
export { FRgbData };

import FHslData from "./components/data/FHslData.js";
export { FHslData };

import FSliderData from "./components/data/FSliderData.js";
export { FSliderData }

import FFetchData from "./components/data/FFetchData.js";
export { FFetchData };

import FSheetData from "./components/data/FSheetData.js";
export { FSheetData }

import FRotationData from "./components/data/FRotationData.js";
export { FRotationData };

// Content

import FButtons from "./components/content/FButtons.js";
export { FButtons };

import FMath from "./components/content/FMath.js";
export { FMath }

// Experimental

import FSceneData from "./components/experimental/FSceneData.js";
export { FSceneData };

import FDragData from "./components/experimental/FDragData.js";
export { FDragData };

import ContentCards from "./components/ContentCards.js";
import ContentDocument from "./components/ContentDocument.js";
import ContentSlides from "./components/ContentSlides.js";
import Editor from "./components/Editor.js";
import Markdown from "./components/Markdown.js";
import Render from "./components/Render.js";
import Sidebar from "./components/Sidebar.js";
import Tabs from "./components/Tabs.js";
import ThreeCircle from "./components/ThreeCircle.js";
import ThreeGrid from "./components/3d/FGrid3.js";
import ThreeGroup from "./components/ThreeGroup.js";
import ThreeLight from "./components/ThreeLight.js";
import ThreeLine from "./components/ThreeLine.js";
import ThreePolygon from "./components/ThreePolygon.js";
import ThreePolyhedron from "./components/ThreePolyhedron.js";
import ThreeRegularPolygon from "./components/ThreeRegularPolygon.js";

import ThreeTriangle from "./components/ThreeTriangle.js";
import Transport from "./components/depreciated/Transport.js";
import VrBox from "./components/experimental/VrBox.js";
import VrGrid from "./components/experimental/VrGrid.js";
import VrLine from "./components/experimental/VrLine.js";
import VrScene from "./components/experimental/VrScene.js";
import Theme from "./components/Theme.js";

export {
  ContentCards,
  ContentDocument,
  ContentSlides,
  Editor,
  Markdown,
  Render,
  Sidebar,
  Tabs,
  ThreeCircle,
  ThreeGroup,
  ThreeLight,
  ThreeLine,
  ThreePolygon,
  ThreePolyhedron,
  ThreeRegularPolygon,
  ThreeTriangle,
  Transport,
  VrBox,
  VrGrid,
  VrLine,
  VrScene,
  Theme,
};

export const sortedComponents = [
  // 2D
  { FScene },
  { FGrid },
  { FGroup },
  { FBox },
  { FLine },
  { FCircle },
  { FPolygon },
  { FRegularpolygon },

  { FScene3 },
  { FBox3 },
  { FGrid3 },

  // Data
  { FAnimationData },
  { FArrayData },
  { FButtonsData },

  { FSliderData },
  { FHslData },
  { FRgbData },

  { FRotationData },

  { FFetchData },
  { FSheetData },

  // Transitions
  { FFade },
  { FBounce },

  // Content
  { FButtons },
  { FMath }

  // Experimental
  // { FSceneData },
  // { FDragData },

  // { ThreeScene },
  // { ThreeGroup },
  // { ThreeGrid },
  // { ThreeTriangle },
  // { ThreeLine },
  // { ThreeCircle },
  // { ThreeBox },
  // { ThreePolygon },
  // { ThreePolyhedron },
  // { ThreeRegularPolygon },
  // { ThreeLight },

  // { RotationData },

  // { Transport },

  // { Theme },

  // // Hidden

  // { VrScene },
  // { VrBox },
  // { VrLine },
  // { VrGrid },

  // { Tabs },

];

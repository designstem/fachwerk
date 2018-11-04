import AnimeData from "./components/data/FAnimationData.js";
import ArrayData from "./components/ArrayData.js";
import Buttons from "./components/Buttons.js";
import ContentCards from "./components/ContentCards.js";
import ContentDocument from "./components/ContentDocument.js";
import ContentSlides from "./components/ContentSlides.js";
import Editor from "./components/Editor.js";
import FetchData from "./components/FetchData.js";
import Markdown from "./components/Markdown.js";
import Math from "./components/Math.js";
import PolygonData from "./components/PolygonData.js";
import PolyhedronData from "./components/PolyhedronData.js";
import Render from "./components/Render.js";
import SheetData from "./components/SheetData.js";
import Sidebar from "./components/Sidebar.js";
import SliderData from "./components/SliderData.js";
import Tabs from "./components/Tabs.js";
import ThreeBox from "./components/ThreeBox.js";
import ThreeCircle from "./components/ThreeCircle.js";
import ThreeGrid from "./components/ThreeGrid.js";
import ThreeGroup from "./components/ThreeGroup.js";
import ThreeLight from "./components/ThreeLight.js";
import ThreeLine from "./components/ThreeLine.js";
import ThreePolygon from "./components/ThreePolygon.js";
import ThreePolyhedron from "./components/ThreePolyhedron.js";
import ThreeRegularPolygon from "./components/ThreeRegularPolygon.js";
import ThreeScene from "./components/ThreeScene.js";
import ThreeTriangle from "./components/ThreeTriangle.js";
import Transport from "./components/Transport.js";

import FScene from "./components/2d/FScene.js";
import FGrid from "./components/2d/FGrid.js";
import FGroup from "./components/2d/FGroup.js";
import FBox from "./components/2d/FBox.js";
import FLine from "./components/2d/FLine.js";
import FCircle from "./components/2d/FCircle.js";
import FPolygon from "./components/2d/FPolygon.js";
import FRegularpolygon from "./components/2d/FRegularpolygon.js";

import FSceneData from "./components/experimental/FSceneData.js"
import FDragData from "./components/experimental/FDragData.js"

import FAnimationData from "./components/data/FAnimationData.js";

import VrBox from "./components/experimental/VrBox.js";
import VrGrid from "./components/experimental/VrGrid.js";
import VrLine from "./components/experimental/VrLine.js";
import VrScene from "./components/experimental/VrScene.js";
import Fade from "./components/Fade.js";
import Bounce from "./components/Bounce.js";
import ButtonsData from "./components/ButtonsData.js";
import Theme from "./components/Theme.js";
import RotationData from "./components/RotationData.js";
import RgbData from "./components/RgbData.js";
import HslData from "./components/HslData.js";

export {
  ArrayData,
  Buttons,
  ContentCards,
  ContentDocument,
  ContentSlides,
  Editor,
  FetchData,
  Markdown,
  Math,
  PolygonData,
  PolyhedronData,
  Render,
  SheetData,
  Sidebar,
  SliderData,
  Tabs,
  ThreeBox,
  ThreeCircle,
  ThreeGrid,
  ThreeGroup,
  ThreeLight,
  ThreeLine,
  ThreePolygon,
  ThreePolyhedron,
  ThreeRegularPolygon,
  ThreeScene,
  ThreeTriangle,
  Transport,

  FScene,
  FGrid,
  FGroup,
  FBox,
  FLine,
  FCircle,
  FPolygon,
  FRegularpolygon,

  FSceneData,
  FDragData,

  //FAnimationData,

  VrBox,
  VrGrid,
  VrLine,
  VrScene,
  Fade,
  Bounce,
  ButtonsData,
  Theme,
  RotationData,
  RgbData,
  HslData
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

  // Data

  { FSceneData },
  { FDragData },

  // { FAnimationData },
  
  // { TwoSceneScope },
  // { TwoDragScope },

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

  // { AnimeData },
  // { SliderData },
  // { RotationData },
  // { RgbData },
  // { HslData },

  // { ButtonsData },
  // { FetchData },
  // { SheetData },
  
  // { PolyhedronData },

  // { Math },
  // { Transport },
  // { Buttons },

  // { Fade },
  // { Bounce },

  // { Theme },

  // // Hidden

  // { VrScene },
  // { VrBox },
  // { VrLine },
  // { VrGrid },

  // { Tabs },

  // { PolygonData },

  // { ArrayData },

]
import { positionTransform, rotationTransform, scaleTransform, makeNumber, parseCoords, normalizeDefault, normalizeScale, coordsObjectToArray } from "./utils.js";

export const position_transform_string_0 = () => {
  const source = positionTransform('0');
  const target = 'translate(0 0)';
  return [source, target];
};

export const position_transform_string_1 = () => {
  const source = positionTransform('1');
  const target = 'translate(1 0)';
  return [source, target];
};

export const position_transform_string_1_2_3 = () => {
  const source = positionTransform('1 2 3');
  const target = 'translate(1 2)';
  return [source, target];
};

export const position_transform_number_0 = () => {
  const source = positionTransform(0);
  const target = 'translate(0 0)';
  return [source, target];
};

export const position_transform_number_1 = () => {
  const source = positionTransform(1);
  const target = 'translate(1 0)';
  return [source, target];
};

// translate(1 0)
// export const position_transform_array_1_2_3 = () => {
//   const source = positionTransform([1,2,3]);
//   const target = 'translate(1 2)';
//   return [source, target];
// };

export const position_transform_object_x_1 = () => {
  const source = positionTransform({x: 1});
  const target = 'translate(1 0)';
  return [source, target];
};

// translate(0 0)
// export const position_transform_object_y_1 = () => {
//   const source = positionTransform({y: 1});
//   const target = 'translate(0 1)';
//   return [source, target];
// };

// translate(0 0)
export const position_transform_object_z_1 = () => {
  const source = positionTransform({z: 1});
  const target = 'translate(0 0)';
  return [source, target];
};

export const position_transform_object_x_y_z_a_1_2_3_3 = () => {
  const source = positionTransform({x: 1, y: 2, z: 3, a: 4});
  const target = 'translate(1 2)';
  return [source, target];
};

// "translate(1 0)"
// export const position_transform_array_1_2_3 = () => {
//   const source = positionTransform([1,2,3]);
//   const target = 'translate(1 2)';
//   return [source, target];
// };

// export const position_transform_array_1_1_1 = () => {
//   const source = positionTransform([1,1,1]);
//   const target = 'translate(1 1)';
//   return [source, target];
// };

export const rotation_transform_string_1 = () => {
  const source = rotationTransform('1');
  const target = 'rotate(1deg)';
  return [source, target];
};

export const rotation_transform_string_1_1_1 = () => {
  const source = rotationTransform('1 1 1');
  const target = 'rotate(1deg)';
  return [source, target];
};

export const rotation_transform_number_0 = () => {
  const source = rotationTransform(0);
  const target = 'rotate(0deg)';
  return [source, target];
};

export const rotation_transform_number_1 = () => {
  const source = rotationTransform(1);
  const target = 'rotate(1deg)';
  return [source, target];
};

export const rotation_transform_array_1 = () => {
  const source = rotationTransform([1]);
  const target = 'rotate(1deg)';
  return [source, target];
};

export const rotation_transform_array_1_2 = () => {
  const source = rotationTransform([1,2]);
  const target = 'rotate(1deg)';
  return [source, target];
};

export const rotation_transform_object_x_1 = () => {
  const source = rotationTransform({x: 1});
  const target = 'rotate(1deg)';
  return [source, target];
};

// "rotate(0deg)"
// export const rotation_transform_object_y_1 = () => {
//   const source = rotationTransform({y: 1});
//   const target = 'rotate(1deg)';
//   return [source, target];
// };

// rotate(0deg)
// export const rotation_transform_object_z_1 = () => {
//   const source = rotationTransform({z: 1});
//   const target = 'rotate(1deg)';
//   return [source, target];
// };

export const scale_transform_string_1 = () => {
  const source = scaleTransform('1');
  const target = 'scale(1 1)';
  return [source, target];
};

export const scale_transform_string_2 = () => {
  const source = scaleTransform('2');
  const target = 'scale(2 2)';
  return [source, target];
};

export const scale_transform_array_2 = () => {
  const source = scaleTransform([2]);
  const target = 'scale(2 2)';
  return [source, target];
};

//scale(1 1)
// export const scale_transform_array_1_2_3 = () => {
//   const source = scaleTransform([1,2,3]);
//   const target = 'scale(1 2)';
//   return [source, target];
// };

export const scale_transform_object_x_2 = () => {
  const source = scaleTransform({x: 2});
  const target = 'scale(2 2)';
  return [source, target];
};

// scale(0 0)
// export const scale_transform_object_y_2 = () => {
//   const source = scaleTransform({y: 2});
//   const target = 'scale(2 2)';
//   return [source, target];
// };

//scale(0 0)
// export const scale_transform_object_z_2 = () => {
//   const source = scaleTransform({z: 2});
//   const target = 'scale(1 1)';
//   return [source, target];
// };


// Normalization

export const normalize_0 = () => {
  const source = normalizeDefault([0]);
  const target = [0,0,0];
  return [source, target];
};

export const normalize_1 = () => {
  const source = normalizeDefault([1]);
  const target = [1,0,0];
  return [source, target];
};

export const normalize_1_1 = () => {
  const source = normalizeDefault([1,1]);
  const target = [1,1,0];
  return [source, target];
};

export const normalize_1_1_1 = () => {
  const source = normalizeDefault([1,1,1]);
  const target = [1,1,1];
  return [source, target];
};

export const normalize_1_1_1_1 = () => {
  const source = normalizeDefault([1,1,1,1]);
  const target = [1,1,1];
  return [source, target];
};

// normalizeScale

export const normalize_scale_0 = () => {
  const source = normalizeScale([0]);
  const target = [0,0,0];
  return [source, target];
};

export const normalize_scale_1 = () => {
  const source = normalizeScale([1]);
  const target = [1,1,1];
  return [source, target];
};

export const normalize_scale_2 = () => {
  const source = normalizeScale([2]);
  const target = [2,2,2];
  return [source, target];
};

export const normalize_scale_1_1 = () => {
  const source = normalizeScale([1,1]);
  const target = [1,1,0];
  return [source, target];
};

export const normalize_scale_1_1_1 = () => {
  const source = normalizeScale([1,1,1]);
  const target = [1,1,1];
  return [source, target];
};

export const normalize_scale_1_1_1_1 = () => {
  const source = normalizeScale([1,1,1,1]);
  const target = [1,1,1];
  return [source, target];
};

// coordsObjectToArray

export const object_empty_to_array = () => {
  const source = coordsObjectToArray({});
  const target = [[0,0,0]];
  return [source, target];
};

export const object_other_to_array = () => {
  const source = coordsObjectToArray({a: 1});
  const target = [[0,0,0]];
  return [source, target];
};

export const object_1_to_array = () => {
  const source = coordsObjectToArray({x: 1});
  const target = [[1,0,0]];
  return [source, target];
};

export const object_1_1_to_array = () => {
  const source = coordsObjectToArray({x: 1, y: 1});
  const target = [[1,1,0]];
  return [source, target];
};

export const object_1_1_1_to_array = () => {
  const source = coordsObjectToArray({x: 1, y: 1, z: 1});
  const target = [[1,1,1]];
  return [source, target];
};

// makeNumber

export const numeric_string_to_number = () => {
  const source = makeNumber("0");
  const target = 0;
  return [source, target];
};

export const nonnumeric_string_to_number = () => {
  const source = makeNumber("a");
  const target = 0;
  return [source, target];
};

export const empty_string_to_number = () => {
  const source = makeNumber("");
  const target = 0;
  return [source, target];
};

export const zero_to_number = () => {
  const source = makeNumber(0);
  const target = 0;
  return [source, target];
};

export const integer_to_number = () => {
  const source = makeNumber(1);
  const target = 1;
  return [source, target];
};

export const float_to_number = () => {
  const source = makeNumber(0.1);
  const target = 0.1;
  return [source, target];
};

export const gibberish_to_number = () => {
  const source = makeNumber("*");
  const target = 0;
  return [source, target];
};

// Empty

export const empty_string_to_coordinates = () => {
  const source = parseCoords("");
  const target = [[0, 0, 0]];
  return [source, target];
};

// export const empty_string_to_scale_coordinates = () => {
//   const source = parseCoords("", normalizeScale);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

export const empty_space_to_coordinates = () => {
  const source = parseCoords("       ");
  const target = [[0, 0, 0]];
  return [source, target];
};

export const empty_array_to_coordinates = () => {
  const source = parseCoords([]);
  const target = [[0, 0, 0]];
  return [source, target];
};

export const empty_array_array_to_coordinates = () => {
  const source = parseCoords([[]]);
  const target = [[0, 0, 0]];
  return [source, target];
};

export const empty_array_2_array_to_coordinates = () => {
  const source = parseCoords([[], []]);
  const target = [[0, 0, 0], [0, 0, 0]];
  return [source, target];
};

export const empty_array_number_0_to_coordinates = () => {
  const source = parseCoords([0]);
  const target = [[0, 0, 0]];
  return [source, target];
};

// [[0,0,0],[0,0,0]]
// export const empty_array_number_0_empty_array_to_coordinates = () => {
//   const source = parseCoords([0,[]]);
//   const target = [[0, 0, 0],[0, 0, 0]];
//   return [source, target];
// };

export const array_number_0_0_to_coordinates = () => {
  const source = parseCoords([0, 0]);
  const target = [[0, 0, 0], [0, 0, 0]];
  return [source, target];
};

export const array_number_0_string_0_to_coordinates = () => {
  const source = parseCoords([0, "0"]);
  const target = [[0, 0, 0], [0, 0, 0]];
  return [source, target];
};

export const object_empty_to_coordinates = () => {
  const source = parseCoords({});
  const target = [[0, 0, 0]];
  return [source, target];
};

export const array_object_empty_to_coordinates = () => {
  const source = parseCoords([{}]);
  const target = [[0, 0, 0]];
  return [source, target];
};

export const array_object_object_empty_to_coordinates = () => {
  const source = parseCoords([{}, {}]);
  const target = [[0, 0, 0], [0, 0, 0]];
  return [source, target];
};

export const everything_empty_to_coordinates = () => {
  const source = parseCoords(["0", 0, [], {}]);
  const target = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
  return [source, target];
};


// Strings

export const string_empty_to_coordinates = () => {
  const source = parseCoords(" ");
  const target = [[0, 0, 0]];
  return [source, target];
};

// export const string_empty_to_scale_coordinates = () => {
//   const source = parseCoords(" ", normalizeScale);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

export const string_0_to_coordinates = () => {
  const source = parseCoords("0");
  const target = [[0, 0, 0]];
  return [source, target];
};

// export const string_0_to_scale_coordinates = () => {
//   const source = parseCoords("0", normalizeScale);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

export const string_1_to_coordinates = () => {
  const source = parseCoords("1");
  const target = [[1, 0, 0]];
  return [source, target];
};

export const string_1_1_to_coordinates = () => {
  const source = parseCoords("1 1");
  const target = [[1, 1, 0]];
  return [source, target];
};

export const string_1_1_a_spaced_to_coordinates = () => {
  const source = parseCoords("1  1        a");
  const target = [[1, 1, 0]];
  return [source, target];
};

export const string_1_1_a_1_spaced_to_coordinates = () => {
  const source = parseCoords("1  1        a 1");
  const target = [[1, 1, 0]];
  return [source, target];
};

export const string_1_and_1_to_coordinates = () => {
  const source = parseCoords("1,1");
  const target = [[1, 0, 0], [1, 0, 0]];
  return [source, target];
};


// [[0,0,0],[0,0,0]]
// export const string_1_and_1_in_array_to_coordinates = () => {
//   const source = parseCoords("['1','1']");
//   const target = [[1, 0, 0],[1, 0, 0]];
//   return [source, target];
// };

//  [[0,1,0],[0,1,0]]
// export const string_1_1_and_1_1_in_array_to_coordinates = () => {
//   const source = parseCoords("['1 1','1 1']");
//   const target = [[1, 1, 0],[1, 1, 0]];
//   return [source, target];
// };


export const string_1_and_1_spaced_to_coordinates = () => {
  const source = parseCoords("1 ,   1");
  const target = [[1, 0, 0], [1, 0, 0]];
  return [source, target];
};

export const string_1_1_and_1_1_to_coordinates = () => {
  const source = parseCoords("1 1, 1 1");
  const target = [[1, 1, 0], [1, 1, 0]];
  return [source, target];
};

export const string_1_1_1_to_coordinates = () => {
  const source = parseCoords("1 1 1");
  const target = [[1, 1, 1]];
  return [source, target];
};

export const string_1_1_1_1_to_coordinates = () => {
  const source = parseCoords("1 1 1 1");
  const target = [[1, 1, 1]];
  return [source, target];
};

export const string_1_1_1_and_1_1_1_to_coordinates = () => {
  const source = parseCoords("1 1 1, 1 1 1");
  const target = [[1, 1, 1], [1, 1, 1]];
  return [source, target];
};

export const string_1_1_1_1_and_1_1_1_1_to_coordinates = () => {
  const source = parseCoords("1 1 1 1, 1 1 1 1");
  const target = [[1, 1, 1], [1, 1, 1]];
  return [source, target];
};

// Numbers

export const number_0_to_coordinates = () => {
  const source = parseCoords(0);
  const target = [[0, 0, 0]];
  return [source, target];
};

export const number_1_to_coordinates = () => {
  const source = parseCoords(1);
  const target = [[1, 0, 0]];
  return [source, target];
};

export const number_2_to_coordinates = () => {
  const source = parseCoords(2);
  const target = [[2, 0, 0]];
  return [source, target];
};

export const number_1_to_scale_coordinates = () => {
  const source = parseCoords(1, normalizeScale);
  const target = [[1, 1, 1]];
  return [source, target];
};

export const number_2_to_scale_coordinates = () => {
  const source = parseCoords(2, normalizeScale);
  const target = [[2, 2, 2]];
  return [source, target];
};

export const number_01_to_coordinates = () => {
  const source = parseCoords(0.1);
  const target = [[0.1, 0, 0]];
  return [source, target];
};

export const number_1_in_array_to_coordinates = () => {
  const source = parseCoords([1]);
  const target = [[1, 0, 0]];
  return [source, target];
};

export const number_1_in_array_array_to_coordinates = () => {
  const source = parseCoords([[1]]);
  const target = [[1, 0, 0]];
  return [source, target];
};

// [[1,0,0],[1,0,0]]
// export const number_1_1_in_array_to_coordinates = () => {
//   const source = parseCoords([1,1]);
//   const target = [[1, 1, 0]];
//   return [source, target];
// };

export const number_1_1_in_array_array_to_coordinates = () => {
  const source = parseCoords([[1, 1]]);
  const target = [[1, 1, 0]];
  return [source, target];
};

// array_number_1_1_1_in_array_to_coordinates
// export const array_number_1_1_1_in_array_to_coordinates = () => {
//   const source = parseCoords([1,1,1]);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

export const number_1_1_1_in_array_array_to_coordinates = () => {
  const source = parseCoords([[1, 1, 1]]);
  const target = [[1, 1, 1]];
  return [source, target];
};

export const number_1_1_1_1_in_array_array_to_coordinates = () => {
  const source = parseCoords([[1, 1, 1, 1]]);
  const target = [[1, 1, 1]];
  return [source, target];
};

// [[1,0,0],[1,0,0],[1,0,0]]

// export const array_number_1_1_1_to_coordinates = () => {
//   const source = parseCoords([1,1,1]);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

// [[1,0,0],[1,0,0],[1,0,0],[1,0,0]]

// export const array_number_1_1_1_1_to_coordinates = () => {
//   const source = parseCoords([1,1,1,1]);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };


// Objects

export const object_0_to_coordinates = () => {
  const source = parseCoords({ x: 0 });
  const target = [[0, 0, 0]];
  return [source, target];
};

export const object_string_1_to_coordinates = () => {
  const source = parseCoords({ x: "1" });
  const target = [[1, 0, 0]];
  return [source, target];
};

export const object_number_1_to_coordinates = () => {
  const source = parseCoords({ x: "1" });
  const target = [[1, 0, 0]];
  return [source, target];
};

export const object_number_1_1_to_coordinates = () => {
  const source = parseCoords({ x: 1, y: 1 });
  const target = [[1, 1, 0]];
  return [source, target];
};

export const object_number_1_1_1_to_coordinates = () => {
  const source = parseCoords({ x: 1, y: 1, z: 1 });
  const target = [[1, 1, 1]];
  return [source, target];
};

export const object_number_1_1_1_gibberish_to_coordinates = () => {
  const source = parseCoords({ x: 1, y: 1, z: 1, a: 1 });
  const target = [[1, 1, 1]];
  return [source, target];
};

export const object_number_01_to_coordinates = () => {
  const source = parseCoords({ x: "0.1" });
  const target = [[0.1, 0, 0]];
  return [source, target];
};

export const object_number_1_in_array_to_coordinates = () => {
  const source = parseCoords([{ x: 1 }]);
  const target = [[1, 0, 0]];
  return [source, target];
};

// [[1,0,0],[1,0,0]]
// export const object_number_1_1_in_array_to_coordinates = () => {
//   const source = parseCoords([{ x: 1 }, { x: 1 }]);
//   const target = [[1, 0, 0], [1, 0, 0]];
//   return [source, target];
// };

export const object_number_1_1_1_in_array_to_coordinates = () => {
  const source = parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }]);
  const target = [[1, 0, 0], [1, 0, 0], [1, 0, 0]];
  return [source, target];
};

export const object_number_1_1_1_1_in_array_to_coordinates = () => {
  const source = parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }]);
  const target = [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0]];
  return [source, target];
};

export const object_everything_in_array_to_coordinates = () => {
  const source = parseCoords([
    { x: 1, y: "1", z: false },
    { x: 1, y: 1, z: null, a: 1 }
  ]);
  const target = [[1, 1, 0], [1, 1, 0]];
  return [source, target];
};

// export const array_number_1_1_1_in_array_to_coordinates = () => {
//   const source = parseCoords([1,1,1]);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

export const array_number_1_1_1_in_array_array_to_coordinates = () => {
  const source = parseCoords([[1,1,1]]);
  const target = [[1, 1, 1]];
  return [source, target];
};

//[[1,0,0],[1,0,0],[1,0,0]]

// export const array_number_1_1_1_to_coordinates = () => {
//   const source = parseCoords([1,1,1]);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

//[[1,0,0],[1,0,0],[1,0,0],[1,0,0]]

// export const array_number_1_1_1_1_to_coordinates = () => {
//   const source = parseCoords([1,1,1,1]);
//   const target = [[1, 1, 1]];
//   return [source, target];
// };

// Mixed

export const array_array_number_string_1_1_to_coordinates = () => {
  const source = parseCoords([[1, "1"]]);
  const target = [[1, 1, 0]];
  return [source, target];
};

export const array_1_sting_1_to_coordinates = () => {
  const source = parseCoords([[1], "1"]);
  const target = [[1, 0, 0], [1, 0, 0]];
  return [source, target];
};

export const array_1_number_1_to_coordinates = () => {
  const source = parseCoords([[1], 1]);
  const target = [[1, 0, 0], [1, 0, 0]];
  return [source, target];
};

export const array_1_object_1_to_coordinates = () => {
  const source = parseCoords([[1], { x: 1 }]);
  const target = [[1, 0, 0], [1, 0, 0]];
  return [source, target];
};


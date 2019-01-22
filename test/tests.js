import {
  positionTransform,
  positionTransform3,
  rotationTransform,
  rotationTransform3,
  scaleTransform,
  scaleTransform3,
  makeNumber,
  parseCoords,
  normalizeDefault,
  normalizeScale,
  coordsObjectToArray
} from "./utils.js";

export const position_transform_string_0 = () => {
  const output = positionTransform("0");
  const expected = "translate(0 0)";
  return [output, expected];
};

export const position_transform2_string_0 = () => {
  const output = positionTransform3("0");
  const expected = { x: 0, y: 0, z: 0 };
  return [output, expected];
};

export const position_transform_string_1 = () => {
  const output = positionTransform("1");
  const expected = "translate(1 0)";
  return [output, expected];
};

export const position_transform3_string_1 = () => {
  const output = positionTransform3("1");
  const expected = { x: 1, y: 0, z: 0 };
  return [output, expected];
};

export const position_transform_string_1_2 = () => {
  const output = positionTransform("1 2");
  const expected = "translate(1 2)";
  return [output, expected];
};

export const position_transform3_string_1_2 = () => {
  const output = positionTransform3("1 2");
  const expected = { x: 1, y: 2, z: 0 };
  return [output, expected];
};

export const position_transform_string_1_2_3 = () => {
  const output = positionTransform("1 2 3");
  const expected = "translate(1 2)";
  return [output, expected];
};

export const position_transform3_string_1_2_3 = () => {
  const output = positionTransform3("1 2 3");
  const expected = { x: 1, y: 2, z: 3 };
  return [output, expected];
};


export const position_transform_string_1_2_3_4 = () => {
  const output = positionTransform("1 2 3");
  const expected = "translate(1 2)";
  return [output, expected];
};

export const position_transform3_string_1_2_3_4 = () => {
  const output = positionTransform3("1 2 3 4");
  const expected = { x: 1, y: 2, z: 3 };
  return [output, expected];
};

export const position_transform_number_0 = () => {
  const output = positionTransform(0);
  const expected = "translate(0 0)";
  return [output, expected];
};

export const position_transform3_number_0 = () => {
  const output = positionTransform3(0);
  const expected = { x: 0, y: 0, z: 0 };
  return [output, expected];
};

export const position_transform_number_1 = () => {
  const output = positionTransform(1);
  const expected = "translate(1 0)";
  return [output, expected];
};

export const position_transform3_number_1 = () => {
  const output = positionTransform3(1);
  const expected = { x: 1, y: 0, z: 0 };
  return [output, expected];
};

// translate(1 0)
// export const position_transform_array_1_2 = () => {
//   const output = positionTransform([1,2]);
//   const expected = 'translate(1 2)';
//   return [output, expected];
// };

// {"x":1,"y":0,"z":0}
// export const position_transform3_array_1_2 = () => {
//   const output = positionTransform3([1,2]);
//   const expected = { x: 1, y: 2, z: 0 };
//   return [output, expected];
// };

// translate(1 0)
// export const position_transform_array_1_2_3 = () => {
//   const output = positionTransform([1,2,3]);
//   const expected = 'translate(1 2)';
//   return [output, expected];
// };

// {"x":1,"y":0,"z":0}
// export const position_transform3_array_1_2_3 = () => {
//   const output = positionTransform3([1,2,3]);
//   const expected = { x: 1, y: 2, z: 3 };
//   return [output, expected];
// };


export const position_transform_object_x_1 = () => {
  const output = positionTransform({ x: 1 });
  const expected = "translate(1 0)";
  return [output, expected];
};

export const position_transform3_object_x_1 = () => {
  const output = positionTransform3({ x: 1 });
  const expected = { x: 1, y: 0, z: 0 };
  return [output, expected];
};

// translate(0 0)
// export const position_transform_object_y_1 = () => {
//   const output = positionTransform({y: 1});
//   const expected = 'translate(0 1)';
//   return [output, expected];
// };

// {"x":0,"y":0,"z":0}
// export const position_transform3_object_y_1 = () => {
//   const output = positionTransform3({y: 1});
//   const expected = { x: 0, y: 1, z: 0 };
//   return [output, expected];
// };

export const position_transform_object_z_1 = () => {
  const output = positionTransform({ z: 1 });
  const expected = "translate(0 0)";
  return [output, expected];
};

// {"x":0,"y":0,"z":0}
// export const position_transform3object_z_1 = () => {
//   const output = positionTransform3({ z: 1 });
//   const expected = { x: 0, y: 0, z: 1 };
//   return [output, expected];
// };

export const position_transform_object_x_y_z_a_1_2_3_3 = () => {
  const output = positionTransform({ x: 1, y: 2, z: 3, a: 4 });
  const expected = "translate(1 2)";
  return [output, expected];
};

export const position_transform3_object_x_y_z_a_1_2_3_3 = () => {
  const output = positionTransform3({ x: 1, y: 2, z: 3, a: 4 });
  const expected = { x: 1, y: 2, z: 3 };
  return [output, expected];
};

// Rotation

export const rotation_transform_string_1 = () => {
  const output = rotationTransform("1");
  const expected = "rotate(1deg)";
  return [output, expected];
};

// {"x":1,"y":0,"z":0}
// export const rotation_transform3_string_1 = () => {
//   const output = rotationTransform3("1");
//   const expected = { x:0, y: 0, z: 1 };
//   return [output, expected];
// };

export const rotation_transform_string_1_1_1 = () => {
  const output = rotationTransform("1 1 1");
  const expected = "rotate(1deg)";
  return [output, expected];
};

export const rotation_transform3_string_1_1_1 = () => {
  const output = rotationTransform3("1 1 1");
  const expected = { x: 1, y: 1, z: 1 };
  return [output, expected];
};

export const rotation_transform_number_0 = () => {
  const output = rotationTransform(0);
  const expected = "rotate(0deg)";
  return [output, expected];
};

export const rotation_transform3_number_0 = () => {
  const output = rotationTransform3(0);
  const expected = { x: 0, y: 0, z: 0 };
  return [output, expected];
};

export const rotation_transform_number_1 = () => {
  const output = rotationTransform(1);
  const expected = "rotate(1deg)";
  return [output, expected];
};

// {"x":1,"y":0,"z":0}
// export const rotation_transform3_number_1 = () => {
//   const output = rotationTransform3(1);
//   const expected = { x: 0, y: 0, z: 1 };
//   return [output, expected];
// };

export const rotation_transform_array_1 = () => {
  const output = rotationTransform([1]);
  const expected = "rotate(1deg)";
  return [output, expected];
};

export const rotation_transform3_array_1 = () => {
  const output = rotationTransform3([1]);
  const expected = { x: 1, y: 0, z: 0 };
  return [output, expected];
};

export const rotation_transform_array_1_2 = () => {
  const output = rotationTransform([1, 2]);
  const expected = "rotate(1deg)";
  return [output, expected];
};

// {"x":1,"y":0,"z":0}
// export const rotation_transform3_array_1_2 = () => {
//   const output = rotationTransform3([1, 2]);
//   const expected = { x: 1, y: 2, z: 0 };
//   return [output, expected];
// };

export const rotation_transform_object_x_1 = () => {
  const output = rotationTransform({ x: 1 });
  const expected = "rotate(1deg)";
  return [output, expected];
};

export const rotation_transform3_object_x_1 = () => {
  const output = rotationTransform3({ x: 1 });
  const expected = { x: 1, y: 0, z: 0 };
  return [output, expected];
};

// "rotate(0deg)"
// export const rotation_transform_object_y_1 = () => {
//   const output = rotationTransform({y: 1});
//   const expected = 'rotate(1deg)';
//   return [output, expected];
// };

// {"x":0,"y":0,"z":0}
// export const rotation_transform3_object_y_1 = () => {
//   const output = rotationTransform3({y: 1});
//   const expected = { x: 0, y: 1, z: 0 };
//   return [output, expected];
// };

// rotate(0deg)
// export const rotation_transform_object_z_1 = () => {
//   const output = rotationTransform({z: 1});
//   const expected = 'rotate(1deg)';
//   return [output, expected];
// };

// {"x":0,"y":0,"z":0}
// export const rotation_transform3_object_z_1 = () => {
//   const output = rotationTransform3({z: 1});
//   const expected = { x: 0, y: 0, z: 1 };
//   return [output, expected];
// };

export const rotation_transform_object_a_1 = () => {
  const output = rotationTransform({a: 1});
  const expected = 'rotate(0deg)';
  return [output, expected];
};

export const rotation_transform3_object_a_1 = () => {
  const output = rotationTransform3({a: 1});
  const expected = { x: 0, y: 0, z: 0 };
  return [output, expected];
};

// Scale

export const scale_transform_string_1 = () => {
  const output = scaleTransform("1");
  const expected = "scale(1 1)";
  return [output, expected];
};

export const scale_transform3_string_1 = () => {
  const output = scaleTransform3("1");
  const expected = { x: 1, y: 1, z: 1 };
  return [output, expected];
};

export const scale_transform_string_2 = () => {
  const output = scaleTransform("2");
  const expected = "scale(2 2)";
  return [output, expected];
};

export const scale_transform3_string_2 = () => {
  const output = scaleTransform3("2");
  const expected = { x: 2, y: 2, z: 2 };
  return [output, expected];
};

// TODO: Really?
export const scale_transform_array_2 = () => {
  const output = scaleTransform([2]);
  const expected = "scale(2 2)";
  return [output, expected];
};

export const scale_transform3_array_2 = () => {
  const output = scaleTransform3([2]);
  const expected = { x: 2, y: 2, z: 2 };
  return [output, expected];
};

//scale(1 1)
// export const scale_transform_array_1_2_3 = () => {
//   const output = scaleTransform([1,2,3]);
//   const expected = 'scale(1 2)';
//   return [output, expected];
// };

// {"x":1,"y":1,"z":1}
// export const scale_transform3_array_1_2_3 = () => {
//   const output = scaleTransform3([1,2,3]);
//   const expected = { x: 1, y: 2, z: 3 };
//   return [output, expected];
// };

// scale(2 2)
// export const scale_transform_object_x_2 = () => {
//   const output = scaleTransform({ x: 2 });
//   const expected = "scale(2 1)";
//   return [output, expected];
// };

// {"x":2,"y":2,"z":2}
// export const scale_transform3_object_x_2 = () => {
//   const output = scaleTransform3({ x: 2 });
//   const expected = { x: 2, y: 1, z: 2 };
//   return [output, expected];
// };

// scale(0 0)
// export const scale_transform_object_y_2 = () => {
//   const output = scaleTransform({y: 2});
//   const expected = 'scale(1 2)';
//   return [output, expected];
// };

// {"x":0,"y":0,"z":0}
// export const scale_transform3_object_y_2 = () => {
//   const output = scaleTransform3({ y: 2 });
//   const expected = { x: 1, y: 2, z: 1 };
//   return [output, expected];
// };

//scale(0 0)
// export const scale_transform_object_z_2 = () => {
//   const output = scaleTransform({z: 2});
//   const expected = 'scale(1 1)';
//   return [output, expected];
// };

// {"x":0,"y":0,"z":0}
// export const scale_transform3_object_z_2 = () => {
//   const output = scaleTransform3({z: 2});
//   const expected = { x: 1, y: 1, z: 2 };
//   return [output, expected];
// };

//scale(0 0)
// export const scale_transform_object_a_2 = () => {
//   const output = scaleTransform({a: 2});
//   const expected = 'scale(1 1)';
//   return [output, expected];
// };

// {"x":0,"y":0,"z":0}
// export const scale_transform3_object_a_2 = () => {
//   const output = scaleTransform3({a: 2});
//   const expected = { x: 1, y: 1, z: 1 };
//   return [output, expected];
// };

// Normalization

export const normalize_0 = () => {
  const output = normalizeDefault([0]);
  const expected = [0, 0, 0];
  return [output, expected];
};

export const normalize_1 = () => {
  const output = normalizeDefault([1]);
  const expected = [1, 0, 0];
  return [output, expected];
};

export const normalize_1_1 = () => {
  const output = normalizeDefault([1, 1]);
  const expected = [1, 1, 0];
  return [output, expected];
};

export const normalize_1_1_1 = () => {
  const output = normalizeDefault([1, 1, 1]);
  const expected = [1, 1, 1];
  return [output, expected];
};

export const normalize_1_1_1_1 = () => {
  const output = normalizeDefault([1, 1, 1, 1]);
  const expected = [1, 1, 1];
  return [output, expected];
};

// normalizeScale

export const normalize_scale_0 = () => {
  const output = normalizeScale([0]);
  const expected = [0, 0, 0];
  return [output, expected];
};

export const normalize_scale_1 = () => {
  const output = normalizeScale([1]);
  const expected = [1, 1, 1];
  return [output, expected];
};

export const normalize_scale_2 = () => {
  const output = normalizeScale([2]);
  const expected = [2, 2, 2];
  return [output, expected];
};

export const normalize_scale_1_1 = () => {
  const output = normalizeScale([1, 1]);
  const expected = [1, 1, 0];
  return [output, expected];
};

export const normalize_scale_1_1_1 = () => {
  const output = normalizeScale([1, 1, 1]);
  const expected = [1, 1, 1];
  return [output, expected];
};

export const normalize_scale_1_1_1_1 = () => {
  const output = normalizeScale([1, 1, 1, 1]);
  const expected = [1, 1, 1];
  return [output, expected];
};

// coordsObjectToArray

export const object_empty_to_array = () => {
  const output = coordsObjectToArray({});
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const object_other_to_array = () => {
  const output = coordsObjectToArray({ a: 1 });
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const object_1_to_array = () => {
  const output = coordsObjectToArray({ x: 1 });
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const object_1_1_to_array = () => {
  const output = coordsObjectToArray({ x: 1, y: 1 });
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const object_1_1_1_to_array = () => {
  const output = coordsObjectToArray({ x: 1, y: 1, z: 1 });
  const expected = [[1, 1, 1]];
  return [output, expected];
};

// makeNumber

export const numeric_string_to_number = () => {
  const output = makeNumber("0");
  const expected = 0;
  return [output, expected];
};

export const nonnumeric_string_to_number = () => {
  const output = makeNumber("a");
  const expected = 0;
  return [output, expected];
};

export const empty_string_to_number = () => {
  const output = makeNumber("");
  const expected = 0;
  return [output, expected];
};

export const zero_to_number = () => {
  const output = makeNumber(0);
  const expected = 0;
  return [output, expected];
};

export const integer_to_number = () => {
  const output = makeNumber(1);
  const expected = 1;
  return [output, expected];
};

export const float_to_number = () => {
  const output = makeNumber(0.1);
  const expected = 0.1;
  return [output, expected];
};

export const gibberish_to_number = () => {
  const output = makeNumber("*");
  const expected = 0;
  return [output, expected];
};

// Empty

export const empty_string_to_coordinates = () => {
  const output = parseCoords("");
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const empty_string_to_scale_coordinates = () => {
  const output = parseCoords("", normalizeScale);
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const empty_space_to_coordinates = () => {
  const output = parseCoords("       ");
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const empty_array_to_coordinates = () => {
  const output = parseCoords([]);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const empty_array_array_to_coordinates = () => {
  const output = parseCoords([[]]);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const empty_array_2_array_to_coordinates = () => {
  const output = parseCoords([[], []]);
  const expected = [[0, 0, 0], [0, 0, 0]];
  return [output, expected];
};

export const empty_array_number_0_to_coordinates = () => {
  const output = parseCoords([0]);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const empty_array_number_0_empty_array_to_coordinates = () => {
  const output = parseCoords([0, []]);
  const expected = [[0, 0, 0], [0, 0, 0]];
  return [output, expected];
};

export const array_number_0_0_to_coordinates = () => {
  const output = parseCoords([0, 0]);
  const expected = [[0,0,0]];
  return [output, expected];
};

export const array_number_0_string_0_to_coordinates = () => {
  const output = parseCoords([0, "0"]);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const object_empty_to_coordinates = () => {
  const output = parseCoords({});
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const array_object_empty_to_coordinates = () => {
  const output = parseCoords([{}]);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const array_object_object_empty_to_coordinates = () => {
  const output = parseCoords([{}, {}]);
  const expected = [[0, 0, 0], [0, 0, 0]];
  return [output, expected];
};

export const everything_empty_to_coordinates = () => {
  const output = parseCoords(["0", 0, [], {}]);
  const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
  return [output, expected];
};

// Strings

export const string_empty_to_coordinates = () => {
  const output = parseCoords(" ");
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const string_empty_to_scale_coordinates = () => {
  const output = parseCoords(" ", normalizeScale);
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const string_0_to_coordinates = () => {
  const output = parseCoords("0");
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const string_0_to_scale_coordinates = () => {
  const output = parseCoords("0", normalizeScale);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const string_1_to_coordinates = () => {
  const output = parseCoords("1");
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const string_1_1_to_coordinates = () => {
  const output = parseCoords("1 1");
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const string_1_1_a_spaced_to_coordinates = () => {
  const output = parseCoords("1  1        a");
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const string_1_1_a_1_spaced_to_coordinates = () => {
  const output = parseCoords("1  1        a 1");
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const string_1_and_1_to_coordinates = () => {
  const output = parseCoords("1,1");
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const string_1_and_1_in_array_to_coordinates = () => {
  const output = parseCoords(["1", "1"]);
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const string_1_1_and_1_1_in_array_to_coordinates = () => {
  const output = parseCoords(["1 1", "1 1"]);
  const expected = [[1, 1, 0], [1, 1, 0]];
  return [output, expected];
};

export const string_1_and_1_spaced_to_coordinates = () => {
  const output = parseCoords("1 ,   1");
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const string_1_1_and_1_1_to_coordinates = () => {
  const output = parseCoords("1 1, 1 1");
  const expected = [[1, 1, 0], [1, 1, 0]];
  return [output, expected];
};

export const string_1_1_1_to_coordinates = () => {
  const output = parseCoords("1 1 1");
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const string_1_1_1_1_to_coordinates = () => {
  const output = parseCoords("1 1 1 1");
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const string_1_1_1_and_1_1_1_to_coordinates = () => {
  const output = parseCoords("1 1 1, 1 1 1");
  const expected = [[1, 1, 1], [1, 1, 1]];
  return [output, expected];
};

export const string_1_1_1_1_and_1_1_1_1_to_coordinates = () => {
  const output = parseCoords("1 1 1 1, 1 1 1 1");
  const expected = [[1, 1, 1], [1, 1, 1]];
  return [output, expected];
};

// Numbers

export const number_0_to_coordinates = () => {
  const output = parseCoords(0);
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const number_1_to_coordinates = () => {
  const output = parseCoords(1);
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const number_2_to_coordinates = () => {
  const output = parseCoords(2);
  const expected = [[2, 0, 0]];
  return [output, expected];
};

export const number_1_to_scale_coordinates = () => {
  const output = parseCoords(1, normalizeScale);
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const number_2_to_scale_coordinates = () => {
  const output = parseCoords(2, normalizeScale);
  const expected = [[2, 2, 2]];
  return [output, expected];
};

export const number_01_to_coordinates = () => {
  const output = parseCoords(0.1);
  const expected = [[0.1, 0, 0]];
  return [output, expected];
};

export const number_1_in_array_to_coordinates = () => {
  const output = parseCoords([1]);
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const number_1_in_array_array_to_coordinates = () => {
  const output = parseCoords([[1]]);
  const expected = [[1, 0, 0]];
  return [output, expected];
};

// [[1,0,0],[1,0,0]]
export const number_1_1_in_array_to_coordinates = () => {
  const output = parseCoords([1,1]);
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const number_1_1_in_array_array_to_coordinates = () => {
  const output = parseCoords([[1, 1]]);
  const expected = [[1, 1, 0]];
  return [output, expected];
};

// array_number_1_1_1_in_array_to_coordinates
// export const array_number_1_1_1_in_array_to_coordinates = () => {
//   const output = parseCoords([1,1,1]);
//   const expected = [[1, 1, 1]];
//   return [output, expected];
// };

export const number_1_1_1_in_array_array_to_coordinates = () => {
  const output = parseCoords([[1, 1, 1]]);
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const number_1_1_1_1_in_array_array_to_coordinates = () => {
  const output = parseCoords([[1, 1, 1, 1]]);
  const expected = [[1, 1, 1]];
  return [output, expected];
};

// [[1,0,0],[1,0,0],[1,0,0]]

// export const array_number_1_1_1_to_coordinates = () => {
//   const output = parseCoords([1,1,1]);
//   const expected = [[1, 1, 1]];
//   return [output, expected];
// };

// [[1,0,0],[1,0,0],[1,0,0],[1,0,0]]

// export const array_number_1_1_1_1_to_coordinates = () => {
//   const output = parseCoords([1,1,1,1]);
//   const expected = [[1, 1, 1]];
//   return [output, expected];
// };

// Objects

export const object_0_to_coordinates = () => {
  const output = parseCoords({ x: 0 });
  const expected = [[0, 0, 0]];
  return [output, expected];
};

export const object_string_1_to_coordinates = () => {
  const output = parseCoords({ x: "1" });
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const object_number_1_to_coordinates = () => {
  const output = parseCoords({ x: "1" });
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const object_number_1_1_to_coordinates = () => {
  const output = parseCoords({ x: 1, y: 1 });
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const object_number_1_1_1_to_coordinates = () => {
  const output = parseCoords({ x: 1, y: 1, z: 1 });
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const object_number_1_1_1_gibberish_to_coordinates = () => {
  const output = parseCoords({ x: 1, y: 1, z: 1, a: 1 });
  const expected = [[1, 1, 1]];
  return [output, expected];
};

export const object_number_01_to_coordinates = () => {
  const output = parseCoords({ x: "0.1" });
  const expected = [[0.1, 0, 0]];
  return [output, expected];
};

export const object_number_1_in_array_to_coordinates = () => {
  const output = parseCoords([{ x: 1 }]);
  const expected = [[1, 0, 0]];
  return [output, expected];
};

export const object_number_1_1_in_array_to_coordinates = () => {
  const output = parseCoords([{ x: 1 }, { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const object_number_1_1_1_in_array_to_coordinates = () => {
  const output = parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const object_number_1_1_1_1_in_array_to_coordinates = () => {
  const output = parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const object_everything_in_array_to_coordinates = () => {
  const output = parseCoords([
    { x: 1, y: "1", z: false },
    { x: 1, y: 1, z: null, a: 1 }
  ]);
  const expected = [[1, 1, 0], [1, 1, 0]];
  return [output, expected];
};

export const array_number_1_1_1_in_array_array_to_coordinates = () => {
  const output = parseCoords([[1, 1, 1]]);
  const expected = [[1, 1, 1]];
  return [output, expected];
};

// Mixed

export const array_array_number_string_1_1_to_coordinates = () => {
  const output = parseCoords([[1, "1"]]);
  const expected = [[1, 1, 0]];
  return [output, expected];
};

export const array_1_sting_1_to_coordinates = () => {
  const output = parseCoords([[1], "1"]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const array_1_number_1_to_coordinates = () => {
  const output = parseCoords([[1], 1]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

export const array_1_object_1_to_coordinates = () => {
  const output = parseCoords([[1], { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [output, expected];
};

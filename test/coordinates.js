import {
  deg2rad,
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
} from "../utils.js";

export const position_transform_string_0 = () => {
  const actual = positionTransform("0");
  const expected = "translate(0 0)";
  return [expected,actual];
};

export const position_transform2_string_0 = () => {
  const actual = positionTransform3("0");
  const expected = { x: 0, y: 0, z: 0 };
  return [expected,actual];
};

export const position_transform_string_1 = () => {
  const actual = positionTransform("1");
  const expected = "translate(1 0)";
  return [expected,actual];
};

export const position_transform3_string_1 = () => {
  const actual = positionTransform3("1");
  const expected = { x: 1, y: 0, z: 0 };
  return [expected,actual];
};

export const position_transform_string_1_2 = () => {
  const actual = positionTransform("1 2");
  const expected = "translate(1 2)";
  return [expected,actual];
};

export const position_transform3_string_1_2 = () => {
  const actual = positionTransform3("1 2");
  const expected = { x: 1, y: 2, z: 0 };
  return [expected,actual];
};

export const position_transform_string_1_2_3 = () => {
  const actual = positionTransform("1 2 3");
  const expected = "translate(1 2)";
  return [expected,actual];
};

export const position_transform3_string_1_2_3 = () => {
  const actual = positionTransform3("1 2 3");
  const expected = { x: 1, y: 2, z: 3 };
  return [expected,actual];
};

export const position_transform_string_1_2_3_4 = () => {
  const actual = positionTransform("1 2 3");
  const expected = "translate(1 2)";
  return [expected,actual];
};

export const position_transform3_string_1_2_3_4 = () => {
  const actual = positionTransform3("1 2 3 4");
  const expected = { x: 1, y: 2, z: 3 };
  return [expected,actual];
};

export const position_transform_number_0 = () => {
  const actual = positionTransform(0);
  const expected = "translate(0 0)";
  return [expected,actual];
};

export const position_transform3_number_0 = () => {
  const actual = positionTransform3(0);
  const expected = { x: 0, y: 0, z: 0 };
  return [expected,actual];
};

export const position_transform_number_1 = () => {
  const actual = positionTransform(1);
  const expected = "translate(1 0)";
  return [expected,actual];
};

export const position_transform3_number_1 = () => {
  const actual = positionTransform3(1);
  const expected = { x: 1, y: 0, z: 0 };
  return [expected,actual];
};

export const position_transform_array_1_2 = () => {
  const actual = positionTransform([1,2]);
  const expected = 'translate(1 2)';
  return [expected,actual];
};

export const position_transform3_array_1_2 = () => {
  const actual = positionTransform3([1,2]);
  const expected = { x: 1, y: 2, z: 0 };
  return [expected,actual];
};

export const position_transform_array_1_2_3 = () => {
  const actual = positionTransform([1,2,3]);
  const expected = 'translate(1 2)';
  return [expected,actual];
};

export const position_transform3_array_1_2_3 = () => {
  const actual = positionTransform3([1,2,3]);
  const expected = { x: 1, y: 2, z: 3 };
  return [expected,actual];
};


export const position_transform_object_empty = () => {
  const actual = positionTransform({});
  const expected = 'translate(0 0)';
  return [expected,actual];
};

export const position_transform3_object_empty = () => {
  const actual = positionTransform3({});
  const expected = { x: 0, y: 0, z: 0 };
  return [expected,actual];
};

export const position_transform_object_x_1 = () => {
  const actual = positionTransform({ x: 1 });
  const expected = "translate(1 0)";
  return [expected,actual];
};

export const position_transform3_object_x_1 = () => {
  const actual = positionTransform3({ x: 1 });
  const expected = { x: 1, y: 0, z: 0 };
  return [expected,actual];
};

export const position_transform_object_y_1 = () => {
  const actual = positionTransform({y: 1});
  const expected = 'translate(0 1)';
  return [expected,actual];
};

export const position_transform3_object_y_1 = () => {
  const actual = positionTransform3({y: 1});
  const expected = { x: 0, y: 1, z: 0 };
  return [expected,actual];
};

export const position_transform_object_z_1 = () => {
  const actual = positionTransform({ z: 1 });
  const expected = "translate(0 0)";
  return [expected,actual];
};

export const position_transform3object_z_1 = () => {
  const actual = positionTransform3({ z: 1 });
  const expected = { x: 0, y: 0, z: 1 };
  return [expected,actual];
};

export const position_transform_object_x_y_z_a_1_2_3_3 = () => {
  const actual = positionTransform({ x: 1, y: 2, z: 3, a: 4 });
  const expected = "translate(1 2)";
  return [expected,actual];
};

export const position_transform3_object_x_y_z_a_1_2_3_3 = () => {
  const actual = positionTransform3({ x: 1, y: 2, z: 3, a: 4 });
  const expected = { x: 1, y: 2, z: 3 };
  return [expected,actual];
};

// Rotation

export const rotation_transform_string_1 = () => {
  const actual = rotationTransform("1");
  const expected = "rotate(1)";
  return [expected,actual];
};

// {"x":1,"y":0,"z":0}
// export const rotation_transform3_string_1 = () => {
//   const actual = rotationTransform3("1");
//   const expected = { x:0, y: 0, z: 1 };
//   return [expected,actual];
// };

export const rotation_transform_string_1_1_1 = () => {
  const actual = rotationTransform("1 1 1");
  const expected = "rotate(1)";
  return [expected,actual];
};

export const rotation_transform3_string_1_1_1 = () => {
  const actual = rotationTransform3("1 1 1");
  const expected = { x: deg2rad(1), y: deg2rad(1), z: deg2rad(1) };
  return [expected,actual];
};

export const rotation_transform_number_0 = () => {
  const actual = rotationTransform(0);
  const expected = "rotate(0)";
  return [expected,actual];
};

export const rotation_transform3_number_0 = () => {
  const actual = rotationTransform3(0);
  const expected = { x: 0, y: 0, z: 0 };
  return [expected,actual];
};

export const rotation_transform_number_1 = () => {
  const actual = rotationTransform(1);
  const expected = "rotate(1)";
  return [expected,actual];
};

export const rotation_transform3_number_1 = () => {
  const actual = rotationTransform3(1);
  const expected = { x: 0, y: 0, z: deg2rad(1) };
  return [expected,actual];
};

export const rotation_transform_array_1 = () => {
  const actual = rotationTransform([1]);
  const expected = "rotate(1)";
  return [expected,actual];
};

export const rotation_transform3_array_1 = () => {
  const actual = rotationTransform3([1]);
  const expected = { x: 0, y: 0, z: deg2rad(1) };
  return [expected,actual];
};

export const rotation_transform_array_1_2 = () => {
  const actual = rotationTransform([1, 2]);
  const expected = "rotate(1)";
  return [expected,actual];
};

export const rotation_transform3_array_1_2 = () => {
  const actual = rotationTransform3([1, 2]);
  const expected = { x: deg2rad(1), y: deg2rad(2), z: 0 };
  return [expected,actual];
};

export const rotation_transform_object_x_1 = () => {
  const actual = rotationTransform({ x: 1 });
  const expected = "rotate(1)";
  return [expected,actual];
};

export const rotation_transform3_object_x_1 = () => {
  const actual = rotationTransform3({ x: 1 });
  const expected = { x: deg2rad(1), y: 0, z: 0 };
  return [expected,actual];
};

// "rotate(0)"
// export const rotation_transform_object_y_1 = () => {
//   const actual = rotationTransform({y: 1});
//   const expected = 'rotate(1)';
//   return [expected,actual];
// };

export const rotation_transform3_object_y_1 = () => {
  const actual = rotationTransform3({y: 1});
  const expected = { x: 0, y: deg2rad(1), z: 0 };
  return [expected,actual];
};

// rotate(0)
// export const rotation_transform_object_z_1 = () => {
//   const actual = rotationTransform({z: 1});
//   const expected = 'rotate(1)';
//   return [expected,actual];
// };

export const rotation_transform3_object_z_1 = () => {
  const actual = rotationTransform3({z: 1});
  const expected = { x: 0, y: 0, z: deg2rad(1) };
  return [expected,actual];
};

export const rotation_transform_object_a_1 = () => {
  const actual = rotationTransform({a: deg2rad(1)});
  const expected = 'rotate(0)';
  return [expected,actual];
};

export const rotation_transform3_object_a_1 = () => {
  const actual = rotationTransform3({a: deg2rad(1)});
  const expected = { x: 0, y: 0, z: 0 };
  return [expected,actual];
};

// Scale

export const scale_transform_string_empty = () => {
  const actual = scaleTransform("");
  const expected = "scale(1 1)";
  return [expected,actual];
};

export const scale_transform_object_empty = () => {
  const actual = scaleTransform({});
  const expected = "scale(1 1)";
  return [expected,actual];
};




export const scale_transform_string_1 = () => {
  const actual = scaleTransform("1");
  const expected = "scale(1 1)";
  return [expected,actual];
};

export const scale_transform3_string_1 = () => {
  const actual = scaleTransform3("1");
  const expected = { x: 1, y: 1, z: 1 };
  return [expected,actual];
};

export const scale_transform_string_2 = () => {
  const actual = scaleTransform("2");
  const expected = "scale(2 2)";
  return [expected,actual];
};

export const scale_transform3_string_2 = () => {
  const actual = scaleTransform3("2");
  const expected = { x: 2, y: 2, z: 2 };
  return [expected,actual];
};

export const scale_transform_array_2 = () => {
  const actual = scaleTransform([2]);
  const expected = "scale(2 2)";
  return [expected,actual];
};

export const scale_transform3_array_2 = () => {
  const actual = scaleTransform3([2]);
  const expected = { x: 2, y: 2, z: 2 };
  return [expected,actual];
};

export const scale_transform_array_1_2_3 = () => {
  const actual = scaleTransform([1,2,3]);
  const expected = 'scale(1 2)';
  return [expected,actual];
};

export const scale_transform3_array_1_2_3 = () => {
  const actual = scaleTransform3([1,2,3]);
  const expected = { x: 1, y: 2, z: 3 };
  return [expected,actual];
};

// scale(2 0)
// export const scale_transform_object_x_2 = () => {
//   const actual = scaleTransform({ x: 2 });
//   const expected = "scale(2 1)";
//   return [expected,actual];
// };

//{"x":2,"y":0,"z":0}
// export const scale_transform3_object_x_2 = () => {
//   const actual = scaleTransform3({ x: 2 });
//   const expected = { x: 2, y: 1, z: 1 };
//   return [expected,actual];
// };

// scale(0 2)
// export const scale_transform_object_y_2 = () => {
//   const actual = scaleTransform({y: 2});
//   const expected = 'scale(1 2)';
//   return [expected,actual];
// };

// {"x":0,"y":2,"z":0}
// export const scale_transform3_object_y_2 = () => {
//   const actual = scaleTransform3({ y: 2 });
//   const expected = { x: 1, y: 2, z: 1 };
//   return [expected,actual];
// };

//scale(0 0)
// export const scale_transform_object_z_2 = () => {
//   const actual = scaleTransform({z: 2});
//   const expected = 'scale(1 1)';
//   return [expected,actual];
// };

// {"x":0,"y":0,"z":0}
// export const scale_transform3_object_z_2 = () => {
//   const actual = scaleTransform3({z: 2});
//   const expected = { x: 1, y: 1, z: 2 };
//   return [expected,actual];
// };

//scale(0 0)
// export const scale_transform_object_a_2 = () => {
//   const actual = scaleTransform({a: 2});
//   const expected = 'scale(1 1)';
//   return [expected,actual];
// };

// {"x":0,"y":0,"z":0}
// export const scale_transform3_object_a_2 = () => {
//   const actual = scaleTransform3({a: 2});
//   const expected = { x: 1, y: 1, z: 1 };
//   return [expected,actual];
// };

// Normalization

export const normalize_0 = () => {
  const actual = normalizeDefault([0]);
  const expected = [0, 0, 0];
  return [expected,actual];
};

export const normalize_1 = () => {
  const actual = normalizeDefault([1]);
  const expected = [1, 0, 0];
  return [expected,actual];
};

export const normalize_1_1 = () => {
  const actual = normalizeDefault([1, 1]);
  const expected = [1, 1, 0];
  return [expected,actual];
};

export const normalize_1_1_1 = () => {
  const actual = normalizeDefault([1, 1, 1]);
  const expected = [1, 1, 1];
  return [expected,actual];
};

export const normalize_1_1_1_1 = () => {
  const actual = normalizeDefault([1, 1, 1, 1]);
  const expected = [1, 1, 1];
  return [expected,actual];
};

// normalizeScale

export const normalize_scale_0 = () => {
  const actual = normalizeScale([0]);
  const expected = [0, 0, 0];
  return [expected,actual];
};

export const normalize_scale_1 = () => {
  const actual = normalizeScale([1]);
  const expected = [1, 1, 1];
  return [expected,actual];
};

export const normalize_scale_2 = () => {
  const actual = normalizeScale([2]);
  const expected = [2, 2, 2];
  return [expected,actual];
};

export const normalize_scale_1_1 = () => {
  const actual = normalizeScale([1, 1]);
  const expected = [1, 1, 0];
  return [expected,actual];
};

export const normalize_scale_1_1_1 = () => {
  const actual = normalizeScale([1, 1, 1]);
  const expected = [1, 1, 1];
  return [expected,actual];
};

export const normalize_scale_1_1_1_1 = () => {
  const actual = normalizeScale([1, 1, 1, 1]);
  const expected = [1, 1, 1];
  return [expected,actual];
};

// coordsObjectToArray

export const object_empty_to_array = () => {
  const actual = coordsObjectToArray({});
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const object_other_to_array = () => {
  const actual = coordsObjectToArray({ a: 1 });
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const object_1_to_array = () => {
  const actual = coordsObjectToArray({ x: 1 });
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const object_1_1_to_array = () => {
  const actual = coordsObjectToArray({ x: 1, y: 1 });
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const object_1_1_1_to_array = () => {
  const actual = coordsObjectToArray({ x: 1, y: 1, z: 1 });
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

// makeNumber

export const numeric_string_to_number = () => {
  const actual = makeNumber("0");
  const expected = 0;
  return [expected,actual];
};

export const nonnumeric_string_to_number = () => {
  const actual = makeNumber("a");
  const expected = 0;
  return [expected,actual];
};

export const empty_string_to_number = () => {
  const actual = makeNumber("");
  const expected = 0;
  return [expected,actual];
};

export const zero_to_number = () => {
  const actual = makeNumber(0);
  const expected = 0;
  return [expected,actual];
};

export const integer_to_number = () => {
  const actual = makeNumber(1);
  const expected = 1;
  return [expected,actual];
};

export const float_to_number = () => {
  const actual = makeNumber(0.1);
  const expected = 0.1;
  return [expected,actual];
};

export const gibberish_to_number = () => {
  const actual = makeNumber("*");
  const expected = 0;
  return [expected,actual];
};

// Empty

export const empty_string_to_coordinates = () => {
  const actual = parseCoords("");
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const empty_string_to_scale_coordinates = () => {
  const actual = parseCoords("", normalizeScale);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const empty_space_to_coordinates = () => {
  const actual = parseCoords("       ");
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const empty_array_to_coordinates = () => {
  const actual = parseCoords([]);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const empty_array_array_to_coordinates = () => {
  const actual = parseCoords([[]]);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const empty_array_2_array_to_coordinates = () => {
  const actual = parseCoords([[], []]);
  const expected = [[0, 0, 0], [0, 0, 0]];
  return [expected,actual];
};

export const empty_array_number_0_to_coordinates = () => {
  const actual = parseCoords([0]);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const empty_array_number_0_empty_array_to_coordinates = () => {
  const actual = parseCoords([0, []]);
  const expected = [[0, 0, 0], [0, 0, 0]];
  return [expected,actual];
};

export const array_number_0_0_to_coordinates = () => {
  const actual = parseCoords([0, 0]);
  const expected = [[0,0,0]];
  return [expected,actual];
};

export const array_number_0_string_0_to_coordinates = () => {
  const actual = parseCoords([0, "0"]);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const object_empty_to_coordinates = () => {
  const actual = parseCoords({});
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const array_object_empty_to_coordinates = () => {
  const actual = parseCoords([{}]);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const array_object_object_empty_to_coordinates = () => {
  const actual = parseCoords([{}, {}]);
  const expected = [[0, 0, 0], [0, 0, 0]];
  return [expected,actual];
};

export const everything_empty_to_coordinates = () => {
  const actual = parseCoords(["0", 0, [], {}]);
  const expected = [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]];
  return [expected,actual];
};

// Strings

export const string_empty_to_coordinates = () => {
  const actual = parseCoords(" ");
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const string_empty_to_scale_coordinates = () => {
  const actual = parseCoords(" ", normalizeScale);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const string_0_to_coordinates = () => {
  const actual = parseCoords("0");
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const string_0_to_scale_coordinates = () => {
  const actual = parseCoords("0", normalizeScale);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const string_1_to_coordinates = () => {
  const actual = parseCoords("1");
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const string_1_1_to_coordinates = () => {
  const actual = parseCoords("1 1");
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const string_1_1_a_spaced_to_coordinates = () => {
  const actual = parseCoords("1  1        a");
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const string_1_1_a_1_spaced_to_coordinates = () => {
  const actual = parseCoords("1  1        a 1");
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const string_1_and_1_to_coordinates = () => {
  const actual = parseCoords("1,1");
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const string_1_and_1_in_array_to_coordinates = () => {
  const actual = parseCoords(["1", "1"]);
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const string_1_1_and_1_1_in_array_to_coordinates = () => {
  const actual = parseCoords(["1 1", "1 1"]);
  const expected = [[1, 1, 0], [1, 1, 0]];
  return [expected,actual];
};

export const string_1_and_1_spaced_to_coordinates = () => {
  const actual = parseCoords("1 ,   1");
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const string_1_1_and_1_1_to_coordinates = () => {
  const actual = parseCoords("1 1, 1 1");
  const expected = [[1, 1, 0], [1, 1, 0]];
  return [expected,actual];
};

export const string_1_1_1_to_coordinates = () => {
  const actual = parseCoords("1 1 1");
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const string_1_1_1_1_to_coordinates = () => {
  const actual = parseCoords("1 1 1 1");
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const string_1_1_1_and_1_1_1_to_coordinates = () => {
  const actual = parseCoords("1 1 1, 1 1 1");
  const expected = [[1, 1, 1], [1, 1, 1]];
  return [expected,actual];
};

export const string_1_1_1_1_and_1_1_1_1_to_coordinates = () => {
  const actual = parseCoords("1 1 1 1, 1 1 1 1");
  const expected = [[1, 1, 1], [1, 1, 1]];
  return [expected,actual];
};

// Numbers

export const number_0_to_coordinates = () => {
  const actual = parseCoords(0);
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const number_1_to_coordinates = () => {
  const actual = parseCoords(1);
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const number_2_to_coordinates = () => {
  const actual = parseCoords(2);
  const expected = [[2, 0, 0]];
  return [expected,actual];
};

export const number_1_to_scale_coordinates = () => {
  const actual = parseCoords(1, normalizeScale);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const number_2_to_scale_coordinates = () => {
  const actual = parseCoords(2, normalizeScale);
  const expected = [[2, 2, 2]];
  return [expected,actual];
};

export const number_01_to_coordinates = () => {
  const actual = parseCoords(0.1);
  const expected = [[0.1, 0, 0]];
  return [expected,actual];
};

export const number_1_in_array_to_coordinates = () => {
  const actual = parseCoords([1]);
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const number_1_in_array_array_to_coordinates = () => {
  const actual = parseCoords([[1]]);
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

// [[1,0,0],[1,0,0]]
export const number_1_1_in_array_to_coordinates = () => {
  const actual = parseCoords([1,1]);
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const number_1_1_in_array_array_to_coordinates = () => {
  const actual = parseCoords([[1, 1]]);
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

// array_number_1_1_1_in_array_to_coordinates
export const array_number_1_1_1_in_array_to_coordinates = () => {
  const actual = parseCoords([1,1,1]);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const number_1_1_1_in_array_array_to_coordinates = () => {
  const actual = parseCoords([[1, 1, 1]]);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const number_1_1_1_1_in_array_array_to_coordinates = () => {
  const actual = parseCoords([[1, 1, 1, 1]]);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const array_number_1_1_1_to_coordinates = () => {
  const actual = parseCoords([1,1,1]);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const array_number_1_1_1_1_to_coordinates = () => {
  const actual = parseCoords([1,1,1,1]);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

// Objects

export const object_0_to_coordinates = () => {
  const actual = parseCoords({ x: 0 });
  const expected = [[0, 0, 0]];
  return [expected,actual];
};

export const object_string_1_to_coordinates = () => {
  const actual = parseCoords({ x: "1" });
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const object_number_1_to_coordinates = () => {
  const actual = parseCoords({ x: "1" });
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const object_number_1_1_to_coordinates = () => {
  const actual = parseCoords({ x: 1, y: 1 });
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const object_number_1_1_1_to_coordinates = () => {
  const actual = parseCoords({ x: 1, y: 1, z: 1 });
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const object_number_1_1_1_gibberish_to_coordinates = () => {
  const actual = parseCoords({ x: 1, y: 1, z: 1, a: 1 });
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

export const object_number_01_to_coordinates = () => {
  const actual = parseCoords({ x: "0.1" });
  const expected = [[0.1, 0, 0]];
  return [expected,actual];
};

export const object_number_1_in_array_to_coordinates = () => {
  const actual = parseCoords([{ x: 1 }]);
  const expected = [[1, 0, 0]];
  return [expected,actual];
};

export const object_number_1_1_in_array_to_coordinates = () => {
  const actual = parseCoords([{ x: 1 }, { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const object_number_1_1_1_in_array_to_coordinates = () => {
  const actual = parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const object_number_1_1_1_1_in_array_to_coordinates = () => {
  const actual = parseCoords([{ x: 1 }, { x: 1 }, { x: 1 }, { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const object_everything_in_array_to_coordinates = () => {
  const actual = parseCoords([
    { x: 1, y: "1", z: false },
    { x: 1, y: 1, z: null, a: 1 }
  ]);
  const expected = [[1, 1, 0], [1, 1, 0]];
  return [expected,actual];
};

export const array_number_1_1_1_in_array_array_to_coordinates = () => {
  const actual = parseCoords([[1, 1, 1]]);
  const expected = [[1, 1, 1]];
  return [expected,actual];
};

// Mixed

export const array_array_number_string_1_1_to_coordinates = () => {
  const actual = parseCoords([[1, "1"]]);
  const expected = [[1, 1, 0]];
  return [expected,actual];
};

export const array_1_sting_1_to_coordinates = () => {
  const actual = parseCoords([[1], "1"]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const array_1_number_1_to_coordinates = () => {
  const actual = parseCoords([[1], 1]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};

export const array_1_object_1_to_coordinates = () => {
  const actual = parseCoords([[1], { x: 1 }]);
  const expected = [[1, 0, 0], [1, 0, 0]];
  return [expected,actual];
};
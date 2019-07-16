export const parseSheet = data => {
  return data.feed.entry.map(entry => {
    return Object.keys(entry)
      .map(field => {
        if (field.startsWith("gsx$")) {
          return [field.split("$")[1], entry[field].$t];
        }
      })
      .filter(field => field)
      .reduce((field, item) => {
        field[item[0]] = item[1];
        return field;
      }, {});
  });
};

export const cleanColumns = content => {
  const pattern = /(\|[0-9\s]+\r?\n)/g;
  return content.replace(pattern, "");
};

const parseMeta = row => {
  const meta = row
    .replace(/\|/g, "")
    .split(": ")
    .map(s => s.trim());
  // Handle case for key: key: value
  const key = meta[0]
  meta.shift()
  const values = meta.join(': ') 
  return { [key]: values };
};
export const parseColumns = slide => {
  let meta = [];
  const metaPattern = /(\|\s(.*?):\s+(.*)\r?\n)/g;
  const metaMatch = slide.match(metaPattern);
  if (metaMatch && metaMatch.length) {
    meta = metaMatch.map(parseMeta);
    slide = slide.replace(metaPattern,'')
  }
  const pattern = /(\|[0-9\s]+\r?\n)/g;
  const match = slide.match(pattern);
  if (match) {
    const rowCount = match.length;
    const cols = match.map(m => {
      return m
        .trim()
        .replace(/\|/g, "")
        .split("")
        .filter(m => !m.match(/\s+/));
    });
    const colCount = cols[0].length;
    const areas = cols
      .map(m => `'${m.map(m => `a${m}`).join(" ")}'`)
      .join("\n");
    const content = slide.split(/\r?\n-\r?\n/)
      .map(c => c.replace(pattern, ""))

    return Object.assign({ rowCount, colCount, areas, content }, ...meta);
  } else {
    const content = slide.split(/\r?\n-\r?\n/);
    return Object.assign(
      {
        rowCount: 1,
        colCount: content.length,
        areas: `'${content.map((_, i) => `a${i + 1}`).join(" ")}'`,
        content: content
      },
      ...meta
    );
  }
};

export const getCssVariable = (value, el = document.body) =>
  getComputedStyle(el).getPropertyValue(value);

export const setCssVariable = (key, value, el = document.body.style) =>
  el.setProperty(key, value);

export const snapToGrid = (value, gridsize) => {
  return value % gridsize < gridsize / 2
    ? value - (value % gridsize)
    : value + gridsize - (value % gridsize);
};

export const generateSTL = scene => {
  var vector = new THREE.Vector3();
  var normalMatrixWorld = new THREE.Matrix3();

  var output = "";

  output += "solid exported\n";

  scene.traverse(function(object) {
    if (object instanceof THREE.Mesh) {
      // if object is hidden - exit
      if (object.visible == false) return;

      var geometry = object.geometry;
      var matrixWorld = object.matrixWorld;
      var mesh = object;

      if (geometry instanceof THREE.BufferGeometry)
        geometry = new THREE.Geometry().fromBufferGeometry(geometry);

      if (geometry instanceof THREE.Geometry) {
        var vertices = geometry.vertices;
        var faces = geometry.faces;

        normalMatrixWorld.getNormalMatrix(matrixWorld);

        if (typeof faces != "undefined") {
          for (var i = 0, l = faces.length; i < l; i++) {
            var face = faces[i];

            vector
              .copy(face.normal)
              .applyMatrix3(normalMatrixWorld)
              .normalize();

            output +=
              "\tfacet normal " +
              vector.x +
              " " +
              vector.y +
              " " +
              vector.z +
              "\n";
            output += "\t\touter loop\n";

            var indices = [face.a, face.b, face.c];

            for (var j = 0; j < 3; j++) {
              var vertexIndex = indices[j];
              if (
                typeof geometry.skinIndices !== "undefined" &&
                geometry.skinIndices.length == 0
              ) {
                vector.copy(vertices[vertexIndex]).applyMatrix4(matrixWorld);
                output +=
                  "\t\t\tvertex " +
                  vector.x +
                  " " +
                  vector.y +
                  " " +
                  vector.z +
                  "\n";
              } else {
                vector.copy(vertices[vertexIndex]); //.applyMatrix4( matrixWorld );

                // see https://github.com/mrdoob/three.js/issues/3187
                var boneIndices = [
                  geometry.skinIndices[vertexIndex].x,
                  geometry.skinIndices[vertexIndex].y,
                  geometry.skinIndices[vertexIndex].z,
                  geometry.skinIndices[vertexIndex].w
                ];

                var weights = [
                  geometry.skinWeights[vertexIndex].x,
                  geometry.skinWeights[vertexIndex].y,
                  geometry.skinWeights[vertexIndex].z,
                  geometry.skinWeights[vertexIndex].w
                ];

                var inverses = [
                  skeleton.boneInverses[boneIndices[0]],
                  skeleton.boneInverses[boneIndices[1]],
                  skeleton.boneInverses[boneIndices[2]],
                  skeleton.boneInverses[boneIndices[3]]
                ];

                var skinMatrices = [
                  skeleton.bones[boneIndices[0]].matrixWorld,
                  skeleton.bones[boneIndices[1]].matrixWorld,
                  skeleton.bones[boneIndices[2]].matrixWorld,
                  skeleton.bones[boneIndices[3]].matrixWorld
                ];

                //this checks to see if the mesh has any morphTargets - jc
                if (geometry.morphTargets !== "undefined") {
                  var morphMatricesX = [];
                  var morphMatricesY = [];
                  var morphMatricesZ = [];
                  var morphMatricesInfluence = [];

                  for (var mt = 0; mt < geometry.morphTargets.length; mt++) {
                    //collect the needed vertex info - jc
                    morphMatricesX[mt] =
                      geometry.morphTargets[mt].vertices[vertexIndex].x;
                    morphMatricesY[mt] =
                      geometry.morphTargets[mt].vertices[vertexIndex].y;
                    morphMatricesZ[mt] =
                      geometry.morphTargets[mt].vertices[vertexIndex].z;
                    morphMatricesInfluence[mt] = morphTargetInfluences[mt];
                  }
                }

                var finalVector = new THREE.Vector4();

                if (mesh.geometry.morphTargets !== "undefined") {
                  var morphVector = new THREE.Vector4(
                    vector.x,
                    vector.y,
                    vector.z
                  );

                  for (var mt = 0; mt < geometry.morphTargets.length; mt++) {
                    //not pretty, but it gets the job done - jc
                    morphVector.lerp(
                      new THREE.Vector4(
                        morphMatricesX[mt],
                        morphMatricesY[mt],
                        morphMatricesZ[mt],
                        1
                      ),
                      morphMatricesInfluence[mt]
                    );
                  }
                }

                for (var k = 0; k < 4; k++) {
                  var tempVector = new THREE.Vector4(
                    vector.x,
                    vector.y,
                    vector.z
                  );
                  tempVector.multiplyScalar(weights[k]);
                  //the inverse takes the vector into local bone space
                  tempVector
                    .applyMatrix4(inverses[k])
                    //which is then transformed to the appropriate world space
                    .applyMatrix4(skinMatrices[k]);
                  finalVector.add(tempVector);
                }

                output +=
                  "\t\t\tvertex " +
                  finalVector.x +
                  " " +
                  finalVector.y +
                  " " +
                  finalVector.z +
                  "\n";
              }
            }
            output += "\t\tendloop\n";
            output += "\tendfacet\n";
          }
        }
      }
    }
  });

  output += "endsolid exported\n";

  return output;
};
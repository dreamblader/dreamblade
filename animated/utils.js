const getMatrixString = (matrix) => {
  return `matrix(${matrix.a},${matrix.b},${matrix.c},${matrix.d},${matrix.e},${matrix.f})`;
};

const particleFrames = (matrix, startY, moveY, scaleMin, tier = 0) => {
  const frames = [
    {
      ...innerParticleStatus,
      opacity: 0,
      transform: getMatrixString(
        translate(
          scale(rotate(matrix, 180), scaleMin / 2, scaleMin / 2),
          0,
          startY
        )
      ),
    },
    {
      opacity: 1,
      transform: getMatrixString(translate(rotate(matrix, 270), 0, moveY)),
    },
    {
      ...outterParticleStatus,
      transform: getMatrixString(
        translate(scale(rotate(matrix, 0), 1, 1), 0, moveY)
      ),
    },
    {
      opacity: 1,
      transform: getMatrixString(translate(rotate(matrix, 90), 0, moveY)),
    },
    {
      opacity: 0,
      transform: getMatrixString(
        translate(scale(rotate(matrix, 180), scaleMin, scaleMin), 0, moveY)
      ),
    },
  ];

  for (let i = 0; i < tier; i++) {
    frames.unshift(frames[0]);
  }

  return frames;
};

const moonFrames = (matrix) => {
  return [
    {
      filter: "brightness(0.75)",
      transform: getMatrixString(rotate(matrix, 345)),
    },
    {
      filter: "brightness(1)",
      transform: getMatrixString(rotate(matrix, 0)),
    },
    {
      filter: "brightness(1.25)",
      transform: getMatrixString(rotate(matrix, 15)),
    },
    { filter: "brightness(1)", transform: getMatrixString(rotate(matrix, 0)) },
    {
      filter: "brightness(0.75)",
      transform: getMatrixString(rotate(matrix, 345)),
    },
  ];
};

const emptyMatrix = () => {
  return {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
  };
};

import type { InputRequirements } from 'src/global';

export const splitRequirements = (inputReqs: InputRequirements) => {
  const fi = inputReqs?.fi || null;
  const node = inputReqs?.node || null;

  if (!fi || !node) {
    // bypass defualt
    return {
      fi,
      node: {
        subNodes: []
      }
    };
  } else {
    return { fi, node };
  }
};

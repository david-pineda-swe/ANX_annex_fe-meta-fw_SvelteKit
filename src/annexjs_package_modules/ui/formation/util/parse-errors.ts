export const parseZFDerrors = (provided: Array<any>) => {
  return Array.isArray(provided) ? provided : JSON.parse(provided).map((e: any) => e.message);
};

export const parseEnhancedZFDerrors = (provided: Array<any>, nodeIndex: any) => {
  return Array.isArray(provided)
    ? provided
    : JSON.parse(provided).map((err: any) => {
        const { message, path } = err;
        const targetNode = nodeIndex[path[0]];
        const fieldLocation = path.join(' > ');
        const label = targetNode ? targetNode.label : fieldLocation;
        return {
          label,
          message
        };
      });
};

const DEFAULT_STRING = "default";

export function mockSegmentNode(props: SchemaNode): SchemaNode {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      nodeType,
      nodeMeta,
      // element
      // component
      content
    } = props;

    return {
      nodeId: nodeId || DEFAULT_STRING,
      nodeType: nodeType || DEFAULT_STRING,
      nodeMeta, // !
      // element
      // component
      content // !
    };
  } else {
    // DEFAULT
  }
}
const DEFAULT_STRING = "default"

// ! fix this lint
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mockContentForNode(props) {
  if (props) {
    // DYNAMIC MOCK
    let { isRoot, header, subHeader } = props;
    
    return {
      // contentId: id || DEFAULT_STRING,
      header: header || DEFAULT_STRING,
      subHeader: subHeader || DEFAULT_STRING,
      subContent: [] // ! << MOCK SCHEMA NODES
    };
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK Content Model');
  };
}
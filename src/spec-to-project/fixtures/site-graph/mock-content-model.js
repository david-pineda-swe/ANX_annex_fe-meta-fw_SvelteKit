const DEFAULT_STRING = "default"

// ! fix this lint
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mockContentModel(props) {
  if (props) {
    // DYNAMIC MOCK
    let { id, title, subTitle } = props;
    
    return {
      contentId: id || DEFAULT_STRING,
      title: title || DEFAULT_STRING,
      subTitle: subTitle || DEFAULT_STRING,
      schema: [] // ! << MOCK SCHEMA NODES
    };
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK Content Model');
  };
}
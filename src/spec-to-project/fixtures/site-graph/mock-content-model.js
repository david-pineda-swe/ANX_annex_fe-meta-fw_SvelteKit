const DEFAULT_STRING = "default"

// ! fix this lint
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mockContentModel({never: id, never: title, never: subTitle}) {
  return {
    contentId: id || DEFAULT_STRING,
    title: title || DEFAULT_STRING,
    subTitle: subTitle || DEFAULT_STRING,
    schema: [] // ! MOCK SCHEMA NODES
  };
}
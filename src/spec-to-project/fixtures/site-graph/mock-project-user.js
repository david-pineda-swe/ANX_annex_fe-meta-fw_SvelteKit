// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mockProjectUser(props) {
  if (props) {
    // DYNAMIC MOCK
    // let {} = props;
    return {
      userId: "adsf938?",
      name: {
        first: "Billy",
        middle: "Bob",
        last: "Thorton",
      },
      // createdNodes // < ContentNode(s)
      // editedNodes // < ContentNode(s)
    };
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK FOR ProjectUser');
    return {
      userId: "adsf938?",
      name: {
        first: "Billy",
        middle: "Bob",
        last: "Thorton",
      },
      // createdNodes // < ContentNode(s)
      // editedNodes // < ContentNode(s)
    };
  }
}
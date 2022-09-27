export function mockProjectUser(props: ProjectUser): ProjectUser {
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
      title: 'test',
      role: 'admin'
    };
  } else {
    // STATIC MOCK
    return {
      userId: "adsf938?",
      name: {
        first: "Billy",
        middle: "Bob",
        last: "Thorton",
      },
      title: 'test',
      role: 'admin'
    };
  }
}
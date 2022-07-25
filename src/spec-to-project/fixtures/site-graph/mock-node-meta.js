import { mockProjectUser } from "./mock-project-user"

const DEFAULT_STRING ="default"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mockNodeMeta(props) {
  if (props) {
    // DYNAMIC MOCK
    let { tags, testId } = props;

    return {
      tags: tags || [DEFAULT_STRING, DEFAULT_STRING],
      testId: testId || DEFAULT_STRING,
      created: new Date(), // UTC @ now
      createdBy: mockProjectUser(),
      edited: new Date(), // UTC @ now
      editedBy:mockProjectUser(),
      versionId: "adojonc33u9aj333n",
      notes: "This is a sample note(s)"
    }
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK FOR NodeMeta');
  }
}
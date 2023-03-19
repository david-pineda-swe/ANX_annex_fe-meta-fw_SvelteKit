import type { NodeMeta } from "src/global";
import { mockProjectUser } from "./mock-project-user"

const DEFAULT_STRING = "default_node_meta";
const RANDO_USER = {
  userId: 'rando',
  name: {
    first: 'Johnny',
    middle: 'apple',
    last: 'Seed'
  },
  title: 'Author',
  role: 'Editor'
};

export function mockNodeMeta(props: NodeMeta): NodeMeta {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      versionId,
      testId,
      tags,
      created,
      createdBy,
      edited,
      editedBy,
      notes
    } = props;

    return {
      // RESOURCE TRACKING
      nodeId: nodeId || '*',
      versionId: versionId || "adojonc33u9aj333n",
      testId: testId || DEFAULT_STRING,
      // - CMS AUTHOR / EDITING
      tags: tags || [DEFAULT_STRING, DEFAULT_STRING],
      created: created || new Date(), // UTC @ now
      createdBy: createdBy || mockProjectUser(RANDO_USER),
      edited: edited || new Date(), // UTC @ now
      editedBy: editedBy || mockProjectUser(RANDO_USER),
      notes: notes || "This is a sample note(s)"
    }
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK FOR NodeMeta');
  }
}
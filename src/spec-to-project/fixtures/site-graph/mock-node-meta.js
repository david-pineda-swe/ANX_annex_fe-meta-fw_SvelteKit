import { mockProjectUser } from "./mock-project-user"

const DEFAULT_STRING ="default"
// const DEFAULT_USER = {
//   // ID
//   // NAME: {}
//   // ETC
// }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function mockNodeMeta({testId}) {
  return {
    tags: ["", DEFAULT_STRING],
    testId: testId || DEFAULT_STRING,
    created: 1657833934849, // UTC
    createdBy: mockProjectUser(),
    edited: 1657833934849, // UTC
    editedBy:mockProjectUser()
  }
}
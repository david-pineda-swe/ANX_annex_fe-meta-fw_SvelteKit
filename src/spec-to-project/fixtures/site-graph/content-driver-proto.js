import { mockNodeMeta } from "./mock-node-meta";
import { mockContentModel } from "./mock-content-model";

export const ProtoSiteGraph = {
  // - SiteGraph <<<<<<<<<<<<<<<<<<<<<<
  integrations: { // ! <<
    firstParty: [],
    thirdParty: []
  },
  nodeMeta: mockNodeMeta(),
  sitemap: {
    // - SiteMap << is PageRoute type
    isRoot: true, // ! or consider lack of parent computed
    routeSlug: "/",
    contentId: "*",
    contentModel: mockContentModel()
  }
}
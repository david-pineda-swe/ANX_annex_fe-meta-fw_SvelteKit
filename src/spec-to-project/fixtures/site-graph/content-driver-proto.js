// NOTE: All website property aspects and content will be initialized by this object

import { mockNodeMeta } from "./mock-node-meta";
import { mockContentForNode } from "./mock-content-node";

export const ProtoSiteGraph = {
  // - SiteGraph
  nodeType: "SITE_GRAPH",
  nodeMeta: mockNodeMeta({
    testId: "merc"
  }),
  integrations: { // ! <<
    firstParty: [],
    thirdParty: []
  },
  siteTree: {
    // NOTE: PageRoute ContentNode TYPE
    nodeType: 'PAGE_ROUTE',
    nodeMeta: mockNodeMeta({ // fix: node meta req projectUsers // START HERE
      testId: "lip"
    }),

    // - for ContentNode
    content: mockContentForNode({ // return a root ContentNode
      contentId: "*",
      isRoot: true,
      header: "lime",
      subHeader: "coolAid"
    }),

    // - for PageRoute

    // state
    isRoot: true, // ! or consider lack of parent computed
    flowControl: {
      a_published: true,
      b_indexOnly: true,
      c_sitemapVisible: true,
      d_navVisible: true,
      e_subRoutesRender: true,
    },

    // route
    routeTier: 'A',
    routeType: 'category',
    routeSlug: "/",
    // subRoutes?
  }
}
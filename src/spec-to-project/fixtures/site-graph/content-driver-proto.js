// NOTE: All website property aspects and content will be initialized by this object

import { mockNodeMeta } from "./mock-node-meta";
import { mockNodeContent } from "./mock-node-content";

export const ProtoSiteGraph = {
  // - SiteGraph
  nodeType: "SITE_GRAPH",
  nodeMeta: mockNodeMeta({
    testId: "merc"
  }),
  integrations: { // !
    firstParty: [],
    thirdParty: []
  },
  siteTree: {
    // NOTE: is PageRoute ContentNode TYPE
    nodeId: '*',
    nodeType: 'PAGE_ROUTE',
    nodeMeta: mockNodeMeta({
      testId: "lip"
    }),
    //
    // element // !
    // component // !

    // - for ContentNode
    content: mockNodeContent({ // return a root ContentNode
      contentId: '',
      header: "lime",
      subHeader: "coolAid",
      // copyBlob // !
      subContent: []
    }),

    // - for PageRoute
    // state
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
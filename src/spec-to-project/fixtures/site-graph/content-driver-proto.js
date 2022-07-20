import { mockNodeMeta } from "./mock-node-meta";
import { mockContentModel } from "./mock-content-model";

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
    // - PageRoute TYPE
    // - SchemaNode extensions
    nodeType: 'PAGE_ROUTE',
    nodeMeta: mockNodeMeta({ // fix: node meta req projectUsers
      testId: "lip"
    }),

    // - state
    isRoot: true, // ! or consider lack of parent computed
    flowControl: {
      a_published: true,
      b_indexOnly: true,
      c_sitemapVisible: true,
      d_navVisible: true,
      e_subRoutesRender: true,
    },
    // - route
    routeTier: 'A',
    routeType: 'category',
    routeSlug: "/",
    // subRoutes?

    // - content
    contentId: "*",
    contentModel: mockContentModel({
      id: "cherry",
      title: "lime",
      subTitle: "coolAid"
    })
  }
}
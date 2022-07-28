// NOTE: All website property aspects and content will be initialized by this object

import { mockNodeMeta } from "./mock-node-meta";
import { mockPageRoute } from "./mock-page-route";
import { mockSegmentContent } from "./mock-segment-content";

export const ProtoSiteGraph = {
  // - SiteGraph
  nodeId: 'asdf',
  nodeType: "SITE_GRAPH",
  nodeMeta: mockNodeMeta({
    versionId: 'qjkdsaf3493cj3',
    testId: "merc",
    // tags ?
    created: new Date(), // UTC @ now,
    createdBy: null,
    edited: null,
    editedBy: null,
    notes: ''
  }),

  // integrations: { // !
  //   firstParty: [],
  //   thirdParty: []
  // },

  siteTree: mockPageRoute({
    nodeId: '*',
    nodeType: 'PAGE_ROUTE',
    nodeMeta: mockNodeMeta({
      versionId: 'qjkdsaf3493cj3',
      testId: "merc",
      // tags ?
      created: new Date(), // UTC @ now,
      createdBy: null,
      edited: null,
      editedBy: null,
      notes: ''
    }),
    content: mockSegmentContent({ // return a root SegmentNode
      contentId: '',
      header: "lime",
      subHeader: "coolAid",
      // copyBlob // !
      subContent: []
    }),
    //
    // component // !
    // element // !

    // state
    isRoot: true,
    // error
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
    routeSlug: "/"
    // routeMeta: // !
    // subRoutes
  })
}
// NOTE: All website property aspects and content will be initialized by this object

import { mockNodeMeta } from "./mock-node-meta";
import { mockPageRoute } from "./mock-page-route";
import { mockNodeContent } from "./mock-segment-content";

export const ProtoSiteGraph = {
  // ! SITE_GRAPH 
  type: "SITE_GRAPH",
  id: 'adsfdd',
  nodeMeta: mockNodeMeta({
    nodeId: 'asdf',
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

  routeStructure: mockPageRoute({ // REKEY:  => routeStructure
    // ! PAGE_ROUTE - SCHEMA_NODE
    type: 'PAGE_ROUTE',
    id: '*',
    nodeMeta: mockNodeMeta({
      nodeId: '*',
      versionId: 'qjkdsaf3493cj3',
      testId: "merc",
      // tags ?
      created: new Date(), // UTC @ now,
      createdBy: null,
      edited: null,
      editedBy: null,
      notes: ''
    }),

    content: mockNodeContent({ // return a root CONTENT_SEGMENT
      contentId: '',
      header: "lime",
      subHeader: "coolAid",
      copyBlock: 'TEST MARKDOWN COMING SOON! <<<<<<<', // !
      subContent: []
    }),
    // subRoutes // !

    isRoot: true,
    // error
    flowControl: {
      a_published: true,
      b_indexOnly: true,
      c_sitemapVisible: true,
      d_navVisible: true,
      e_subRoutesRender: true,
    },
    tier: 'A',
    category: 'category',
    slug: "/test-a"
    // routeMeta: // !
  })
}
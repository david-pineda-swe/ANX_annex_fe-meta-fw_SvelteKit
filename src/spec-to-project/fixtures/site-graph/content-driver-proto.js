// NOTE: All website property aspects and content will be initialized by this object

import { mockNodeMeta } from "./mock-node-meta";
import { mockPageRoute } from "./mock-page-route";
import { mockContentSegment } from "./mock-content-segment";

export const ProtoSiteGraph = {
  // ! SITE_GRAPH 
  nodeId: 'adsfdd',
  nodeType: "SITE_GRAPH",
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
    // ! PAGE_ROUTE: A-1
    nodeId: 'A-1',
    nodeType: 'PAGE_ROUTE',
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
    // isRoot: true,
    // error
    flowControl: {
      a_published: true,
      b_indexOnly: true,
      c_sitemapVisible: true,
      d_navVisible: true,
      e_renderAsParentRoute: true,
    },
    tier: 'A',
    category: 'category',
    slug: "/test-a",
    // routeMeta: // !
    content: mockContentSegment({ // return a root-page CONTENT_SEGMENT
      nodeId: 'page-test-a',
      nodeType: 'PAGE_CONTENT_SEGMENT',
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
      //
      component: {
        componentType: 'STRUCTURE',
        componentTag: 'row',
        // element: {}
      },
      header: "lime",
      subHeader: "coolAid",
      copyBlock: 'TEST MARKDOWN COMING SOON! <<<<<<<', // !
      subContent: []
    }),
    subRoutes: [
      mockPageRoute({
        // ! PAGE_ROUTE: B-1
        nodeId: 'B-1',
        nodeType: 'PAGE_ROUTE',
        nodeMeta: mockNodeMeta({
          nodeId: '**',
          versionId: 'qjkdsaf48djcj3',
          testId: "derp",
          // tags ?
          created: new Date(), // UTC @ now,
          createdBy: null,
          edited: null,
          editedBy: null,
          notes: ''
        }),
        // isRoot: false,
        // error
        flowControl: {
          a_published: true,
          b_indexOnly: true,
          c_sitemapVisible: true,
          d_navVisible: true,
          e_renderAsParentRoute: true,
        },
        tier: 'B',
        category: 'category',
        slug: "/test-b",
        // routeMeta: // !
        content: mockContentSegment({ // return a root-page CONTENT_SEGMENT
          nodeId: 'page-test-b',
          nodeType: 'PAGE_CONTENT_SEGMENT',
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
          //
          component: {
            componentType: 'STRUCTURE',
            componentTag: 'row',
            // element: {}
          },
          header: "GATORADE",
          subHeader: "CUCUMBER",
          copyBlock: 'TEST MARKDOWN COMING SOON! <<<<<<<', // !
          subContent: []
        }),
        subRoutes: [
          mockPageRoute({
            // ! PAGE_ROUTE: C-1
            nodeId: 'C-1',
            nodeType: 'PAGE_ROUTE',
            nodeMeta: mockNodeMeta({
              nodeId: '***',
              versionId: 'qjkdsaf4IDN4UD',
              testId: "flerp",
              // tags ?
              created: new Date(), // UTC @ now,
              createdBy: null,
              edited: null,
              editedBy: null,
              notes: ''
            }),
            // isRoot: false,
            // error
            flowControl: {
              a_published: true,
              b_indexOnly: true,
              c_sitemapVisible: true,
              d_navVisible: true,
              e_renderAsParentRoute: true,
            },
            tier: 'C',
            category: 'category',
            slug: "/test-c",
            // routeMeta: // !
            content: mockContentSegment({ // return a root-page CONTENT_SEGMENT
              nodeId: 'page-test-c',
              nodeType: 'PAGE_CONTENT_SEGMENT',
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
              //
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'row',
                // element: {}
              },
              header: "GATORADE",
              subHeader: "CUCUMBER",
              copyBlock: 'TEST MARKDOWN COMING SOON! <<<<<<<', // !
              subContent: []
            }),
            subRoutes: [] // NULL PAST THIS
          })
        ]
        })
      ]
  })
}
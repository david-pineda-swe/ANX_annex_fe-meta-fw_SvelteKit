// NOTE: All website property aspects and content will be initialized by this object

import { mockNodeMeta } from "./mock-node-meta";
import { mockPageRoute } from "./mock-page-route";
import { generateNavigationNode } from "./generate-navigation-node";
import { mockContentSegment } from "./mock-content-segment";

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const locateAndParse_md_Insert = (targetInsertContentFile: string) => {
  const targetInsertDirectory = 'src/spec-to-project/fixtures/site-graph/test-content';

  // available files
  const files = fs.readdirSync(path.join(targetInsertDirectory));
  console.log('>> aval insert files:', files);

  // matter and content
  // TODO - TEST THAT EXTENSION OF FILE ENDS IN ".md"
  //! or account and parse a .js version to satisfy "GrayMatterFile" type interface
  // TODO - KILL THE matter().buffer output
  
  if (!files.includes(targetInsertContentFile)) {
    // FAIL - to find target insert .md file
    return {
      content: '',
      data: null,
      isEmpty: true,
      excerpt: ''
    }
  } else {
    // OK
    const targetFileContent = fs.readFileSync(path.join(targetInsertDirectory, targetInsertContentFile), 'utf-8');
    const mdInsertParsed = matter(targetFileContent)
  
    console.log(`>> Target: ${targetInsertContentFile} found .md insert: ${mdInsertParsed}`);

    return mdInsertParsed;
  }
}

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

  // TODO - THIRD PARTY INTEGRATIONS
  // integrations: {
  //   firstParty: [],
  //   thirdParty: []
  // },

  routeStructure: [mockPageRoute({ // REKEY:  => serializePageRoute
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
    routeMeta: {
      // - searchTags
      // - openGraph
      navigationNode: generateNavigationNode({
        nodeId: '*',
        label: 'Test Route A-1: Alice',
        actionType: 'INTERNAL_ROUTE'
      })
    },
    tier: 'A',
    category: 'category',
    slug: "/test-a",
    // error
    flowControl: {
      A_indexOnly: true,
      B_sitemapVisible: true,
      C_navVisible: true,
      D_published: true,
      E_renderAsParentRoute: false,
      F_renderAsIndependentRoute: true
    },
    content: mockContentSegment({ // START - PAGE_CONTENT
      nodeId: 'page-test-a',
      nodeType: 'PAGE_CONTENT',
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
        componentTag: 'page-content',
        // element: {}
      },
      subContent: [
        // DEMO - A CONTENT STRUCTURE
        mockContentSegment({
          nodeId: 'test-stack-a-1',
          nodeType: 'CONTENT_SEGMENT',
          // nodeMeta
          component: {
            componentType: 'STRUCTURE',
            componentTag: 'stack-row',
            element: {
              tag: 'span',
              // domId: 'ta-dur',
              classSet: ['apple', 'bapple', 'stock-test', 'nerp-derp-querp']
              // attrSet
            }
          },
          subContent: [
            mockContentSegment({
              nodeId: 'test-col-a-1-1',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'order-column',
                element: {
                  // tag: 'div',
                  // domId: 'ta-dur',
                  // classSet: []
                  // attrSet
                }
              },
              subContent: [
                mockContentSegment({
                  nodeId: 'test-md-render-a',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'INSERT',
                    componentTag: 'md-block',
                    element: {
                      // tag: 'div',
                      // domId: 'ta-dur',
                      // classSet: []
                      // attrSet
                      // FIX - THIS INVOKES AN FS READ - SVELTE SIDE CANNOT HANDLE SERVER SIDE FS
                      // mdInsert: locateAndParse_md_Insert('test-splash_A-1.md')
                    }
                  }
                })
              ]
            }),
            mockContentSegment({
              nodeId: 'test-col-a-1-2',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'order-column',
                element: {
                  // tag: 'div',
                  // domId: 'ta-dur',
                  // classSet: []
                  // attrSet
                }
              },
              subContent: []
            }),
            mockContentSegment({
              nodeId: 'test-col-a-1-3',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'order-column',
                element: {
                  // tag: 'div',
                  // domId: 'ta-dur',
                  // classSet: []
                  // attrSet
                }
              },
              subContent: []
            }),
            mockContentSegment({
              nodeId: 'test-col-a-1-4',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'order-column',
                element: {
                  // tag: 'div',
                  // domId: 'ta-dur',
                  // classSet: []
                  // attrSet
                }
              },
              subContent: []
            })
          ]
        }),
        mockContentSegment({
          nodeId: 'test-stack-a-2',
          nodeType: 'CONTENT_SEGMENT',
          // nodeMeta
          component: {
            componentType: 'STRUCTURE',
            componentTag: 'stack-row'
          },
          subContent: [
            mockContentSegment({
              nodeId: 'test-col-a-2-1',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'order-column',
                element: {
                  // tag: 'div',
                  // domId: 'ta-dur',
                  classSet: ['w75']
                  // attrSet
                }
              },
              subContent: []
            }),
            mockContentSegment({
              nodeId: 'test-col-a-2-2',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'order-column',
                element: {
                  // tag: 'div',
                  // domId: 'ta-dur',
                  classSet: ['w25']
                  // attrSet
                }
              },
              subContent: []
            }),
          ]
        })
      ]
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
        routeMeta: {
          // - searchTags
          // - openGraph
          navigationNode: generateNavigationNode({
            nodeId: '*',
            label: 'Test Route B-1: Bob',
            actionType: 'INTERNAL_ROUTE'
          })
        },
        tier: 'B',
        category: 'category',
        slug: "/test-b",
        // error
        flowControl: {
          A_indexOnly: true,
          B_sitemapVisible: true,
          C_navVisible: true,
          D_published: true,
          E_renderAsParentRoute: true,
          F_renderAsIndependentRoute: false
        },
        content: mockContentSegment({ // START - PAGE_CONTENT
          nodeId: 'page-test-b',
          nodeType: 'PAGE_CONTENT',
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
          subContent: [
            // DEMO - B CONTENT STRUCTURE
            mockContentSegment({
              nodeId: 'test-stack-b-1',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'stack-row'
              },
              subContent: [
                mockContentSegment({
                  nodeId: 'test-col-b-1-1',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'order-column',
                    element: {
                      // tag: 'div',
                      // domId: 'ta-dur',
                      // classSet: []
                      // attrSet
                    }
                  },
                  subContent: []
                }),
                mockContentSegment({
                  nodeId: 'test-col-b-1-2',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'order-column',
                    element: {
                      // tag: 'div',
                      // domId: 'ta-dur',
                      // classSet: []
                      // attrSet
                    }
                  },
                  subContent: []
                }),
                mockContentSegment({
                  nodeId: 'test-col-b-1-3',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'order-column',
                    element: {
                      // tag: 'div',
                      // domId: 'ta-dur',
                      // classSet: []
                      // attrSet
                    }
                  },
                  subContent: []
                })
              ]
            }),
            mockContentSegment({
              nodeId: 'test-stack-b-2',
              nodeType: 'CONTENT_SEGMENT',
              // nodeMeta
              component: {
                componentType: 'STRUCTURE',
                componentTag: 'stack-row'
              },
              subContent: [
                mockContentSegment({
                  nodeId: 'test-col-b-2-1',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'order-column',
                    element: {
                      // tag: 'div',
                      // domId: 'ta-dur',
                      classSet: ['w25']
                      // attrSet
                    }
                  },
                  subContent: []
                }),
                mockContentSegment({
                  nodeId: 'test-col-b-2-2',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'order-column',
                    element: {
                      // tag: 'div',
                      // domId: 'ta-dur',
                      classSet: ['w75']
                      // attrSet
                    }
                  },
                  subContent: []
                }),
              ]
            })
          ]
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
            routeMeta: {
              // - searchTags
              // - openGraph
              navigationNode: generateNavigationNode({
                nodeId: '*',
                label: 'Test Route C-1: Casey',
                actionType: 'INTERNAL_ROUTE'
              })
            },
            tier: 'C',
            category: 'category',
            slug: "/test-c",
            // error
            flowControl: {
              A_indexOnly: true,
              B_sitemapVisible: true,
              C_navVisible: true,
              D_published: true,
              E_renderAsParentRoute: true,
              F_renderAsIndependentRoute: false
            },
            content: mockContentSegment({ // START - PAGE_CONTENT
              nodeId: 'page-test-c',
              nodeType: 'PAGE_CONTENT',
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
              subContent: [
                // DEMO - C CONTENT STRUCTURE
                mockContentSegment({
                  nodeId: 'test-stack-c-1',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'stack-row'
                  },
                  subContent: [
                    mockContentSegment({
                      nodeId: 'test-col-c-1-1',
                      nodeType: 'CONTENT_SEGMENT',
                      // nodeMeta
                      component: {
                        componentType: 'STRUCTURE',
                        componentTag: 'order-column',
                        element: {
                          // tag: 'div',
                          // domId: 'ta-dur',
                          // classSet: []
                          // attrSet
                        }
                      },
                      subContent: []
                    }),
                    mockContentSegment({
                      nodeId: 'test-col-c-1-2',
                      nodeType: 'CONTENT_SEGMENT',
                      // nodeMeta
                      component: {
                        componentType: 'STRUCTURE',
                        componentTag: 'order-column',
                        element: {
                          // tag: 'div',
                          // domId: 'ta-dur',
                          // classSet: []
                          // attrSet
                        }
                      },
                      subContent: []
                    })
                  ]
                }),
                mockContentSegment({
                  nodeId: 'test-stack-c-2',
                  nodeType: 'CONTENT_SEGMENT',
                  // nodeMeta
                  component: {
                    componentType: 'STRUCTURE',
                    componentTag: 'stack-row'
                  },
                  subContent: [
                    mockContentSegment({
                      nodeId: 'test-col-c-2-1',
                      nodeType: 'CONTENT_SEGMENT',
                      // nodeMeta
                      component: {
                        componentType: 'STRUCTURE',
                        componentTag: 'order-column',
                        element: {
                          // tag: 'div',
                          // domId: 'ta-dur',
                          classSet: ['w25']
                          // attrSet
                        }
                      },
                      subContent: []
                    }),
                    mockContentSegment({
                      nodeId: 'test-col-c-2-2',
                      nodeType: 'CONTENT_SEGMENT',
                      // nodeMeta
                      component: {
                        componentType: 'STRUCTURE',
                        componentTag: 'order-column',
                        element: {
                          // tag: 'div',
                          // domId: 'ta-dur',
                          classSet: ['w50']
                          // attrSet
                        }
                      },
                      subContent: []
                    }),
                    mockContentSegment({
                      nodeId: 'test-col-c-2-3',
                      nodeType: 'CONTENT_SEGMENT',
                      // nodeMeta
                      component: {
                        componentType: 'STRUCTURE',
                        componentTag: 'order-column',
                        element: {
                          // tag: 'div',
                          // domId: 'ta-dur',
                          classSet: ['w25']
                          // attrSet
                        }
                      },
                      subContent: []
                    }),
                  ]
                })
              ]
            }),
            subRoutes: [] // NULL PAST THIS
          })
        ]
        })
      ]
  })]
}
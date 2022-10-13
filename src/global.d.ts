import type { GrayMatterFile } from 'gray-matter';

/// <reference types="@sveltejs/kit" />

//! ---SUB_META TRAITS---
interface UserNameTraits {
  first: string,
  middle: string,
  last: string
}

interface ProjectUser {
  userId: string,                   // UUID
  name: UserNameTraits,
  title: sting,
  role:string
}

interface NodeMeta {
  //--- RESOURCE TRACKING
  nodeId: string,
  versionId: string,                // UUID
  testId: string,                   // UUID for A/B corelation testing
  //--- CMS AUTHOR / EDITING
  tags?: Array<string>
  created: Date
  createdBy: ProjectUser,
  edited: Date
  editedBy: ProjectUser,
  notes?: string,
}

interface SchemaNode {
  nodeId: string,
  nodeType: string, // SITE_GRAPH, PAGE_ROUTE, PAGE_CONTENT, CONTENT_SEGMENT, APP_FUNCTION_ENTRY
  nodeMeta?: NodeMeta
}

//! ---CONTENT_SEGMENT---
interface ElementAttr {
  name: string,
  value: string
}

interface NodeElementTraits {
  tag?: string,
  domId?: string,
  classSet?: Array<string>,
  attrSet?: Array<ElementAttr>
  //
  // DOCS - https://www.npmjs.com/package/gray-matter #Returned object
  mdInsert?: GrayMatterFile
}

interface NodeComponentTraits {
  componentType?: string,           // STRUCTURE, STANDARD, DISPLAY, FUNCTION, SYSTEMS, METRICS, DIAGNOSTICS
  componentTag?: string,            // STRUCTURES_AVLB_EXAMPLE: row(s) < column(s) < feature(s) < subFeature(s)
  element?: NodeElementTraits       // !
}

interface ContentSegment extends SchemaNode {
  // - extended from SchemaNode
  // nodeId
  // nodeType
  // nodeMeta
  
  component: NodeComponentTraits,
  header?: string, // X for copyBlock
  subHeader?: string, // X for copyBlock
  
  subContent?: Array<ContentSegment>

  isRoot?: boolean, // X
  isParalax?: boolean,
  isFlex?: boolean,
}

// ! ---PAGE_ROUTE---
interface ControlError {
  severity?: string,
  process?:string,
  error?: string
}

interface FlowControlTraits {
  a_published: boolean,
  b_indexOnly: boolean,
  c_sitemapVisible: boolean,
  d_navVisible: boolean,
  e_renderAsParentRoute: boolean
}

// - PAGE ROUTE
interface PageRoute extends SchemaNode {
  // - EXTENDED FROM SchemaNode
  // nodeId
  // nodeType
  // nodeMeta

  // - CONTENT
  content: ContentSegment
  subRoutes?: Array<pageRoute>,

  // - ROUTE STATE
  isRoot?: boolean,
  error?: ControlError
  flowControl: FlowControlTraits,

  // - ROUTE DEFINITION KEYS
  tier: string,
  category: string,
  slug: string,

  // - ROUTE DETAILS
  // openGraph: string, // ! < TODO
  // searchTags: Array<string>
}

interface ContentTier {
  content: ContentSegment,
  subRouteContent: ContentTier,
  tier: string
}

//! ---SITE_GRAPH---
interface SiteGraph extends SchemaNode {
  // - EXTENDED FROM SchemaNode
  // nodeId: string,
  // nodeType: string,
  // nodeMeta: NodeMeta

  // integrations // ! TODO
  routeStructure: PageRoute
}

//! ---ANNEX_CONTENT_DRIVER_RESULTS---
interface PageModelResult {
  // Is a runtime derived abstraction
  // result state
  allTiersAreResolved?: boolean,
  allContentIsResolved?: boolean,
  success?:boolean,
  errors?: Array<ControlError>,
  tierPosition: string,
  tierSequence: Array<string>,
  // content models
  pageRouteSequence: Array<pageRoute>
  contentStructure?: ContentTier;
}

interface DynamicRouteData {
  pageModel: PageModelResult
}
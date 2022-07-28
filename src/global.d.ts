/// <reference types="@sveltejs/kit" />

//! ---META---
interface UserNameTraits {
  first: string,
  middle: string,
  last: string
}

interface ProjectUser {
  userId: string, // UUID
  name: UserNameTraits,
  title: sting,
  role:string
}

interface NodeMeta {
  versionId: string, // UUID
  testId: string, // UUID for A/B corelation testing
  tags?: Array<string>
  created: Date
  createdBy: ProjectUser,
  edited: Date
  editedBy: ProjectUser,
  notes?: string,
}

//! ---CONTENT_NODE---
interface ElementAttr {
  name: string,
  value: string
}

interface NodeElementTraits {
  tag?: string,
  domId?: string,
  classSet?: Array<string>,
  attrSet?: Array<ElementAttr>
}

interface NodeComponentTraits {
  functionType: string,
  tagName: string,
}

interface NodeContentTraits {
  contentId: string, // UUID
  header?: string,
  subHeader?: string,
  // copyBlob?  // ! TODO Markdown support <<
  subContent?: Array<SegmentNode> // Rows < Columns < Features < SubFeatures
}

interface SegmentNode {
  // - META
  nodeId: string, // UUID
  nodeType: string,
  nodeMeta: NodeMeta

  // - STRUCTURE
  element?: NodeElementTraits
  component?: NodeComponentTraits

  // - CONTENT
  content?: NodeContentTraits
}

// !- BLOCK(S)
// !-- SEGMENT(S)
// !--- FEATURES(S)
// !--- SUB-FEATURES(S)

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
  e_subRoutesRender: boolean
}

// - PAGE ROUTE
interface RouteMeta {
  openGraph: string, // !
  searchTags: Array<string>
}
interface PageRoute extends SegmentNode {
  // - extended from SegmentNode
  // nodeId
  // nodeType
  // nodeMeta
  // content
  // component
  // element

  // - state
  isRoot?: boolean,
  error?: ControlError
  flowControl: FlowControlTraits,

  // - route
  routeTier: string,
  routeType: string,
  routeSlug: string,
  routeMeta?: RouteMeta,
  subRoutes?: Array<pageRoute>
}

//! ---SITE_GRAPH---
interface SiteGraph {
  // - META
  nodeId: string, // UUID
  nodeType: string,
  nodeMeta: NodeMeta

  // integrations // !
  siteTree: PageRoute
}

//! ---ANNEX_SYSTEM---
interface ContentResult {
  // Is a runtime derived abstraction
  // result state
  allTiersAreResolved?: boolean,
  allContentModelsAreResolved?: boolean,
  success?:boolean,
  errors?: Array<ControlError>,
  tierPosition: string,
  tierSequence: Array<string>,
  // content models
  targetPageRoute: PageRoute,
  pageRouteSequence: Array<pageRoute>
}
/// <reference types="@sveltejs/kit" />

// - S-NODE COMPONENTS

interface ElementAttr {
  name: string,
  value: string
}

interface UserNameTraits {
  first: string,
  middle: string,
  last: string
}

interface ProjectUser {
  userId: string,
  name: UserNameTraits,
  createdNodes?: Array<ContentNode>,
  editededNodes?: Array<ContentNode>
}

interface NodeMeta { // fIX // START HERE <<<
  tags?: Array<string>
  testId: string, // For A/B corelation testing
  created: Date
  // createdBy: ProjectUser, // !
  edited: Date
  // editedBy: ProjectUser, // !
  versionId: string, // UUID,
  notes?: string,
}

interface NodeComponentTraits {
  functionType: string,
  tagName: string,
}

interface NodeContentTraits {
  contentId: string,
  header?: string,
  subHeader?: string,
  // copyBlob?  // ! TODO Markdown support <<
  subContent?: Array<ContentNode> // Blocks > Segments > Features > SubFeatures
}

interface NodeElementTraits {
  tag?: string,
  domId?: string,
  classSet?: Array<string>,
  attrSet?: Array<ElementAttr>
}

interface ContentNode {
  // - META
  nodeId: string,
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
// ! OTHER SITEGRAPH NODES

// ! - ROUTE AND CONTENT HYDRATION BELOW -

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
interface PageRoute extends ContentNode {
  // - extended from ContentNode
  // nodeType
  // nodeMeta
  // content
  // component
  // element

  // - state
  error?: ControlError
  isRoot?: boolean,
  flowControl: FlowControlTraits,

  // - route
  routeTier: string,
  routeType: string,
  routeSlug: string,
  subRoutes?: Array<pageRoute>

  // TBD OPEN GRAPH
  // TBD SEARCH TAGS
  //
}

interface SiteGraph {
  // - META
  nodeId: string,
  nodeType: string,
  nodeMeta: NodeMeta

  // integrations // ! << TODO
  siteTree: PageRoute
}

// - CONTENT RESULT
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
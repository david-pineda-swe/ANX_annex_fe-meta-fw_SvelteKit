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
  createdNodes: SchemaNode,
  editededNodes: SchemaNode
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
  nodeType: string,
  nodeTagName: string,
  subNodes: Array<ContentNode>
}

interface NodeContentTraits {
  header: string,
  subHeader: string,
  // copyBlock  // ! TODO Markdown support <<
  subContent: Array<ContentNode> // Blocks > Segments > Features > SubFeatures
}

interface NodeElementTraits {
  tag: string,
  domId: string,
  classSet: Array<string>,
  attrSet: Array<ElementAttr>
}

interface SchemaNode {
  // NOTE: IS ROOT <<
  // - META
  nodeType: string,
  nodeMeta: NodeMeta
}

interface ContentNode extends SchemaNode {
  // - extend SchemaNode
  // nodeType
  // nodeMeta

  component?: NodeComponentTraits

  contentId: string,
  content?: NodeContentTraits

  element?: NodeElementTraits
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
  // - extend SchemaNode
  // nodeType
  // nodeMeta
  // - extend ContentNode
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

interface SiteGraph extends SchemaNode {
  // - extend SchemaNode
  // nodeType
  // nodeMeta

  // integrations // ! <<
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
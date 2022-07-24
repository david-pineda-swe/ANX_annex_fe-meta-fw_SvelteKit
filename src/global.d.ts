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

interface NodeMeta { // fIX
  tags?: Array<string>
  testId: string, // For A/B corelation testing
  created: Date
  // createdBy: ProjectUser, // !
  edited: Date
  // editedBy: ProjectUser, // !
  versionId: string, // UUID,
  notes?: string,
}

interface NodeContentTraits {
  header: string,
  subHeader: string,
  // copyBlock  // ! TODO <<
}

interface NodeComponentTraits {
  nodeType: string,
  nodeTagName: string,
  subNodes: Array<SchemaNode>
}

interface NodeElementTraits {
  tag: string,
  domId: string,
  classSet: Array<string>,
  attrSet: Array<ElementAttr>
}

// - BASE Node TYPES
interface SchemaNode {
  // - CONTENT
  content?: NodeContentTraits
  // - COMPONENT
  component?: NodeComponentTraits
  // - ELEMENT
  element?: NodeElementTraits
  // - META
  nodeType: string,
  nodeMeta?: NodeMeta
}

// - EXTENDED SchemaNode TYPES
interface ContentModel {
  contentId: string,
  title: string,
  subTitle: string,
  schema: Array<SchemaNode> // Blocks > Segments > Features
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
interface PageRoute extends SchemaNode {
  // - extensions
  // content // ? rename or use contentModel
  // component
  // element
  // nodeType
  // nodeMeta

  // - state
  error?: ControlError
  isRoot?: boolean,
  flowControl: FlowControlTraits,

  // - route
  routeTier: string,
  routeType: string,
  routeSlug: string,
  subRoutes?: Array<pageRoute>

  // - content
  contentId: string,
  contentModel?: ContentModel
  // TBD OPEN GRAPH
  // TBD SEARCH TAGS
  //
}

interface SiteGraph {
  // integrations // ! <<
  nodeMeta: NodeMeta,
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
/// <reference types="@sveltejs/kit" />

// - MODULE COMPONENTS

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

interface NodeMeta {
  tags?: Array<string>
  // testId ? // For A/B corelation testing
  // created: Date // ! <<
  createdBy: ProjectUser,
  // edited: Date
  editedBy: ProjectUser,
  // versionId: UUID
  notes?: string,
}

interface NodeElementTraits {
  tag: string,
  domId: string,
  classSet: Array<string>,
  attrSet: Array<ElementAttr>
}

interface NodeComponentTraits {
  nodeType: string,
  nodeTagName: string,
  subNodes: Array<SchemaNode>
}

interface NodeContentTraits {
  header: string,
  subHeader: string,
  // copyBlock  // ! TODO <<
  nodeMeta?: NodeMeta,
}

// - BASE Node TYPES
interface SchemaNode {
  // - CONTENT
  content: NodeContentTraits
  // - COMPONENT
  component: NodeComponentTraits
  // - ELEMENT
  element: NodeElementTraits
}

// - EXTENDED SchemaNode TYPES
interface ContentModel extends SchemaNode {
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
  error?: ControlError
  isRoot?: boolean,
  contentId: string,
  contentModel: ContentModel
  routeTier: string,
  routeType: string,
  routeSlug: string,
  flowControl: FlowControlTraits,
  subRoutes: Array<pageRoute>
  // TBD OPEN GRAPH
  // TBD SEARCH TAGS
}

interface SiteGraph {
  // integrations // !
  nodeMeta: NodeMeta,
  siteMap: PageRoute
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
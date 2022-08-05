/// <reference types="@sveltejs/kit" />

//! ---SUB_META TRAITS---
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
  type: string,
  id: string,
  meta: NodeMeta
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
}

interface NodeComponentTraits {
  componentType?: string,           // STRUCTURE, FUNCTION, DISPLAY, SYSTEM, METRICS
  componentTag?: string,            // STRUCTURES_AVLB_EXAMPLE: Row(s) < Column(s) < Feature(s) < SubFeature(s)
  element?: NodeElementTraits       // !
}

interface NodeContentTraits {
  contentId: string,               // UUID
  header?: string,
  subHeader?: string,
  copyBlock?  // ! TODO Markdown support << // START HERE <<
  // todo: callout to a copy only svelte component
  // todo: TRY INJECTING MARKDOWN - simulate a server provided segment node
  subContent?: Array<ContentSegment>
}

interface ContentSegment extends SchemaNode {
  // - extended from SchemaNode
  // type
  // id
  // meta

  component: NodeComponentTraits,
  content?: NodeContentTraits,

  isRoot?: boolean,
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
  e_subRoutesRender: boolean
}

// - PAGE ROUTE
interface RouteMeta {
  openGraph: string, // ! TODO
  searchTags: Array<string>
}

interface RouteDisplaytraits {
  isRoot?: boolean,
  error?: ControlError
  flowControl: FlowControlTraits,
  routeTier: string,
  routeType: string,
  routeSlug: string,
  routeMeta?: RouteMeta, // ! TODO
}
interface PageRoute extends SchemaNode {
  // - extended from SchemaNode
  // type
  // id
  // meta
  content: NodeContentTraits
  displayConfig: RouteDisplayTraits,
  subRoutes?: Array<pageRoute>
}

//! ---SITE_GRAPH---
interface SiteGraph extends SchemaNode {
  // - extended from SchemaNode
  // type: string,
  // id: string,
  // meta: NodeMeta

  // integrations // ! TODO
  routeSequence: PageRoute
}

//! ---ANNEX_CONTENT_DRIVER_RESULTS---
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
import type { GrayMatterFile } from 'gray-matter';

/// <reference types="@sveltejs/kit" />

// TODO - ABSTRACT TYPES from an index
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
  createdBy: ProjectUser | null,
  edited: Date | null,
  editedBy: ProjectUser | null,
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
  mdInsert?: GrayMatterFile         // This is an abstraction of a markdown file gnerated by the gray-matter package module
}

interface NodeComponentTraits {
  componentType?: string,           // STRUCTURE, STANDARD, DISPLAY, FUNCTION, SYSTEMS, METRICS, DIAGNOSTICS
  componentTag?: string,            // STRUCTURES_AVLB_EXAMPLE: row(s) < column(s) < feature(s) < subFeature(s)
  element?: NodeElementTraits
}

interface ContentSegment extends SchemaNode {
  // - extended from SchemaNode
  // nodeId
  // nodeType
  // nodeMeta
  
  component: NodeComponentTraits,
  subContent?: Array<ContentSegment> 
}

// ! ---PAGE_ROUTE---
interface ControlError {
  severity?: string, // warn, hign, priority
  process?:string,
  message?: string
}

interface FlowControlTraits {
  // for MENU
  A_indexOnly: boolean,
  B_sitemapVisible: boolean,
  C_navVisible: boolean,
  // for RENDERING
  D_published: boolean,
  E_renderAsParentRoute: boolean,
  F_renderAsIndependentRoute: booleant
}

// - PAGE ROUTE
interface NavigationNode {
  nodeId: string;
  label: string | null;
  actionType: string; // [INTERNAL_ROUTE(d), EXTERNAL_LINK, SLOT, PROCESS_[target_handle_key]_[...params]]
  //
  displayTypes?: Array<string>; // possible: [label(d), icon, image]
  slug?: string;
  url?: string;
  linkTarget?: string; // DOCS linkTarget - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target
  elementId?: string;
  classes?: string;
  icon?: string;
  image?: string;
  subNodes?: Array<NavigationNode>
}

interface RouteMeta {
  // searchTags? // TBD 
  // openGraph? // TBD 
  navigationNode?: NavigationNode
}

interface PageRoute extends SchemaNode {
  // - EXTENDED FROM SchemaNode
  // ! META
  // nodeId
  // nodeType
  // nodeMeta
  routeMeta?: RouteMeta;
  // ! NAVIGATION
  tier: string;
  category: string;
  slug: string;
  // ! STATE MANAGEMENT
  error?: ControlError;
  flowControl?: FlowControlTraits;
  // ! CONTENT
  content?: ContentSegment;
  subRoutes?: Array<pageRoute>;
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
  routeStructure: Array<PageRoute>
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
  pageModel: PageModelResult;
  contentNavigation: Array<NavigationNode>
}

interface NavigationConfig {
  dataSource: string; // SPEC_CONFIG, CONTENT_NAV, CMS_CALL_[QUERY_KEY]
  menuLocations: Array<string>; // PRIMARY, TP_TRAY, RT_TRAY, BT_TRAY, LT_TRAY, FOOTER
  // TODO - Consider "SWAP_PROXY" for dynamic spec component swap
  navigationType: string; // = [SHALLOW(d), NESTED, EXPANDABLE, SWAP_PROXY(replace w/ $pec component)]
  navListItems: Array<NavigationNode>
  //
  menuOrder?: number;
  navListLabel?: string;
  elementId?: string;
  classes?: string;
  mobileOnly?: boolean; // X ?
}

interface ProjectConfig {
  // siteMeta: ???
  // indexRouteMeta: RouteMeta
  // thirdPartyConfigs: any
  navigations: Array<NavigationConfig>
}

// FORMATION FORMS / INPUTS
interface InputRequirements {
  fi: any; // FormInterface
  node: any; // FormOutlineNode
}
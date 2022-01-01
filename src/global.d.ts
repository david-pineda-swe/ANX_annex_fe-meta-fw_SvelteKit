/// <reference types="@sveltejs/kit" />

interface ElementAttributes {
  name: string
  value: string
}

interface ContentElement {
  type: string,
  id: string,
  class: string,
  attrs: Array<ElementAttributes>
}
interface ContentSubComponent {
  label: string,
  subLabel: string,
  layoutClass: string,
  componentType: string,
  contentElements: Array<ContentElement>

}
interface SectionComponent {
  header: string,
  subHeader: string,
  layoutClass: string,
  componentType: string,
  subComponents: Array<ContentSubComponent>
}
interface ContentGraph {
  contentId: string,
  pageId: string,
  contentFor: string,
  sections: Array<SectionComponent>
}

interface DynamicRouteConfiguration {
  content: ContentGraph
  routeTier: string,
  routeType: string,
  routeSlug: string,
  pageId: string,
  a_indexOnly: boolean,
  b_published: boolean,
  c_sitemapVisible: boolean,
  d_mainNavVisible: boolean,
  subRoutes: Array<DynamicRouteConfiguration>
}
interface validatedRoute {
  allTiersAreSatisfied: boolean;
  config: DynamicRouteConfiguration
  lastTier: string;
  segmentConfigs: Array<DynamicRouteConfiguration>;
}
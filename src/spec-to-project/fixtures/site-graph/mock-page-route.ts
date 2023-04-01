// const DEFAULT_STRING = 'default_page_route';

import type { PageRoute } from "src/global";

// START HERE BY MOCKING A PAGE_ROUTE FROM THE CONTENT DRIVER PROTO

export function mockPageRoute(props: PageRoute): PageRoute {
  if (props) {
    // DYNAMIC MOCK
    const {
      // ! META
      nodeId,
      nodeType,
      nodeMeta,
      routeMeta,
      // - searchTags
      // - openGraph
      // - navigationNode
      // ! NAVIGATION
      tier,
      category,
      slug,
      // ! STATE MANAGEMENT
      // error,
      flowControl,
      // ! CONTENT
      content,
      subRoutes,
    } = props;
    return {
      // ! META
      nodeId: nodeId,
      nodeType: nodeType || 'n/a',
      nodeMeta,
      routeMeta,
      // - searchTags
      // - openGraph
      // - navigationNode
      // ! NAVIGATION
      tier: tier || 'ERROR',
      category: category || 'N/A',
      slug: slug || 'N/A',
      // ! STATE MANAGEMENT
      // error
      flowControl: flowControl || {
        A_indexOnly: true,
        B_sitemapVisible: true,
        C_navVisible: true,
        D_published: true,
        E_renderAsParentRoute: true,
        F_renderAsIndependentRoute: true
      },
      // ! CONTENT
      content,
      subRoutes: subRoutes || [],
    };
  } else {
    // ! NO PROPS !
    console.error("(!) PAGE_ROUTE MOCK REQUIRED (!)");
  }
}
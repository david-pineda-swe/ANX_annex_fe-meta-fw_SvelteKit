const DEFAULT_STRING = 'default_page_route';

// START HERE BY MOCKING A PAGE_ROUTE FROM THE CONTENT DRIVER PROTO

export function mockPageRoute(props: PageRoute): PageRoute {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      nodeType,
      nodeMeta, // ! => routeMeta
      content,
      // component,
      // element,
      isRoot,
      // error,
      flowControl,
      routeTier,
      routeType,
      routeSlug,
      routeMeta,
      subRoutes
      // searchTags
    } = props;
    return {
      nodeId: nodeId || DEFAULT_STRING,
      nodeType: nodeType || DEFAULT_STRING,
      nodeMeta,
      content,
      // component // !
      // element // !
      isRoot: isRoot || false,
      // error
      flowControl: flowControl || {
        a_published: true,
        b_indexOnly: true,
        c_sitemapVisible: true,
        d_navVisible: true,
        e_subRoutesRender: true,
      },
      routeTier: routeTier || '',
      routeType: routeType || '',
      routeSlug: routeSlug || '',
      routeMeta: routeMeta || null,
      subRoutes: subRoutes || []

    };
  } else {
    // ! NO PROPS !
    console.error("(!) PAGE_ROUTE MOCK REQUIRED (!)");
  }
}
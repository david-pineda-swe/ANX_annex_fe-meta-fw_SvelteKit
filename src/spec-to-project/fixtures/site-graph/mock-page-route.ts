// const DEFAULT_STRING = 'default_page_route';

// START HERE BY MOCKING A PAGE_ROUTE FROM THE CONTENT DRIVER PROTO

export function mockPageRoute(props: PageRoute): PageRoute {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      nodeType,
      nodeMeta,
      //
      content,
      subRoutes,
      //
      isRoot,
      // error,
      flowControl,
      tier,
      category,
      slug,
      // openGraph
      // searchTags
    } = props;
    return {
      nodeType: nodeType || 'n/a',
      nodeId: nodeId,
      nodeMeta,
      //
      content,
      subRoutes: subRoutes || [],
      //
      isRoot: isRoot || false,
      // error
      flowControl: flowControl || {
        a_published: true,
        b_indexOnly: true,
        c_sitemapVisible: true,
        d_navVisible: true,
        e_renderAsParentRoute: true,
      },
      tier: tier || 'ERROR',
      category: category || 'N/A',
      slug: slug || 'N/A'
      // openGraph // ! << TODO
      // searchtags // ! << TODO
    };
  } else {
    // ! NO PROPS !
    console.error("(!) PAGE_ROUTE MOCK REQUIRED (!)");
  }
}
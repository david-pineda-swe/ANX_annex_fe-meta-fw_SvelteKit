// const DEFAULT_STRING = 'default_page_route';

// START HERE BY MOCKING A PAGE_ROUTE FROM THE CONTENT DRIVER PROTO

const DEFAULT_DISPLAY_CONFIG = {
  isRoot: false,
  // error
  flowControl: {
    a_published: true,
    b_indexOnly: true,
    c_sitemapVisible: true,
    d_navVisible: true,
    e_subRoutesRender: true,
  },
  routeTier: 'ERROR',
  routeType: 'N/A',
  routeSlug: 'N/A',
  routeMeta: {
    // openGraph
    // searchtags
  },
};

export function mockPageRoute(props: PageRoute): PageRoute {
  if (props) {
    // DYNAMIC MOCK
    const {
      type,
      id,
      meta,
      //
      content,
      //
      displayConfig,
      // - isRoot,
      // - error,
      // - flowControl,
      // - routeTier,
      // - routeType,
      // - routeSlug,
      // - routeMeta
      // -- openGraph
      // -- searchTags
      subRoutes
    } = props;
    return {
      type: type || 'n/a',
      id: id,
      meta,
      //
      content,
      //
      displayConfig: displayConfig || DEFAULT_DISPLAY_CONFIG,
      //
      subRoutes: subRoutes || []

    };
  } else {
    // ! NO PROPS !
    console.error("(!) PAGE_ROUTE MOCK REQUIRED (!)");
  }
}
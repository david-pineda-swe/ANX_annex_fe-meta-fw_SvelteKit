// TODO: RESTART THE PROTOTYPE SCHEMA WITH MODULAR IMPORTS FOR CONSISTENCY AND OTF CONFIGURATION

// NOTE: All standard and basic website aspects and properties will be initialized by this object

export const ProtoSiteGraph = {
  // - SiteGraph
  // nodeMeta
  title: "New annex",
	integrations: {
		firstParty: [],
		thirdParty: []
	},
  // OK - SITE - MAP
  // NOTE: - is an nTier config abstraction
  sitemap: {
    // PageRoute
    routeSlug: "/",
    contentId: "", // >> FOR PAGE to CONTENT MODEL IDENTIFICATION
    content: {
      nodeMeta: {}, // TBD - CL MODULE META
    },
    contentModel: {
      // X CONTENT MODEL
      
      contentId: '',
      title: '',
      subTitle: '',
      classSet: [''], // [string]!
      schema: []
    },
    flowControl: {
      // error?
      a_published: true,
      b_indexOnly: true,
      c_sitemapVisible: true,
      d_navVisible: true,
      e_subRoutesRender: true,
    },
    //
		// TBD: open graph meta conventions > for copy paste support
		// TBD: search tags (keywords)
    subRoutes: [
      // ROUTES - STANDARD
      // ✅ about
      // ✅ contact
      // ✅ privacy-policy
      // ✅ sitemap

      // DYNAMIC ROUTES CONFIG
      // NOTE: tierUser or tierOrg could exist
      // levels: org > user > cat, resources, id, etc.
      // {
      //   // X ROUTE CONFIGURATION
      //   routeTier: "A",
      //   routeType: "category", // >> product, articles, resources, projects
      //   routeSlug: "test-a",
      //   contentId: "*", // >> GETS LAYOUT AND CONTENT
      //   contentModel: { }, // use DEMO fixture...
      //   flowControl: {
      //     // error?
      //     // ACCESS - to r/ via these levels of precedence
      //     a_published: true,           // 1. public accessible
      //     b_indexOnly: true,           // 2. if route should support child routes only (NO PAGE CONFIG)
      //     c_sitemapVisible: true,      // 3. assignable to sitemap
      //     d_navVisible: true,      // 4. assignable to navigation
      //     e_subRoutesRender: true, // 5. displayed as child module in parent route
      //   },
      //   subRoutes: [ // NOTE: << sub-r/ children of TIER-A
      //     {
      //       // X ROUTE CONFIGURATION
      //       routeTier: "B",
      //       routeType: "resource",
      //       routeSlug: "test-b",
      //       contentId: "*",
      //       contentModel: {}, // use DEMO fixture...
      //       flowControl: {
      //         // error?
      //         a_published: true,
      //         b_indexOnly: true,
      //         c_sitemapVisible: true,
      //         d_navVisible: true,
      //         e_subRoutesRender: true,
      //       },
      //       subRoutes: [  // NOTE: << sub-r/ children of TIER-B
      //         {
      //           // X ROUTE CONFIGURATION
      //           routeTier: "C",
      //           routeType: "product",
      //           routeSlug: "test-c",
      //           contentId: "*",
      //           contentModel: {}, // use DEMO fixture...
      //           flowControl: {
      //             // error?
      //             a_published: true,
      //             b_indexOnly: true,
      //             c_sitemapVisible: true,
      //             d_navVisible: true,
      //             e_subRoutesRender: true,
      //           },
      //           subRoutes: [] // NOTE: << sub-r/ children of TIER-C
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   // X ROUTE CONFIGURATION
      //   routeTier: "A",
      //   routeType: "category",
      //   routeSlug: "demo",
      //   contentId: "*",
      //   contentModel: {}, // use DEMO fixture...
      //   flowControl: {
      //     // error?
      //     a_published: true,
      //     b_indexOnly: true,
      //     c_sitemapVisible: true,
      //     d_navVisible: true,
      //     e_subRoutesRender: true,
      //   },
      //   subRoutes: [
      //     {
      //       // X ROUTE CONFIGURATION
      //       routeTier: "B",
      //       routeType: "resource",
      //       routeSlug: "material-icons",
      //       contentId: "asdf",
      //       contentModel: {}, // use DEMO fixture...
      //       flowControl: {
      //         // error?
      //         a_published: true,
      //         b_indexOnly: true,
      //         c_sitemapVisible: true,
      //         d_navVisible: true,
      //         e_subRoutesRender: true,
      //       },
      //       subRoutes: [] 
      //     }
      //   ]
      // }
    ]
  }
};
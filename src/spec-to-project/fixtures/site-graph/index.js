// DEPRECATED

export const ProtoSiteGraph = {
  // - SiteGraph
  title: "New annex",
	integrations: {
		firstParty: [],
		thirdParty: []
	},
  // OK - SITE - MAP
  // NOTE: - is an nTier config abstraction
  routeStructure: {
    // PageRoute
    slug: "/",
    content: {
      contentId: '', // >> FOR PAGE to CONTENT MODEL IDENTIFICATION
      classSet: [''], // [string]!
      subContent: []
    },
    flowControl: {
      // error?
      A_indexOnly: true,
      B_sitemapVisible: true,
      C_navVisible: true,
      D_published: true,
      E_renderAsParentRoute: true,
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
      //   tier: "A",
      //   category: "category", // >> product, articles, resources, projects
      //   slug: "test-a",
      //   contentId: "*", // >> GETS LAYOUT AND CONTENT
      //   contentModel: { }, // use DEMO fixture...
      //   flowControl: {
      //     // error?
      //     // ACCESS - to r/ via these levels of precedence
      //     A_indexOnly: true,           // 2. if route should support child routes only (NO PAGE CONFIG)
      //     B_sitemapVisible: true,      // 3. assignable to sitemap
      //     C_navVisible: true,      // 4. assignable to navigation
      //     D_published: true,           // 1. public accessible
      //     E_renderAsParentRoute: true, // 5. displayed as child module in parent route
      //   },
      //   subRoutes: [ // NOTE: << sub-r/ children of TIER-A
      //     {
      //       // X ROUTE CONFIGURATION
      //       tier: "B",
      //       category: "resource",
      //       slug: "test-b",
      //       contentId: "*",
      //       contentModel: {}, // use DEMO fixture...
      //       flowControl: {
      //         // error?
      //         A_indexOnly: true,
      //         B_sitemapVisible: true,
      //         C_navVisible: true,
      //         D_published: true,
      //         E_renderAsParentRoute: true,
      //       },
      //       subRoutes: [  // NOTE: << sub-r/ children of TIER-B
      //         {
      //           // X ROUTE CONFIGURATION
      //           tier: "C",
      //           category: "product",
      //           slug: "test-c",
      //           contentId: "*",
      //           contentModel: {}, // use DEMO fixture...
      //           flowControl: {
      //             // error?
      //             A_indexOnly: true,
      //             B_sitemapVisible: true,
      //             C_navVisible: true,
      //             D_published: true,
      //             E_renderAsParentRoute: true,
      //           },
      //           subRoutes: [] // NOTE: << sub-r/ children of TIER-C
      //         }
      //       ]
      //     }
      //   ]
      // },
      // {
      //   // X ROUTE CONFIGURATION
      //   tier: "A",
      //   category: "category",
      //   slug: "demo",
      //   contentId: "*",
      //   contentModel: {}, // use DEMO fixture...
      //   flowControl: {
      //     // error?
      //     A_indexOnly: true,
      //     B_sitemapVisible: true,
      //     C_navVisible: true,
      //     D_published: true,
      //     E_renderAsParentRoute: true,
      //   },
      //   subRoutes: [
      //     {
      //       // X ROUTE CONFIGURATION
      //       tier: "B",
      //       category: "resource",
      //       slug: "material-icons",
      //       contentId: "asdf",
      //       contentModel: {}, // use DEMO fixture...
      //       flowControl: {
      //         // error?
      //         A_indexOnly: true,
      //         B_sitemapVisible: true,
      //         C_navVisible: true,
      //         D_published: true,
      //         E_renderAsParentRoute: true,
      //       },
      //       subRoutes: [] 
      //     }
      //   ]
      // }
    ]
  }
};
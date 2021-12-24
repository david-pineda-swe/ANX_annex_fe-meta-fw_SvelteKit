// NOTE: All standard and basic website aspects and properties will be initialized by this object

export const ProtoSiteGraph = {
  // SITE - METADATA
	meta: {
		title: "New annex",
	},
	integrations: {
		firstParty: [],
		thirdParty: []
	},
  // SITE - MAP
  // - is an nTier config abstraction
  sitemap: {
    routeSlug: "/",
    pageId: "", // >> GETS LAYOUT AND CONTENT
		// TBD: open graph meta conventions
		// TBD: search tags (keywords)
    possibleRoutes: [
      // ROUTES - STANDARD
      // ✅ about
      // ✅ contact
      // ✅ privacy-policy
      // ✅ sitemap

      // DYNAMIC ROUTES CONFIG
      // NOTE: tierUser or tierOrg could exist
      // levels: org > user > cat, resources, id, etc.
      {
        routeTier: "A",
        routeType: "category", // >> product, articles, resources, projects
        routeSlug: "test-a",
        pageId: "*", // >> GETS LAYOUT AND CONTENT
        // ACCESS - to r/ via these levels of precedence
        a_indexOnly: true,           // 1. if route should support child routes only (NO PAGE CONFIG)
        b_published: true,           // 2. public accessible
        c_sitemapVisible: true,      // 3. populate on sitemap
        d_mainNavVisible: true,      // 4. populate on main-nav 
        possibleRoutes: [ // NOTE: << sub-r/ children of TIER-A
          {
            routeTier: "B",
            routeType: "resource",
            routeSlug: "test-b",
            pageId: "*",
            a_indexOnly: true,
            b_published: true,
            c_sitemapVisible: true,
            d_mainNavVisible: true,
            possibleRoutes: [  // NOTE: << sub-r/ children of TIER-B
              {
                routeTier: "C",
                routeType: "product",
                routeSlug: "test-c",
                pageId: "*",
                a_indexOnly: true,
                b_published: true,
                c_sitemapVisible: true,
                d_mainNavVisible: true,
                possibleRoutes: [] // NOTE: << sub-r/ children of TIER-C
              }
            ]
          }
        ]
      },
      {
        routeTier: "A",
        routeType: "category",
        routeSlug: "demo",
        pageId: "*",
        a_indexOnly: true,
        b_published: true,
        c_sitemapVisible: true,
        d_mainNavVisible: true,
        possibleRoutes: [
          {
            routeTier: "B",
            routeType: "resource",
            routeSlug: "material-icons",
            pageId: "asdf",
            a_indexOnly: true,
            b_published: true,
            c_sitemapVisible: true,
            d_mainNavVisible: true,
            possibleRoutes: [] 
          }
        ]
      }
    ]
  }
};
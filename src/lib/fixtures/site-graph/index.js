// NOTE: All standard and basic website aspects and properties will be initialized by this object

export const ProtoSiteGraph = {
	// SITE - METADATA
	title: "New annex",
	// SITE - MAP
	// - is an nTier config abstraction
	sitemap: {
		routeSlug: "/",
		pageId: "", // >> GETS LAYOUT AND CONTENT
		possibleRoutes: [
			// ROUTES - STANDARD
			// ✅ about
			// ✅ contact
			// ✅ privacy-policy
			// ✅ sitemap

			// ROUTES - DYNAMIC
			// NOTE: tierUser or tierOrg could exist
			// levels: org > user > cat, resources, id, etc.
			{
				routeTier: "A",
				routeType: "category", // >> product, articles, resources, projects
				routeSlug: "test-a",
				pageId: "", // >> GETS LAYOUT AND CONTENT
				// ACCESS - to r/ via these levels of precedence
				a_indexOnly: true,           // 1. if route should support child routes only (NO PAGE CONFIG)
				b_published: true,           // 2. public accessible
				c_sitemapVisible: true,      // 3. populate on sitemap
				d_mainNavVisible: true,      // 4. populate on main-nav 
				possibleRoutes: [] // << sub-r/ children
			}
		]
	}
};
// NOTE: All standard and basic website aspects and properties will be initialized by this object

export const ProtoSiteGraph = {
	// SITE - METADATA
	title: "New annex",
	// SITE - MAP
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
			{
				routeTierKey: "A",
				routeType: "category", // >> product, articles, resources, projects
				routeSlug: "test-a",
				pageId: "", // >> GETS LAYOUT AND CONTENT
				// ACCESS - to r/ via these levels of precedence 
				a_published: true,
				b_sitemapVisible: true,
				c_mainNavVisible: true,
				d_passThrough: true,
				possibleRoutes: [] // << sub-r/ children
			}
		]
		// todo: consider loose leaf routes
	}
};

// NOTE: tierUser or tierOrg could proceed
// levels: user or org, cat, resources, id

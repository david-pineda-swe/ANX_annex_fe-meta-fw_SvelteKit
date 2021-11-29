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
			// sitemap
			// about
			// contact
			// privacy-policy
			{
				routeTierKey: "A",
				routeType: "category", // >> product, articles, resources, projects
				routeSlug: "test-a",
				pageId: "", // >> GETS LAYOUT AND CONTENT
				// ACCESS - to r/ via these levels of precedence 
				a_published: true,
				b_siteMapVisible: true,
				c_mainNavVisible: true,
				possibleRoutes: [] // << sub-r/ children
			}
		]
		// todo: consider loose leaf routes
	}
};

// NOTE: tierUser or tierOrg could proceed
// levels: user or org, cat, resources, id
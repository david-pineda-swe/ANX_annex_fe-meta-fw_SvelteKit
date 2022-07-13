export const contentModel = {
	contentId: 'fdsa', 
	pageId: 'asdf',
	meta: {
		notes: 'material-icons',
	},
	schema: [
		// NOTE: Array<ContentLevelModule>
		{
			header: 'Material Icons',
			subHeader: 'Some stuff about the feature',
			layoutClass: 'single-col', // example: ['single-col', 'double-col', 'single-row', etc]
			componentType: 'gallery',
			subModules: [
				// NOTE: Array<ContentLevelModule>
				{
					label: 'yadda',
					subLabel: 'yadda bing bang', 
					layoutClass: 'portrait',
					componentType: 'feature-card',
					contentElements: [
						// NOTE: Array<ContentElement>
						// h3 
						// hr 
						// br 
						// p
						// a
						// img
					]
				}
			]
		}
	]
}
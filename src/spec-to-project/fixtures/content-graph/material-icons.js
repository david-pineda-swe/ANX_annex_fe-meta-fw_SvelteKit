export const contentGraph = {
	contentId: 'fdsa', 
	pageId: 'asdf',
	contentFor: 'material-icons',
	sections: [
		// NOTE: Array<SectionComponent>
		{
			header: 'Material Icons',
			subHeader: 'Some stuff about the feature',
			layoutClass: 'single-col', // example: ['single-col', 'double-col', 'single-row', etc]
			componentType: 'gallery',
			subComponents: [
				// NOTE: Array<ContentSubComponent>
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
import { mockNodeMeta } from "../site-graph/mock-node-meta";

export const contentModel = {
	// ! CONTENT SEGMENT result for PageRoute

		contentId: 'nerp',
		header: 'Test Page Header',
		subHeader: 'Test Page Sub Header',
		// ! copyBlob
		subContent: [
			// NOTE: Array<SegmentNode>
			{
				// CONTENT_NODE
				// ! BLOCK_CONTAINER
				nodeId: "asdd3idnfameennenfnf33",
				nodeType: "BLOCK",
				nodeMeta: mockNodeMeta({
					testId: 'test-block-node'
				}),
				element: {
					// tag
					// domId
					classSet: ['single-col'] // example: ['single-col', 'double-col', 'single-row', etc]
					// attrSet
				},
				component: {
					functionType: 'container',
					tagName: 'page-block'
				},
				content: {
					contentId: 'foo',
					header: 'Test Block Header',
					subHeader: 'Test Block Sub Header',
					// ! copyBlob
					subContent: [
						// NOTE: Array<SegmentNode>
						{
							// CONTENT_NODE
							// ! SEGMENT_CONTAINER
							nodeId: 'moop',
							nodeType: 'SEGMENT',
							nodeMeta: mockNodeMeta({
								testId: 'test-segment-node'
							}),
							element: {
								// tag
								// domId
								classSet: ['test-seg'] // example: ['single-col', 'double-col', 'single-row', etc]
								// attrSet
							},
							component: {
								functionType: 'container',
								tagName: 'page-segment'
							},
							content: {
								contentId: 'bar',
								header: 'yadda',
								subHeader: 'yadda bing bang',
								// ! copyBlob
								// subContent

								// TRACE: ETC ETC...
								// NOTE: Array<ContentElement>
								// h3 
								// hr 
								// br 
								// p
								// a
								// img
							}
						}
					]
				}
			}
		]
}
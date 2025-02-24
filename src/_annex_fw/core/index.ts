'use strict'

import router from './annex-router';
import contentDriver from './annex-content-driver';

// export function testAnnexCore(): void {
// 	console.warn('>> THIS IS THE ANNEX CORE...');
// }

export const annexRouter = router; // - for dynamic page validation
export const annexContentDriver = contentDriver; // - for all page content collection
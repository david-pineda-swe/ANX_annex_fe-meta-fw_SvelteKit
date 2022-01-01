'use strict'

import router from './router';
import contentDriver from './content-driver';

// export function testAnnexCore(): void {
// 	console.warn('>> THIS IS THE ANNEX CORE...');
// }

// Flavor 1: standard
export const annexRouter = router;
export const annexContentDriver = contentDriver;

// Flavor 2: default 
// const Annex = {
// 	router
// };
// export default Annex;
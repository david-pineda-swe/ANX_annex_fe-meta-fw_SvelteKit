import router from './router';

export function testAnnexCore(): void {
	console.warn('>> THIS IS THE ANNEX CORE...');
}

// Flavor 1: standard
export const annexRouter = router;

// Flavor 2: default
const Annex = {
	router
};
export default Annex;
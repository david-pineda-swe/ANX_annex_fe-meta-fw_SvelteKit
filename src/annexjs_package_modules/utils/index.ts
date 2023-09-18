export { default as smoothScroll } from "./animations/smooth-scroll";

export function isEmpty(obj) {
	// NOTE: Borrowed from Ember
	// https://github.com/emberjs/ember.js/blob/v3.22.0/packages/%40ember/-internals/metal/lib/is_empty.ts#L5

	/*
	isEmpty();                 // true
	isEmpty(null);             // true
	isEmpty(undefined);        // true
	isEmpty('');               // true
	isEmpty([]);               // true
	isEmpty({ size: 0});       // true // NOT SUPPORTING
	isEmpty({});               // false
	isEmpty('Adam Hawkins');   // false
	isEmpty([0,1,2]);          // false
	isEmpty('\n\t');           // false
	isEmpty('  ');             // false
	isEmpty({ size: 1 })       // false
	isEmpty({ size: () => 0 }) // false
	*/

	const none = obj === null || obj === undefined;
	if (none) {
		return none;
	}

	if (typeof obj.size === 'number') {
		return !obj.size;
	}

	const objectType = typeof obj;

	// if (objectType === 'object') {
	// 	let size = get(obj, 'size');
	// 	if (typeof size === 'number') {
	// 		return !size;
	// 	}
	// }

	if (typeof obj.length === 'number' && objectType !== 'function') {
		return !obj.length;
	}

	if (objectType === 'object') {
		// let length = get(obj, 'length');
		const length = obj.length;
		if (typeof length === 'number') {
			return !length;
		}
	}

	return false;
}
import { derived } from 'svelte/store';
// DOCS - https://github.com/cibernox/svelte-media
import watchMedia from 'svelte-media';

//NOTE - MANUAL MATCH TO BREAKPOINTS ON tailwind.config.cjs

const breakpoints = {
  // iphone 12 Pro
  mobile_anon: '(max-width: 390px)',
  // iphone 13 Pro max
  mobile_iPhoneXIIIproMax: '(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)',
  // Tablet and Desktop up
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)'
}

export const mediaIs = watchMedia(breakpoints);

export const mediaIsMobile = derived(mediaIs, mediaIs => mediaIs.mobile_anon || mediaIs.mobile_iPhoneXIIIproMax);

// export default mediaIs;
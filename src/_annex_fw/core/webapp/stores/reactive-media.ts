import { derived } from 'svelte/store';
// DOCS - https://github.com/cibernox/svelte-media
import watchMedia from 'svelte-media';

// BREAKPOINTS
const mobileBreakpoint = '500px';
const tabletBreakpoint = '700px';
const desktopBreakpoint = '900px';

export const breakpoints = {
  is_SM: `(max-width: ${mobileBreakpoint})`,
  isPast_SM: `(width >= ${mobileBreakpoint})`, 
  is_MD: `(min-width: ${mobileBreakpoint}) and (max-width: ${tabletBreakpoint})`,
  isPast_MD: `(width >= ${tabletBreakpoint})`, 
  is_LG: `(min-width: ${tabletBreakpoint}) and (max-width: ${desktopBreakpoint})`,
  isPast_LG: `(width >= ${desktopBreakpoint})`, 
  is_XL: `(min-width: ${desktopBreakpoint})`
};

export const mediaWatch = watchMedia(breakpoints);

export const mediaIs_SM = derived(mediaWatch, mediaWatch => mediaWatch.is_SM);
export const mediaIs_MD = derived(mediaWatch, mediaWatch => mediaWatch.is_MD);
export const mediaIs_LG = derived(mediaWatch, mediaWatch => mediaWatch.is_LG);
export const mediaIs_XL = derived(mediaWatch, mediaWatch => mediaWatch.is_XL);

export const usingMobile = derived(mediaWatch, (mediaWatch) => {
  const { is_SM, is_MD } = mediaWatch;
  return (is_SM || is_MD);
});
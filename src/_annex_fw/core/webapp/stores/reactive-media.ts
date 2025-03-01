import { derived } from 'svelte/store';
// DOCS - https://github.com/cibernox/svelte-media
import watchMedia from 'svelte-media';

// BREAKPOINTS
const mobileBreakpoint = '500px';
const tabletBreakpoint = '700px';
const desktopBreakpoint = '900px';

export const breakpoints = {
  isSmall: `(max-width: ${mobileBreakpoint})`,
  isMedium: `(min-width: ${mobileBreakpoint}) and (max-width: ${tabletBreakpoint})`,
  isLarge: `(min-width: ${tabletBreakpoint}) and (max-width: ${desktopBreakpoint})`,
  isUltra: `(min-width: ${desktopBreakpoint})`
};

export const mediaWatch = watchMedia(breakpoints);

export const mediaIsSmall = derived(mediaWatch, mediaWatch => mediaWatch.isSmall);
export const mediaIsMedium = derived(mediaWatch, mediaWatch => mediaWatch.isMedium);
export const mediaIsLarge = derived(mediaWatch, mediaWatch => mediaWatch.isLarge);
export const mediaIsUltra = derived(mediaWatch, mediaWatch => mediaWatch.isUltra);

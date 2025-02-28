// TODO - confirm not broken

import { derived } from 'svelte/store';
// DOCS - https://github.com/cibernox/svelte-media
import watchMedia from 'svelte-media';

// BREAKPOINTS
const mobileBreakpoint = '500px';
const tabletBreakpoint = '700px';
const desktopBreakpoint = '900px';

const breakpoints = {
  smallDevice: `(max-width: ${mobileBreakpoint})`,
  mediumDevice: `(min-width: ${mobileBreakpoint}) and (max-width: ${tabletBreakpoint})`,
  largeDevice: `(min-width: ${tabletBreakpoint}) and (max-width: ${desktopBreakpoint})`,
  ultraDevice: `(min-width: ${desktopBreakpoint})`
};

export const mediaIs = watchMedia(breakpoints);

export const mediaIsSmall = derived(mediaIs, mediaIs => mediaIs.smallDevice);
export const mediaIsMedium = derived(mediaIs, mediaIs => mediaIs.mediumDevice);
export const mediaIsLarge = derived(mediaIs, mediaIs => mediaIs.largeDevice);
export const mediaIsUltra = derived(mediaIs, mediaIs => mediaIs.ultraDevice);

// DOCS - https://github.com/cibernox/svelte-media
import watchMedia from 'svelte-media';

//NOTE - MANUAL MATCH TO BREAKPOINTS ON tailwind.config.cjs

const breakpoints = {
  mobile: '(max-width: 390px)',
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)'
}

const mediaIs = watchMedia(breakpoints);

export default mediaIs;
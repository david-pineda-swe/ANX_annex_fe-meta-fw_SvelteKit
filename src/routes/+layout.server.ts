import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { safeGetSession }, cookies }) => {
  const hasSessionSetup = Boolean(
    safeGetSession
  );
  
  if (hasSessionSetup) {
    const { session } = await safeGetSession();
    return {
      session,
      cookies: cookies.getAll(),
    };
  } else {
    return {
      cookies: cookies.getAll(),
    }
  }
}
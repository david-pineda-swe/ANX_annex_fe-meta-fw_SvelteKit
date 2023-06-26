import type { NavigationConfig } from "src/global";

export function generateNavigationConfig(props: NavigationConfig): NavigationConfig {
  const {
    dataSource,
    menuLocations,
    navigationType,
    navListItems,
    //
    navListLabel,
    elementId,
    classes,
    mobileOnly
  } = props;

  return {
    dataSource: dataSource || '',
    menuLocations: menuLocations || ['PRIMARY'],
    navigationType: navigationType || 'SHALLOW',
    navListItems: navListItems || [],
    //
    navListLabel: navListLabel || '',
    elementId: elementId || '',
    classes:classes || '',
    mobileOnly: mobileOnly || false,
  };
};

// TODO - ADD POSSIBILIY DOCUMENTATION
export const sampleNavConfig = {
  dataSource: 'test-mock.ts',
  menuLocations: [
    // NOTE - SUPPORTED LOCATIONS
    // 'HEADER_MOBILE',
    // 'HEADER_DESKTOP',
    // 'TP_TRAY', 
    // 'RT_TRAY',
    // 'BT_TRAY',
    // 'LT_TRAY',
    // 'FOOTER_MENU',
    // 'SITE_MENU_TRAY'
    // === $PEC_LCATIONS ===
    // ETC...
  ],
  navigationType: "NESTED",
  // navListLabel: 'Ta-dur!',
  navListItems: [],
  elementId: 'primary-nav',
  classes: 'main-navigation', 
  // mobileOnly: false,
};
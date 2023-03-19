import type { NavigationConfig } from "src/global";


export function mockNavigationConfig(props: NavigationConfig): NavigationConfig {
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
    navListLabel: navListLabel || null,
    elementId: elementId || '',
    classes:classes || '',
    mobileOnly: mobileOnly || false,
  };
};
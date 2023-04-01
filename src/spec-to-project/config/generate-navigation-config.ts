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
// For Project navigation configuration

import type { NavigationConfig } from "src/global";
import { mockNavigationConfig } from "./mock-navigation-config";

// MENUS
import primaryMenu from "./menus/primary.json";

export const NavigationConfigurations = (): NavigationConfig[] => {
  return [
    // PRIMARY_NAV
    mockNavigationConfig({
      dataSource: 'SPEC_CONFIG',
      menuLocations: ['PRIMARY', 'SITE_MENU?'],
      navigationType: "EXPANDABLE",
      navListItems: primaryMenu.items,
      // navListLabel
      elementId: 'primary-nav',
      classes: 'main-navigation asdf', 
      // mobileOnly: false
    })
    // SECONDARY_NAVS
  ]
}


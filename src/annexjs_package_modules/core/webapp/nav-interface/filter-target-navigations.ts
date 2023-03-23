import { isEmpty } from "@annexjs/uitils";
import type { NavigationConfig } from "src/global";

// - many locations for a Menu
// - one of menu per location
// - can have many menus per location

interface FilterTargetNavArgs {
  navigations: Array<NavigationConfig>;
  targetMenuLocation: string;
}

const filterTargetNavigations = (args: FilterTargetNavArgs) => {
  const { navigations, targetMenuLocation } = args;
  const configurations = navigations.filter((navConfig: NavigationConfig) => {
    return navConfig.menuLocations.includes(targetMenuLocation);
  });

  console.log('>> NAV_CONFIGS for TARGET_MENU_LOCATION:', targetMenuLocation);
  console.log(configurations);

  return (!isEmpty(configurations)) ? configurations : null;
}

export default filterTargetNavigations;
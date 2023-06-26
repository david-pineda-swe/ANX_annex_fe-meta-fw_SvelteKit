import { generateNavigationConfig, sampleNavConfig } from "@annexjs/core/webapp/nav-interface/entity/generate-navigation-config";

import primaryMenu from "./menu/primary.json";
import footerMenu from "./menu/footer.json";

const ProjectSpecNavigations = [
  // PRIMARY LT_TRAY
  generateNavigationConfig({
    ...sampleNavConfig,
    ...{
      menuLocations: ['LT_TRAY'], // 'HEADER_DESKTOP'
      navigationType: 'NESTED',
      navListLabel: 'TEST PRIMARY MENU',
      navListItems: primaryMenu.items
    }
  }),
  // FOOTER
  generateNavigationConfig({
    ...sampleNavConfig,
    ...{
      menuLocations: ['FOOTER_MENU'],
      navigationType: 'NESTED',
      navListLabel: 'TEST FOOTER MENU',
      navListItems: footerMenu.items
    }
  })
];

export default ProjectSpecNavigations;
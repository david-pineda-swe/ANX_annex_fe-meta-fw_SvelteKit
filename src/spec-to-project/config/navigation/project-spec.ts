//TODO - sampleNavConfig => defaultNavConfig
import { generateNavigationConfig, sampleNavConfig } from "@annexjs/core/webapp/nav-interface/entity/generate-navigation-config";

import primaryMenu from "./menu/primary.json";
import footerMenu from "./menu/footer.json";
import { openLeftTray } from "./module/tray-actions";

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
  // HEADER_MOBILE
  generateNavigationConfig({
    ...sampleNavConfig,
    ...{
      menuLocations: ['HEADER_MOBILE'],
      navigationType: 'SHALLOW',
      // navListLabel: 'MOBILE HEADER MENU',
      navListItems: [
        ...[
          {
            nodeId: 'slot-injected-a',
            label: 'Logo Branding',
            actionType: 'SLOT_A'
          },
          openLeftTray
        ]
      ]
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
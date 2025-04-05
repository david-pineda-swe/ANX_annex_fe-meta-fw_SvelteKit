import { generateNavigationConfig, sampleNavConfig } from "annex/core/webapp/nav-interface/entity/generate-navigation-config";
import { openTopTray, openRightTray, openBottomTray, openLeftTray } from "./module/tray-actions";

// MENUS
import testPrimaryMenu from "./menu/test-primary.json";

const baseNavConfig = {
  ...sampleNavConfig,
  ...{
    navListItems: testPrimaryMenu.items
  }
};

const customHeaderDeskNavList = [
  ...[
    {
      "nodeId": "open-top-tray",
      "label": "Top",
      "actionType": "PROCESS_handleToggleMenuTray_TP",
      // "displayTypes": ["label", "icon"],
      "displayTypes": ["icon", "label"],
      "icon": "ICONIFY_mdi:chevron-up",
      "classes": "vert-display"
    },
    {
      "nodeId": "open-right-tray",
      "label": "Right",
      "actionType": "PROCESS_handleToggleMenuTray_RT",
      "displayTypes": ["icon", "label"],
      "icon": "ICONIFY_mdi:chevron-right",
      "classes": "vert-display"
    }
  ],
  ...baseNavConfig.navListItems,
  ...[
    {
      "nodeId": "open-bottom-tray",
      "label": "Bottom",
      "actionType": "PROCESS_handleToggleMenuTray_BT",
      "displayTypes": ["icon", "label"],
      "icon": "ICONIFY_mdi:chevron-down",
      "classes": "vert-display"
    },
    {
      "nodeId": "open-left-tray",
      "label": "Left",
      "actionType": "PROCESS_handleToggleMenuTray_LT",
      "displayTypes": ["icon", "label"],
      "icon": "FA_faSquareCaretLeft", // X - use case needs re work do not use "FA" on a project
      "classes": "vert-display"
      // TODO
      // "displayTypes": ["image"],
      // "image": "test-image-name.png"
    }
  ],
];
const testMockNavigations = [
  // HEADER_DESK
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['HEADER_DESKTOP'],
      // navListLabel: 'DESKTOP Primary',
      classes: 'flat-list BR',
      navListItems: customHeaderDeskNavList,
      navigationType: 'EXPANDABLE'
    }
  }),
  // HEADER_MOBILE
  // X - PREVIOUS EXAMPLE OF SLOT INJECTED MENU > [MOBILE_MENU_SLOT_INJECTED]
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['HEADER_MOBILE'],
      // navListLabel: 'MOBILE Primary',
      classes: 'flat-list BR',
      navListItems: [
        ...[
          openTopTray,
          openRightTray
        ],
        ...[{
          nodeId: 'test-slot-inj-a',
          label: 'Logo brand',
          actionType: 'SLOT_A'
        }],
        ...[
          openBottomTray,
          openLeftTray
        ]
      ]
    }
  }),
  // TP_TRAY
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['TP_TRAY'],
      navListLabel: 'TOP Tray Mock Primary'
    }
  }),
  // RT_TRAY
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['RT_TRAY'],
      navListLabel: 'RIGHT Tray Mock Primary - EXPANDABLE',
      navigationType: 'EXPANDABLE'
    }
  }),
  // BT_TRAY
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['BT_TRAY'],
      navListLabel: 'BOTTOM Tray Mock Primary'
    }
  }),
  // LT_TRAY
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['LT_TRAY'],
      navListLabel: 'LEFT Tray Mock Primary - SHALLOW',
      navigationType: 'SHALLOW'
    }
  }),
  // FOOTER_MENU
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['FOOTER_MENU'],
      navListLabel: 'SITE MENU Footer Mock Primary - NESTED'
    }
  }),
  // SITE_MENU_TRAY
  generateNavigationConfig({
    ...baseNavConfig,
    ...{
      menuLocations: ['SITE_MENU_TRAY'],
      navListLabel: 'SITE MENU Tray Mock Primary'
    }
  })
  // OTHER $PEC
  // ...
];

export default testMockNavigations;
import { generateNavigationConfig } from "../generate-navigation-config";

// MENUS
import primaryMenu from "../menus/primary.json";

const dataSource = 'test-mock.ts'

const sampleMockConfig = {
  dataSource,
  menuLocations: [
    // 'HEADER_MOBILE',
    // 'HEADER_DESKTOP',
    // 'TP_TRAY', 
    // 'RT_TRAY',
    // 'BT_TRAY',
    // 'LT_TRAY',
    // 'FOOTER_TRAY',
    // 'SITE_MENU_TRAY'
    // === $PEC_LCATIONS ===
    // ETC...
  ],
  navigationType: "NESTED",
  navListItems: primaryMenu.items,
  // navListLabel: 'Ta-dur!',
  elementId: 'primary-nav',
  classes: 'main-navigation', 
  // mobileOnly: false,
};

const leftTrayActions = [
  {
    "nodeId": "open-top-tray",
    "label": "Top",
    "actionType": "PROCESS_handleToggleMenuTray_TP",
    "displayTypes": ["label", "icon"],
    // "displayTypes": ["icon", "label"],
    "icon": "ICONIFY_mdi:chevron-up", // [icon_designation]_[FA, ICONIFY(d)]
    "classes": "vert-display"
  },
  {
    "nodeId": "open-right-tray",
    "label": "Right",
    "actionType": "PROCESS_handleToggleMenuTray_RT",
    "displayTypes": ["label", "icon"],
    "icon": "ICONIFY_mdi:chevron-right",
    "classes": "vert-display"
  }
];
const rightTrayActions = [
  {
    "nodeId": "open-bottom-tray",
    "label": "Bottom",
    "actionType": "PROCESS_handleToggleMenuTray_BT",
    "displayTypes": ["label", "icon"],
    "icon": "ICONIFY_mdi:chevron-down",
    "classes": "vert-display"
  },
  {
    "nodeId": "open-left-tray-menu",
    // "label": "MENU",
    "label": null,
    "actionType": "PROCESS_handleToggleMenuTray_LT",
    "displayTypes": ["label", "icon"],
    // "displayTypes": ["icon"],
    "icon": "ICONIFY_mdi:menu-open_large|s1|black",
    // "icon": "ICONIFY_mdi:chevron-left",
    "classes": "vert-display"
    // TODO
    // "displayTypes": ["image"],
    // "image": "test-image-name.png"
  }
];

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
  ...sampleMockConfig.navListItems,
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
export const testMockNavigations = [
  // HEADER_DESK
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['HEADER_DESKTOP'],
      // navListLabel: 'DESKTOP Primary'
      navListItems: customHeaderDeskNavList,
      navigationType: 'EXPANDABLE'
    }
  }),
  // HEADER_MOBILE
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['HEADER_MOBILE'],
      // navListLabel: 'MOBILE Primary'
      navListItems: [
        ...leftTrayActions,
        ...[{
          nodeId: 'test-slot-inj-a',
          label: 'Logo brand',
          actionType: 'SLOT_A'
        }],
        ...rightTrayActions
      ]
    }
  }),
  // TP_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['TP_TRAY'],
      navListLabel: 'TOP Tray Mock Primary'
    }
  }),
  // RT_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['RT_TRAY'],
      navListLabel: 'RIGHT Tray Mock Primary - EXPANDABLE',
      navigationType: 'EXPANDABLE'
    }
  }),
  // BT_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['BT_TRAY'],
      navListLabel: 'BOTTOM Tray Mock Primary'
    }
  }),
  // LT_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['LT_TRAY'],
      navListLabel: 'LEFT Tray Mock Primary - SHALLOW',
      navigationType: 'SHALLOW'
    }
  }),
  // FOOTER_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['FOOTER_TRAY'],
      navListLabel: 'FOOTER Tray Mock Primary',
    }
  }),
  // SITE_MENU_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['SITE_MENU_TRAY'],
      navListLabel: 'SITE MENU Tray Mock Primary'
    }
  }),
  // OTHER $PEC
  // ...
  // FOOTER_MENU
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['FOOTER_MENU'],
      navListLabel: 'SITE MENU Footer Mock Primary - NESTED'
    }
  })
];
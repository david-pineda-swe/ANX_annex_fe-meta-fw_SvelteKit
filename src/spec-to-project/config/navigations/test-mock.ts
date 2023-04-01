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
  navigationType: "EXPANDABLE",
  navListItems: primaryMenu.items,
  // navListLabel: 'Ta-dur!',
  elementId: 'primary-nav',
  classes: 'main-navigation', 
  // mobileOnly: false,
  renderActive: true
};

const leftTrayActions = [
  {
    "nodeId": "open-top-tray",
    "label": "Top",
    "actionType": "PROCESS_handleToggleMenuTray_TP",
    "displayTypes": ["label", "icon"],
    // "displayTypes": ["icon", "label"],
    "icon": "mdi:chevron-up_ICONIFY", // [icon_designation]_[FA, ICONIFY(d)]
    "classes": "vert-display"
  },
  {
    "nodeId": "open-right-tray",
    "label": "Right",
    "actionType": "PROCESS_handleToggleMenuTray_RT",
    "displayTypes": ["label", "icon"],
    "icon": "mdi:chevron-right_ICONIFY",
    "classes": "vert-display"
  }
];
const rightTrayActions = [
  {
    "nodeId": "open-bottom-tray",
    "label": "Bottom",
    "actionType": "PROCESS_handleToggleMenuTray_BT",
    "displayTypes": ["label", "icon"],
    "icon": "mdi:chevron-down_ICONIFY",
    "classes": "vert-display"
  },
  {
    "nodeId": "open-left-tray",
    "label": "Left",
    "actionType": "PROCESS_handleToggleMenuTray_LT",
    "displayTypes": ["label", "icon"],
    "icon": "mdi:chevron-left_ICONIFY",
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
      "icon": "mdi:chevron-up_ICONIFY",
      "classes": "vert-display"
    },
    {
      "nodeId": "open-right-tray",
      "label": "Right",
      "actionType": "PROCESS_handleToggleMenuTray_RT",
      "displayTypes": ["icon", "label"],
      "icon": "mdi:chevron-right_ICONIFY",
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
      "icon": "mdi:chevron-down_ICONIFY",
      "classes": "vert-display"
    },
    {
      "nodeId": "open-left-tray",
      "label": "Left",
      "actionType": "PROCESS_handleToggleMenuTray_LT",
      "displayTypes": ["icon", "label"],
      "icon": "faSquareCaretLeft_FA", // X - use case needs re work do not use "FA" on a project
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
      navListItems: customHeaderDeskNavList
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
      navListLabel: 'RIGHT Tray Mock Primary'
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
      navListLabel: 'LEFT Tray Mock Primary'
    }
  }),
  // FOOTER_TRAY
  generateNavigationConfig({
    ...sampleMockConfig,
    ...{
      menuLocations: ['FOOTER_TRAY'],
      navListLabel: 'FOOTER Tray Mock Primary'
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
      navListLabel: 'SITE MENU Footer Mock Primary'
    }
  })
];
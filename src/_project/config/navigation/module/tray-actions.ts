const TrayActions = {
  openTopTray: {
    "nodeId": "open-top-tray",
    "label": "Top",
    "actionType": "PROCESS_handleToggleMenuTray_TP",
    "displayTypes": ["label", "icon"],
    // "displayTypes": ["icon", "label"],
    "icon": "ICONIFY_mdi:chevron-up", // [icon_designation]_[FA, ICONIFY(d)]
    "classes": "vert-display"
  },
  openRightTray: {
    "nodeId": "open-right-tray",
    "label": "Right",
    "actionType": "PROCESS_handleToggleMenuTray_RT",
    "displayTypes": ["label", "icon"],
    "icon": "ICONIFY_mdi:chevron-right",
    "classes": "vert-display"
  },
  openBottomTray: {
    "nodeId": "open-bottom-tray",
    "label": "Bottom",
    "actionType": "PROCESS_handleToggleMenuTray_BT",
    "displayTypes": ["label", "icon"],
    "icon": "ICONIFY_mdi:chevron-down",
    "classes": "vert-display"
  },
  openLeftTray: {
    "nodeId": "open-left-tray-menu",
    // "label": "MENU",
    "label": null,
    "actionType": "PROCESS_handleToggleMenuTray_LT",
    "displayTypes": ["label", "icon"],
    // "displayTypes": ["icon"],
    "icon": "ICONIFY_mdi:menu-open_large|s1|white",
    // "icon": "ICONIFY_mdi:chevron-left",
    "classes": "vert-display no-pad"
    // TODO
    // "displayTypes": ["image"],
    // "image": "test-image-name.png"
  }
}

export const {
  openTopTray,
  openRightTray,
  openBottomTray,
  openLeftTray
} = TrayActions;

export default TrayActions;
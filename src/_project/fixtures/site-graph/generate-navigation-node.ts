// TODO - MOVE TO APM/core/webapp/nav-interface/[entity]

import type { NavigationNode } from "src/global";

// const DEFAULT_STRING = "default_nav_node";

export function generateNavigationNode(props: NavigationNode): NavigationNode {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      label,
      actionType, // [INTERNAL_ROUTE(d), EXTERNAL_LINK, SLOT, PROCESS_[target_handle_key]_[...params]]
      //
      displayTypes, // [label(d), icon, image]
      slug,
      url,
      linkTarget,
      elementId,
      classes,
      icon,
      image,
      subNodes
    } = props;

    return {
      nodeId: nodeId || '',
      label: label || '',
      actionType: actionType || 'INTERNAL_ROUTE',
      //
      displayTypes: displayTypes || ['label'],
      slug: slug || '',
      url: url || '',
      linkTarget: linkTarget || '',
      elementId: elementId || '',
      classes: classes || '',
      icon: icon || '',
      image: image || '',
      subNodes: subNodes || []
    }
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK FOR NavigationNode');
  }
}
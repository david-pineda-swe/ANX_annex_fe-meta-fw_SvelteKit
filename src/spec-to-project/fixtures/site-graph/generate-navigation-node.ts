import type { NavigationNode } from "src/global";

// const DEFAULT_STRING = "default_nav_node";

export function generateNavigationNode(props: NavigationNode): NavigationNode {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      label,
      actionType,
      //
      slug,
      url,
      linkTarget,
      elementId,
      classes,
      // icon
      subNodes
    } = props;

    return {
      nodeId: nodeId || null,
      label: label || null,
      actionType: actionType || 'INTERNAL_ROUTE',
      //
      slug: slug || '',
      url: url || '',
      linkTarget: linkTarget || null,
      elementId: elementId || null,
      classes: classes || null,
      // icon
      subNodes: subNodes || []
    }
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK FOR NavigationNode');
  }
}
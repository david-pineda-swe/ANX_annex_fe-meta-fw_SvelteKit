import type { NavigationNode } from "src/global";

// const DEFAULT_STRING = "default_nav_node";

export function mockNavigationNode(props: NavigationNode): NavigationNode {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      label,
      alt,
      prefetch,
      internalRoute,
      //
      targetSource,
      elementId,
      classes,
      url,
      // slug,
      // subnodes
    } = props;

    return {
      nodeId: nodeId || '*',
      label: label || 'N/A',
      alt: alt || 'Not available',
      prefetch: prefetch || true,
      internalRoute: internalRoute || true,
      //
      targetSource: targetSource || '',
      elementId: elementId || '',
      classes: classes || '',
      // slug: slug || ,
      url
    }
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK FOR NavigationNode');
  }
}
// TODO - MOVE TO APM/core/webapp/nav-interface/[entity]

const DEFAULT_STRING = "default";
const DEFAULT_COMPONENT = {
  componentType: 'STRUCTURE',
  componentTag: 'row',
  element: {
    tag: 'div',
    domId: 'test-cont-seg',
    classSet: [],
    attrSet: []
  }
};

export function mockContentSegment(props: ContentSegment): ContentSegment {
  if (props) {
    // DYNAMIC MOCK
    const {
      nodeId,
      nodeType,
      nodeMeta,
      //
      component,
      subContent
    } = props;
    
    return {
      nodeId: nodeId || DEFAULT_STRING,
      nodeType: nodeType || 'CONTENT_SEGMENT',
      nodeMeta,
      //
      component: component || DEFAULT_COMPONENT,
      subContent: subContent || []
    };
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK Content Model');
  };
}
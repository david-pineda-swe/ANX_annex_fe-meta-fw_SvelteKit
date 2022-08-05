const DEFAULT_STRING = "default";

export function mockNodeContent(props: NodeContentTraits): NodeContentTraits {
  if (props) {
    // DYNAMIC MOCK
    const {
      contentId,
      header,
      subHeader,
      copyBlock,
      subContent
    } = props;
    
    return {
      contentId: contentId || DEFAULT_STRING,
      header: header || DEFAULT_STRING,
      subHeader: subHeader || DEFAULT_STRING,
      copyBlock: copyBlock || '',
      subContent: subContent || []
    };
  } else {
    // STATIC MOCK
    console.log('>> SHOULD HAVE A STATIC MOCK Content Model');
  };
}
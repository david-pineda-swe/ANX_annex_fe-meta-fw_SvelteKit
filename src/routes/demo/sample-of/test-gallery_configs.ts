export const galleryConfig_A = {
  backgroundStyles: "url('./images/sample/sample_geo_texture.jpg')",
  // backgroundStyles: "rgba(77, 132, 189, 0.33)",
  // backgroundStyles: "red",
  sortMethod: 'COLUMNS-3', // ['COLUMNS', 'ROWS']
  // sortMethod: 'ROWS-3',
  tileSize: 'md', // [sm, md, lg] default = sm
  centerList: true,
  //
  vertRowSpacing: '20px',
  opacity: '1',
  // TODO - vertical row spacing
  //
  // allBoxStyles: "border: 3px solid white;",
  items: [
    {
      image: '',
      // backgroundStyles: 'green',
      backgroundStyles: "url('./images/sample/sample_leather_texture.jpg')",
      // boxStyles: 'border: 5px solid fuchsia;',
      title: '1',
      message: '1-tile'
    },
    {
      image: '',
      backgroundStyles: 'blue',
      title: '2',
      message: '2-tile'
    },
    {
      image: '',
      backgroundStyles: 'fuchsia',
      title: '3',
      message: '3-tile'
    },
    {
      image: '',
      backgroundStyles: 'purple',
      title: '4',
      message: '4-tile'
    },
    {
      image: '',
      backgroundStyles: 'red',
      title: '5',
      message: '5-tile'
    },
    {
      image: '',
      backgroundStyles: 'orange',
      title: '6',
      message: '6-tile'
    },
    {
      image: '',
      // backgroundStyles: 'teal',
      backgroundStyles: "url('./images/sample/sample_canvas_texture.jpg')",
      title: '7',
      message: '7-tile'
    },
    {
      image: '',
      backgroundStyles: 'gray',
      title: '8',
      message: '8-tile'
    },
    {
      image: '',
      backgroundStyles: 'yellow',
      boxStyles: 'border: 5px solid green;',
      title: '9',
      message: '9-tile'
    },
    {
      image: '',
      backgroundStyles: 'brown',
      title: '10',
      message: '10-tile'
    }
  ]
  // infiniteTiles: false,
  // maxWidth: "300px",
  // maxheight: "500px"
};

export const galleryConfig_B = {
  backgroundStyles: "url('./images/sample/sample_geo_texture.jpg')",
  // backgroundStyles: "rgba(77, 132, 189, 0.33)",
  // backgroundStyles: "red",
  //
  sortMethod: 'COLUMNS-3', // ['COLUMNS', 'ROWS']
  // sortMethod: 'ROWS-3',
  //
  // tileSize: 'sm', // [sm, md, lg] default = xsm
  // tileSize: 'md',
  tileSize: 'lg',
  //
  centerList: true,
  vertRowSpacing: '20px',
  opacity: '1',
  //
  useDescriptions: true,
  allDescriptLocations: 8,
  allDescriptClasses: 'bold', // dark-text
  modal: {
    size: 'xl', // ['sm', 'lg', 'xl']
    fullscreen: true
  },
  // TODO - vertical row spacing
  //
  // allBoxStyles: "border: 3px solid white;",
  items: [
    {
      image: '',
      // backgroundStyles: 'green',
      backgroundStyles: "url('./images/sample/sample_leather_texture.jpg')",
      // boxStyles: 'border: 5px solid fuchsia;',
      title: '1',
      descriptLocation: 1,
      message: '1-tile',
      navItem: {
        // is "NavigationNode" type
        nodeId: 'to-home-from-gallery',
        actionType: 'INTERNAL_ROUTE',
        label: 'Home',
        slug: '/'
      }
    },
    {
      image: '',
      backgroundStyles: 'blue',
      title: '2',
      descriptLocation: 2,
      message: '2-tile_OPEN-MODAL',
      navItem: {
        // is "NavigationNode" type
        nodeId: 'something-arb',
        actionType: 'PROCESS_modal-select'
      }
    },
    {
      image: '',
      backgroundStyles: 'fuchsia',
      title: '3',
      descriptLocation: 3,
      message: '3-tile test PROCESS',
      navItem: {
        // is "NavigationNode" type
        nodeId: 'test-process-action',
        actionType: 'PROCESS_doTest_apple'
      }
    },
    {
      image: '',
      backgroundStyles: 'purple',
      title: '4',
      descriptLocation: 4,
      message: '4-tile'
    },
    {
      image: '',
      backgroundStyles: 'green',
      title: '5',
      descriptLocation: 5,
      message: '5-tile',
      navItem: {
        // <== NavigationNode
        nodeId: 'to-privacy-policy-from-gallery',
        actionType: 'INTERNAL_ROUTE',
        label: 'Privacy Policy',
        slug: '/privacy-policy'
      }
    },
    {
      image: '',
      backgroundStyles: 'orange',
      title: '6',
      descriptLocation: 6,
      descriptClasses: 'dark-text bold',
      message: '6-tile'
    },
    {
      image: '',
      // backgroundStyles: 'teal',
      backgroundStyles: "url('./images/sample/sample_canvas_texture.jpg')",
      title: '7',
      descriptLocation: 7,
      message: '7-tile'
    },
    {
      image: '',
      backgroundStyles: 'gray',
      title: '8',
      descriptLocation: 8,
      message: '8-tile'
    },
    {
      image: '',
      backgroundStyles: 'yellow',
      boxStyles: 'border: 5px solid green;',
      textStyles: 'color: black;',
      title: '9',
      descriptLocation: 9,
      descriptClasses: 'dark-text', // bold-title, bold-message
      message: '9-tile'
    },
    {
      image: '',
      backgroundStyles: 'brown',
      title: '10',
      message: '10-tile'
    }
  ]
  // infiniteTiles: false,
  // maxWidth: "300px",
  // maxheight: "500px"
};

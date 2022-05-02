'use strict'

// TBD //x
import { contentGraph as demoContentGraph } from '$lib/fixtures/content-graph/material-icons';

const collectContent = async function(validatedRoute: validatedRoute):Promise<validatedRoute> {
  console.log('>> COLLECTING CONTENT GRAPHS', validatedRoute);
  const currentConfig = validatedRoute.config;
  //TODO: COLLECT IN ADAPTER query
  const currentContent = await demoContentGraph; // via currentConfig.pageId

  // A.) current
  currentConfig.content = currentContent

  // B.) Iterate through segmentConfigs
  // TODO: ASYNC FOR EACH find library
  const hydratedConfigs = await validatedRoute.segmentConfigs.map((config) => {
    if (config.pageId === currentConfig.pageId) {
      // COPY current config
      return {...currentConfig};
    } else  {
      // go fish // TBD todo
      return {...config, ...{content: {
        contentId: 'demo-content',
        pageId: '*',
        contentFor: 'demo',
        sections: []
      }}}
    }
  });
  
  return {...validatedRoute, ...{segmentConfigs: hydratedConfigs}};
};

// // //

export default { collectContent };
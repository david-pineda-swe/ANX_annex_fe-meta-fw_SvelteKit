import type { ProjectConfig } from "src/global";

import { testMockNavigations } from "./navigations/test-mock";

const generateProjectConfiguration = (): ProjectConfig => {
  return {
    // siteMeta: {} // deffers to site Graph
    // indexRouteMeta
    // thirdPartyConfigs: {}
    navigations: testMockNavigations
    // navigations: projectSpecNavigations; // TODO <<
  };
}

export default generateProjectConfiguration;
import type { ProjectConfig } from "src/global";

import TestMockNavigations from "./navigation/test-mock";
// import ProjectSpecNavigations from "./navigation/project-spec";

const generateProjectConfiguration = (): ProjectConfig => {
  return {
    // siteMeta: {} // deffers to site Graph
    // indexRouteMeta
    // thirdPartyConfigs: {}
    // TODO - ADD DIAGNOSTIC CONFIG
    navigations: TestMockNavigations // NOTE - FOR PLATFORM DEV
    // navigations: ProjectSpecNavigations // OK - FOR CURRENT PROJECT SPEC
  };
}

export default generateProjectConfiguration;
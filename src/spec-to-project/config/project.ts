import type { ProjectConfig } from "src/global";
import { NavigationConfigurations } from "./navigation";

const generateProjectConfiguration = (): ProjectConfig => {
  return {
    // siteMeta: {} // deffers to site Graph
    // indexRouteMeta
    // thirdPartyConfigs: {}
    navigations: NavigationConfigurations()
  };
}

export default generateProjectConfiguration;
import type { ProjectConfig } from "src/global";
import { NavigationConfigurations } from "./navigation";

export const ProjectConfiguration = (): ProjectConfig => {
  return {
    // siteMeta: {} // override site Graph
    // indexRouteMeta
    // thirdPartyConfigs: {}
    navigations: NavigationConfigurations()
  };
}
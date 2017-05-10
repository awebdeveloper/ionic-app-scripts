import { getIonicDependenciesCommonChunksPlugin, getNonIonicDependenciesCommonChunksPlugin } from './common-chunks-plugins';
import { IonicEnvironmentPlugin } from './ionic-environment-plugin';
import { provideCorrectSourcePath } from './source-mapper';
import { getContext } from '../util/helpers';

export function getIonicEnvironmentPlugin(isOptimization: boolean = false) {
  const context = getContext();
  return new IonicEnvironmentPlugin(context, isOptimization);
}

export function getSourceMapperFunction(): Function {
  return provideCorrectSourcePath;
}

export function getNonIonicCommonChunksPlugin(): any {
  return getNonIonicDependenciesCommonChunksPlugin();
}

export function getIonicCommonChunksPlugin(): any {
  return getIonicDependenciesCommonChunksPlugin();
}

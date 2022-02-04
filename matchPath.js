import * as tsConfigPaths from 'tsconfig-paths'

let matchPath;

try {
  const { absoluteBaseUrl, paths } = tsConfigPaths.loadConfig();
  matchPath = tsConfigPaths.createMatchPath(absoluteBaseUrl, paths);
} catch (e) {
  // We get an error here if no paths are in the config file.
  if (!e.toString() === 'TypeError: Cannot convert undefined or null to object')
    // Other error, so throw it.
    throw e;
}

export { matchPath }

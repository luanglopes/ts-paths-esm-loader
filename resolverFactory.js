import { pathToFileURL } from 'url'

import { matchPath } from './matchPath'

export const resolverFactory = (resolveTs) => {
    return function (specifier, ctx, defaultResolve) {
        const match = matchPath && matchPath(specifier)
        return match
          ? resolveTs(pathToFileURL(`${match}`).href, ctx, defaultResolve)
          : resolveTs(specifier, ctx, defaultResolve)
      }
}

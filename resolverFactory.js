import { pathToFileURL } from 'url'

import { matchPath } from './matchPath.js'

export const resolverFactory = (resolveTs) => {
    return function (specifier, ctx, defaultResolve) {
        let match = matchPath && matchPath(specifier)

        if (specifier.endsWith('.js')) {
            const trimmed = specifier.substring(0, specifier.length - 3)
            const matchedPath = matchPath && matchPath(trimmed)
            match = matchedPath ? `${matchedPath}.js` : undefined
        }
        
        return match
          ? resolveTs(pathToFileURL(`${match}`).href, ctx, defaultResolve)
          : resolveTs(specifier, ctx, defaultResolve)
      }
}

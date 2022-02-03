import { resolve as resolveTs } from 'ts-node/esm'
import { resolverFactory } from './resolverFactory'

export const resolve = resolverFactory(resolveTs)

export { getFormat, load, transformSource } from 'ts-node/esm'

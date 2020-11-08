import {
  __RouterContext as RouterContext,
  RouteComponentProps,
} from 'react-router'
import { useContext, useMemo } from 'react'

import * as H from 'history'

interface PlainObject {
  [key: string]: any
}

const replacePathParams = (path: H.Path, pathParams?: PlainObject) => {
  let pathToGo = path

  if (pathParams) {
    Object.keys(pathParams).forEach((param) => {
      pathToGo = pathToGo.replace(`:${param}`, pathParams[param])
    })
  }

  return pathToGo
}

export const useRouter = <T,>(): RouteComponentProps<T> =>
  useContext(RouterContext) as RouteComponentProps<T>

export const go = (history: H.History) => ({
  replace: (path: H.Path) => {
    history.replace(path)
  },
  push: (path: H.Path, pathParams?: PlainObject) => {
    history.push(replacePathParams(path, pathParams))
  },
})

export const useGo = () => {
  const { history } = useRouter()
  const result = useMemo(() => ({ go: go(history) }), [history])
  return result
}

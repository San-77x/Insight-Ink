/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'

// Create Virtual Routes

const CanvasLazyImport = createFileRoute('/canvas')()
const IndexLazyImport = createFileRoute('/')()
const LayoutSignedoutLazyImport = createFileRoute('/_layout/signedout')()
const LayoutSignedinLazyImport = createFileRoute('/_layout/signedin')()

// Create/Update Routes

const CanvasLazyRoute = CanvasLazyImport.update({
  path: '/canvas',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/canvas.lazy').then((d) => d.Route))

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const LayoutSignedoutLazyRoute = LayoutSignedoutLazyImport.update({
  path: '/signedout',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/signedout.lazy').then((d) => d.Route),
)

const LayoutSignedinLazyRoute = LayoutSignedinLazyImport.update({
  path: '/signedin',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/signedin.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/canvas': {
      preLoaderRoute: typeof CanvasLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout/signedin': {
      preLoaderRoute: typeof LayoutSignedinLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/signedout': {
      preLoaderRoute: typeof LayoutSignedoutLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  LayoutRoute.addChildren([LayoutSignedinLazyRoute, LayoutSignedoutLazyRoute]),
  CanvasLazyRoute,
])

/* prettier-ignore-end */

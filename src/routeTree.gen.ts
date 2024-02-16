import { createFileRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./routes/__root";

// Create Virtual Routes

const CanvasLazyImport = createFileRoute("/canvas")();
const IndexLazyImport = createFileRoute("/")();

// Create/Update Routes

const CanvasLazyRoute = CanvasLazyImport.update({
  path: "/canvas",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/canvas.lazy").then((d) => d.Route));

const IndexLazyRoute = IndexLazyImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any).lazy(() => import("./routes/index.lazy").then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    "/canvas": {
      preLoaderRoute: typeof CanvasLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexLazyRoute,
  CanvasLazyRoute,
]);

/* prettier-ignore-end */

import { IRouteRule } from "@jimengio/ruled-router";

export const routerRules: IRouteRule[] = [
  { path: "home" },
  { path: "doc-block" },
  {
    path: "doc-block-simple",
  },

  { path: "doc-demo" },
  { path: "", name: "home" },
];

import queryString from "query-string";

type Id = string;

function switchPath(x: string) {
  location.hash = `#${x}`;
}

function qsStringify(queries: { [k: string]: string }) {
  return queryString.stringify(queries);
}

// generated

// Generated with router-code-generator@0.2.4

export let genRouter = {
  home: {
    name: "home",
    raw: "home",
    path: () => `/home`,
    go: () => switchPath(`/home`),
  },
  docBlock: {
    name: "doc-block",
    raw: "doc-block",
    path: () => `/doc-block`,
    go: () => switchPath(`/doc-block`),
  },
  docBlockSimple: {
    name: "doc-block-simple",
    raw: "doc-block-simple",
    path: () => `/doc-block-simple`,
    go: () => switchPath(`/doc-block-simple`),
  },
  docDemo: {
    name: "doc-demo",
    raw: "doc-demo",
    path: () => `/doc-demo`,
    go: () => switchPath(`/doc-demo`),
  },
  docSnippet: {
    name: "doc-snippet",
    raw: "doc-snippet",
    path: () => `/doc-snippet`,
    go: () => switchPath(`/doc-snippet`),
  },
  $: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};

export type GenRouterTypeMain =
  | GenRouterTypeTree["home"]
  | GenRouterTypeTree["docBlock"]
  | GenRouterTypeTree["docBlockSimple"]
  | GenRouterTypeTree["docDemo"]
  | GenRouterTypeTree["docSnippet"]
  | GenRouterTypeTree["$"];

export interface GenRouterTypeTree {
  home: {
    name: "home";
    params: {};
    query: {};
    next: null;
  };
  docBlock: {
    name: "doc-block";
    params: {};
    query: {};
    next: null;
  };
  docBlockSimple: {
    name: "doc-block-simple";
    params: {};
    query: {};
    next: null;
  };
  docDemo: {
    name: "doc-demo";
    params: {};
    query: {};
    next: null;
  };
  docSnippet: {
    name: "doc-snippet";
    params: {};
    query: {};
    next: null;
  };
  $: {
    name: "home";
    params: {};
    query: {};
    next: null;
  };
}

import queryString from "query-string";

type Id = string;

function switchPath(x: string) {
  location.hash = `#${x}`;
}

function qsStringify(queries: { [k: string]: string }) {
  return queryString.stringify(queries);
}

// generated

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
  _: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};

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
  demo1: {
    name: "demo1",
    raw: "demo1",
    path: () => `/demo1`,
    go: () => switchPath(`/demo1`),
  },
  demo2: {
    name: "demo2",
    raw: "demo2",
    path: () => `/demo2`,
    go: () => switchPath(`/demo2`),
  },
  demo3: {
    name: "demo3",
    raw: "demo3",
    path: () => `/demo3`,
    go: () => switchPath(`/demo3`),
  },
  _: {
    name: "home",
    raw: "",
    path: () => `/`,
    go: () => switchPath(`/`),
  },
};

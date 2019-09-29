import React, { FC } from "react";

import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";
import { css, cx } from "emotion";

import Home from "./home";
import { HashRedirect } from "@jimengio/ruled-router/lib/dom";
import { genRouter } from "controller/generated-router";
import { row, fullscreen, expand } from "@jimengio/shared-utils";
import DocSidebar, { ISidebarEntry } from "../../src/doc-sidebar";
import DemoDocBlock from "./demo-doc-block";
import DemoDocDemo from "./demo-doc-demo";

let docItems: ISidebarEntry[] = [
  {
    title: "Doc block",
    cnTitle: "文档",
    path: genRouter.docBlock.name,
  },
  {
    title: "Doc Block(Simple)",
    path: genRouter.docBlockSimple.name,
  },
  {
    title: "Doc Demo",
    cnTitle: "示例",
    path: genRouter.docDemo.name,
  },
];

let Container: FC<{
  router: IRouteParseResult;
}> = React.memo((props) => {
  /** Methods */

  /** Effects */

  /** Renderers */

  let renderChildPage = (routerTree: IRouteParseResult) => {
    if (routerTree != null) {
      switch (routerTree.name) {
        case genRouter.docBlock.name:
        case genRouter.docBlockSimple.name:
          return <DemoDocBlock />;
        case genRouter.docDemo.name:
          return <DemoDocDemo />;
        default:
          return <Home />;
      }
    }
    return <div>NOTHING</div>;
  };

  return (
    <div className={cx(fullscreen, row, styleContainer)}>
      <DocSidebar
        title={"Doc Frame"}
        items={docItems}
        currentPath={props.router.name}
        onSwitch={(item) => {
          window.location.replace(`#/${item.path}`);
        }}
      />
      <div className={cx(expand, stylePage)}>{renderChildPage(props.router)}</div>
    </div>
  );
});

export default Container;

const styleContainer = css``;

let stylePage = css`
  padding: 40px;
`;

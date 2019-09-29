import React, { useState } from "react";
import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";
import { css, cx } from "emotion";

import Home from "./home";
import { HashRedirect } from "@jimengio/ruled-router/lib/dom";
import { genRouter } from "controller/generated-router";
import { row, fullscreen, expand } from "@jimengio/shared-utils";
import DocSidebar, { ISidebarEntry } from "../../src/doc-sidebar";
import DemoDocBlock from "./demo-doc-block";

let docItems: ISidebarEntry[] = [
  {
    title: "Doc block",
    cnTitle: "文档",
    path: "doc-block",
  },
  {
    title: "Doc Block(Simple)",
    path: "doc-block-simple",
  },
];

export default (props) => {
  let [path, setPath] = useState(null as string);

  /** Methods */

  /** Effects */

  /** Renderers */

  let renderChildPage = (routerTree: IRouteParseResult) => {
    if (routerTree != null) {
      switch (routerTree.name) {
        case genRouter.docBlock.name:
          return <DemoDocBlock />;
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
        currentPath={path}
        onSwitch={(item) => {
          window.location.replace(`#/${item.path}`);
        }}
      />
      <div className={expand}>{renderChildPage(props.router)}</div>
    </div>
  );
};

const styleContainer = css`
  font-family: "Helvetica";
`;

const styleTitle = css`
  margin-bottom: 16px;
`;

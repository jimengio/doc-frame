import React, { useState } from "react";
import { parseRoutePath, IRouteParseResult } from "@jimengio/ruled-router";
import { css, cx } from "emotion";

import Home from "./home";
import { HashRedirect } from "@jimengio/ruled-router/lib/dom";
import { genRouter } from "controller/generated-router";
import { row, fullscreen } from "@jimengio/shared-utils";
import DocSidebar, { ISidebarEntry } from "../../src/sidebar";

let docItems: ISidebarEntry[] = [
  {
    title: "Demo 1",
    cnTitle: "例1",
    path: "demo1",
  },
  {
    title: "Demo 2",
    cnTitle: "例2",
    path: "demo2",
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
        case genRouter.home.name:
          return <Home />;
        default:
          return (
            <HashRedirect to={genRouter.home.name} delay={2}>
              2s to redirect
            </HashRedirect>
          );
      }
    }
    return <div>NOTHING</div>;
  };

  return (
    <div className={cx(fullscreen, row, styleContainer)}>
      <DocSidebar title={"Doc Frame"} items={docItems} currentPath={path} onSwitch={(item) => setPath(item.path)} />
      <div className={styleTitle}>Container</div>
      {renderChildPage(props.router)}
    </div>
  );
};

const styleContainer = css`
  font-family: "Helvetica";
`;

const styleTitle = css`
  margin-bottom: 16px;
`;

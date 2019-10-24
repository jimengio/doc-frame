import React from "react";
import { css } from "emotion";
import { genRouter } from "controller/generated-router";
import { HashLink, HashRedirect } from "@jimengio/ruled-router/lib/dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className={styleContainer}>
        Home page for doc-frame.
        <HashRedirect to={genRouter.docDemo.path()} />
      </div>
    );
  }
}

let styleContainer = css`
  padding: 16px;
`;

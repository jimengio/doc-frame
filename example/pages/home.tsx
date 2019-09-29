import React from "react";
import { css } from "emotion";
import { genRouter } from "controller/generated-router";
import { HashLink } from "@jimengio/ruled-router/lib/dom";

export default class Home extends React.Component {
  render() {
    return <div className={styleContainer}>Default page, no content.</div>;
  }
}

let styleContainer = css`
  padding: 16px;
`;

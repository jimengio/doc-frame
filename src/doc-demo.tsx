import React, { FC, CSSProperties } from "react";
import { css, cx } from "emotion";
import { rowMiddle, rowParted } from "@jimengio/shared-utils";

let DocDemo: FC<{
  title: string;
  link?: string;
  className?: string;
  style?: CSSProperties;
}> = React.memo((props) => {
  if (props.children == null) {
    return <span>TODO, no children yet</span>;
  }

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(styleContainer, props.className)} style={props.style}>
      <div className={cx(rowParted, styleHeader)}>
        <span className={styleTitle}>{props.title}</span>
        {props.title ? (
          <a className={cx(styleLink, props.link == null ? styleEmpty : null)} href={props.link} target="_blank">
            {props.link != null ? "Source file" : "No link"}
          </a>
        ) : null}
      </div>
      <div className={styleDemoArea}>{props.children}</div>
    </div>
  );
});

export default DocDemo;

let styleContainer = css`
  margin: 24px 16px;
  max-width: 800px;
  border-radius: 4px;

  border: 1px solid hsl(0, 0%, 90%);
`;

let styleDemoArea = css`
  min-height: 160px;
  min-width: 360px;
  padding: 16px;
`;

let styleHeader = css`
  padding: 12px 12px;
  font-size: 18px;
  font-weight: 300;
  font-family: Helvetica Neue, Arial, Helvetica, sans-serif;
  background-color: hsl(0, 0%, 96%);
  border-bottom: 1px solid hsl(0, 0%, 90%);
`;

let styleTitle = css`
  margin-right: 8px;
  color: #333;
`;

let styleLink = css`
  font-size: 12px;
`;

let styleEmpty = css`
  color: hsl(0, 0%, 80%);
`;

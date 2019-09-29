import React, { FC, CSSProperties } from "react";
import { css, cx } from "emotion";
import { rowMiddle } from "@jimengio/shared-utils";

let DocDemo: FC<{
  title: string;
  link: string;
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
      <div className={styleDemoArea}>{props.children}</div>
      <div className={styleFooter}>
        <span className={styleTitle}>{props.title}</span>
        {props.title ? (
          <a className={styleLink} href={props.link} target="_blank">
            Source Code
          </a>
        ) : null}
      </div>
    </div>
  );
});

export default DocDemo;

let styleContainer = css`
  margin: 8px;
  max-width: 720px;
  border-radius: 4px;

  border: 1px solid hsl(0, 0%, 90%);
`;

let styleDemoArea = css`
  min-height: 160px;
  padding: 16px;
`;

let styleFooter = css`
  padding: 8px 8px;
  border-top: 1px solid hsl(0, 0%, 90%);
`;

let styleTitle = css`
  margin-right: 8px;
  color: #333;
`;

let styleLink = css`
  font-size: 12px;
`;

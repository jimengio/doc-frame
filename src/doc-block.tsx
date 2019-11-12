import React, { FC, CSSProperties } from "react";
import { css, cx } from "emotion";
import hljs from "highlight.js";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";

import "highlight.js/styles/github.css";

var md = new Remarkable({
  highlight: (code: string, lang: string) => {
    return hljs.highlightAuto(code).value;
  },
  linkTarget: "_blank",
}).use(linkify);

let DocBlock: FC<{
  content?: string;
  className?: string;
  style?: CSSProperties;
  embed?: boolean;
}> = React.memo((props) => {
  let content = props.content || (props.children as string) || "TODO docs...";

  /** Methods */
  /** Effects */

  let html = md.render(content);

  /** Renderers */
  return <div className={cx(styleDoc, props.embed ? styleEmbed : null, props.className)} style={props.style} dangerouslySetInnerHTML={{ __html: html }}></div>;
});

export default DocBlock;

let styleDoc = css`
  padding: 16px;
  margin: 8px;
  border: 1px solid hsl(0, 0%, 95%);
  max-width: 720px;

  pre {
    padding: 8px;
    background-color: hsl(0, 0%, 97%);
    border: 1px solid hsl(0, 0%, 95%);
    border-radius: 4px;
  }
`;

let styleEmbed = css`
  border: none;
  padding: 0;
  margin: 0;

  pre {
    margin: 0;
  }
`;

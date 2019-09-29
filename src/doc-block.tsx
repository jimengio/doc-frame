import React, { FC, CSSProperties } from "react";
import { css } from "emotion";
import hljs from "highlight.js";
import { Remarkable } from "remarkable";
import "highlight.js/styles/github.css";

var md = new Remarkable({
  highlight: (code: string, lang: string) => {
    return hljs.highlightAuto(code).value;
  },
});

let DocBlock: FC<{
  content?: string;
  className?: string;
  style?: CSSProperties;
}> = React.memo((props) => {
  let content = props.content || (props.children as string) || "TODO docs...";

  /** Methods */
  /** Effects */

  let html = md.render(content);

  /** Renderers */
  return <div className={props.className} style={props.style} dangerouslySetInnerHTML={{ __html: html }}></div>;
});

export default DocBlock;

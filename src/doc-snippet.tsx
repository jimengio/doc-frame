import React, { FC } from "react";
import { css, cx } from "emotion";
import hljs from "highlight.js";

let DocSnippet: FC<{ code: string; lang?: string; className?: string; snippetClassName?: string }> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */

  let html: string;
  let code = props.code.trim();

  if (props.lang) {
    html = hljs.highlight(props.lang, code).value;
  } else {
    html = hljs.highlightAuto(code).value;
  }

  return (
    <div className={props.className}>
      <pre className={cx(styleSnippet, props.snippetClassName)}>
        <code dangerouslySetInnerHTML={{ __html: html }}>{}</code>
      </pre>
    </div>
  );
});

export default DocSnippet;

let styleSnippet = css`
  margin: 8px;
  display: inline-block;
  border: 1px solid hsl(0, 0%, 92%);
  background-color: hsl(0, 0%, 97%);
  border-radius: 2px;
  padding: 16px;

  min-width: 320px;
`;

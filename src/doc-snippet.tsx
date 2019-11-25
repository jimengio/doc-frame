import React, { FC, useState, useEffect } from "react";
import { css, cx } from "emotion";
import hljs from "highlight.js";
import { CopyToClipboard } from "react-copy-to-clipboard";

let DocSnippet: FC<{ code: string; lang?: string; className?: string; snippetClassName?: string }> = React.memo((props) => {
  let [showCopiedStyle, setShowCopiedStyle] = useState<boolean>(false);
  let html: string;
  let code = props.code.trim();

  if (props.lang) {
    html = hljs.highlight(props.lang, code).value;
  } else {
    html = hljs.highlightAuto(code).value;
  }

  /** Methods */
  let onCopyContent = () => {
    if (showCopiedStyle) {
      return;
    }
    setShowCopiedStyle(true);
  };

  /** Effects */
  useEffect(() => {
    if (showCopiedStyle) {
      let copyInterval = setInterval(() => {
        setShowCopiedStyle(false);
        clearInterval(copyInterval);
      }, 500);
    }
  }, [showCopiedStyle]);

  /** Renderers */
  return (
    <div className={props.className}>
      <pre className={cx(styleSnippet, props.snippetClassName)}>
        <div className={cx(styleCopyContainer)}>
          <CopyToClipboard text={code} onCopy={onCopyContent}>
            <button className={cx(styleButton, showCopiedStyle ? styleCopied : styleCopy)}>{showCopiedStyle ? "Copied" : "Copy"}</button>
          </CopyToClipboard>
        </div>
        <code className={styleCode} dangerouslySetInnerHTML={{ __html: html }} />
      </pre>
    </div>
  );
});

export default DocSnippet;

let styleSnippet = css`
  margin: 16px 0;
  display: inline-block;
  border: 1px solid hsl(0, 0%, 94%);
  background-color: hsl(0, 0%, 98%);
  border-radius: 2px;
  padding: 16px;
  overflow: auto;
  max-width: 100%;

  min-width: 400px;
`;

let styleCode = css`
  font-family: Source Code Pro, menlo, "Courier New", Courier, monospace;
  font-size: 13px;
  line-height: 20px;
`;

let styleCopyContainer = css`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  height: 30px;
  position: sticky;
  left: 0px;
  top: 0px;
`;

let styleCopy = css`
  border: 1px solid hsl(0, 0%, 90%);
  background: hsl(0, 0%, 98%);
  color: hsl(0, 0%, 40%);
  cursor: pointer;
`;

let styleCopied = css`
  border: 1px solid hsl(0, 0%, 90%);
  background: hsl(0, 0%, 90%);
  color: black;
`;

let styleButton = css`
  width: 56px;
  height: 24px;
  line-height: 1.5;
  font-size: 12px;
  transition: all 0.3s ease-in-out 0s;
  outline: none;
`;

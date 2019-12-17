import React, { FC, useState, useEffect } from "react";
import { css, cx } from "emotion";
import hljs from "highlight.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { center } from "@jimengio/flex-styles";

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
      }, 800);
    }
  }, [showCopiedStyle]);

  /** Renderers */
  return (
    <div className={props.className}>
      <pre className={cx(styleSnippet, props.snippetClassName)}>
        <code className={styleCode} dangerouslySetInnerHTML={{ __html: html }} />

        <CopyToClipboard text={code} onCopy={onCopyContent}>
          <button className={cx("copy-button", center, styleCopyButton, showCopiedStyle ? styleCopied : styleCopy)}>
            {showCopiedStyle ? "Copied" : "Copy"}
          </button>
        </CopyToClipboard>
      </pre>
    </div>
  );
});

export default DocSnippet;

let styleSnippet = css`
  position: relative;
  margin: 16px 0;
  display: inline-block;
  border: 1px solid hsl(0, 0%, 94%);
  background-color: hsl(0, 0%, 98%);
  border-radius: 2px;
  padding: 16px;
  overflow: auto;
  max-width: 100%;

  min-width: 400px;

  .copy-button {
    opacity: 0.2;
  }

  :hover .copy-button {
    opacity: 1;
  }
`;

let styleCode = css`
  font-family: Source Code Pro, menlo, "Courier New", Courier, monospace;
  font-size: 13px;
  line-height: 20px;
`;

let styleCopy = css`
  border: 1px solid hsl(0, 0%, 90%);
  background: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 40%);
  cursor: pointer;
`;

let styleCopied = css``;

let styleCopyButton = css`
  font-family: Helvetica Neue, Arial, sans-serif;
  font-weight: 300;
  width: 60px;
  height: 26px;
  font-size: 12px;
  transition: all 0.14s ease-in-out 0s;
  border-radius: 4px;
  outline: none;
  position: absolute;
  right: 12px;
  top: 12px;

  :hover {
    border: 1px solid hsl(0, 0%, 80%);
  }
`;

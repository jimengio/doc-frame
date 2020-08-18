import React, { FC, CSSProperties } from "react";
import { css, cx } from "emotion";
import hljs from "highlight.js/lib/core";
import { Remarkable } from "remarkable";
import { linkify } from "remarkable/linkify";

import "highlight.js/styles/github.css";

import typescriptLang from "highlight.js/lib/languages/typescript";
hljs.registerLanguage("typescript", typescriptLang);

import javascriptLang from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascriptLang);

import jsonLang from "highlight.js/lib/languages/json";
hljs.registerLanguage("json", jsonLang);

import xmlLang from "highlight.js/lib/languages/xml";
hljs.registerLanguage("xml", xmlLang);

import cssLang from "highlight.js/lib/languages/css";
hljs.registerLanguage("css", cssLang);

import bashLang from "highlight.js/lib/languages/bash";
hljs.registerLanguage("bash", bashLang);

import coffeescriptLang from "highlight.js/lib/languages/coffeescript";
hljs.registerLanguage("coffeescript", coffeescriptLang);

import clojureLang from "highlight.js/lib/languages/clojure";
hljs.registerLanguage("clojure", clojureLang);

import diffLang from "highlight.js/lib/languages/diff";
hljs.registerLanguage("diff", diffLang);

var md = new Remarkable({
  highlight: (code: string, lang: string) => {
    return hljs.highlightAuto(code).value;
  },
  linkTarget: "_blank",
}).use(linkify);

let DocBlock: FC<{
  content: string;
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
  max-width: 800px;

  pre {
    padding: 8px;
    background-color: hsl(0, 0%, 97%);
    border: 1px solid hsl(0, 0%, 95%);
    border-radius: 4px;
  }

  code {
    font-family: Source Code Pro, menlo, "Courier New", Courier, monospace;
    font-size: 13px;
    line-height: 20px;
  }

  p code {
    background-color: hsl(0, 0%, 97%);
    padding: 0 4px;
    margin: 0 4px;
    line-height: 24px;
    display: inline-block;
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

import React, { FC } from "react";
import { css } from "emotion";
import DocSnippet from "../../src/doc-snippet";

let code = `
let a = () => {
  console.log(a)
}
`;

let DemoDocSnippet: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocSnippet code={code} lang={"typescript"}></DocSnippet>

      <DocSnippet code={code}></DocSnippet>
    </div>
  );
});

export default DemoDocSnippet;

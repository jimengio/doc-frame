import React, { FC } from "react";
import { css } from "emotion";
import DocDemo from "../../src/doc-demo";
import DocBlock from "../../src/doc-block";

let DemoDocDemo: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title="Demo of demo 文档示例" link={"TODO"}>
        <div>TODO</div>
      </DocDemo>

      <DocDemo title="文档 with demo" link={"TODO"}>
        <div>TODO</div>

        <DocBlock embed>{`
demo

\`\`\`ts
let a = () => {
  console.log(a)
}
\`\`\`
        `}</DocBlock>
      </DocDemo>
    </div>
  );
});

export default DemoDocDemo;

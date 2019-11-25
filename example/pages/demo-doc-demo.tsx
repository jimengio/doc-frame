import React, { FC } from "react";
import { css } from "emotion";
import DocDemo from "../../src/doc-demo";
import DocBlock from "../../src/doc-block";

let content = `
demo

\`\`\`ts
let a = () => {
  console.log(a)
}
\`\`\`
`;

let DemoDocDemo: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title="Demo of demo 文档示例" link={"https://github.com/jimengio/doc-frame/blob/master/example/pages/demo-doc-demo.tsx"}>
        <div>TODO</div>
      </DocDemo>

      <DocDemo title="文档 with demo">
        <div>TODO</div>

        <DocBlock embed content={content}></DocBlock>
      </DocDemo>
    </div>
  );
});

export default DemoDocDemo;

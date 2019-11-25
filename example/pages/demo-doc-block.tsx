import React, { FC } from "react";
import { css } from "emotion";
import DocBlock from "../../src/doc-block";

let content = `
this is a post

\`\`\`ts
demo

return <div></div>

\`\`\`

http://fe.jimu.io

`;

let DemoDocBlock: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock content={content}></DocBlock>

      <DocBlock content="sdsdfsdf" embed></DocBlock>
    </div>
  );
});

export default DemoDocBlock;

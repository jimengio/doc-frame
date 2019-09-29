import React, { FC } from "react";
import { css } from "emotion";
import DocBlock from "../../src/doc-block";

let DemoDocBlock: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocBlock>{`
this is a post

\`\`\`ts
demo

return <div></div>
\`\`\`

`}</DocBlock>

      <DocBlock content="sdsdfsdf" embed></DocBlock>
    </div>
  );
});

export default DemoDocBlock;

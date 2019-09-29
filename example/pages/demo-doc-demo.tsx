import React, { FC } from "react";
import { css } from "emotion";
import DocDemo from "../../src/doc-demo";

let DemoDocDemo: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocDemo title="Demo of demo" link={"TODO"}>
        <div>TODO</div>
      </DocDemo>
    </div>
  );
});

export default DemoDocDemo;

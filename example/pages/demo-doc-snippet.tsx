import React, { FC } from "react";
import { css } from "emotion";
import DocSnippet from "../../src/doc-snippet";
import DocDemo from "../../src/doc-demo";

let code = `
let a = () => {
  console.log(a)
}
`;

let longCode = `
if (props.router) {
  switch (props.router.name) {
    case "warehouse":
      return <WarehousePage router={props.router} />;
    case "organization":
      return <OrganizationPage parentRouter={props.router} router={props.router.next} organizationId={props.router.params.organizationId} />;
    case "home":
      return <OrganizationListPage router={props.router} />;
    default:
      return (
        <HashRedirect to={genRouter.organization.$.path()} delay={200}>
          Redirecting...
        </HashRedirect>
      );
  }
}
`;

let DemoDocSnippet: FC<{}> = React.memo((props) => {
  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div>
      <DocSnippet code={code} lang={"typescript"}></DocSnippet>

      <DocDemo title="Long code">
        <DocSnippet code={longCode}></DocSnippet>
      </DocDemo>
    </div>
  );
});

export default DemoDocSnippet;

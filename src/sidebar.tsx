import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import { expand, column, fullHeight } from "@jimengio/shared-utils";

export interface ISidebarEntry {
  title: string;
  cnTitle?: string;
  path: string;
}

let found = (content: string, query: string) => {
  if (content == null || content === "") {
    return false;
  }
  if (query == null || query === "") {
    return true;
  }
  return content.toLowerCase().includes(query.toLowerCase());
};

let DocSidebar: FC<{
  currentPath: string;
  onSwitch: (item: ISidebarEntry) => void;
  className?: string;
  items: ISidebarEntry[];
}> = (props) => {
  let [query, setQuery] = useState("");

  /** Methods */
  /** Effects */
  /** Renderers */
  return (
    <div className={cx(column, fullHeight, styleContainer, props.className)}>
      <div className={styleSearchContainer}>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search..." className={styleSearch} />
      </div>
      <div className={expand}>
        {props.items
          .filter((item) => {
            return found(item.title, query) || found(item.path, query) || found(item.cnTitle, query);
          })
          .map((item) => {
            return (
              <div
                key={item.path}
                className={cx(styleItem, props.currentPath === item.path ? styleSelected : null)}
                onClick={() => {
                  props.onSwitch(item);
                }}
              >
                <div>{item.title}</div>
                <div className={styleSubTitle}>{item.cnTitle}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default DocSidebar;

let styleContainer = css`
  border-right: 1px solid hsl(0, 0%, 92%);

  min-width: 240px;
`;

let styleSearch = css`
  line-height: 32px;
  font-size: 14px;
  border: none;
  padding: 0 16px;
  width: 100%;

  &:active,
  &:focus {
    outline: none;
  }
`;

let styleItem = css`
  padding: 8px 16px;
  line-height: 28px;
  border-bottom: 1px solid hsl(0, 0%, 90%);
  cursor: pointer;

  &:hover {
    background-color: hsl(0, 0%, 94%);
  }
`;

let styleSubTitle = css`
  color: hsl(0, 0%, 70%);
  font-size: 13px;
`;

let styleSelected = css`
  background-color: hsl(200, 90%, 60%);
  color: white;

  .${styleSubTitle} {
    color: white;
  }

  &:hover {
    background-color: hsl(200, 90%, 64%);
  }
`;

let styleSearchContainer = css`
  padding: 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 90%);
`;

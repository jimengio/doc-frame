import React, { FC, useState } from "react";
import { css, cx } from "emotion";
import { expand, column, fullHeight, center } from "@jimengio/shared-utils";

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
  title?: string;
  emptyLocale?: string;
}> = (props) => {
  let [query, setQuery] = useState("");

  let visibleItems = props.items.filter((item) => {
    return found(item.title, query) || found(item.path, query) || found(item.cnTitle, query);
  });

  /** Methods */

  let onKeydown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.keyCode === 13) {
      let selectedItem = visibleItems[0];
      if (selectedItem != null) {
        props.onSwitch(selectedItem);
      }
    }
  };

  /** Effects */
  /** Renderers */

  return (
    <div className={cx(column, fullHeight, styleContainer, props.className)}>
      <div className={styleTitle}>{props.title || "Docs"}</div>
      <div className={styleSearchContainer}>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          className={styleSearch}
          onKeyDown={(event) => onKeydown(event)}
        />
      </div>
      <div className={expand}>
        {visibleItems.length === 0 ? <div className={cx(center, styleEmpty)}>{props.emptyLocale || "No results"}</div> : null}
        {visibleItems.map((item) => {
          let isSelected = props.currentPath === item.path;

          return (
            <div
              key={item.path}
              className={cx(styleItem, isSelected ? styleSelected : null)}
              onClick={() => {
                props.onSwitch(item);
              }}
            >
              <div>{item.title}</div>
              <div className={cx(styleSubTitle)}>{item.cnTitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DocSidebar;

let styleContainer = css`
  /* border-right: 1px solid hsl(0, 0%, 98%); */

  min-width: 360px;
`;

let styleSearch = css`
  line-height: 32px;
  font-size: 14px;
  border: none;
  padding: 0 24px;
  width: 100%;

  &:active,
  &:focus {
    outline: none;
  }
`;

let styleItem = css`
  padding: 12px 24px;
  line-height: 20px;
  border-bottom: 1px solid hsl(0, 0%, 98%);
  cursor: pointer;
  color: #aaa;

  &:hover {
    background-color: hsl(0, 0%, 98%);
    color: #111;
  }
`;

let styleSubTitle = css`
  font-size: 13px;
  line-height: 15px;
`;

let styleSelected = css`
  color: #111;

  &:hover {
    color: #111;
  }
`;

let styleSearchContainer = css`
  padding: 8px 0;
  border-bottom: 1px solid hsl(0, 0%, 95%);
`;

let styleTitle = css`
  font-size: 30px;
  padding: 32px 24px 48px;
  font-weight: 100;
`;

let styleEmpty = css`
  padding: 16px;
  font-size: 14px;
  color: #aaa;
`;
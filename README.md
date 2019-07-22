## Doc Frame

> Common UI for docs page.

### Usage

```tsx
import { DocSidebar, ISidebarEntry } from "@jimengio/doc-frame";

let docItems: ISidebarEntry[] = [
  {
    title: "Demo 1",
    cnTitle: "例1",
    path: "demo1",
  },
  {
    title: "Demo 2",
    cnTitle: "例2",
    path: "demo2",
  },
];

<DocSidebar items={docItems} currentPath={path} onSwitch={(item) => setPath(item.path)} />;
```

### Workflow

https://github.com/jimengio/ts-workflow

### License

MIT

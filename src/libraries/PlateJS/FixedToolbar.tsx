import { withCn } from "@udecode/cn";

import { Toolbar } from "./Toolbar";

export const FixedToolbar = withCn(
  Toolbar,
  "flex select-none items-center gap-1 supports-backdrop-blur:bg-background/60 sticky left-0 top-0 z-50 w-full justify-between overflow-x-auto rounded-t-lg border-b border-b-border bg-background/95 backdrop-blur no-scrollbar"
);

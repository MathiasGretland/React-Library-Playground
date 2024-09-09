"use client";

import { withRef } from "@udecode/cn";
import {
  useMarkToolbarButton,
  useMarkToolbarButtonState,
} from "@udecode/plate-common";

import { ToolbarButton } from "../Toolbar";

export const MarkToolbarButton = withRef<
  typeof ToolbarButton,
  {
    nodeType: string;
    clear?: string | string[];
  }
>(({ clear, nodeType, ...rest }, ref) => {
  const state = useMarkToolbarButtonState({ clear, nodeType });
  const { props } = useMarkToolbarButton(state);

  return (
    <ToolbarButton
      ref={ref}
      className={
        state.pressed
          ? "bg-[--color-button-bg] text-[--color-button-hover]"
          : ""
      }
      {...props}
      {...rest}
    />
  );
});

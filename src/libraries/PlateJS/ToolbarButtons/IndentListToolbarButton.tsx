import { withRef } from "@udecode/cn";
import {
  ListStyleType,
  useIndentListToolbarButton,
  useIndentListToolbarButtonState,
} from "@udecode/plate-indent-list";

import { Icons } from "../Icons";

import { ToolbarButton } from "../Toolbar";

export const IndentListToolbarButton = withRef<
  typeof ToolbarButton,
  {
    nodeType?: ListStyleType;
  }
>(({ nodeType = ListStyleType.Disc }, ref) => {
  const state = useIndentListToolbarButtonState({ nodeType });
  const { props } = useIndentListToolbarButton(state);

  return (
    <ToolbarButton
      ref={ref}
      className={
        state.pressed
          ? "bg-[--color-button-bg] text-[--color-button-hover]"
          : ""
      }
      tooltip={
        nodeType === ListStyleType.Disc ? "Bulleted List" : "Numbered List"
      }
      {...props}
    >
      {nodeType === ListStyleType.Disc ? <Icons.ul /> : <Icons.ol />}
    </ToolbarButton>
  );
});

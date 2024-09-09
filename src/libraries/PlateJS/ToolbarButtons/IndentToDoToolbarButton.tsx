import {
  useIndentTodoToolBarButton,
  useIndentTodoToolBarButtonState,
} from "@udecode/plate-indent-list";
import { withRef } from "@udecode/react-utils";

import { Icons } from "../Icons";

import { ToolbarButton } from "../Toolbar";

const IndentTodoToolbarButton = withRef<typeof ToolbarButton>((rest, ref) => {
  const state = useIndentTodoToolBarButtonState({ nodeType: "todo" });
  const { props } = useIndentTodoToolBarButton(state);

  return (
    <ToolbarButton
      ref={ref}
      className={
        state.pressed
          ? "bg-[--color-button-bg] text-[--color-button-hover]"
          : ""
      }
      tooltip="Todo"
      {...props}
      {...rest}
    >
      <Icons.todo />
    </ToolbarButton>
  );
});

export default IndentTodoToolbarButton;

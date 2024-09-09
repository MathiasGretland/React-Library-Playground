import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
} from "@udecode/plate-basic-marks";
import { useEditorReadOnly } from "@udecode/plate-common";

import { Icons /* iconVariants */ } from "../Icons";

import { MarkToolbarButton } from "./MarkToolbarButton";
import { ToolbarGroup } from "../Toolbar";
import { LinkToolbarButton } from "../Plugins/Link/LinkToolbarButton";
import { TurnIntoDropdownMenu } from "../DropdownMenu/TurnIntoDropdownMenu";
import { IndentListToolbarButton } from "./IndentListToolbarButton";
import { ListStyleType } from "@udecode/plate-indent-list";
import IndentTodoToolbarButton from "./IndentToDoToolbarButton";
import { TableDropdownMenu } from "../Plugins/Table/TableDropdownMenu";
import { EmojiDropdownMenu } from "../Plugins/Emoji/EmojiDropdownMenu";

export function FixedToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex flex-wrap"
        style={{
          transform: "translateX(calc(-1px))",
        }}
      >
        {!readOnly && (
          <>
            <ToolbarGroup noSeparator>{<TurnIntoDropdownMenu />}</ToolbarGroup>

            <ToolbarGroup>
              <MarkToolbarButton tooltip="Bold (⌘+B)" nodeType={MARK_BOLD}>
                <Icons.bold />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Italic (⌘+I)" nodeType={MARK_ITALIC}>
                <Icons.italic />
              </MarkToolbarButton>
              <MarkToolbarButton
                tooltip="Underline (⌘+U)"
                nodeType={MARK_UNDERLINE}
              >
                <Icons.underline />
              </MarkToolbarButton>

              <MarkToolbarButton
                tooltip="Strikethrough (⌘+⇧+M)"
                nodeType={MARK_STRIKETHROUGH}
              >
                <Icons.strikethrough />
              </MarkToolbarButton>
              <MarkToolbarButton tooltip="Code (⌘+E)" nodeType={MARK_CODE}>
                <Icons.code />
              </MarkToolbarButton>
            </ToolbarGroup>

            <ToolbarGroup>
              {
                <>
                  <IndentListToolbarButton nodeType={ListStyleType.Disc} />
                  <IndentListToolbarButton nodeType={ListStyleType.Decimal} />
                  <IndentTodoToolbarButton />
                </>
              }
            </ToolbarGroup>

            <ToolbarGroup>
              {
                <>
                  <LinkToolbarButton />
                  <TableDropdownMenu />
                  <EmojiDropdownMenu />
                </>
              }
            </ToolbarGroup>
          </>
        )}

        <div className="grow" />
      </div>
    </div>
  );
}

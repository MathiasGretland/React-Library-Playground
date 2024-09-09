import React from "react";
import {
  EmojiDropdownMenuOptions,
  useEmojiDropdownMenuState,
} from "@udecode/plate-emoji";

import { Icons } from "../../Icons";

import { emojiCategoryIcons, emojiSearchIcons } from "./EmojiIcons";
import { EmojiPicker } from "./EmojiPicker";
import { EmojiToolbarDropdown } from "./EmojiToolbarDropdown";
import { ToolbarButton } from "../../Toolbar";

type EmojiDropdownMenuProps = {
  options?: EmojiDropdownMenuOptions;
} & React.ComponentPropsWithoutRef<typeof ToolbarButton>;

export function EmojiDropdownMenu({
  options,
  ...props
}: EmojiDropdownMenuProps) {
  const { isOpen, setIsOpen, emojiPickerState } =
    useEmojiDropdownMenuState(options);

  return (
    <EmojiToolbarDropdown
      control={
        <ToolbarButton pressed={isOpen} isDropdown tooltip="Emoji" {...props}>
          <Icons.emoji />
        </ToolbarButton>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EmojiPicker
        {...emojiPickerState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icons={{
          categories: emojiCategoryIcons,
          search: emojiSearchIcons,
        }}
        settings={options?.settings}
      />
    </EmojiToolbarDropdown>
  );
}

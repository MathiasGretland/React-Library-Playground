import { cn } from "@udecode/cn";
import { EmojiSettings, UseEmojiPickerType } from "@udecode/plate-emoji";

import { EmojiPickerContent } from "./EmojiPickerContent";
import { EmojiPickerNavigation } from "./EmojiPickerNavigation";
import { EmojiPickerPreview } from "./EmojiPickerPreview";
import { EmojiPickerSearchAndClear } from "./EmojiPickerSearchAndClear";
import { EmojiPickerSearchBar } from "./EmojiPickerSearchBar";

export function EmojiPicker({
  i18n,
  searchValue,
  setSearch,
  clearSearch,
  isSearching,
  hasFound,
  searchResult,
  emoji,
  onSelectEmoji,
  onMouseOver,
  emojiLibrary,
  icons,
  handleCategoryClick,
  focusedCategory,
  visibleCategories,
  refs,
  settings = EmojiSettings,
}: UseEmojiPickerType) {
  return (
    <div
      className={cn(
        "flex flex-col rounded bg-background bg-white dark:bg-black",
        "h-[350px] w-[316px] shadow-[rgb(15_15_15_/_5%)_0_0_0_1px,_rgb(15_15_15_/_10%)_0_3px_6px,_rgb(15_15_15_/_20%)_0_9px_24px]"
      )}
    >
      <EmojiPickerNavigation
        i18n={i18n}
        emojiLibrary={emojiLibrary}
        icons={icons}
        focusedCategory={focusedCategory}
        onClick={handleCategoryClick}
      />
      <EmojiPickerSearchBar
        i18n={i18n}
        setSearch={setSearch}
        searchValue={searchValue}
      >
        <EmojiPickerSearchAndClear
          i18n={i18n}
          clearSearch={clearSearch}
          searchValue={searchValue}
        />
      </EmojiPickerSearchBar>
      <EmojiPickerContent
        i18n={i18n}
        emojiLibrary={emojiLibrary}
        isSearching={isSearching}
        searchResult={searchResult}
        visibleCategories={visibleCategories}
        settings={settings}
        onSelectEmoji={onSelectEmoji}
        onMouseOver={onMouseOver}
        refs={refs}
      />
      <EmojiPickerPreview
        i18n={i18n}
        emoji={emoji}
        hasFound={hasFound}
        isSearching={isSearching}
      />
    </div>
  );
}

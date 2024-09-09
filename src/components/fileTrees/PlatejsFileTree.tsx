import { Folder, File, Tree } from "../magicui/FileTree";

const PlatejsFileTree = () => {
  return (
    <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={["1"]}
        indicator
      >
        <Folder element="PlateJS" value="1">
          <Folder value="2" element="Draggable">
            <File value="3">
              <p>Draggable.tsx</p>
            </File>
            <File value="4">
              <p>WithDraggable.tsx</p>
            </File>
          </Folder>
          <Folder value="5" element="DropdownMenu">
            <File value="6">
              <p>DropDownMenu.tsx</p>
            </File>
            <File value="7">
              <p>TurnIntoDropdownMenu.tsx</p>
            </File>
          </Folder>

          <Folder value="8" element="Plugins">
            <Folder value="9" element="Emoji">
              <File value="10">
                <p>EmojiDropdownMenu.tsx</p>
              </File>
              <File value="11">
                <p>EmojiIcons.tsx</p>
              </File>
              <File value="12">
                <p>EmojiPicker.tsx</p>
              </File>
              <File value="13">
                <p>EmojiPickerContent.tsx</p>
              </File>
              <File value="14">
                <p>EmojiPickerNavigation.tsx</p>
              </File>
              <File value="15">
                <p>EmojiPickerPreview.tsx</p>
              </File>
              <File value="16">
                <p>EmojiPickerSearchAndClear.tsx</p>
              </File>
              <File value="17">
                <p>EmojiPickerSearchBar.tsx</p>
              </File>
              <File value="18">
                <p>EmojiToolbarDropdown.tsx</p>
              </File>
            </Folder>
            <Folder value="19" element="Link">
              <File value="20">
                <p>LinkFloatingToolbar.tsx</p>
              </File>
              <File value="21">
                <p>LinkPlugin.tsx</p>
              </File>
              <File value="22">
                <p>LinkToolbarButton.tsx</p>
              </File>
            </Folder>
            <Folder value="23" element="Table">
              <File value="24">
                <p>TableCellPlugin.tsx</p>
              </File>
              <File value="25">
                <p>TableDropdownMenu.tsx</p>
              </File>
              <File value="26">
                <p>TablePlugin.tsx</p>
              </File>
              <File value="27">
                <p>TableRowPlugin.tsx</p>
              </File>
            </Folder>
            <File value="28">
              <p>BoldPlugin.tsx</p>
            </File>
            <File value="29">
              <p>CodePlugin.tsx</p>
            </File>
            <File value="30">
              <p>DragOverCursorPlugin.tsx</p>
            </File>
            <File value="31">
              <p>HeadingPlugin.tsx</p>
            </File>
            <File value="32">
              <p>ItalicPlugin.tsx</p>
            </File>
            <File value="33">
              <p>ListPlugin.tsx</p>
            </File>
            <File value="34">
              <p>ParagraphPlugin.tsx</p>
            </File>
            <File value="35">
              <p>QuotePlugin.tsx</p>
            </File>
            <File value="36">
              <p>StrikethroughPlugin.tsx</p>
            </File>
            <File value="37">
              <p>ToDoPlugin.tsx</p>
            </File>
            <File value="38">
              <p>UnderlinePlugin.tsx</p>
            </File>
            <File value="39">
              <p>usePlugins.ts</p>
            </File>
          </Folder>
          <Folder value="40" element="ToolbarButtons">
            <File value="41">
              <p>FixedToolbarButtons.tsx</p>
            </File>
            <File value="42">
              <p>IndentListToolbarButton.tsx</p>
            </File>
            <File value="43">
              <p>IndentToDoToolbarButton.tsx</p>
            </File>
            <File value="44">
              <p>MarkToolbarButton.tsx</p>
            </File>
          </Folder>
          <File value="45">
            <p>Checkbox.tsx</p>
          </File>
          <File value="46">
            <p>CursorOverlay.tsx</p>
          </File>
          <File value="47">
            <p>Editor.tsx</p>
          </File>
          <File value="48">
            <p>FixedToolbar.tsx</p>
          </File>
          <File value="49">
            <p>Icons.tsx</p>
          </File>
          <File value="50">
            <p>Input.tsx</p>
          </File>
          <File value="51">
            <p>Placeholder.tsx</p>
          </File>
          <File value="52">
            <p>PlateEditor.tsx</p>
          </File>
          <File value="53">
            <p>Popover.tsx</p>
          </File>
          <File value="54">
            <p>Resizable.tsx</p>
          </File>
          <File value="55">
            <p>Separator.tsx</p>
          </File>
          <File value="56">
            <p>Toolbar.tsx</p>
          </File>
          <File value="57">
            <p>Tooltip.tsx</p>
          </File>
        </Folder>
      </Tree>
    </div>
  );
};

export default PlatejsFileTree;

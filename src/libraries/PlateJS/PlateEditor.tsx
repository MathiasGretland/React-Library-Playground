import { ELEMENT_DEFAULT, Plate, PlateController } from "@udecode/plate-common";
import { Editor } from "./Editor";
import { useRef, useState } from "react";
import { cn } from "@udecode/cn";
import { ELEMENT_H1 } from "@udecode/plate-heading";
import { plugins } from "./Plugins/usePlugins";
import { FixedToolbar } from "./FixedToolbar";
import { FixedToolbarButtons } from "./FixedToolbarButtons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PlateEditor = () => {
  const editor = useRef(null);

  console.log("plugins", plugins);

  const initialValue = [
    {
      type: ELEMENT_H1,
      children: [{ text: "PlateJS", bold: true }],
    },
    {
      type: ELEMENT_DEFAULT,
      children: [{ text: "Try it out!" }],
    },
  ];

  const [editorValue, setEditorValue] = useState([]);

  /** @ts-expect-error - new value is of Slate Node type, but can differ*/
  const onEditorChange = (newValue) => {
    setEditorValue(newValue);
  };

  console.log("editorValue", editorValue);

  return (
    <DndProvider backend={HTML5Backend}>
      <PlateController>
        <Plate
          plugins={plugins}
          initialValue={initialValue}
          onChange={(newValue) => onEditorChange(newValue)}
        >
          <div
            ref={editor}
            className={cn(
              // Look at this again, what does this even do?
              // Block selection
              "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
            )}
          >
            <FixedToolbar>
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor
              className="px-[96px] py-16 overflow-hidden"
              autoFocus
              focusRing={false}
              variant="ghost"
              size="md"
            />
          </div>
        </Plate>
      </PlateController>
    </DndProvider>
  );
};

export default PlateEditor;

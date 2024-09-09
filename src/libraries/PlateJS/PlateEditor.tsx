import {
  ELEMENT_DEFAULT,
  Plate,
  PlateController,
  TDescendant,
} from "@udecode/plate-common";
import { Editor } from "./Editor";
import { useRef, useState } from "react";
import { cn } from "@udecode/cn";
import { ELEMENT_H1 } from "@udecode/plate-heading";
import { plugins } from "./Plugins/usePlugins";
import { FixedToolbar } from "./FixedToolbar";
import { FixedToolbarButtons } from "./ToolbarButtons/FixedToolbarButtons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PlateEditor = () => {
  const editor = useRef(null);

  const initialValue = [
    {
      type: ELEMENT_H1,
      id: "id001",
      children: [{ text: "PlateJS" }],
    },
    {
      type: ELEMENT_DEFAULT,
      id: "id002",
      children: [{ text: "Try it out!" }],
    },
  ];

  const [editorValue, setEditorValue] = useState<TDescendant[]>(initialValue);

  const onEditorChange = (newValue: TDescendant[]) => {
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
              "relative",
              // Block selection
              "[&_.slate-start-area-left]:!w-[64px] [&_.slate-start-area-right]:!w-[64px] [&_.slate-start-area-top]:!h-4"
            )}
          >
            <FixedToolbar className="z-20">
              <FixedToolbarButtons />
            </FixedToolbar>

            <Editor
              className="px-10 py-10 overflow-auto"
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

import { Plate, PlateController, TDescendant } from "@udecode/plate-common";
import { Editor } from "./Editor";
import { useRef, useState } from "react";
import { cn } from "@udecode/cn";
import { plugins } from "./Plugins/usePlugins";
import { FixedToolbar } from "./FixedToolbar";
import { FixedToolbarButtons } from "./ToolbarButtons/FixedToolbarButtons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const PlateEditor = () => {
  const editor = useRef(null);

  const initialValue = [
    {
      type: "h1",
      children: [
        {
          text: "🌳 PlateJS",
        },
      ],
      id: "1",
    },
    {
      type: "p",
      children: [
        {
          text: "Easily create headings of various levels, from H1 to H6, to structure your content and make it more organized.",
        },
      ],
      id: "2",
    },
    {
      type: "p",
      children: [
        {
          text: "Each block is a React component in which you can manage the state:",
        },
      ],
      id: "5",
    },
    {
      type: "h2",
      id: "o0u24",
      children: [
        {
          text: "✔️ Todo",
        },
      ],
    },
    {
      type: "p",
      checked: true,
      indent: 1,
      listStyleType: "todo",
      children: [
        {
          text: 'Create a "banana language" translation plugin',
        },
      ],
      id: "6",
    },
    {
      type: "p",
      checked: true,
      indent: 1,
      listStyleType: "todo",
      children: [
        {
          text: 'Create a "detect sarcasm" plugin (good luck with that)',
        },
      ],
      listStart: 2,
      id: "7",
    },
    {
      type: "p",
      checked: false,
      indent: 1,
      listStyleType: "todo",
      children: [
        {
          text: "Create an AI auto-complete plugin",
        },
      ],
      listStart: 3,
      id: "8",
    },
    {
      type: "h2",
      children: [
        {
          text: "🔗 Link",
        },
      ],
      id: "9",
    },
    {
      type: "p",
      children: [
        {
          text: "Add ",
        },
        {
          type: "a",
          url: "https://en.wikipedia.org/wiki/Hypertext",
          children: [
            {
              text: "hyperlinks",
            },
          ],
          id: "tlrhc",
        },
        {
          text: " within your text to reference external sources or provide additional information using the Link plugin.",
        },
      ],
      id: "10",
    },
    {
      type: "p",
      children: [
        {
          text: "Effortlessly create hyperlinks using the toolbar or by pasting a URL while selecting the desired text.",
        },
      ],
      id: "11",
    },
    {
      type: "h2",
      children: [
        {
          text: "🤠 Emoji's",
        },
      ],
      id: "23",
    },
    {
      type: "p",
      children: [
        {
          text: "Express yourself with a touch of fun 🎉 and emotion 😃.",
        },
      ],
      id: "24",
    },
    {
      type: "h2",
      id: "xjoq8",
      children: [
        {
          text: "🚀 Much more!",
        },
      ],
    },
    {
      children: [
        {
          text: "Test it out yourself!",
        },
      ],
      type: "p",
      id: "8gwoq",
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
              "relative",
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

import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  createBoldPlugin,
  createCodePlugin,
  createItalicPlugin,
  createStrikethroughPlugin,
  createUnderlinePlugin,
} from "@udecode/plate-basic-marks";
import { createIndentPlugin } from "@udecode/plate-indent";
import {
  createExitBreakPlugin,
  createSoftBreakPlugin,
} from "@udecode/plate-break";
import { createTrailingBlockPlugin } from "@udecode/plate-trailing-block";
import {
  PlateElement,
  PlatePlugin,
  RenderAfterEditable,
  createPlugins,
} from "@udecode/plate-common";
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
  KEYS_HEADING,
  createHeadingPlugin,
} from "@udecode/plate-heading";
import {
  ELEMENT_PARAGRAPH,
  createParagraphPlugin,
} from "@udecode/plate-paragraph";
import {
  createTablePlugin,
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
} from "@udecode/plate-table";
import { withDraggables } from "../Draggable/WithDraggables";
import { withPlaceholders } from "../Placeholder";
import { withProps } from "@udecode/cn";
import BoldPlugin from "./BoldPlugin";
import CodePlugin from "./CodePlugin";
import ItalicPlugin from "./ItalicPlugin";
import UnderlinePlugin from "./UnderlinePlugin";
import StrikethroughPlugin from "./StrikethroughPlugin";
import ParagraphPlugin from "./ParagraphPlugin";
import HeadingPlugin from "./HeadingPlugin";
import { createLinkPlugin, ELEMENT_LINK } from "@udecode/plate-link";
import { LinkFloatingToolbar } from "./Link/LinkFloatingToolbar";
import LinkPlugin from "./Link/LinkPlugin";
import {
  ELEMENT_BLOCKQUOTE,
  createBlockquotePlugin,
} from "@udecode/plate-block-quote";
import { createNodeIdPlugin } from "@udecode/plate-node-id";
import QuotePlugin from "./QuotePlugin";
import DragOverCursorPlugin from "./DragOverCursorPlugin";
import { createDndPlugin } from "@udecode/plate-dnd";
import { ELEMENT_CODE_BLOCK } from "@udecode/plate-code-block";
import {
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_UL,
  createListPlugin,
  createTodoListPlugin,
} from "@udecode/plate-list";
import ListPlugin from "./ListPlugin";
import { createIndentListPlugin } from "@udecode/plate-indent-list";
import { TodoLi, TodoMarker } from "./ToDoPlugin";
import { TablePlugin } from "./Table/TablePlugin";
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
} from "./Table/TableCellPlugin";
import { TableRowPlugin } from "./Table/TableRowPlugin";
import { createEmojiPlugin } from "@udecode/plate-emoji";

export const plugins: PlatePlugin[] = createPlugins(
  [
    // Nodes
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBlockquotePlugin(),
    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),
    createListPlugin(),
    createTablePlugin(),
    createTodoListPlugin(),
    createEmojiPlugin({
      options: {
        trigger: "",
      },
    }),
    createIndentPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_BLOCKQUOTE,
            ELEMENT_CODE_BLOCK,
          ],
        },
      },
    }),
    createIndentListPlugin({
      inject: {
        props: {
          validTypes: [
            ELEMENT_PARAGRAPH,
            ELEMENT_H1,
            ELEMENT_H2,
            ELEMENT_H3,
            ELEMENT_BLOCKQUOTE,
            ELEMENT_CODE_BLOCK,
          ],
        },
      },
      options: {
        listStyleTypes: {
          todo: {
            liComponent: TodoLi,
            markerComponent: TodoMarker,
            type: "todo",
          },
        },
      },
    }),

    // Marks
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
    // Draggable plugins
    createDndPlugin({
      options: { enableScroller: true },
    }),
    createNodeIdPlugin(),
    DragOverCursorPlugin,
    // Helper functions

    createTrailingBlockPlugin({
      options: { type: ELEMENT_PARAGRAPH },
    }),
    createExitBreakPlugin({
      options: {
        rules: [
          {
            hotkey: "mod+enter",
          },
          {
            hotkey: "mod+shift+enter",
            before: true,
          },
          {
            hotkey: "enter",
            query: {
              start: true,
              end: true,
              allow: KEYS_HEADING,
            },
            relative: true,
            level: 1,
          },
        ],
      },
    }),
    createSoftBreakPlugin({
      options: {
        rules: [
          { hotkey: "shift+enter" },
          {
            hotkey: "enter",
            query: {
              allow: [ELEMENT_CODE_BLOCK, ELEMENT_BLOCKQUOTE /*ELEMENT_TD*/],
            },
          },
        ],
      },
    }),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        // Element/block plugins
        [ELEMENT_H1]: withProps(HeadingPlugin, { variant: "h1" }),
        [ELEMENT_H2]: withProps(HeadingPlugin, { variant: "h2" }),
        [ELEMENT_H3]: withProps(HeadingPlugin, { variant: "h3" }),
        [ELEMENT_H4]: withProps(HeadingPlugin, { variant: "h4" }),
        [ELEMENT_H5]: withProps(HeadingPlugin, { variant: "h5" }),
        [ELEMENT_H6]: withProps(HeadingPlugin, { variant: "h6" }),
        [ELEMENT_PARAGRAPH]: ParagraphPlugin,
        // Link
        [ELEMENT_LINK]: LinkPlugin,
        // Quote
        [ELEMENT_BLOCKQUOTE]: QuotePlugin,
        // List - Unordered - Ordered
        [ELEMENT_LI]: withProps(PlateElement, { as: "li" }),
        [ELEMENT_UL]: withProps(ListPlugin, { variant: "ul" }),
        [ELEMENT_OL]: withProps(ListPlugin, { variant: "ol" }),
        // Image ??
        // Table
        [ELEMENT_TABLE]: TablePlugin,
        [ELEMENT_TD]: TableCellPlugin,
        [ELEMENT_TH]: TableCellHeaderPlugin,
        [ELEMENT_TR]: TableRowPlugin,

        // Mark plugins
        [MARK_BOLD]: BoldPlugin,
        [MARK_CODE]: CodePlugin,
        [MARK_ITALIC]: ItalicPlugin,
        [MARK_UNDERLINE]: UnderlinePlugin,
        [MARK_STRIKETHROUGH]: StrikethroughPlugin,
      })
    ),
  }
);

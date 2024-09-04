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
import {
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
  createHeadingPlugin,
} from "@udecode/plate-heading";
import {
  ELEMENT_PARAGRAPH,
  createParagraphPlugin,
} from "@udecode/plate-paragraph";
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
import QuotePlugin from "./QuotePlugin";

export const plugins: PlatePlugin[] = createPlugins(
  [
    // Nodes
    createParagraphPlugin(),
    createHeadingPlugin(),
    createBlockquotePlugin(),

    createLinkPlugin({
      renderAfterEditable: LinkFloatingToolbar as RenderAfterEditable,
    }),

    // Marks
    createBoldPlugin(),
    createItalicPlugin(),
    createUnderlinePlugin(),
    createStrikethroughPlugin(),
    createCodePlugin(),
  ],
  {
    components: withDraggables(
      withPlaceholders({
        // ADD MORE STYLES HERE
        // YOU CAN SEE THAT THE STYLING GETS APPENDED AND WORKS, BUT
        // CLICKING THE BUTTON CURRENTLY DOES NOT WORK, FIND OUT WHY
        // THE DRAGGER WORKS! BUT BUTTON IS REALLY WEIRD BECUASE OF THE INTIAL BUTTON STYLING WE HAVE

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
        // Image ??
        // Table

        // Mark plugins
        [MARK_BOLD]: BoldPlugin,
        [MARK_CODE]: CodePlugin,
        [MARK_ITALIC]: ItalicPlugin,
        [MARK_UNDERLINE]: UnderlinePlugin,
        [MARK_STRIKETHROUGH]: StrikethroughPlugin,

        // Other plugins
        // ExitBreak?
        // SoftBreak?
        // TrailingBlock?
      })
    ),
  }
);

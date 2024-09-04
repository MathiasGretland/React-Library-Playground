import { withRef } from "@udecode/cn";
import {
  useLinkToolbarButton,
  useLinkToolbarButtonState,
} from "@udecode/plate-link";

import { Icons } from "../../Icons";

import { ToolbarButton } from "../../Toolbar";

export const LinkToolbarButton = withRef<typeof ToolbarButton>((rest, ref) => {
  const state = useLinkToolbarButtonState();
  const { props } = useLinkToolbarButton(state);

  return (
    <ToolbarButton ref={ref} tooltip="Link" {...props} {...rest}>
      <Icons.link />
    </ToolbarButton>
  );
});

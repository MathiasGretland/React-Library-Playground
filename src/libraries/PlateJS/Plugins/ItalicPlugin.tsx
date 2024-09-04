import { PlateElement } from "@udecode/plate-utils";
import { withRef } from "@udecode/react-utils";

const ItalicPlugin = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement ref={ref} asChild {...props}>
        <em>{children}</em>
      </PlateElement>
    );
  }
);

export default ItalicPlugin;

import { PlateElement } from "@udecode/plate-utils";
import { withRef } from "@udecode/react-utils";

const UnderlinePlugin = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement ref={ref} asChild {...props}>
        <u>{children}</u>
      </PlateElement>
    );
  }
);

export default UnderlinePlugin;

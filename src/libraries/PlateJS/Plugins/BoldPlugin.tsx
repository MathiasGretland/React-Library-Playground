import { PlateElement } from "@udecode/plate-utils";
import { withRef } from "@udecode/react-utils";

const BoldPlugin = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement ref={ref} asChild {...props}>
        <strong>{children}</strong>
      </PlateElement>
    );
  }
);

export default BoldPlugin;

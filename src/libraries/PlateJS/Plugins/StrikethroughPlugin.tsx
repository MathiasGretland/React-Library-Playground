import { PlateElement } from "@udecode/plate-utils";
import { withRef } from "@udecode/react-utils";

const StrikethroughPlugin = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement ref={ref} asChild {...props}>
        <s>{children}</s>
      </PlateElement>
    );
  }
);

export default StrikethroughPlugin;

import { cn, withRef } from "@udecode/cn";
import { PlateElement } from "@udecode/plate-common";

const QuotePlugin = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    return (
      <PlateElement
        ref={ref}
        asChild
        className={cn("my-1 border-l-2 pl-6 italic", className)}
        {...props}
      >
        <blockquote>{children}</blockquote>
      </PlateElement>
    );
  }
);

export default QuotePlugin;

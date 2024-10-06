import * as React from "react";
import { cn } from "../../lib/utils";
import { FieldRenderProps } from "react-final-form";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<
  HTMLInputElement,
  InputProps & FieldRenderProps<string>
>(({ className, input, meta, type, ...props }, ref) => {
  const showError = meta.touched && meta.error; // Only show error if field is touched and there is an error

  return (
    <div className="w-full">
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-[--color-background] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className,
          showError ? "border-red-500" : "" // Optional red border if error exists
        )}
        ref={ref}
        {...input} // Spread the input props from React Final Form
        {...props} // Spread any other passed props
      />
      {showError && (
        <span className="text-red-500 text-xs mt-1">{meta.error}</span>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;

"use client";

import { motion, type AnimationProps } from "framer-motion";
import React from "react";
import { cn } from "../../lib/utils";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

const animationProps = {
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  text?: string;
  img?: string | React.ReactNode;
  tooltip?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ text = "", img, tooltip, onClick, className }, ref) => {
    return (
      <TooltipPrimitive.Provider>
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            <motion.button
              {...animationProps}
              onClick={onClick}
              ref={ref}
              className={cn(
                "relative rounded-lg px-6 py-2 bg-[var(--color-button-bg)] font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] ",
                className
              )}
            >
              <span
                className="relative h-full w-full min-w-6 text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] "
                style={{
                  maskImage:
                    "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
                }}
              >
                {/* Render the image or JSX element */}
                {img && typeof img === "string" ? (
                  <img
                    src={img}
                    className="h-6 w-6 object-contain"
                    alt="Logo"
                  />
                ) : (
                  img
                )}
                {text}
              </span>
              <span
                style={{
                  mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
                  maskComposite: "exclude",
                }}
                className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary)/50%)_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
              ></span>
            </motion.button>
          </TooltipPrimitive.Trigger>

          {tooltip && (
            <TooltipPrimitive.Content
              sideOffset={4}
              className="z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md"
            >
              {tooltip}
            </TooltipPrimitive.Content>
          )}
        </TooltipPrimitive.Root>
      </TooltipPrimitive.Provider>
    );
  }
);

ShinyButton.displayName = "ShinyButton";
export default ShinyButton;

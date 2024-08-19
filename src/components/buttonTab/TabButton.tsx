"use client";

import { motion, type AnimationProps } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
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

export interface TabButtonProps {
  text?: string;
  img?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  selected?: boolean;
}

const TabButton = ({
  text = "",
  img,
  onClick,
  selected = true,
}: TabButtonProps) => {
  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      className={`relative rounded-md px-6 py-2 font-medium backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out ${
        selected
          ? "bg-tabButtonBackgroundColorLight dark:bg-tabButtonBackgroundColorDark dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
          : "bg-buttonTabBackgroundColorLight dark:bg-buttonTabBackgroundColorDark dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
      } focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-primary focus:ring-offset-bg`}
      style={{
        borderColor: "transparent", // Override border color
        scale: 0.8,
      }}
    >
      <span
        className={`relative h-full w-full text-sm uppercase tracking-wide flex items-center justify-center ${
          selected
            ? "text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)]"
            : "text-tabButtonNotSelectedTextColorLight dark:text-tabButtonNotSelectedTextColorDark"
        }`}
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        {img && <img src={img} className="h-6 w-6 object-contain" alt="Logo" />}
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
  );
};

export default TabButton;

"use client";

import { motion, type AnimationProps } from "framer-motion";
import { isDarkModeSet } from "../utils/ThemeProviderUtils";
import githubLogoLight from "../assets/githubLight.svg";
import githubLogoDark from "../assets/githubDark.svg";
import NumberTicker from "./magicui/NumberTicker";

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

interface GithubStarButtonProps {
  starCount: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const GithubStarButton = ({ starCount, onClick }: GithubStarButtonProps) => {
  const isDarkMode = isDarkModeSet();
  const githubLogo = isDarkMode ? githubLogoLight : githubLogoDark;

  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      // bg-[rgb(24,24,27)]
      className="relative rounded-lg px-2 py-2 font-medium bg-githubButtonBackgroundColorLight dark:bg-githubButtonBackgroundColorDark backdrop-blur-xl transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] group"
    >
      {/** PERSONAL NOTES FOR GITHUBSTARBUTTON */}
      {/** You still have to change the background color of the buttons for both*/}
      {/** Light and Dark mode, remember to also change the text color to match */}
      {/** The Star icon should have the right colors for both Light and Dark mode */}
      {/** Do a quick implementation of RTK to fetch Github star count data */}
      {/** How you ask? Well we don't know yet */}
      <span
        className="relative h-full w-full text-sm uppercase tracking-wide text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] flex items-center justify-center"
        style={{
          maskImage:
            "linear-gradient(-75deg,hsl(var(--primary)) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),hsl(var(--primary)) calc(var(--x) + 100%))",
        }}
      >
        <img src={githubLogo} className="h-4 w-4 object-contain" alt="Logo" />
        <p className="mr-2 ml-2 normal-case text-githubButtonTextColorLight dark:text-githubButtonTextColorDark">
          Star on GitHub
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
          className="size-4 mr-2 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clipRule="evenodd"
          ></path>
        </svg>
        <NumberTicker
          className="text-githubButtonTextColorLight dark:text-githubButtonTextColorDark"
          value={starCount}
        />
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

export default GithubStarButton;

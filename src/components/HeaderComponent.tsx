import { getIconCouldSlugs } from "../utils/MagicUiUtils";
import { BorderBeam } from "./magicui/BorderBeam";
import IconCloud from "./magicui/InteractiveIconCloud";
import ShinyButton from "./magicui/ShinyButton";
import githubLogoLight from "../assets/githubLight.svg";
import githubLogoDark from "../assets/githubDark.svg";
import lightModeLogo from "../assets/ligthMode.svg";
import darkModeLogo from "../assets/moon.svg";
import { useTheme } from "./theme-provider";
import { isDarkModeSet } from "../utils/ThemeProviderUtils";

const HeaderComponent = () => {
  const { setTheme } = useTheme();

  const slugs = getIconCouldSlugs();

  const isDarkMode = isDarkModeSet();

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full animate-fade-in backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="flex h-[60px] w-full flex-col justify-center overflow-hidden rounded-b-lg  bg-background md:shadow-xl">
          {/* Color moving thing */}
          <BorderBeam size={110} duration={10} delay={9} />
          <div className="max-w-[1280px] mx-auto flex h-full items-center justify-center rounded-b-lg px-4 space-x-64">
            {/* IconCloud on the far left */}
            <div className="relative flex h-1 w-full max-w-[17rem]  overflow-hidden rounded-lg  bg-background px-19 pb-10 pt-5 ">
              <div className="flex items-center justify-center ">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>

            {/* Centered Title */}
            <div className="flex-1 text-center left-1/2 transform -translate-x-[3.7rem]">
              <h1 className="text-xl font-bold">React Library Playground</h1>
            </div>

            {/* Buttons on the far right */}
            <div className="flex items-center space-x-1">
              <ShinyButton
                img={isDarkMode ? githubLogoDark : githubLogoLight}
                onClick={() =>
                  window.open(
                    "https://github.com/MathiasGretland/React-Library-Playground",
                    "_blank"
                  )
                }
              />
              <ShinyButton
                img={isDarkMode ? darkModeLogo : lightModeLogo}
                onClick={() => {
                  setTheme(isDarkMode ? "light" : "dark");
                }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;

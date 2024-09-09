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
        <div className="flex h-[60px] w-full flex-col rounded-b-lg bg-background md:shadow-xl">
          {/* Color moving thing */}
          <BorderBeam size={110} duration={10} delay={9} />
          <div className="mx-auto flex h-full items-center rounded-b-lg md:space-x-8 lg:space-x-32 xl:space-x-[16.8rem]">
            {/* IconCloud on the far left */}
            <div className="relative flex h-1 w-full max-w-[17rem] overflow-hidden rounded-lg  bg-background px-19 pb-10 pt-5 ">
              <div className="flex items-center justify-center ">
                <IconCloud iconSlugs={slugs} />
              </div>
            </div>

            {/* Centered Title */}
            <div className="min-w-52">
              <h1 className="text-xl font-bold">React Library Playground</h1>
            </div>

            {/* Buttons on the far right */}
            <div className="flex  space-x-1">
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

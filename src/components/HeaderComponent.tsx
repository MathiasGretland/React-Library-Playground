import { getIconCouldSlugs } from "../utils/MagicUiUtils";
import { BorderBeam } from "./magicui/BorderBeam";
import IconCloud from "./magicui/InteractiveIconCloud";

const HeaderComponent = () => {
  const slugs = getIconCouldSlugs();

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full animate-fade-in   backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="relative flex h-[60px] w-400 w-full flex-col items-center justify-center overflow-hidden rounded-b-lg  bg-background md:shadow-xl">
          {/* Color moving thing */}
          <BorderBeam size={110} duration={10} delay={9} />
          <div className="relative flex h-1 w-full max-w-[22rem] items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;

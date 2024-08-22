import ButtonTab from "./buttonTab/ButtonTab";
import ShineBorder from "./magicui/ShineBorder";
import GithubStarButton from "./GithubStarButton";
import { TLibrary, TTab } from "../@types";
import { GithubRepo } from "../redux/@types/GtihubRepo";
import { getLibrarySelectorValues } from "../utils/LibrarySelectorUtils";
import PlatejsFileTree from "./fileTrees/PlatejsFileTree";

export interface PlaygroundProps {
  selectedTab: TTab;
  setSelectedTab: React.Dispatch<React.SetStateAction<TTab>>;
  selectedLibrary: TLibrary;
  githubData: GithubRepo | undefined;
}

const Playground = ({
  selectedTab,
  setSelectedTab,
  selectedLibrary,
  githubData,
}: PlaygroundProps) => {
  const libraryButtons = getLibrarySelectorValues();
  const selectedLibraryValue = libraryButtons.find(
    (button) => button.value === selectedLibrary
  );

  return (
    <div>
      <div className="h-90 flex justify-between">
        {/** Showcase selector */}
        <div className="p-2 ml-10 flex justify-start">
          <ButtonTab
            buttons={["playground", "file-tree"]}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
        {/** Github button */}
        {githubData && (
          <div className="flex items-center mr-[52px]">
            <GithubStarButton githubData={githubData} />
          </div>
        )}
      </div>

      {/* Inner Playground container */}
      <div className="w-11/12 mx-auto">
        <ShineBorder
          className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          {selectedTab === "playground" ? (
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none ">
              {selectedLibraryValue?.text}
            </span>
          ) : (
            <PlatejsFileTree />
          )}
        </ShineBorder>
      </div>
    </div>
  );
};

export default Playground;

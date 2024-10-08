import ButtonTab from "./buttonTab/ButtonTab";
import ShineBorder from "./magicui/ShineBorder";
import GithubStarButton from "./GithubStarButton";
import { TLibrary, TTab } from "../@types";
import { GithubRepo } from "../redux/@types/GtihubRepo";
import { getLibrarySelectorValues } from "../utils/LibrarySelectorUtils";

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
          <div className="flex items-center ml-2">
            {selectedLibraryValue && (
              <selectedLibraryValue.informationDialogComponent
                tooltip={`Click for more details about ${selectedLibraryValue?.text}`}
              />
            )}
          </div>
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
          className="relative flex p-[1px] h-[500px] w-full flex-col items-center justify-center overflow-hidden md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          {selectedTab === "playground" ? (
            <>
              {selectedLibraryValue && (
                <selectedLibraryValue.playgroundComponent />
              )}
            </>
          ) : (
            <>
              {selectedLibraryValue && (
                <selectedLibraryValue.fileTreeComponent />
              )}
            </>
          )}
        </ShineBorder>
      </div>
    </div>
  );
};

export default Playground;

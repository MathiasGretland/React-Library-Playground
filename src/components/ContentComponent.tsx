import { useState } from "react";
import { getWordRotateWords } from "../utils/MagicUiUtils";
import LibrarySelector from "./LibrarySelector";
import Playground from "./Playground";
import NumberTicker from "./magicui/NumberTicker";
import WordRotate from "./magicui/WordRotate";
import { TLibrary, TTab } from "../@types";
import { useGetRepoDetailsQuery } from "../redux/api";
import { getAPIOwnerAndRepoFromLibrary } from "../utils/SelectedLibraryUtils";

const ContentComponent = () => {
  const words = getWordRotateWords();

  // ------ State ------
  const [selectedTab, setSelectedTab] = useState<TTab>("playground");
  const [selectedLibrary] = useState<TLibrary>("platejs");

  // ------ API ------
  const { data: githubData } = useGetRepoDetailsQuery(
    getAPIOwnerAndRepoFromLibrary(selectedLibrary)
  );

  return (
    <>
      <div className="flex h-full w-[1200px] flex-col justify-center overflow-hidden rounded-b-lg  bg-background md:shadow-xl">
        <LibrarySelector />
        <br />
        <Playground
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          selectedLibrary={selectedLibrary}
          githubData={githubData}
        />
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <NumberTicker value={20000} />
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <h1>Some sample text</h1>
        <WordRotate words={words} />
      </div>
    </>
  );
};

export default ContentComponent;

import { useState } from "react";
import LibrarySelector from "./LibrarySelector";
import Playground from "./Playground";
import { TLibrary, TTab } from "../@types";
import { useGetRepoDetailsQuery } from "../redux/api";
import { getAPIOwnerAndRepoFromLibrary } from "../utils/LibrarySelectorUtils";

const ContentComponent = () => {
  // ------ State ------
  const [selectedTab, setSelectedTab] = useState<TTab>("playground");
  const [selectedLibrary, setSelectedLibrary] = useState<TLibrary>("platejs");

  // ------ API ------
  const { data: githubData } = useGetRepoDetailsQuery(
    getAPIOwnerAndRepoFromLibrary(selectedLibrary)
  );

  return (
    <>
      <div className="flex h-full w-full max-w-[1200px] min-w-[350px]  flex-col justify-center overflow-hidden rounded-b-lg bg-background md:shadow-xl mx-auto">
        <LibrarySelector
          selectedLibrary={selectedLibrary}
          setSelectedLibrary={setSelectedLibrary}
        />
        <br />
        <Playground
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          selectedLibrary={selectedLibrary}
          githubData={githubData}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default ContentComponent;

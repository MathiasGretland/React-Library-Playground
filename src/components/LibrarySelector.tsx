import { TLibrary } from "../@types";
import { getLibrarySelectorValues } from "../utils/LibrarySelectorUtils";
import LibrarySelectorButton from "./LibrarySelectorButton";

interface LibrarySelectorProps {
  selectedLibrary: TLibrary;
  setSelectedLibrary: React.Dispatch<React.SetStateAction<TLibrary>>;
}

const LibrarySelector = ({
  selectedLibrary,
  setSelectedLibrary,
}: LibrarySelectorProps) => {
  const libraryButtons = getLibrarySelectorValues();

  return (
    <div>
      <h1 className="flex ml-12 mb-2">Library Selector</h1>
      <div className="flex ml-12">
        {libraryButtons.map((button) => {
          return (
            <LibrarySelectorButton
              key={button.text}
              text={button.text}
              logo={button.logo}
              selected={button.value === selectedLibrary}
              onClick={() => setSelectedLibrary(button.value)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LibrarySelector;

import { getWordRotateWords } from "../utils/MagicUiUtils";
import LibrarySelector from "./LibrarySelector";
import Playground from "./Playground";
import NumberTicker from "./magicui/NumberTicker";
import WordRotate from "./magicui/WordRotate";

const ContentComponent = () => {
  const words = getWordRotateWords();

  return (
    <>
      <div className="flex h-full w-[1200px] flex-col justify-center overflow-hidden rounded-b-lg  bg-background md:shadow-xl">
        <LibrarySelector />
        <br />
        <Playground />
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

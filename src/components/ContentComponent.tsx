import { getWordRotateWords } from "../utils/MagicUiUtils";
import WordRotate from "./magicui/WordRotate";

const ContentComponent = () => {
  const words = getWordRotateWords();

  return (
    <>
      <div>
        <h1>Some sample text</h1>
        <WordRotate words={words} />
      </div>
    </>
  );
};

export default ContentComponent;

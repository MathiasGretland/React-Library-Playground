import { getWordRotateWords } from "../utils/MagicUiUtils";
import WordRotate from "./magicui/WordRotate";

const ContentComponent = () => {
  const words = getWordRotateWords();

  return (
    <>
      <div className="h-[1000px] m-[500px]">
        <WordRotate words={words} />
      </div>
    </>
  );
};

export default ContentComponent;

import { TTab } from "../../@types";
import TabButton from "./TabButton";

interface ButtonTabsProps {
  buttons: TTab[];
  setSelectedTab: React.Dispatch<React.SetStateAction<TTab>>;
  selectedTab: TTab;
}

const ButtonTab = ({
  buttons,
  setSelectedTab,
  selectedTab,
}: ButtonTabsProps) => {
  return (
    <div className="p-2 space-x-1 flex rounded-md bg-buttonTabBackgroundColorLight dark:bg-buttonTabBackgroundColorDark">
      {buttons.map((button) => {
        return (
          <TabButton
            key={button}
            onClick={() => setSelectedTab(button)}
            text={button}
            selected={button === selectedTab}
          />
        );
      })}
    </div>
  );
};

export default ButtonTab;

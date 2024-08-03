import TabButton from "./TabButton";

interface ButtonTabsProps {
  buttons: string[];
  setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
  selectedTab: string;
}

const ButtonTab = ({
  buttons,
  setSelectedTab,
  selectedTab,
}: ButtonTabsProps) => {
  console.log("selectedTab", selectedTab);

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

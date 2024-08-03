import { useState } from "react";
import ButtonTab from "./buttonTab/ButtonTab";
import ShineBorder from "./magicui/ShineBorder";

const Playground = () => {
  const [selectedTab, setSelectedTab] = useState<string>("playground");

  return (
    <div>
      <div className="h-90 flex justify-between">
        {/** Showcase selector */}
        <div className="p-2 ml-10 flex justify-start">
          <ButtonTab
            buttons={["playground", "File tree"]}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        </div>
        {/** Github button */}
        <div className="flex items-center mr-10">
          <span>Github Button Thingy Goes Here</span>
        </div>
      </div>

      {/* Inner Playground container */}
      <div className="w-11/12 mx-auto">
        <ShineBorder
          className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          {/** text-transparent dark:from-white dark:to-slate-900/10 */}
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none ">
            Playground goes here
          </span>
        </ShineBorder>
      </div>
    </div>
  );
};

export default Playground;

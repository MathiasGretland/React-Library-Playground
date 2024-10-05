import { Info } from "lucide-react";
import ShinyButton from "../magicui/ShinyButton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/Dialog";
import BoxReveal from "../magicui/BoxReveal";

interface IPlateJSInformationDialogProps {
  tooltip?: string;
}

const PlateJSInformationDialog = ({
  tooltip,
}: IPlateJSInformationDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShinyButton
          img={<Info className="ml-[-12px]" />}
          tooltip={tooltip}
          className="rounded-full w-1"
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] bg-[--color-background]">
        <DialogHeader>
          <DialogTitle>
            <BoxReveal boxColor={"#646cff"} duration={0.5}>
              <p className="text-[3.5rem] mb-3 ">
                PlateJS<span className="text-[#646cff]">.</span>
              </p>
            </BoxReveal>
          </DialogTitle>
          <DialogDescription>
            {/* Title description */}
            <BoxReveal boxColor={"#646cff"} duration={0.5}>
              <p className="mt-[.5rem] text-[1rem]">
                The <span className="text-[#646cff]">WYSIWYG </span>
                editor framework for{" "}
                <span className="text-[#646cff]">React</span>
              </p>
            </BoxReveal>
            <div className="mt-6">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Plate makes it easier to develop with{" "}
                  <a
                    href="https://docs.slatejs.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Slate
                  </a>
                  , a powerful text editor framework. Plate focuses on
                  <span className="font-semibold text-[#646cff]"> Core, </span>
                  <span className="font-semibold text-[#646cff]">
                    {" "}
                    Plugins,{" "}
                  </span>
                  <span className="font-semibold text-[#646cff]">
                    {" "}
                    Primitives,{" "}
                  </span>
                  and
                  <span className="font-semibold text-[#646cff]">
                    {" "}
                    Components.
                  </span>
                </p>
              </BoxReveal>
            </div>
            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Core</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Plate's core is its plugin system, built on{" "}
                  <span className="text-[#646cff]"> slate </span> and
                  <span className="text-[#646cff]"> slate-react</span>. It
                  enhances functionality and supports server-side rendering,
                  keeping your project organized and efficient.
                </p>
              </BoxReveal>
            </div>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Plugins</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Plate offers various headless plugins for extending editor
                  functionality, including:
                </p>
              </BoxReveal>
            </div>

            <div className="mt-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  <span className="font-semibold text-[#5046e6]">
                    -&gt; State Management:
                  </span>{" "}
                  Each plugin has its own Zustand store.
                </p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  <span className="font-semibold text-[#5046e6]">
                    -&gt; Shortcuts:
                  </span>{" "}
                  Define custom hotkeys for each plugin.
                </p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  <span className="font-semibold text-[#5046e6]">
                    -&gt; API and Transforms::
                  </span>{" "}
                  Plugins can define their own API methods and transforms,
                  accessible through{" "}
                  <span className="text-[#646cff]"> editor.api </span>and
                  <span className="text-[#646cff]"> editor.transforms</span>.
                </p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  <span className="font-semibold text-[#5046e6]">
                    -&gt; TypeScript:
                  </span>{" "}
                  Powerful type inference for both plugins and editor.
                </p>
              </BoxReveal>
            </div>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Primitives</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Plate provides unstyled and accessible components using{" "}
                  <a
                    href="https://www.radix-ui.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    Radix UI
                  </a>
                  , ideal for building robust design systems.
                </p>
              </BoxReveal>
            </div>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Components</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Pre-built styled components with{" "}
                  <a
                    href="https://ui.shadcn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline" }}
                  >
                    shadcn/ui
                  </a>
                  , which you can customize using Plate's CLI.
                </p>
              </BoxReveal>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PlateJSInformationDialog;

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

interface IReactFinalFormInformationDialogProps {
  tooltip?: string;
}

const ReactFinalFormInformationDialog = ({
  tooltip,
}: IReactFinalFormInformationDialogProps) => {
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
                React <span className="text-[#646cff]">Final</span> Form
              </p>
            </BoxReveal>
          </DialogTitle>
          <DialogDescription>
            {/* Title description */}
            <BoxReveal boxColor={"#646cff"} duration={0.5}>
              <p>
                <span className="text-[#646cff]">High performance </span>{" "}
                subscription-based form{" "}
                <span className="text-[#646cff]">state management </span> for
                <span className="text-[#646cff]"> React</span>
              </p>
            </BoxReveal>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Modular</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  From day one,{" "}
                  <span className="text-[#646cff]"> Final Form </span>
                  and <span className="text-[#646cff]"> React Final </span>
                  Form were designed to be modular: you put the pieces together
                  to build the form library that fits your requirements.
                </p>
              </BoxReveal>
            </div>

            <div className="mt-2">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Why should your users need to download complex code for
                  handling arrays of fields when your signup form is just four
                  fields?
                </p>
              </BoxReveal>
            </div>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Zero Dependencies</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Only two peer dependencies:{" "}
                  <span className="font-semibold text-[#646cff]"> React </span>{" "}
                  and{" "}
                  <span className="font-semibold text-[#646cff]">
                    {" "}
                    Final Form
                  </span>
                  .
                </p>
              </BoxReveal>
            </div>

            <div className="mt-2">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  If bundle size is important to you – and it should be! – React
                  Final Form provides one lean form management solution,
                  weighing in at a miniscule{" "}
                  <span className="text-[#646cff]">3.4KB </span>gzipped (plus
                  <span className="text-[#646cff]"> 5.7KB </span> gzipped for
                  Final Form).
                </p>
              </BoxReveal>
            </div>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">High Performance</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  For small forms, redrawing your entire form on every keypress
                  is no problem. But when your form grows, performance can
                  degrade.
                </p>
              </BoxReveal>
            </div>

            <div className="mt-2">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  No other form library allows such fine tuning to manage
                  exactly which form elements get notified of form state
                  changes.
                </p>
              </BoxReveal>
            </div>

            {/* Section title */}
            <div className="mt-5 mb-3">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p className="text-[1.5rem] font-semibold">Hooks Compatible</p>
              </BoxReveal>
            </div>

            <div>
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  Consistently on the cutting edge of React technology, React
                  <span className="text-[#646cff]"> hooks API </span>
                  Final Form offers a to allow you to flexibly compose your form
                  functionality.
                </p>
              </BoxReveal>
            </div>

            <div className="mt-2">
              <BoxReveal boxColor={"#646cff"} duration={0.5}>
                <p>
                  The <span className="text-[#646cff]"> public hooks API </span>{" "}
                  is the same one that React Final Form uses internally.
                </p>
              </BoxReveal>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReactFinalFormInformationDialog;

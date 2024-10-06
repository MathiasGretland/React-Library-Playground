import { useFormState } from "react-final-form";
import BoxReveal from "../../components/magicui/BoxReveal";
import { Button } from "../../components/shadcn/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/shadcn/Dialog";
import {
  getAnimalsTextFromValue,
  getBorderColorFromValue,
} from "../../utils/ZooUtils";

const ZooDialog = () => {
  const { values, errors } = useFormState();

  const hasErrors = Object.keys(errors ?? {}).length > 0;

  return (
    <Dialog>
      {!hasErrors ? (
        <DialogTrigger asChild>
          <Button
            type="submit"
            className="bg-[--color-button-bg-secondary] text-githubButtonTextColorLight dark:text-githubButtonTextColorDark"
          >
            Submit
          </Button>
        </DialogTrigger>
      ) : (
        <Button
          type="submit"
          className="bg-[--color-button-bg-secondary] text-githubButtonTextColorLight dark:text-githubButtonTextColorDark"
        >
          Submit
        </Button>
      )}
      <DialogContent className="sm:max-w-[825px] bg-[--color-background]">
        <DialogHeader>
          <DialogTitle>
            <BoxReveal
              boxColor={getBorderColorFromValue(values?.borderColor)}
              duration={0.5}
            >
              <p className="text-[3.5rem] mb-3 ">{`${values.name} 🏕️🌿🌴🚙`}</p>
            </BoxReveal>
          </DialogTitle>
          <DialogDescription>
            <BoxReveal
              boxColor={getBorderColorFromValue(values?.borderColor)}
              duration={0.5}
            >
              <p className="text-[1.5rem] mb-3 ">
                Wait, where is the Zoo with{" "}
                {getAnimalsTextFromValue(values?.animals)} 🤔
              </p>
            </BoxReveal>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ZooDialog;

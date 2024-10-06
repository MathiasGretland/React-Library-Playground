import { Field } from "react-final-form";
import Input from "../../components/shadcn/Input";
import { Label } from "../../components/shadcn/Label";
import RadioGroupItem from "../../components/shadcn/RadioGroupItem";
import RadioGroup from "../../components/shadcn/RadioGroup";
import MultiCheckboxInput from "../../components/shadcn/MultiCheckboxInput";
import { TAnimals } from "../../@types";
import ZooDialog from "./ZooDialog";

const ZooForm = () => {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="space-y-3">
        <Label className="text-xl">Create your own Zoo! 🏕️🌿🌴🚙</Label>

        {/* Zoo name */}
        <div className="flex justify-center items-center space-x-3">
          <div>
            <Label>Zoo name</Label>
          </div>
          <div>
            <Field<string>
              name="name"
              component={Input}
              placeholder="Name of the zoo"
            />
          </div>
        </div>

        {/* Border color */}
        <div className="flex justify-center items-center space-x-4">
          <Label>Border color</Label>
          <RadioGroup className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-2">
              <Label className="text-[#4A90E2]">Blue</Label>
              <Field<string>
                name="borderColor"
                component={RadioGroupItem}
                type="radio"
                value="#4A90E2"
              />
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Label className="text-[#52f12b]">Green</Label>
              <Field<string>
                name="borderColor"
                component={RadioGroupItem}
                type="radio"
                value="#52f12b"
              />
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Label className="text-[#f02d2d]">Red</Label>
              <Field<string>
                name="borderColor"
                component={RadioGroupItem}
                type="radio"
                value="#f02d2d"
              />
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Label
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4A90E2, #52f12b, #f02d2d)",
                }}
              >
                All of them
              </Label>
              <Field<string>
                name="borderColor"
                component={RadioGroupItem}
                type="radio"
                value="#4A90E2, #52f12b, #f02d2d"
              />
            </div>
          </RadioGroup>
        </div>

        <div className="flex justify-center items-center space-x-4">
          <Label>Animals</Label>
          <div className="flex justify-center items-center space-x-2">
            <Label className="font-normal">🦁Lion</Label>
            <Field<TAnimals>
              name="animals"
              component={MultiCheckboxInput}
              type="checkbox"
              value="lion"
            />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Label className="font-normal">🐘Elephant</Label>
            <Field<TAnimals>
              name="animals"
              component={MultiCheckboxInput}
              type="checkbox"
              value="elephant"
            />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Label className="font-normal">🦒Giraffe</Label>
            <Field<TAnimals>
              name="animals"
              component={MultiCheckboxInput}
              type="checkbox"
              value="giraffe"
            />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <Label className="font-normal">🐒Monkey</Label>
            <Field<TAnimals>
              name="animals"
              component={MultiCheckboxInput}
              type="checkbox"
              value="monkey"
            />
          </div>
        </div>

        <ZooDialog />
      </div>
    </div>
  );
};

export default ZooForm;

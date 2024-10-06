import { Form } from "react-final-form";
import ZooForm from "./ZooForm";
import ZooFromValuesDisplay from "./ZooFormValuesDisplay";
import { TAnimals } from "../../@types";

const onSubmit = (values: IZooFormValues) => {
  // You can handle form submission logic here if needed
  console.log("Form submitted", values);
};
const validate = (values: IZooFormValues) => {
  const errors = {};
  if (!values.name) {
    // @ts-expect-error - expecting TypeScript to not recognize 'name' but it exists in IZooFormValues
    errors.name = "Required";
  }
  return errors;
};

interface IZooFormValues {
  name: string;
  borderColor?: string;
  animals?: TAnimals[];
}

const ReactFinalForm = () => {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          {/* Width should not be hard set like this, but works for now */}
          <div className="flex w-[1000px]">
            <ZooForm />
            <ZooFromValuesDisplay />
          </div>
        </form>
      )}
    />
  );
};

export default ReactFinalForm;

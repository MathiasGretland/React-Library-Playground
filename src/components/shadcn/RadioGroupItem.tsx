import { FieldRenderProps } from "react-final-form";

function RadioGroupItem<T extends string>({
  input,
  meta,
  ...rest
}: FieldRenderProps<T, any>) {
  return <input type="radio" {...input} {...rest} />;
}

export default RadioGroupItem;

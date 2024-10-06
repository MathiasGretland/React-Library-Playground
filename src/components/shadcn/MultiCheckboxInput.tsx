import React from "react";
import { FieldRenderProps } from "react-final-form";
import { TAnimals } from "../../@types";

type Props = FieldRenderProps<TAnimals, any>;

const MultiCheckboxInput: React.FC<Props> = ({
  input: { value, ...input },
}: Props) => <input {...input} type="checkbox" />;

export default MultiCheckboxInput;

import { useFormState } from "react-final-form";

const ZooFromValuesDisplay = () => {
  const { values } = useFormState(); // Access form values

  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <pre
        className="text-left"
        style={{
          border: "1px solid #ccc",
          background: "rgba(0,0,0,0.1)",
          boxShadow: "inset 1px 1px 3px rgba(0, 0, 0, 0.2)",
          padding: "20px",
        }}
      >
        {JSON.stringify(values, undefined, 2)}
      </pre>
    </div>
  );
};

export default ZooFromValuesDisplay;

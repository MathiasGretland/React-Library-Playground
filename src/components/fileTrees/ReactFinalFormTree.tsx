import { Folder, File, Tree } from "../magicui/FileTree";

const ReactFinalFormTree = () => {
  return (
    <div className="relative flex h-[300px] w-1/2 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Tree
        className="p-2 overflow-hidden rounded-md bg-background"
        initialSelectedId="7"
        initialExpandedItems={["1"]}
        indicator
      >
        <Folder element="ReactFinalForm" value="1">
          <Folder value="2" element="Images">
            <File value="3">
              <p>ZooBackground.png</p>
            </File>
          </Folder>

          <File value="4">
            <p>ReactFinalForm.tsx</p>
          </File>
          <File value="5">
            <p>ZooDialog.tsx</p>
          </File>
          <File value="6">
            <p>ZooForm.tsx</p>
          </File>
          <File value="7">
            <p>ZooFormValuesDisplay.tsx</p>
          </File>
        </Folder>
      </Tree>
    </div>
  );
};

export default ReactFinalFormTree;


import { CrossIcon } from "../icons/CrossIcon";
import Input from "./Input";
import Button from "./Button";


interface CreateContentModalProps {
  open: boolean;
  onClose: () => void;
}


// this is a controlled component - when the use clicks on it the model open and close based on click - on state variable
function CreateContentModal({open, onClose}: CreateContentModalProps) {



  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-200 fixed top-0 left-0 opacity-60 flex justify-center">
          <div className="flex flex-col items-center justify-center">
            <span className="bg-white opacity-100 p-4 rounded">
              <div 
              onClick={onClose}
              className="flex justify-end cursor-pointer">
                <CrossIcon size="lg" />
              </div>

              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>

              <div className="flex justify-center ">
                <Button variant="primary" text={"Submit"} size="sm" onClick={()=> {}} />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateContentModal
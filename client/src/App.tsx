import Button from "./components/Button"
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";




function App() {


  return (
    <div className="h-screen ">
      <Button startIcon={<PlusIcon size="lg" />}  variant="primary" size="sm" onClick={() => {}} text={"Add Content"} />
      <Button startIcon={<ShareIcon size="lg" />} variant="secondary" size="sm" onClick={() => {}} text={"Share Brain"} />
    </div>
  );
}

export default App;
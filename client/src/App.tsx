import Button from "./components/ui/Button"
import { PlusIcon } from "./icons/PlusIcon";




function App() {


  return (
    <div className="h-screen bg-slate-800">
      <Button startIcon={<PlusIcon size="lg" />}  variant="primary" size="sm" onClick={() => {}} text={"Add Content"} />
      <Button  variant="secondary" size="md" onClick={() => {}} text={"Add Content"} />
      <Button  variant="secondary" size="lg" onClick={() => {}} text={"Add Content"} />
    </div>
  );
}

export default App;
import Button from "./components/Button"
import Card from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";




function App() {


  return (
    <div className="h-screen p-4 ">
      <div className="flex justify-end gap-4">
        <Button
          startIcon={<PlusIcon size="lg" />}
          variant="primary"
          size="sm"
          onClick={() => {}}
          text={"Add Content"}
        />
        <Button
          startIcon={<ShareIcon size="lg" />}
          variant="secondary"
          size="sm"
          onClick={() => {}}
          text={"Share Brain"}
        />
      </div>

      <div className="flex gap-4">
        <Card
          type="twitter"
          link="https://x.com/nirudhuuu/status/2032854953296007609/photo/1"
          title="First Tweet"
        />
        <Card
          type="youtube"
          link="https://www.youtube.com/watch?v=Ades3pQbeh8&t=4s"
          title="First Vid"
        />
      </div>
    </div>
  );
}

export default App;
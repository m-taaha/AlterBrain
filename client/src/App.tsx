import Button from "./components/Button"
import Card from "./components/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";




function App() {


  return (
    <div className="h-screen ">
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
  );
}

export default App;
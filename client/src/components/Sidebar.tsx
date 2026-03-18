import { LogoIcon } from "../icons/LogoIcon";
import { TwitterIcon } from "../icons/TwitterIcon"
import { YoutubeIcon } from "../icons/YoutubeIcon"
import SidebarItem from "./SidebarItem"




function Sidebar() {
  return (
    <div className="h-screen bg-white border-r-4 border-gray-200 w-76 position-fixed left-0 top-0 pl-2 ">
      <div className="flex text-2xl pt-8 pr-2 items-center">
        <div className="pr-2 text-purple-600">
          <LogoIcon />
        </div>
          AlterBrain
      </div>


      <div className="pt-8 pl-4 ">
        <SidebarItem icon={<TwitterIcon size="xl" />} text={"Twitter"} />
        <SidebarItem icon={<YoutubeIcon size="xl" />} text={"Youtube"} />
      </div>
    </div>
  );
} 

export default Sidebar
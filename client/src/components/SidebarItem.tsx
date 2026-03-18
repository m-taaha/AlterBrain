import type { ReactElement } from "react";


interface SidebarItemProps {
    text: string;
    icon: ReactElement;
}


function SidebarItem({text, icon}: SidebarItemProps) {
  return (
    <div className="flex items-center text-gray-800 py-2.5 hover:bg-gray-200 rounded max-w-48 transition-all duration-150 ">
      <div className="pr-2">{icon}</div>
      <div className="">{text}</div>
    </div>
  );
}

export default SidebarItem
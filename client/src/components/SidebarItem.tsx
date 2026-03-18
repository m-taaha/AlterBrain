import type { ReactElement } from "react";


interface SidebarItemProps {
    text: string;
    icon: ReactElement;
}


function SidebarItem({text, icon}: SidebarItemProps) {
  return (
    <div className="flex">
        {icon}
        {text}
        </div>
  )
}

export default SidebarItem
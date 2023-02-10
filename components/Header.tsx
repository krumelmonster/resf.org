import { Popover } from "@headlessui/react";

import NavbarDesktop from "./navbar/desktop/NavbarDesktop";
import NavbarMobile from "./navbar/mobile/NavbarMobile";

import type { NavItems } from "@/types/navigation/NavItem";
import type { NavActionItems } from "@/types/navigation/NavActionItem";

export interface HeaderProps {
  menu: {
    projectItems: NavItems;
    menuItems: NavItems;
    actionItems: NavActionItems;
  };
}

export default function Header({ menu }: HeaderProps) {
  return (
    <Popover className="relative bg-white">
      <NavbarDesktop
        projectItems={menu.projectItems}
        menuItems={menu.menuItems}
        actionItems={menu.actionItems}
      />
      <NavbarMobile
        projectItems={menu.projectItems}
        menuItems={menu.menuItems}
        actionItems={menu.actionItems}
      />
    </Popover>
  );
}

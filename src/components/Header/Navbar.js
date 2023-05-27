import { menuItems } from "../../data/navbarItems";
import MenuItems from "./MenuItems";
const NavbarItem = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavbarItem;

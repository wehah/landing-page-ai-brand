import ListItem from "../Common/ListItems/ListItem";
import "./navbar.scss";
import Typography from "../Common/Typography/Typography";
import Button from "../Common/Buttons/Buttons";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";
import { useDrawerStore } from "../../store";

export default function NavBar() {
  const toggleDrawer = useDrawerStore((state) => state.toggleDrawer);
  const menuItems = ["about us", "models", "for developers", "for creatives"];
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

 

  return (
    <nav className="navbar">
      <Typography variant="h3" color="primary-dim">
        wehah.ai
      </Typography>

      {!isMobile && (
        <div className="list">
          {menuItems.map((item) => (
            <ListItem key={item} label={item} color="primary" />
          ))}
        </div>
      )}

      <div>
        <Button variant="textLink" shape="rounded" label="search" />
        {isMobile && (
          <Button
            variant="textLink"
            shape="rounded"
            label="menu"
            onClick={toggleDrawer}
          />
        )}

        {isMobile && <NavDrawer menuItems={menuItems}  />}
      </div>
    </nav>
  );
}


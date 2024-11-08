import "./navbar.scss";
import Button from "../Common/Buttons/Buttons";
import { useDrawerStore } from "../../store";
import ListItem from "../Common/ListItems/ListItem";
import Typography from "../Common/Typography/Typography";

export default function NavDrawer({ menuItems }) {
  const open = useDrawerStore((state) => state.open);
  const close = useDrawerStore((state) => state.drawerClose);

  return (
    <div className={`overlay ${open ? "open-overlay" : "closed-overlay"}`}>
      <div className={`drawer ${open ? "open-drawer" : "closed-drawer"}`}>
        <div className="drawer-header">
          <Button
            onClick={close}
            variant={"textLink"}
            shape={"rounded"}
            label={"close"}
          />
        </div>

        <div>
          
          {menuItems.map((item) => (
            <ListItem
              key={item}
              label={item}
              color="primary"
              width="full"
              onClick={close}
            />
          ))}
        </div>
        <div className="drawer-user-action">
          <Typography variant={"body1"}>Simplify your workflow and boost productivity. create your free account.</Typography>
          <span>
            <Button
              variant={"primary"}
              label={"sign up"}
              onClick={close}
            />
            <Button
              variant={"secondary"}
              label={"sign in"}
              onClick={close}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

import "./navbar.scss";
import Button from "../Common/Buttons/Buttons";
import { useDrawerStore } from "../../store";
import ListItem from "../Common/ListItems/ListItem";
import Typography from "../Common/Typography/Typography";
import DarkModeToggle from "../Common/DarkModeToggle/DarkModeToggle";
import { motion } from "framer-motion";
import { NavContent } from "./NavContent";

const overlayVariants = {
  visible: { opacity: 1, transition: { duration: 0.15, delay: 0 } },
  hidden: { opacity: 0, transition: { delay: 0.5, duration: 0.55 } },
};

const drawerVariants = {
  hidden: { x: "100vw", opacity: 1, transition: { duration: 0.45 } },
  visible: {
    x: "0",
    opacity: 1,
    transition: { duration: 0.45 },
  },
};

export default function NavDrawer({ menuItems }) {
  const open = useDrawerStore((state) => state.open);
  const close = useDrawerStore((state) => state.drawerClose);

  return (
    <>
      <motion.div
        className={`overlay ${open ? "open-overlay" : "closed-overlay"}`}
        variants={overlayVariants}
        initial="hidden"
        animate={open ? "visible" : "hidden"}
        style={{ pointerEvents: open ? "auto" : "none" }}
      >
        <motion.div
          className={`drawer ${open ? "open-drawer" : "closed-drawer"}`}
          variants={drawerVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
        >
          <div className="drawer-header">
            <DarkModeToggle />
            <Button
              onClick={close}
              variant={"textLink"}
              shape={"rounded"}
              label={"close"}
            />
          </div>

          <div>
            {NavContent.map((item) => (
              <ListItem
                key={item.id}
                label={item.item}
                content={item.content}
                color="primary"
                width="full"
                onClick={close}
              />
            ))}
          </div>
          <div className="drawer-user-action">
            <Typography variant={"body1"}>
              Simplify your workflow and boost productivity. create your free
              account today.
            </Typography>
            <span>
              <Button variant={"primary"} label={"sign up"} onClick={close} />
              <Button variant={"secondary"} label={"sign in"} onClick={close} />
            </span>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

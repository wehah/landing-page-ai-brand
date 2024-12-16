import "./listItem.scss";
import Typography from "../Typography/Typography";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { listItemParent, listItem, desktopTray } from "./ItemAnimations";
import NavTray from "../../Navigation/NavTray";
import InnerChild from "./InnerChild";

export default function ListItemChild({
  children,
  open,
  desktop,
  childColor,
  onClick,
}) {
  return (
    <>
      <AnimatePresence>
        {open && children && (
          <div
            className={classNames({
              "list-item-children": open,
              "list-item-children-open": open,
            })}
          >
            {children &&
              !desktop &&
              children.map((child, index) => (
                <div key={index}>
                  <Typography
                    onClick={onClick}
                    key={`item ${child}-${index}`}
                    variant="body2"
                    color={childColor ? childColor : "primary-dim"}
                  >
                    {child.title}
                  </Typography>
                </div>
              ))}
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && desktop && (
          <NavTray>
            <motion.div
              className="desktop-item-container"
              variants={desktopTray}
              initial="hidden"
              animate="visible"
              exit={"exit"}
            >
              <motion.div
                className={classNames({
                  "list-item-children-desktop": true,
                })}
                variants={listItemParent}
              >
                {desktop &&
                  open &&
                  children &&
                  children &&
                  children.map((child, index) => (
                    <motion.div variants={listItem} key={index}>
                      <Typography
                        onClick={onClick}
                        key={`item ${child}-${index}`}
                        variant="body2"
                        color={childColor ? childColor : "primary-main"}
                      >
                        {child.title}
                      </Typography>
                      <InnerChild
                        open={open}
                        innerChildrenContent={child.items}
                      />
                    </motion.div>
                  ))}
              </motion.div>
            </motion.div>
          </NavTray>
        )}
      </AnimatePresence>
    </>
  );
}

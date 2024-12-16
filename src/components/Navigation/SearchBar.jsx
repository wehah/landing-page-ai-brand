import { motion, AnimatePresence, stagger, delay } from "framer-motion";
import Input from "../Common/Input/Input";
import { searchStore } from "../../store";
import Typography from "../Common/Typography/Typography";
import NavTray from "./NavTray";
import useClickOutside from "../../UseClickOutside";
import { useRef, useState } from "react";
import {childVariants, parentVariants} from "./NavAnimations"




export default function SearchBar() {
  const toggleSearch = searchStore((state) => state.toggleSearch);
  const openSearch = searchStore((state) => state.open);
  const closeSearch = searchStore((state) => state.closeSearch);

  let exceptions = ".variant-btn-text-link";
  const ref = useRef(null);
  useClickOutside(ref, exceptions, closeSearch);

  const popularSearches = [{id:100, item:"Search"}, {id:101, item:"Models"}, {id:102, item:"Developer"}, {id:103, item:"Creative"}];
  const [searchItems, setSearchItems] = useState(popularSearches[0]);


  return (
    <NavTray>
      <>
        <AnimatePresence>
          {openSearch && (
            <motion.div
              ref={ref}
              className="search"
              variants={parentVariants}
              initial="hidden"
              animate="visible"
              exit={"exit"}
            >
              <motion.div
                variants={childVariants}
              >
                <Input type="search" placeholder={searchItems.item} />
              </motion.div>

              <motion.div
                className="popular-searches"
                variants={childVariants}
              >
                <Typography variant="h3" color="primary">
                  Popular searches
                </Typography>
                <motion.div
                  className="popular-searche-items"
                  variants={childVariants}
                >
                  {popularSearches.slice(1, 4).map((item, index) => (
                <div key={item.id+item.item} className="text-decoration" onClick={closeSearch}> 
                    <Typography key={item.id} variant={"body2"} color={"primary-dim"} >{item.item}</Typography> 
                    
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </NavTray>
  );
}

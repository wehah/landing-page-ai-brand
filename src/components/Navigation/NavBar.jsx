import ListItem from "../Common/ListItems/ListItem";
import "./navbar.scss";
import Typography from "../Common/Typography/Typography";
import Button from "../Common/Buttons/Buttons";
import DarkModeToggle from "../Common/DarkModeToggle/DarkModeToggle";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";
import { useDrawerStore, searchStore, navTrayStore } from "../../store";
import SearchBar from "./SearchBar";
import { NavContent } from "./NavContent";

export default function NavBar() {
  const openDrawer = useDrawerStore((state) => state.toggleDrawer);
  const toggleNavTray = navTrayStore((state) => state.toggleTray);
  const openTray = navTrayStore((state) => state.open);

  const toggleSearch = searchStore((state) => state.toggleSearch);
  const openSearch = searchStore((state) => state.open);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1023px)" });

  return (
    <nav className="navbar">
      <Typography variant="h3" color="secondary">
        wehah.ai
      </Typography>

      {!(isMobile || isTablet) && (
        <div className="list">
          {NavContent.map((item) => (
            <div key={item.id}>
              <ListItem
                key={item.id}
                label={item.item}
                color="primary-light"
                content={item.content}
              />
            </div>
          ))}
        </div>
      )}

      <div className="nav-action-buttons">
        <Button
          variant="textLink"
          shape="rounded"
          label={openSearch ? "close" : "search"}
          title="search"
          onClick={() => {
            toggleSearch();
            toggleNavTray();
          }}
        />

        {(isMobile || isTablet) && (
          <Button
            id="search-button"
            variant="textLink"
            shape="rounded"
            label="menu"
            onClick={openDrawer}
          />
        )}
        {!(isMobile || isTablet) && <DarkModeToggle />}

        {(isMobile || isTablet) && <NavDrawer menuItems={NavContent.item} />}
      </div>
      <SearchBar />
    </nav>
  );
}
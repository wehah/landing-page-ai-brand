import "./navbar.scss"



export default function NavTray({ children }) {

  return (
      <div
        className="nav-tray"
      >
        <div  className="tray-children">{children}</div>
      </div>
  );
}

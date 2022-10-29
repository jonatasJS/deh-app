import Link from "next/link";

export default function Header() {
  return (
    <nav className="open">
      <div className="sidebar">
        <Link href="/" style={{ textDecoration: "none" }} className="logo">
          <i className="bx bx-menu menu-icon"></i>
          <span className="logo-name">Codepen</span>
        </Link>

        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
              <Link href="/" className="nav-link">
                <i className="bx bx-home-alt icon"></i>
                <span className="link">Home</span>
              </Link>
            </li>
          </ul>

          <div className="bottom-cotent">
            <li className="list">
              <Link
                href="/"
                style={{ cursor: "not-allowed" }}
                className="nav-link"
              >
                <i className="bx bx-cog icon"></i>
                <span className="link">Settings</span>
              </Link>
            </li>
            <li className="list">
              <Link
                href="/"
                style={{ cursor: "not-allowed" }}
                className="nav-link"
              >
                <i className="bx bx-log-out icon"></i>
                <span className="link">Logout</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

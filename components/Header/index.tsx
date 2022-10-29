import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <nav className="open">
      <div className="sidebar">
        <Link href="/" style={{ textDecoration: "none" }} className="logo">
          <i className="bx bx-menu menu-icon"></i>
          <span className="logo-name">Debora</span>
        </Link>

        <div className="sidebar-content">
          <ul className="lists">
            <li className="list">
              <Link href="/" className={`nav-link`}>
                <i className="bx bx-copy icon"></i>
                <span className="link">COPIAR</span>
                {router.asPath === "/" && <span className="active" />}
              </Link>
            </li>
            
            <li className="list">
              <Link href="/teste" className={`nav-link`}>
                <i className="bx bx-copy icon"></i>
                <span className="link">TESTE</span>
                {router.asPath === "/teste" && <span className="active" />}
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

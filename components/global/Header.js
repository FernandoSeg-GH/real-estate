import Link from "next/link";
import Image from "next/image";
import { Navbar } from "react-bootstrap";
import { MdOutlineMailOutline, MdCall } from "react-icons/md";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Navbar className="p-0" bg="none" expand="lg">
              <Link href="/" className="mb-2 p-2">
                <Image src='/images/icon.png' width='80' height='80' style={{borderRadius:'0.5rem'}} />
              </Link>
          <Link className="navbar-brand" href="/">
            <h2 className="logo text-white fs-2">CanVai</h2>
          </Link>
          <Navbar.Toggle
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="togler-icon-inner">
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse
            className="collapse navbar-collapse main-menu pg-scroll justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/reformas">
                  Reformas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/inmuebles">
                  Inmuebles
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>

          <ul className="navbar-nav navbar__right d-none d-lg-flex gap-2">
            <li className="nav-item">
              <Link
                className="nav-link d-flex gap-2 align-items-center"
                href="info@can-vai.com"
              >
                <MdOutlineMailOutline /> info@can-vai.com
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link d-flex gap-2 align-items-center"
                href="tel:624292516"
              >
                <MdCall /> +34 624292516
              </Link>
            </li>
          </ul>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;

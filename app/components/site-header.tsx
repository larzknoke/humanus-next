"use client";

import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Home" },
  { href: "/behandlungen", label: "Behandlungen" },
  { href: "/akutversorgung", label: "Akutversorgung" },
  { href: "/yoga", label: "Yoga" },
  { href: "/kontakt", label: "Kontakt" },
];

const praxisItems = [
  { href: "/praxis", label: "Praxis humanus" },
  { href: "/kilianbegoin", label: "Kilian Begoin" },
  { href: "/joachimtoelle", label: "Joachim Tölle" },
  { href: "/dominiquemakris", label: "Dominique Makris-Fleer" },
  { href: "/georgroeske", label: "Georg Röske" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAkut =
    pathname === "/akutversorgung" || pathname === "/akutbehandlung";
  const isPraxis = [
    "/praxis",
    "/kilianbegoin",
    "/joachimtoelle",
    "/dominiquemakris",
    "/georgroeske",
  ].includes(pathname);

  const isActive = (href: string) => {
    if (href === "/") return isHome;
    if (href === "/akutversorgung") return isAkut;
    return pathname === href;
  };

  return (
    <header>
      <div id="tm-header-nav" className="tm-menu-style1 tm-sticky-menu">
        <div className="tm-wrap tm-table">
          <nav className="tm-nav">
            <ul className="tm-menu tm-menu-simple l_tinynav1">
              <a href="/">
                <img
                  style={{ padding: "10px 210px 10px 10px" }}
                  alt="Logo"
                  src="/assets/img/logo.jpg"
                />
              </a>
              {menuItems.slice(0, 4).map((item) => (
                <li
                  key={item.href}
                  className={
                    isActive(item.href) ? "current-menu-item parent" : "parent"
                  }
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              <li className={isPraxis ? "current-menu-item parent" : "parent"}>
                <a href="/praxis">Praxisgemeinschaft</a>
                <ul className="sub-menu">
                  {praxisItems.map((item) => (
                    <li
                      key={item.href}
                      className={
                        pathname === item.href ? "current-menu-item" : undefined
                      }
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </li>
              <li
                className={
                  pathname === "/kontakt"
                    ? "current-menu-item parent"
                    : "parent"
                }
              >
                <a href="/kontakt">Kontakt</a>
              </li>
            </ul>
          </nav>
          <a className="mobile-logo" href="/">
            <img alt="Logo" src="/assets/img/logo.jpg" />
          </a>
        </div>
      </div>
      <div style={{ height: 104, display: "none" }} />
    </header>
  );
}

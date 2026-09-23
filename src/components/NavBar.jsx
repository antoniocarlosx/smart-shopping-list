import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({
  links,
  appName,
  iconLink,
  cartCount,
  children,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);


  
  return (
    <>
      <header className="navbar-header">
        <div className="nav-title">
          <div className="title-container" onClick={() => onNavigate?.("home")}>
            {iconLink && (
              <img className="app-icon" src={iconLink} alt={appName} />
            )}
            <span className="app-name">{appName}</span>
          </div>
          <button
            type="button"
            className={`menu-toggler ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Abrir Menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
        <nav className={`nav-menu ${isOpen ? "active" : ""}`}>
          <ul className="nav-list">
            {links?.map((link, index) => (
              <li key={index} className="nav-list-item">
                <button
                  type="button"
                  className="nav-link-btn"
                  onClick={() => {
                    setIsOpen(false);
                    onNavigate?.link;
                  }}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-actions">
          <div className="cart-link-container">
            <button type="button" className="cart-link" onClick={()=> onNavigate?.("Minha Lista")}>
              <span className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="25"
                  fill="white"
                  className="bi bi-cart"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
              </span>
            </button>
            <span className="cart-badge">{cartCount}</span>
          </div>
          {children}
        </div>
      </header>
    </>
  );
};

export default NavBar;

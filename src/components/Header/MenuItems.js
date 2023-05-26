import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

import { Link } from "react-router-dom";

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [submenuHovered, setSubmenuHovered] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const closeDropdown = () => {
      setDropdown(false);
    };

    const handleMouseLeave = (event) => {
      if (!submenuHovered) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    document.addEventListener("touchstart", closeDropdown);
    ref.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousedown", closeDropdown);
      document.removeEventListener("touchstart", closeDropdown);
      ref.current.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [submenuHovered]);

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  const handleSubmenuMouseEnter = () => {
    setSubmenuHovered(true);
  };

  const handleSubmenuMouseLeave = () => {
    setSubmenuHovered(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={closeDropdown}
    >
      {items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {window.innerWidth < 960 && depthLevel === 0 ? (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <div className="item-title">{items.title}</div>
                  {items.description && (
                    <span style={{ alignSelf: "flex-end" }}>
                      {items.description}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Link className="full-link" to={items.url}>
                  <div className="item-title">{items.title}</div>
                  {items.description && (
                    <span style={{ alignSelf: "flex-end" }}>
                      {items.description}
                    </span>
                  )}
                </Link>
              </div>
            )}

            {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                0 && window.innerWidth > 960 ? (
              <span>&raquo;</span>
            ) : (
              <div style={{ width: 24, height: 24, marginLeft: "0.5rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
            onMouseEnter={handleSubmenuMouseEnter}
            onMouseLeave={handleSubmenuMouseLeave}
          />
        </>
      ) : !items.url && items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div className="item-title">{items.title}</div>
              {items.description && (
                <span style={{ alignSelf: "flex-end" }}>
                  {items.description}
                </span>
              )}
            </div>
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link to={items.url}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div className="item-title">{items.title}</div>
            {items.description && (
              <span style={{ alignSelf: "flex-end" }}>{items.description}</span>
            )}
          </div>
        </Link>
      )}
    </li>
  );
};

export default MenuItems;

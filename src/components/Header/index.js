import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../static/Header/wisdora.png";
import { createPopper } from "@popperjs/core";
import "./Header.css";
import { dropdownData } from "../../data/navbarItems";
import NavbarItem from "./Navbar";

const DropdownItem = ({ item, isNested, layout }) => {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const popoverRef = useRef(null);
  const popperInstance = useRef(null);

  useEffect(() => {
    if (isOpen && !popperInstance.current) {
      const placement = isNested ? "right-start" : "bottom-start";
      popperInstance.current = createPopper(
        dropdownRef.current,
        popoverRef.current,
        {
          placement,
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 0],
              },
            },
          ],
        }
      );
    }

    return () => {
      if (popperInstance.current) {
        popperInstance.current.destroy();
        popperInstance.current = null;
      }
    };
  }, [isOpen, isNested]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    if (popperInstance.current) {
      popperInstance.current.destroy();
      popperInstance.current = null;
    }
  };

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!layout && (
        <div
        // className={` ${item.nestedItems ? "navbar-item" : "items-style"} `}
        >
          {item.label}
          {!isNested && (
            <div style={{ width: 24, height: 24, marginLeft: "0.5rem" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          )}
        </div>
      )}
      {layout && (
        <Link className="nav-link" to={item.link}>
          <div className="items-card">
            <div className="item-title">{item.label}</div>
            <p className="item-description">{item.description}</p>
          </div>
        </Link>
      )}
      {isOpen && item.nestedItems && item.nestedItems.length > 0 && (
        <div
          ref={popoverRef}
          className="dropdown-menu show dropdown-card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.nestedItems.map((nestedItem, index) => (
            <DropdownItem
              key={index}
              item={nestedItem}
              isNested={true}
              layout={true}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const NavBar = () => {
  return (
    <div>
      <nav className="navbar-header">
        <div className="navbar-body">
          <div className="navbar-items">
            <Link to={"/"}>
              <img width="auto" height="auto" src={headerLogo} alt="Wisdora" />
            </Link>
            <NavbarItem />
          </div>
          <button
            type="button"
            className="btn btn-primary rounded-pill"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Let's Meet
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Modal title
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">...</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Understood
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="navbar-items">
            {dropdownData.map((item, index) => (
              <DropdownItem
                key={index}
                item={item}
                isNested={false}
                layout={false}
              />
            ))}
          </div> */}
      </nav>
    </div>
  );
};
export default NavBar;

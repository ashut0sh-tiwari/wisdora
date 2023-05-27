import React from "react";
import headerLogo from "../../static/Header/wisdora.png";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="headerNav">
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={headerLogo} alt="Wisdora" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/on-demand-staffing">
                    On demand
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className="nav-link"
                    to="/custom-solutions/learning-strategy"
                  >
                    Strategy
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className="nav-link"
                    to="/custom-solutions/learning-solutions"
                  >
                    Solutions
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className="nav-link"
                    to="/custom-solutions/learning-platforms"
                  >
                    Platforms
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className="nav-link"
                    to="/on-demand-staffing/industry-solutions"
                  >
                    Industry
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item">
                  {" "}
                  <Link className="nav-link" to="/our-capabilities">
                    Capabilities
                  </Link>
                  {/* <a className="nav-link" href="#">Link</a> */}
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/our-capabilities">
                        Our Capabilities
                      </Link>
                    </li>
                    <li className="nav-item dropend">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/custom-solutions/learning-strategy"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Custom Solutions
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item dropend">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropend">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropend">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item dropend">
                      <Link
                        className="nav-link dropdown-toggle"
                        to="/custom-solutions/learning-strategy"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Custom Solutions
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="nav-item dropend">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>

                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="nav-item dropend">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item dropend">
                          <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Dropdown
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/about">
                        About
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>

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
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

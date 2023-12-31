import React from "react";

function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <b>Online book Store</b>
        </a>

        <div
          className="navbar-collapse"
          id="navbarSupportedContent"
          style={{ justifyContent: "space-between" }}
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Users<span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Books
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Religious
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Motivational
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="container" style={{ display: "flex" }}>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="register">
                  SignUp<span className="sr-only"></span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="login">
                  SignIn<span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                style={{
                  marginLeft: "8px",
                  marginBottom: "16px",
                  borderRadius: "0.375rem",
                }}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

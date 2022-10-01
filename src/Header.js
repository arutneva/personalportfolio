import React from "react";
export default function Header({ currentPage, setCurrentPage }) {
    return (
        <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item is-size-4 has-text-weight-semibold">
                    Marilyn Ventura
                </div>

            </div>

            <div id="navbarBasicExample" className="navbar-menu is-active">
                <div className="navbar-start">
                    <a href="#" className="navbar-item button is-link mx-1"
                        onClick={() => setCurrentPage ("About")}
                    >
                        About Me
                    </a>

                    <a href="#" className="navbar-item button is-warning mx-1"
                        onClick={() => setCurrentPage ("Portfolio")}
                    >
                        Portfolio
                    </a>

                    <a href="#" className="navbar-item button is-primary mx-1"
                        onClick={() => setCurrentPage ("Contact")}
                    >
                        Contact
                    </a>

                    <a href="#" className="navbar-item button is-info mx-1"
                        onClick={() => setCurrentPage ("Resume")}
                    >
                        Resume
                    </a>


                </div>

                <div className="navbar-end">
                    <div className="navbar-item">

                    </div>
                </div>
            </div>
        </nav>
    );
};

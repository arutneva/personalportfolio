import React from "react";
export default function Header({ currentPage, setCurrentPage }) {
    return (

        <nav className="navbar is-spaced mx-6 has-background-warning" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item is-size-4 has-text-weight-semibold mx-6">
                    <div className="level">
                        <div className="level-item has-text-centered">
                            <div>
                                <p class="heading  is-size-4 mx-6">Marilyn Ventura</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div id="navbarBasicExample" className="navbar-menu is-active has-background-warning">
                <div className="navbar-start mx-6">

                    <a href="#" className="navbar-item button is-link is-outlined mx-1"
                        onClick={() => setCurrentPage("About")}
                    >
                        About Me
                    </a>

                    <a href="#" className="navbar-item button is-warning mx-1"
                        onClick={() => setCurrentPage("Portfolio")}
                    >
                        Portfolio
                    </a>

                    <a href="#" className="navbar-item button is-link is-outlined mx-1"
                        onClick={() => setCurrentPage("Contact")}
                    >
                        Contact
                    </a>

                    <a href="#" className="navbar-item button is-warning mx-1"
                        onClick={() => setCurrentPage("Resume")}
                    >
                        Resume
                    </a>


                </div>

                <div className="navbar-end">
                    <div className="navbar-item is-size-4 has-text-weight-semibold">

                    </div>
                </div>

            </div>
        </nav>
    );
};

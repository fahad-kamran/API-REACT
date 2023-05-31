import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <nav className="navbar bg-dark border-bottom border-bottom-dark navbar-expand-lg" data-bs-theme="dark">
                <div className="container-lg">
                    <h4 className="mb-0">
                        <Link to='/' className="d-inline-block logo">
                            Logo
                        </Link>
                    </h4>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>
                        <span className="navbar-text">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page">
                                        Todos
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/post' className="nav-link">
                                        Post
                                    </Link>
                                </li>
                            </ul>
                        </span>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
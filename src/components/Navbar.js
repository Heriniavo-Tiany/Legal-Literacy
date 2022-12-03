import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {

        return (
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                    <a className="navbar-brand brand-logo mr-5" href="index.html"><img
                        src="../../public/assets/images/logo.png"
                        className="mr-2" alt="logo" /></a>
                    <a className="navbar-brand brand-logo-mini" href="index.html"><img src="images/logo-mini.svg"
                        alt="logo" /></a>
                </div>
                <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                    <button className="navbar-toggler navbar-toggler align-self-center" type="button"
                        data-toggle="minimize">
                        <span className="icon-menu"></span>
                    </button>
                    <ul className="navbar-nav mr-lg-2">
                        <li className="nav-item nav-search d-none d-lg-block">
                            <div className="input-group">
                                <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                    <span className="input-group-text" id="search">
                                        <i className="icon-search"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control" id="navbar-search-input"
                                    placeholder="Search now" aria-label="search" aria-describedby="search" />
                            </div>
                        </li>
                    </ul>
                    <ul className="navbar-nav navbar-nav-right">
                    </ul>
                    <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button"
                        data-toggle="offcanvas">
                        <span className="icon-menu"></span>
                    </button>
                    <Link to='thematiques'> <button className="btn">Thématique</button></Link>
                    <Link to="textesJuridiques"><button className="btn">Textes juridiques</button></Link>
                    <Link to='favoris'><button className="btn">Favoris</button></Link>
                    <button className="btn">Aide</button>
                    <button className="btn">Assistance</button>
                    <Link to="signalement"><button>Signaler</button></Link>

                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuIconButton1"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-world"></i>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuIconButton1">
                            <Link to='?langue=fr' className="dropdown-item" >Français</Link>
                            <Link to='?langue=mg' className="dropdown-item" >Malagasy</Link>
                        </div>
                    </div>

                </div>

            </nav>
        )
    }
}

export default Navbar;
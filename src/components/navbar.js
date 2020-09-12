import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

    render() {
        return (

            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="#">Week 3</a>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">React Homepage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/es6">ES6</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/oop">OOP</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/async">async etc</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}


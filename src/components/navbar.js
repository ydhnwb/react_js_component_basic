import React from 'react';
import { Router } from 'react-router';

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
                            <a className="nav-link" href="/react_js_component_basic">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react_js_component_basic/es6">ES6</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react_js_component_basic/oop">OOP</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/react_js_component_basic/async">async etc</a>
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

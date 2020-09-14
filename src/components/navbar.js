import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {

    render() {
        return (
            <div>
                <a className="menu-nav-icon" data-menu="#main-menu" href="#"><i className="ion-navicon" /></a>
                <ul className="main-menu" id="main-menu">
                    <li>
                        <Link to="/home">Home</Link>
                    </li>


                    {/* <li className="drop-down"><a href="#!">Sport<i className="ion-arrow-down-b" /></a>
                        <ul className="drop-down-menu drop-down-inner">
                            <li><a href="#">PAGE 1</a></li>
                            <li><a href="#">PAGE 2</a></li>
                        </ul>
                    </li> */}
                    <li><Link to="/helloreact">React</Link></li>
                    <li><Link to="/es6">ES6</Link></li>
                    <li><Link to="/oop">OOP</Link></li>
                    <li><Link to="/async">Async</Link></li>
 
                </ul>
                <div className="clearfix" />
            </div>
        );
    }
}


import React from 'react';
import {NavLink, Redirect, withRouter} from 'react-router-dom';
import {Button, Form, FormControl, Nav, Navbar, NavItem} from "react-bootstrap";
import data from '../data/menuData';
import {connect} from "react-redux";
import {store} from "../store";
import {logout} from "../store/actions/auth";
import {api} from "../api";
import '../styles/menu.scss';
import logo from '../assets/logo.png';
const Menu = (props) => {
    const {user} = props;
    const menuFiltered = data.filter((item) => {
        let role = item.role;
        if (role === 'ALL') {
            return true
        } else {
            if (role === 'ADMIN_ONLY' && user && user.isAdmin) {
                return true
            } else if (role === 'AUTH_ONLY' && user) {
                return true
            } else if (role === 'USER_ONLY' && user && user.isAdmin === false) {
                return true
            } else if (role === 'VISITOR_ONLY' && user === undefined) {
                return true
            }
        }
    });
    return (
        <div className='wrapper'>
            <div className='nav'>
                <div className='logo-container'>
                    <div className='logo'>
                        <NavLink to='/'>
                            <img alt='logo' src={logo}/>
                        </NavLink>
                    </div>
                </div>
                <div className='nav-right'>
                    <div className='menu-container'>
                        <ul>
                            {
                                menuFiltered && menuFiltered.map((item) => {
                                    return (
                                        <li
                                            key={item.link}>
                                            <NavLink exact

                                                     to={item.link}
                                                     className="nav-link"
                                                     activeClassName="active">
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='login-logout'>
                        {user ?
                            <a className="btn btn-danger" onClick={() => {
                                api.get('/logout', (data) => {
                                    if (data && data.success) {
                                        store.dispatch(logout());
                                        props.history.push("/");
                                    }
                                })
                            }}>
                                <span className="oi oi-account-logout"/>
                            </a>
                            :
                            <a className="btn btn-success" onClick={() => {
                                props.history.push("/login");
                            }}>
                                <span className="oi oi-account-login"/>
                            </a>

                        }
                    </div>
                </div>
                {/*<div className='search-container'>*/}
                    {/*<Form inline>*/}
                        {/*<FormControl type="text" placeholder="Search" className="mr-sm-2"/>*/}
                        {/*<Button variant="outline-primary">*/}
                            {/*<span className="oi oi-magnifying-glass"/>*/}
                        {/*</Button>*/}
                    {/*</Form>*/}
                {/*</div>*/}

            </div>

        </div>
    )
        ;
};
const mapStateToProps = (state) => {
    return {
        user: state.user
    }

};
;
export default withRouter(connect(mapStateToProps)(Menu));
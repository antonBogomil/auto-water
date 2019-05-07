import React from 'react';
import Login from "./page/Login";
import Registration from "./page/Registration";
import ErrorPage from "./page/ErrorPage";
import {Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Users from "./page/Users";
import AuthResolver from "./AuthResolver";
import User from "./page/User";
import Main from "./page/Main";
import Contact from "./page/Contact";
import Price from "./page/Price";
import Message from "./page/Message";
import ru from "../dictionary";

const Routing = ({user}) => {
    return (
        <Switch>
            <Route exact path='/' component={Main}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/pricing' component={Price}/>
            <Route exact path='/user' component={AuthResolver(User,'AUTH_ONLY',user)}/>
            <Route exact path='/login' component={AuthResolver(Login,'VISITOR_ONLY',user)}/>
            <Route exact path='/reg' component={AuthResolver(Registration,'VISITOR_ONLY',user)}/>
            <Route exact path='/users' component={AuthResolver(Users, 'ADMIN_ONLY',user)}/>
            <Route exact path='/users/:id' component={AuthResolver(User, 'ADMIN_ONLY',user)}/>
            <Route exact path='/error' component={ErrorPage}/>
            <Route exact path='/reg-success' component={()=>{return <Message text={ru.REG_SUCCESS}/>}}/>
            <Route component={ErrorPage}/>
        </Switch>
    );
};
const mapStateToProps = (state) => {
    return {
        user : state.user
    }
};
export default connect(mapStateToProps)(Routing)

import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink, Redirect} from "react-router-dom";
import {api} from "../../api";
import {store} from "../../store";
import {loginSuccess} from "../../store/actions/auth";

class Login extends Component {
    state = {
        user: {
            email: '',
            password: ''
        },
        error: null
    };
    handleChange = (e, name) => {
        this.setState({
            error: null,
           user: {
                ...this.state.user,
               [name]: e.target.value
           }
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        api.post('/login', this.state.user, (data) => {
            if (data && data.success){
                this.props.history.push('/');
                store.dispatch(loginSuccess(data))
            }
            else{
                this.setState({
                    ...this.state,
                    error: data.message
                })
            }
        })
    };

    render() {
        const {user: {email, password},error} = this.state;
        return (
            <div className='wrapper'>
                <form onSubmit={this.handleSubmit}>
                    <div className='form-control'>
                        <label>Email address</label>
                        <input type="email"
                                      onChange={(e) => {
                                          this.handleChange(e, 'email')
                                      }}
                                      value={email}
                                      placeholder="Enter email"/>
                    </div>
                    <div className='form-control'>
                        <label>Password</label>
                        <input type="password"
                                      value={password}
                                      onChange={(e) => {
                                          this.handleChange(e, 'password')
                                      }}
                                      placeholder="Password"/>
                    </div>
                    {error && <div className='validation-message'>{error}</div>}
                    <div className='form-control'>
                        <button  type="submit">
                            Войти
                        </button>
                        <NavLink exact to="/reg" className="btn btn-default" activeClassName="active">Регистрация</NavLink>
                    </div>
                   </form>
            </div>

        );
    }
}

export default Login;
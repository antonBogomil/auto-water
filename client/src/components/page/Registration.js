import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {api} from "../../api";
import ru from "../../dictionary";

class Registration extends Component {
    state = {
        user: {
            name: '',
            email: '',
            number: '',
            password: ''
        },
        error: undefined
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
        api.post('/register', this.state.user, (data) => {
            console.log(data);
            if (data && data.success){
                this.props.history.push('/reg-success');
            }
            else{
                this.setState({
                    ...this.state,
                    error: 'This email already exist!'
                })
            }
        })
    };
    render() {
        const {user: {name, email, password, number},error} = this.state;
        return (
            <div className='wrapper'>
                <Form onSubmit={this.handleSubmit}>
                    {error && <span className='error-message'>{error}</span>}
                    <Form.Group controlId="formFirstName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control required type="text"
                                      placeholder="Enter name"
                                      onChange={(e) => {
                                          this.handleChange(e, 'name')
                                      }}
                                      value={name}
                        />

                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required type="email"
                                      placeholder="Enter email"
                                      onChange={(e) => {
                                          this.handleChange(e, 'email')
                                      }}
                                      value={email}
                        />

                    </Form.Group>
                    <Form.Group controlId="formNumber">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="text"
                                      required
                                      placeholder="Enter phone number"
                                      onChange={(e) => {
                                          this.handleChange(e, 'number')
                                      }}
                                      value={number}
                        />

                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control required type="password"
                                      placeholder="Password"
                                      onChange={(e) => {
                                          this.handleChange(e, 'password')
                                      }}
                                      value={password}
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {ru.SEND}
                    </Button>
                    <NavLink exact to="/login" className="btn btn-default" activeClassName="active">{ru.LOGIN}</NavLink>
                </Form>
            </div>
        );
    }
}

export default Registration;
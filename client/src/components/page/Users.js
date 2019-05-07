import React, {useEffect, useState} from 'react';
import {api} from "../../api";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ru from "../../dictionary";

const Users = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        api.get('/admin/users', (data) => {
            if (data && data.users) {
                setData(data.users)
            }
        })
    }, []);
    return (
        <div className='list-container wrapper'>
            <h2>{ru.TITLE.CONTACT}</h2>
            <div className='list'>
                <Table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        {/*<th>Open</th>*/}
                    </tr>
                    </thead>
                    <tbody>
                    {data && data.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>
                                    <Button size='sm' onClick={() => {
                                        props.history.push(`/users/${user._id}`)
                                    }}><span className="oi oi-pencil"/></Button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Users;
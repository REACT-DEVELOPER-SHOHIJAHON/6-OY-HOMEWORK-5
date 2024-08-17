import React from 'react';
import apiInstance from '../Api/Api';
import { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        apiInstance('/users?page=2')
            .then(res => setUsers(res.data.data));
    }, []);

    return (
        <section className='homepage'>
            <div className="page-container">
                <div className="homepage__content">
                    {users.length > 0 ? (
                        <table className="user-table">
                            <thead>
                                <tr>
                                    <th>Avatar</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => (
                                    <tr key={user.id}>
                                        <td><img src={user.avatar} className="user-avatar" alt="User Avatar" /></td>
                                        <td><Link to={`/user/${user.id}`}>{user.first_name} {user.last_name}</Link></td>
                                        <td>{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : <p>No users found.</p>}
                </div>
            </div>
        </section>
    );
}

export default Home;

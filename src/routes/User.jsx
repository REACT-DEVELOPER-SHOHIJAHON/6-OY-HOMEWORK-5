import React from 'react';
import apiInstance from '../Api/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './User.css';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        apiInstance(`/users/${id}`)
            .then(res => setUser(res.data.data))
            .catch(err => console.error(err));
    }, [id]);

    return (
        <section className='user-profile'>
            <div className="profile-container">
                <div className="profile-content">
                    {user && (
                        <div className="profile-details">
                            <img src={user.avatar} className="profile-avatar" alt="User Avatar" />
                            <h3 className="profile-name">{user.first_name} {user.last_name}</h3>
                            <p className="profile-email">{user.email}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default User;

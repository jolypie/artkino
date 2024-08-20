import React, { useEffect, useState } from 'react';
import './userPage.scss';
import { Avatar } from '@mui/material';
import { deepPurple, grey } from '@mui/material/colors';


function UserInfo() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        const fetchUsername = async () => {
            try {
                const response = await fetch('http://localhost:5500/api/users/username', {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username);
                } else {
                    console.error('Failed to fetch username');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchUsername();
    }, []);

    const firstLetter = username.charAt(0).toUpperCase();
    return (
        <div>
            <div className="userContainer">
                <div className="avatar">
                    <Avatar sx={{ bgcolor: deepPurple[500], height: 150, width: 150, fontSize: 75 }} className='Avatar'>
                        {firstLetter}
                    </Avatar>
                </div>
                <div>
                    <h1 className="username">{username}</h1>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default UserInfo
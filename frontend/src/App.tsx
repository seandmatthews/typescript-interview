import React, { useState, FormEvent } from 'react';
import axios from 'axios';

interface User {
    id: string;
    username: string;
    email: string;
}

function App() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState<User[]>([]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users', {
                username,
                email,
            });
            setUsers([...users, response.data]);
            setUsername('');
            setEmail('');
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
    <h1>User Management System</h1>

    <form onSubmit={handleSubmit}>
        <div>
            <label>
                Username:
    <input
        type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
    />
    </label>
    </div>
    <div>
    <label>
        Email:
    <input
        type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    />
    </label>
    </div>
    <button type="submit">Create User</button>
    </form>

    <h2>Users</h2>
    <ul>
    {users.map((user) => (
            <li key={user.id}>
                {user.username} - {user.email}
                </li>
        ))}
    </ul>
    </div>
);
}

export default App;
import React, { useState, useEffect } from 'react';
import { useParams, Link , useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchUsers } from '../Store/userSlice'; 
import conf from '../conf/conf';
const Edit = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const user = users.find(user => user.id === id);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()
 
    useEffect(() => {
        dispatch(fetchUsers()); 
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const editUser = async (id) => {
        try {
            const updatedData = {name , email}
            await axios.put(`${conf.apikey}/${id}` , updatedData);
            console.log('User updated successfully!');
            navigate('/')
        } catch (error) {
            setError('Failed to update user');
            console.error(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editUser(user.id);
    };

    return (
        <div>
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">Update User</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1" htmlFor="name">Name</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="text"
                            id="name"
                            placeholder="Enter the name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1" htmlFor="email">Email</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                            type="email"
                            id="email"
                            placeholder="Enter the email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <Link to='/' className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-md mt-4 hover:bg-gray-400 transition duration-300">Back</Link>
                    <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300" type="submit">Update User</button>
                </form>
            </div>
        </div>
    );
};

export default Edit;

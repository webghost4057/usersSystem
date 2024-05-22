import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import conf from '../conf/conf';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${conf.apikey}`, { name, email });
            console.log('User added successfully:', response);
            setName('');
            setEmail('');
            setError(null);
            navigate('/')
        } catch (error) {
            console.error('Error adding user:', error);
            setError('Error adding user. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Enter the User</h1>
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
          <Link to='/'  className="w-full bg-gray-300 text-gray-700 font-semibold py-2 rounded-md mt-4 hover:bg-gray-400 transition duration-300">Back</Link>
          <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-300" type="submit">Add User</button>
        </form>
      </div>
    );
};

export default AddUser;

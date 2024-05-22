import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Store/userSlice';
import { Link } from 'react-router-dom';
import axios from 'axios'
import conf from '../conf/conf';
const AllUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);
  

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const deleteUser = async(id)=>{
    try {
      const deleted = await axios.delete(`${conf.apikey}/${id}`) 
      console.log(deleted.data);
      dispatch(fetchUsers())
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className="max-w-md mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">All Users</h1>
        <Link to="/add-user" className="text-blue-500 hover:underline">Create User</Link>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="bg-gray-100 mb-4 p-4 rounded-md shadow-md">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>
              </div>
              <div>
                <Link to={`/edit-user/${user.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 transition duration-300">Edit</Link>
                <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;

// main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './Store/Store.js';
import AllUsers from './components/AllUsers.jsx';
import AddUser from './components/AddUser.jsx';
import Edit from './components/Edit.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/all-users" element={<AllUsers />} /> */}
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<Edit />} />
      </Routes>
    </Router>
  </Provider>
);

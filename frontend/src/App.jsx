// App.jsx
import './App.css';
import AllUsers from './components/AllUsers';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <AllUsers />
    </>
  );
}

export default App;

import React, { useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import DoneList from './components/DoneList';
import Header from './components/Header'
import Lists from './components/Lists'
import axios from 'axios';
import './styles/App.scss';
import Main from './pages/Main';
import Authorization from './pages/Authorization';
import { Login } from './pages/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='/auth/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

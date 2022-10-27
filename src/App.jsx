import React, { useEffect} from 'react';
import {Routes, Route}  from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import './styles/App.scss';
import Main from './pages/Main';
import { Login } from './pages/login';
import { fetchAuth, selectIsAuth } from './redux/slices/auth';
import { Registration } from './pages/registration';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth)

  React.useEffect(() => {
    dispatch(fetchAuth())
  },[])

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;

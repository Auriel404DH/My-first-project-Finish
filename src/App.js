import React from 'react';
import './App.css';
import store from './redux/reduxStore';
import HeaderComponent from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './components/Login/Login';
import News from './components/Novosti/News';
import Music from './components/Music/Music';
import Exit from './components/Exit/Exit';
import Preload from './components/common/Preloader/preload';
import { Route, Routes, HashRouter } from 'react-router-dom';
import { initializeApp } from './redux/appReduser';
import { useSelector, Provider, useDispatch } from 'react-redux';

const ProfileContainerLazy = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogLazy = React.lazy(() => import('./components/Dialog/Dialog'));
const UsersContainerLazy = React.lazy(() => import('./components/Users/UsersContainer'));

const App = () => {
  const dispatch = useDispatch();

  const { initialized } = useSelector(({ app }) => {
    return {
      initialized: app.initialized,
    };
  });

  React.useEffect(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  if (!initialized) {
    return <Preload />;
  }

  return (
    <div className="wrapper">
      <HeaderComponent />
      <Sidebar />
      <div className="app-wrapper-content">
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/Dialog" element={<DialogLazy />} />
            <Route path="/Profile" element={<ProfileContainerLazy />} />
            <Route path="/Profile/:userId" element={<ProfileContainerLazy />} />
            <Route path="/Users" element={<UsersContainerLazy />} />
            <Route path="/news" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Exit" element={<Exit />} />
            <Route path="/" element={<ProfileContainerLazy />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </React.Suspense>
      </div>
    </div>
  );
};

let MainApp = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export default MainApp;

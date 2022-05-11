import React from 'react';
import './App.css';
import store from './redux/reduxStore';
import HeaderComponent from './components/Header/HeaderContainer';
import SidebarContainer from './components/Sidebar/SideBarContainer';
import Login from './components/Login/Login';
import News from './components/Novosti/News';
import Music from './components/Music/Music';
import Exit from './components/Exit/Exit';
import Preload from './components/common/Preloader/preload';
import { Route, Routes } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './redux/appReduser';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import { withAuthRedirect } from './hoc/AuthReduser';
// import MyDialog from './components/Dialog/MyDialogContainer';

const ProfileContainerLazy = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogContainerLazy = React.lazy(() => import('./components/Dialog/MyDialogContainer'));
const UsersContainerLazy = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preload />;
    }

    return (
      <div className="wrapper">
        <HeaderComponent />
        <SidebarContainer />
        <div className="app-wrapper-content">
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/Dialog" element={<DialogContainerLazy />} />
              <Route path="/Profile" element={<ProfileContainerLazy />} />
              <Route path="/Profile/:userId" element={<ProfileContainerLazy />} />
              <Route path="/Users" element={<UsersContainerLazy />} />
              <Route path="/news" element={<News />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/Exit" element={<Exit />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </React.Suspense>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(connect(mapStateToProps, { initializeApp })(App));

let MainApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  );
};

export default MainApp;

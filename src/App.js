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
import { HashRouter } from 'react-router-dom';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
// import { withAuthRedirect } from './hoc/AuthReduser';
// import MyDialog from './components/Dialog/MyDialogContainer';
const ProfileContainerLazy = React.lazy(() => import('./components/Profile/ProfileContainer'));
const DialogContainerLazy = React.lazy(() => import('./components/Dialog/MyDialogContainer'));
const UsersContainerLazy = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
  catchUnhandledErrors = (promiseRejectionEvent) => {
    setTimeout(() => {
      alert(promiseRejectionEvent);
    }, 3000);
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchUnhandledErrors);
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
              <Route path="/" element={<ProfileContainerLazy />} />
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

// basename={process.env.PUBLIC_URL}
let MainApp = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>
  );
};

export default MainApp;

import React from 'react';
import cls from './App.module.css';
import HeaderContainer from './Components/Header/HeaderContainer'
import store from './redux/store'
import { Provider } from 'react-redux'
import Menu from './Components/Menu/Menu';
import BodyAppContainer from './Components/BodyApp/BodyAppContainer';

function App() {
  return (
    <Provider store={store}>
      <div className={cls.wrapper}>
          <HeaderContainer/>
          <BodyAppContainer/>
          <Menu/>
      </div>
    </Provider>
  );
}

export default App;

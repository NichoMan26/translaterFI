import React from 'react';
import cls from './App.module.css';
import HeaderContainer from './Components/Header/HeaderContainer'
import store from './redux/store'
import { Provider } from 'react-redux'
import MenuContainer from './Components/Menu/MenuContainer'
import BodyAppContainer from './Components/BodyApp/BodyAppContainer';

function App() {
  
  return (
    <Provider store={store}>
      <div className={cls.wrapper}>
          <HeaderContainer/>
          <BodyAppContainer/>
          <MenuContainer/>
      </div>
    </Provider>
  );
}

export default App;

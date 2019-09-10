import React from 'react';
import Header from "./common/header/index";
import {GlobalStyle} from "./style";
import store from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from "react-router-dom";
import Home from './pages/home/index';
import Detail from './pages/detail/index';



function App() {
  return (
    <Provider store={store}>
        <div>
            <GlobalStyle/>
            <Header/>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail' component={Detail}></Route>
                </div>
            </BrowserRouter>
        </div>
    </Provider>
  );
}

export default App;

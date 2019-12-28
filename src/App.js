import React from 'react';
import Header from "./common/header/index";
import {GlobalStyle} from "./style";
import store from './store/index';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from "react-router-dom";
import Home from './pages/home/index';
import Detail from './pages/detail/loadable';
import Login from './pages/login/index';
import Write from './pages/write/index';
import Admin from './pages/admin/index';




function App() {
  return (
    <Provider store={store}>
        <div>
            <GlobalStyle/>
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/detail/:id' component={Detail}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/write'component={Write}></Route>
                    <Route path='/admin'component={Admin}></Route>
                </div>
            </BrowserRouter>
        </div>
    </Provider>
  );
}

export default App;

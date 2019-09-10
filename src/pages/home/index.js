import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from "./style";
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Topic from './components/Topic';


class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img src='../../statics/logo.png'/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;
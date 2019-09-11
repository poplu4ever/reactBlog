import React,{Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from "./style";
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import PIC from '../../statics/final-fantasy-vii-remake-iconic-art-1200x675.jpg';


class Home extends Component{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className='banner-pic'
                        src={PIC}
                        alt=''
                    />
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
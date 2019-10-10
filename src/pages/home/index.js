import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {HomeWrapper,HomeLeft,HomeRight} from "./style";
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import {actionCreators} from "./store";
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

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatch = (dispatch)=> ({
    changeHomeData() {
       dispatch(actionCreators.getHomeInfo())
    }
})


export default connect(null,mapDispatch)(Home);
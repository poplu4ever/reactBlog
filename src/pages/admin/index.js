import React,{Component} from 'react';
import {connect} from 'react-redux';
import {WriteWrapper} from "./style";


class Admin extends React.Component{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
           return(
               <WriteWrapper>

               </WriteWrapper>
           )
        }
    }
}

const mapState = (state)=>({
    loginStatus:state.getIn(['login','login'])
});

export default connect(mapState,null)(Admin);
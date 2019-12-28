import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {LoginWrapper,LoginBox,Button,Input} from "./style";
import {actionCreators} from './store';


class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={input=>{this.account = input}}/>
                        <Input placeholder='密码' type="password" ref={input=>{this.password = input}}/>
                        <Button onClick={()=> this.props.login(this.account.value,this.password.value)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return(
                <Redirect to='/'/>
            )
        }

    }
}

const mapState = (state)=>({
    loginStatus:state.getIn(['login','login'])
});

const mapDispatch = (dispatch)=>({
    login(account, password){
        dispatch(actionCreators.login(account,password));
    }
});

export default connect(mapState,mapDispatch)(Login);
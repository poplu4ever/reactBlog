import axios from "axios";
import * as constants from './constant';
import {checkLogin} from "../../../util/util";

const changeLogin = () =>({
    type: constants.CNANGE_LOGIN,
    value: true
});

export const logout = ()=>({
    type:constants.LOGOUT,
    value:false
});

export const login = (account,password)=>{

    return (dispatch)=>{

        //Verify account&password
        //if not pass, alert error
        const result = checkLogin(account,password);

        if(result.status){
            axios.post('/api/user/login',{
                username:account,
                password:password
            }).then((res)=>{
                const result = res.data.data;
                if(result){
                    dispatch(changeLogin())
                }else{
                    alert("登陆失败");
                }
            })
        }else{
            alert(result.meg);
        }
    }
};


export const checkLogin = (userName, password) => {

    //check null
    if(!userName||!password){
        return {
            status:false,
            meg:"账号或密码不能为空"
        }
    }else{
        return{
            status:true
        };
    }
};
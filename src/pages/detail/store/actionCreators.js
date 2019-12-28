import axios from "axios";
import * as constants from './constants';


const changeDetail= (title,content)=> ({
    type:constants.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = (id) => {
     return (dispatch) => {
         axios.get(`/api/blog/detail?id=${id}`).then((res)=>{
            console.log(res.data);
            const result = res.data;
            dispatch(changeDetail(result.title,result.content));
         })
     }
};


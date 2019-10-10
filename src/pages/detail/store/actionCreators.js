import axios from "axios";
import * as constants from './constants';


export const getDetail = () => {
     return (dispatch) => {
         axios.get('').then((res)=>{
            console.log(res.data.data);
         })
     }
}
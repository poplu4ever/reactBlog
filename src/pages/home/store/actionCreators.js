import axios from "axios";
import * as constants from './constants';

const changeHomeData = (result) => ({
    type:constants.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.data,
    recommendList:result.recommendList
});


export const getHomeInfo = ()=>{
    return (dispatch) => {
        axios.get('/api/blog/list').then(res=> {
            const result = res.data;
            console.log(result);
            dispatch(changeHomeData(result));
        })
    }
};
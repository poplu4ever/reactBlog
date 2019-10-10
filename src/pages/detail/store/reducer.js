import {fromJS} from "immutable";
import * as constants from "./constants";
import {Content} from "../style";
import React from "react";


//生成immutable对象
const defaultState = fromJS({
    title:"我是Milky",
    content:"Milky最可爱"
});

export default (state = defaultState, action) =>{
    switch(action.type){
        default:
            return state;

    }
}



import React,{Component} from 'react';
import {RecommendWrapper,RecommendItem} from '../style';
import {connect} from "react-redux";

class Recommend extends Component{
    render(){
        const {recommendList} = this.props;
        return(
            <div>
                <RecommendWrapper>
                    {
                        recommendList.map((item)=>{
                            return(
                                <RecommendItem
                                key={item.get('id')}
                                imgUrl={item.get('imgUrl')}
                            />
                            )
                        })
                    }
                </RecommendWrapper>
            </div>
        )
    }
}

const mapStates = (state)=>({
    recommendList: state.getIn(['home','recommendList'])
})

export default connect(mapStates)(Recommend);
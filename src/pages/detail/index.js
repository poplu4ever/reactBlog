import React,{Component} from 'react';
import {DetailWrapper,Header,Content} from "./style";
import {connect} from 'react-redux';
import { actionCreators } from './store';


class Detail extends Component{
    render(){
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content>
                    <p>{this.props.content}</p>
                </Content>
            </DetailWrapper>
        )
    }

    componentDidMount(){
        this.props.getDetail();
    }
}



const mapDispatch = (dispatch) => ({
    getDetail(){
        dispatch(actionCreators.getDetail())
    }
})


const mapState = (state) => ({
    title: state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})


export default connect(mapState,mapDispatch)(Detail);
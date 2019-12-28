import React,{PureComponent} from 'react';
import {ListItem,ListInfo} from '../style';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class List extends PureComponent{

    render(){
        const {articleList} = this.props;
        return(
            <div>
                {
                  articleList.map((item,index)=> {
                      return (
                          <Link key={index} to={'/detail/'+item.get('id')}>
                              <ListItem>
                                  <img className="pic"
                                       // src={item.get('imgUrl')}
                                       src="https://img01.vgtime.com/game/cover/2019/09/11/190911133937608_u162815.jpg?x-oss-process=image/resize,m_pad,color_000000,w_320,h_200"
                                       alt=''
                                  />
                                  <ListInfo>
                                      <h3 className='title'>{item.get('title')}</h3>
                                      <p className='content'>{item.get('content')}</p>
                                  </ListInfo>
                              </ListItem>
                          </Link>
                      )
                  })
                }
            </div>
        )
    }
}

const mapStates = (state)=>({
    articleList: state.getIn(['home','articleList'])
});

export default connect(mapStates)(List);
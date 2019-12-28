import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft = styled.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-pic{
    width:625px;
    height:270px;
  }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    overflow:hidden;
    padding:20px 0 10px 0;
    margin-left:-18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    height:32px;
    line-height:32px;
    margin-left:18px;
    margin-bottom:18px;
    background:#f7f7f7;
    padding-right:10px;
    font-size:14px;
    color:#000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    .topic-pic{
        margin-right:10px;
        width:32px;
        height：32px;
        float:left;
        display:block;
    }
`;

export const ListItem = styled.div`
    padding:20px 0 20px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right
        border-radius:10px;
    }
`;

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight: bold;
        padding-right:10px;
        color:#333;
    };
    .content{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;

export const RecommendWrapper = styled.div`
    padding: 30px 0 0;
    width:280px;
    height:228px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    background:url(${(props)=>props.imgUrl});
    background-size:contain;
    
`;


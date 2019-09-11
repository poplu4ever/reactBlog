import {fromJS} from "immutable";
import PIC from '../../../statics/cloud-game.jpg';
import PIC2 from '../../../statics/ps control.jpeg';

//生成immutable对象
const defaultState = fromJS({
    topicList:[{
        id:1,
        title:'游戏热点',
        imgUrl:PIC
    },{
        id:2,
        title:'当前爱玩',
        imgUrl:PIC2
    }],
    articleList:[{
        id:1,
        title:"《漫威复仇者联盟》中文版将于2020年5月15日同步发售",
        desc:'将登陆PS4/Xbox One/PC平台',
        imgUrl:"https://img01.vgtime.com/game/cover/2019/09/11/190911133937608_u162815.jpg?x-oss-process=image/resize,m_pad,color_000000,w_320,h_200"

    },{
        id:2,
        title:"Fami通评分：《实况足球2020》和《塞尔达传说 织梦岛》荣登白金殿堂",
        desc:"等不及玩到《塞尔达传说 织梦岛》了!",
        imgUrl:"https://img01.vgtime.com/game/cover/2019/09/11/190911133417582_u59.jpg?x-oss-process=image/resize,m_pad,color_000000,w_320,h_200"

    },{
        id:3,
        title:"《伊苏9》中文版公布，发售日未定，由前SIE中文化中心总监陈云云新公司代理",
        desc:'具体上市时间未定',
        imgUrl:"https://img01.vgtime.com/game/cover/2019/09/11/190911130541545_u59.jpg?x-oss-process=image/resize,m_pad,color_000000,w_320,h_200"
    }],
    recommendList:[{
        id:1,
        imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
    },{
        id:2,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
    },{
        id:3,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
    },{
        id:4,
        imgUrl:"https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
    }]
});

export default (state = defaultState, action) =>{
    switch(action.type){
        default:
            return state;

    }
}
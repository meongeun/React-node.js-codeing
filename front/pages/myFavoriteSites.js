import React from 'react';
import {Col, Row, Avatar, List } from 'antd';
import Link from 'next/link';
import AboveBar1 from '../components/AboveBar1';

const dummy_user = {
    nickname:'user1',
    prefer_language:['react-native', 'java', 'c/c#'],
}


const MyFavoriteSites = () => {
    return (
        <>
            <AboveBar1/>
            <div>
                <Col xs={3} md={5} style={{padding:'10px', textAlign:'center'}}>
                        <Row style={{marginTop:'50px'}}>{<Avatar>{dummy_user.nickname[0]}</Avatar>}</Row>
                        <Row>{dummy_user.nickname}</Row>
                        <Row style={{margin:'40px 20px 40px 20px'}}>
                            <Link href='myFavoriteLectures'>
                                <div style={{padding:'10px', width:'100%',backgroundColor:'#464646', color:'white', fontSize:'0.8em'}}>
                                    즐겨찾기한 강의
                                </div>
                            </Link>
                            <Link href='myFavoriteSites'>
                                <div style={{padding:'10px', width:'100%',backgroundColor:'#464646', color:'white', fontSize:'0.8em'}}>
                                    즐겨찾기한 사이트
                                </div>
                            </Link>
                            <Link href='myreview'>
                                <div style={{padding:'10px', width:'100%',backgroundColor:'#464646', color:'white', fontSize:'0.8em'}}>
                                    내가 쓴 리뷰
                                </div>
                            </Link>
                            <Link href='mypost'>
                                <div style={{padding:'10px', width:'100%',backgroundColor:'#464646', color:'white', fontSize:'0.8em'}}>
                                    내가 쓴 글
                                </div>
                            </Link>
                            <Link href='mycomment'>
                                <div style={{padding:'10px', width:'100%',backgroundColor:'#464646', color:'white', fontSize:'0.8em'}}>
                                    내가 쓴 댓글
                                </div>
                            </Link>
                        </Row>
                </Col>
                <Col xs={18} md={14}>
                    <Row>
                        <div style={{textAlign:'center', margin:'30px'}}>
                            즐겨찾기한 사이트
                        </div>
                    </Row>
                    <Row >
                        <List
                            style={{ margin: '30px' }}
                            grid={{md: 2}}
                            dataSource={[{site: 'udemy', url: 'naver.com',  profile:'https://i.ytimg.com/vi/wnV7v93S9HQ/maxresdefault.jpg'},
                            {site: 'Inflearn',   url: 'naver.com',  profile:'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/learn/course-10336/thumb_course_10336.jpg' },
                            {site: 'Inflearn',  url: 'naver.com', profile:'https://t1.daumcdn.net/cfile/tistory/2141A44158620E590D' }]}
                            renderItem={item => (
                                <Link href={item.url}>
                                <List.Item 
                                    style={{backgroundColor:'gray', width:'200px',height:'150px',overflow:'hidden', padding:'none'}}
                                >
                                    <Row xs={5} md={5} style={{textAlign:'center'}}>
                                        <img src={item.profile} width='100%' height='130px'></img>
                                    </Row>
                                    <Row>
                                        <div>{item.site}</div>
                                    </Row>
                                </List.Item>
                                </Link>

                            )}
                        />
                    </Row>
                </Col>
                <Col xs={3} md={5}>
                </Col>
            </div>
        </>
    );
};

export default MyFavoriteSites;
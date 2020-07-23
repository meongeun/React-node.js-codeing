import React from 'react';
import {Col, Row, Avatar, List } from 'antd';
import Link from 'next/link';
import AboveBar1 from '../components/AboveBar1';
import MypageLeft from '../components/MypageLeft';

const MyFavoriteSites = () => {
    return (
        <>
            <AboveBar1/>
            <div>
                <Col xs={3} md={5} style={{padding:'10px', textAlign:'center'}}>
                    <MypageLeft/>
                </Col>
                <Col xs={21} md={14}>
                    <Row>
                        <div style={{textAlign:'center', margin:'30px'}}>
                            즐겨찾기한 사이트
                        </div>
                    </Row>
                    <Row >
                        <List
                            grid={{md: 3}}
                            dataSource={[{site: 'udemy', url: 'naver.com',  profile:'https://i.ytimg.com/vi/wnV7v93S9HQ/maxresdefault.jpg'},
                            {site: 'Inflearn',   url: 'naver.com',  profile:'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/learn/course-10336/thumb_course_10336.jpg' },
                            {site: 'Inflearn',  url: 'naver.com', profile:'https://t1.daumcdn.net/cfile/tistory/2141A44158620E590D' }]}
                            renderItem={item => (
                                <Link href={item.url}>
                                <List.Item 
                                    style={{backgroundColor:'gray', width:'200px',height:'150px',overflow:'hidden'}}
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
            </div>
        </>
    );
};

export default MyFavoriteSites;
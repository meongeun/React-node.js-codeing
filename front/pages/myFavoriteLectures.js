import React from 'react';
import {Col, Row, Avatar } from 'antd';
import LectureInfo from '../components/LectureInfo';
import Link from 'next/link';
import AboveBar1 from '../components/AboveBar1';

const dummy_user = {
    nickname:'user1',
    prefer_language:['react-native', 'java', 'c/c#'],
}


const MyFavoriteLectures = () => {
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
                            즐겨찾기한 강의
                        </div>
                    </Row>
                    <Row >
                        <LectureInfo/>
                    </Row>
                </Col>
                <Col xs={3} md={5}>
                </Col>
            </div>
        </>
    );
};

export default MyFavoriteLectures;
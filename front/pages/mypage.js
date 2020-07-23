import React, { useState } from 'react';
import { Card, Col, Row, List, Avatar } from 'antd';
import AboveBar1 from '../components/AboveBar1';
import Link from 'next/link';

const dummy = {
    nickname:'user1',
    prefer_language:['react-native', 'java', 'c/c#'],
}

const MyPage = () => {

    return (
        <>
            <AboveBar1/>
            <div>
                <Col xs={3} md={5}>
                </Col>
                <Col xs={18} md={14}>
                    <Row style={{marginTop:'10px'}}>
                        <Card style={{border:"0px solid"}}>
                            <Card.Meta
                                title={dummy.nickname}
                                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                                description={'#'+dummy.prefer_language[0]+', #'+dummy.prefer_language[1]}
                                style={{ height: '50px' }}
                            />
                            <div style={{float:'right'}}>
                                <Link href=''>개인정보 수정</Link>
                            </div>   
                        </Card>
                    </Row>
                    <Row style={{marginTop:'10px'}}>
                        <List
                            grid={{gutter: 16}}
                            dataSource={[{ name: '즐거찾기한 강의', url: '/myFavoriteLectures'},
                                        { name: '즐겨찾기한 사이트', url: '/myFavoritesSites'},
                                        { name: '내가 쓴 리뷰', url: '/myreview'},
                                        { name: '내가 쓴 글', url: '/mypost'},
                                        { name: '댓글 단 글', url: '/mycomment'}
                                    ]}
                            renderItem={item => (
                                <List.Item >
                                    <Link href={item.url}>
                                        <Card style={{border:"1px solid"}}>
                                            <Card.Meta
                                                title={item.name}
                                                style={{ height: '10px'}}
                                            />
                                        </Card>
                                    </Link>
                                </List.Item>

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

export default MyPage;
import React from 'react';
import {Col, Row, Avatar } from 'antd';
import LectureInfo from '../components/LectureInfo';
import Link from 'next/link';
import AboveBar1 from '../components/AboveBar1';

const dummy_user = {
    nickname:'user1',
    prefer_language:['react-native', 'java', 'c/c#'],
}


const Basket = () => {
    return (
        <>
            <AboveBar1/>
            <div>
                <Col xs={3} md={5} style={{padding:'50px', textAlign:'center', verticalAlign:'center'}}>
                        <Row>{<Avatar>{dummy_user.nickname[0]}</Avatar>}</Row>
                        <Row>{dummy_user.nickname}</Row>
                </Col>
                <Col xs={18} md={14}>
                    <Row>
                        <div style={{textAlign:'center', margin:'30px'}}>
                            장바구니
                        </div>
                    </Row>
                    <Row >
                        <LectureInfo/>
                    </Row>
                    <Row style={{margin:'10px 0px 10px 0px', border:"1px solid", padding:'10px',height: '40px',textAlign:'center'}}>
                        <Link href=''>
                            <div >
                                결제하기
                            </div>
                        </Link>
                    </Row>
                </Col>
                <Col xs={3} md={5}>
                </Col>
            </div>
        </>
    );
};

export default Basket;
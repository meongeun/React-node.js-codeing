import React from 'react';
import {Col, Row} from 'antd';
import LectureInfo from '../components/LectureInfo';
import Link from 'next/link';
import AboveBar1 from '../components/AboveBar1';
import MypageLeft from '../components/MypageLeft';

const MyFavoriteLectures = () => {
    return (
        <>
            <AboveBar1/>
            <div>
                <Col xs={3} md={5} style={{padding:'10px', textAlign:'center'}}>
                    <MypageLeft/>
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
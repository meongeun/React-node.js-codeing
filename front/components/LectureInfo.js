import React from 'react';
import {Col, Row, List, Avatar } from 'antd';
import Link from 'next/link';

const LectureInfo =({children}) => {
    return (
        <div>
            <List
                style={{ marginTop: '20px' }}
                grid={{gutter: 16}}
                dataSource={[{ name: 'Flutter로 쇼핑앱 만들기', site: 'udemy', writer:'Amy', url: 'naver.com', fee: '무료', profile:'https://i.ytimg.com/vi/wnV7v93S9HQ/maxresdefault.jpg'},
                { name: 'React로 SNS 만들기', site: 'Inflearn', writer:'김수박', url: 'naver.com', fee: '무료', profile:'https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/learn/course-10336/thumb_course_10336.jpg' },
                { name: 'Node.js교과서', site: 'Inflearn', writer:'James', url: 'naver.com', fee: '무료', profile:'https://t1.daumcdn.net/cfile/tistory/2141A44158620E590D' }]}
                renderItem={item => (
                    <Link href={item.url}>
                    <List.Item  style={{ overflow:'hidden',  border:"1px solid gray", padding:'none'}}>
                        <Col xs={5} md={5} style={{textAlign:'center'}}>
                            <img src={item.profile} width='100%'></img>
                        </Col>
                        <Col xs={19} md={19} style={{padding:'0px'}}>
                            <Row style={{padding:'10px'}}>
                                <div>{item.site}</div>
                                <div>{item.name}</div>
                                <br/>
                                <div>{item.writer}</div>
                            </Row>
                            <Row style={{padding:'10px'}}>
                                <div>{item.fee}</div>
                            </Row>
                        </Col>
                    </List.Item>
                    </Link>

                )}
            />
        </div>
    );
};

export default LectureInfo;
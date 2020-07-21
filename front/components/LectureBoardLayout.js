import React, { Children, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import { Menu, Input, Button, Rate, Icon, Row, Col, Card, Avatar, Form, Typography, PageHeader, Descriptions } from 'antd';
import UserProfile from './UserProfile';
import { useSelector } from 'react-redux';
import Router from 'next/router';
const LectureBoardLayout = ({ children, lecture }) => {
    const { Title } = Typography;
    const {user, isLoggedIn} = useSelector(state => state.user);
    // const { mainLectures } = useSelector(state => state.lecture);
    return (
        <>

            <div>
                <PageHeader
                    ghost={false}
                    onBack={() =>
                        Router.push({
                            pathname: '/reviews',
                        })}
                    title="Flutter로 쇼핑앱 만들기"
                    subTitle={<div>
                        {/* udemy.com/flutter0192098 */}
                        <Rate style={{marginLeft: '30px'}} defaultValue={3} disabled />,
                    </div>
                        }
                    // title={mainLectures[lecture].name}
                    // subTitle={mainLectures[lecture].url}
                    extra={isLoggedIn? 
                    <Button><Icon type="heart"></Icon></Button>: 
                    <Link href="/login"><Button><Icon type="heart"></Icon></Button></Link>}
                >
                    udemy.com/flutter0192098
                    <Button type="text" style={{marginLeft:'20px', size:'small'}}> 수강하러가기</Button>
                    <Menu mode="horizontal">
                        {/* <Menu.Item key="company"><Link href={{ pathname: '/lecturereview', query: { id: lecture } }}><a>리뷰</a></Link></Menu.Item>
                        <Menu.Item key="companyform"><Link href={{ pathname: '/lecturetalks', query: { id: lecture } }}><a>토론방</a></Link></Menu.Item> */}

                        <Menu.Item key="company">
                            <Link href={{ pathname: '/lectureboard', query: { id: 1 } }}><a>리뷰</a></Link></Menu.Item>
                        <Menu.Item key="companyform"><Link href={{ pathname: '/lecturetalks', query: { id: 1 } }}><a>토론방</a></Link></Menu.Item>
                    </Menu>


                </PageHeader>
                {children}
            </div>

        </>
    );
};
LectureBoardLayout.PropTypes = {
    children: PropTypes.node,
    lecture: PropTypes.number
};
export default LectureBoardLayout;
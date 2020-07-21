import React, { useState } from 'react';
import { Card, Col, Row, Input, List, Button, Typography, Cascader, Select, Radio, Divider, Avatar } from 'antd';
import LoginForm from '../components/LoginForm';
import AppLayout from '../components/AppLayout';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const { Option } = Select;
const { Title } = Typography;
const people = [];
for (let i = 0; i < 1000; i++) {
    people.push(<Option key={i.toString(36) + i}>{i.toString(36) + i.toString(36) + i}</Option>);
}

function handlePeopleChange(value) {
    console.log(`selected ${value}`);
}

function onChange(value) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val) {
    console.log('search:', val);
}

const SearchLecture = () => {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector(state => state.user);

    const [radio, setRadioState] = useState(1);
    const onRadioChange = e => {
        console.log('radio checked', e.target.value);
        setRadioState({
            value: e.target.value,
        });
    };
    const [filterone,setFilterOne] = useState(false);
    
    return (
        // background: '#ECECEC', 
        <>
            {/* {isLoggedIn ? */}

            <AppLayout>

                <div style={{ float: 'right', marginRight: '10px' }}>
                    <p>
                        <Link href="/profile" style={{ marginRight: '10px' }}><a>MyPage</a></Link>  |  장바구니
                        {/* <Link><a>로그인</a></Link> <Link><a>회원가입</a></Link> <Link><a>장바구니</a></Link> */}
                    </p>
                </div>
                <h1 style={{ margin: '15px', paddingTop: '30px' }}>Re;Coder</h1>
                <div style={{ textAlign: 'center' }}>
                    <Select
                        style={{
                            float: 'left'
                        }}
                        showSearch
                        style={{ width: 100 }}
                        placeholder="카테고리"
                        optionFilterProp="children"
                        onChange={onChange}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                    >
                        <Option value="강의">강의</Option>
                        <Option value="언어">언어</Option>
                        {/* <Option value="tom">Tom</Option> */}
                    </Select>
                    <Select
                        mode="multiple"
                        style={{ width: "200px" }}
                        placeholder="검색"
                        defaultValue={[]}
                        onChange={handlePeopleChange}
                    >
                        {people}
                    </Select>
                    <Button style={{ marginTop: '20px' }}>검색</Button>
                </div>
                <Row gutter={10}>
                    <Col xs={5} md={5}>
                        <Card>
                            <Card.Meta
                                // avatar = {<Avatar>{mainUsers[0].name}</Avatar>}
                                title='프로그래밍 언어'
                                description={<div>
                                    <Radio.Group onChange={onRadioChange} value={radio.value}>
                                        <Radio style={radioStyle} value={1}>
                                            평점
                                        </Radio>
                                        <Radio style={radioStyle} value={2}>
                                            가격
                                        </Radio>
                                    </Radio.Group>

                                </div>}
                            >
                            </Card.Meta>
                        </Card>

                    </Col>
                    <Col xs={18} md={19}>
                        <List
                            style={{ marginTop: '20px' }}
                            grid={{
                                gutter: 16,
                                xs: 1,
                                sm: 2,
                                md: 2,
                                lg: 4,
                                xl: 4,
                                xxl: 3,
                            }}
                            dataSource={[{ name: 'Flutter로 쇼핑앱 만들기', site: 'udemy', url: 'naver.com', fee: '무료' },
                            { name: 'React로 SNS 만들기', site: 'Inflearn', url: 'naver.com', fee: '무료' },
                            { name: 'Node.js교과서', site: 'Inflearn', url: 'naver.com', fee: '무료' }]}
                            renderItem={item => (

                                <List.Item>

                                    <Link href="/lectureboard">
                                        <Card >
                                            <Card.Meta
                                                title={item.name}
                                                avatar={<Avatar>{item.name[0]}</Avatar>}
                                                description={<div>
                                                    {item.site} {item.url}
                                                </div>}
                                                style={{ height: '50px' }}
                                            />
                                        </Card>
                                    </Link>
                                </List.Item>

                            )}
                        />
                    </Col>
                </Row>
            </AppLayout>
            {/*  : <LoginForm />} */}
        </>
    );
};

export default SearchLecture;
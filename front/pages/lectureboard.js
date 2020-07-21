import React, {useState} from 'react';
import { List, Form, Input, Button, Divider, Card, Avatar,Select,Menu, Icon, Row, Col, Progress } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import LectureBoardLayout from '../components/LectureBoardLayout';
import UserProfile from '../components/UserProfile';
import LectureboardList from '../components/LectureBoardList';
import LectureReviewCard from '../components/LectureReviewCard';
import AppLayout from '../components/AppLayout';
import Link from 'next/link';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            name: '김명은',
        },
        content: '첫 번째 게시글',
        img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80',
    }],
};

const listData = [];
for (let i = 0; i < 3; i++) {
    listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            '이화연',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
};

const { Option } = Select;

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

const Lectureboard = () => {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector(state => state.user);
    const { mainPosts, imagePaths } = useSelector(state => state.post);
    const [radio, setRadioState] = useState(1);
    const onRadioChange = e => {
        console.log('radio checked', e.target.value);
        setRadioState({
            value: e.target.value,
        });
    };
    return (
        <>
        {/* {isLoggedIn ? */}
            <LectureBoardLayout lecture={1}>
                <div>
                    <Row>
                        <Col span={8}>
                            <div style={{ textAlign: 'center' }}>
                                <p>수준</p>
                                <Progress type="circle" percent={60} successPercent={30} />
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ textAlign: 'center' }}>
                                <p>장점</p>
                                <img style={{width:180, height:180}}src="https://4.bp.blogspot.com/-v901zsv6H_0/Ti_eQnOARaI/AAAAAAAAAyE/68jNzvGz3d4/s1600/wordcloud_packages.png"></img>
                            </div>
                        </Col>
                        <Col span={8}>
                            <div style={{ textAlign: 'center' }}>
                                <p>단점</p>
                                <img style={{width:180, height:180}}src="https://4.bp.blogspot.com/-v901zsv6H_0/Ti_eQnOARaI/AAAAAAAAAyE/68jNzvGz3d4/s1600/wordcloud_packages.png"></img>
                            </div>
                        </Col>
                    </Row>
                    {/* <Divider /> */}
                    <div style={{ textAlign: 'center' }}>
                                <Select
                                style={{
                                    float:'left'}}
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
                    <LectureReviewCard />

                </div>
            </LectureBoardLayout>
          
            {/* : <LoginForm />} */}
        </>

    );
};

export default Lectureboard;
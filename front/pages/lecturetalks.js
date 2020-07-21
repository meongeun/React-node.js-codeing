import React, { createElement, useState, useCallback } from 'react';
import { List, Form, Input, Button, Card, Avatar, Select, Icon, Row, Col, Comment, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from '../components/LoginForm';
import LectureBoardLayout from '../components/LectureBoardLayout';
import UserProfile from '../components/UserProfile';
import LectureBoardList from '../components/LectureBoardList';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, MessageOutlined, MessageFilled } from '@ant-design/icons';

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
            'goCode',
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

const Lecturetalks = () => {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useSelector(state => state.user);
    const { mainPosts, imagePaths } = useSelector(state => state.post);
    const [action, setActionState] = useState(null);
    const [likes, setLikesState] = useState(0);
    const [dislikes, setDislikesState] = useState(0);
    const [contentId, setContentIdState] = useState(null);
    const like = () => {
        setLikesState(1);
        setDislikesState(0);
        setActionState('liked');
    }
    const dislike = () => {
        setDislikesState(1);
        setLikesState(0);
        setActionState('disliked');
    }
    const onToggleComment = useCallback((e) => {
        console.log(e.target.value);
        // console.log(v);
        setCommentFormOpened(prev => !prev);
        console.log(commentFormOpened);
    }, []);
    const actions = [
        <span key="comment-basic-like">
            <Tooltip title="Like">
                {React.createElement(action === 'liked' ? LikeFilled : LikeOutlined, {
                    onClick: like,
                })}
            </Tooltip>
            <span className="comment-action">{likes}</span>
        </span>,
        <span key=' key="comment-basic-dislike"'>
            <Tooltip title="Dislike">
                {React.createElement(action === 'liked' ? DislikeFilled : DislikeOutlined, {
                    onClick: dislike,
                })}
            </Tooltip>
            <span className="comment-action">{dislikes}</span>
        </span>,
        // <span key="comment-basic-reply-to"><Icon type ="message" key="message" onClick={onToggleComment}/></span>,
        <span key="comment-basic-reply-to">
            <Tooltip title="Reply">
                {React.createElement(action === 'reply' ? MessageFilled : MessageOutlined, {
                    onClick: () => {
                        setContentIdState(v.id);
                        console.log(contentId);
                    },
                })}
            </Tooltip>
            {/* <span className="comment-action">{dislikes}</span> */}
        </span>,
    ];

    return (
        <>
            {/* {isLoggedIn? */}
            <LectureBoardLayout lecture={1}>

                <div>
                    <Card title={
                        <div>
                            <h2 style={{ float: 'left' }}> QnA</h2>
                            <div style={{ float: 'right', textAlgin: 'left' }}>

                                <Select
                                    style={{ marginLeft: '20%' }}
                                    showSearch
                                    style={{ width: 100 }}
                                    placeholder="카테고리"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="강의">강의</Option>
                                    <Option value="언어">언어</Option>

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
                        </div>
                    } bordered="{true}" style={{ minHeight: 600 }}>
                        
                        <List
                            itemLayout="vertical"
                            size="large"
                            dataSource={listData}
                            renderItem={item => (
                                <List.Item key={item.title}>
                                    {/* <List.Item.Meta
                                avatar={<Avatar src={item.avatar} />}
                                //title={<a href={item.href}>{item.title}</a>}
                                description={item.description}/>
                            {item.content} */}
                                    <Comment
                                        // actions={actions}
                                        author={<a>Han Solo</a>}
                                        avatar={
                                            <Avatar
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                                alt="Han Solo"
                                            />
                                        }
                                        content={
                                            <p>
                                                We supply a series of design principles, practical patterns and high quality design
                                                resources (Sketch and Axure), to help people create their product prototypes beautifully
                                                and efficiently.
                                            </p>
                                        }
                                        datetime={
                                            <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                                <span>{moment().fromNow()}</span>
                                            </Tooltip>
                                        }
                                    />
                                </List.Item>
                                
                            )}/> 
                            
                    </Card>

                    <Form style={{ margin: '10px 0px 20px' }} encType="multipart/form-data" >
                        {/* value={contenttext} onChange={onChangeContentText} */}
                        <Input.TextArea maxLength={140} placeholder="입력해주세요" />
                        <div>
                            <Button>이미지 업로드</Button>
                            <Button type="primary" style={{ float: 'right' }} htmlType="submit">올리기</Button>
                        </div>
                    </Form>

                    {isLoggedIn && <Form style={{ margin: '10px 0px 20px' }} encType="multipart/form-data">
                        <Input.TextArea maxLength={140} placeholder="Message 이화연" />
                        <div>
                            <Button>이미지 업로드</Button>
                            <Button type="primary" style={{ float: 'right' }} htmlType="submit">올리기</Button>
                        </div>
                        <div>
                            {imagePaths.map((v, i) => {
                                return (
                                    <div key={v} style={{ display: 'inline-block' }}>
                                        <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                                        <div>
                                            <Button>제거</Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Form>}

                </div>

            </LectureBoardLayout>
            {/* :<LoginForm/>} */}
        </>

    );
};

export default Lecturetalks;
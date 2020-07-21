import React, { useCallback, useEffect, useState } from 'react';
import {Card, Icon, Button, Avatar, Input, Form, List, Comment, Row, Col, Rate} from 'antd';
import propTypes from 'prop-types';
import { useSelector, useDispatch} from 'react-redux';
import { ADD_COMMENT_REQUEST } from '../reducers/post';
import { SmileTwoTone } from '@ant-design/icons';
import { StarTwoTone } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';

const LectureReviewCard = ({post}) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);
    const [commentText, setCommentText] = useState('');
    const {user} = useSelector(state=> state.user);
    const {commentAdded, isAddingComment } = useSelector(state => state.post);
    const dispatch = useDispatch();
    const onToggleComment  = useCallback(() => {
        setCommentFormOpened(prev => !prev);
    }, []);
    const onSubmitComment = useCallback((e) => {
        e.preventDefault();
        if(!user){
            return alert('로그인이 필요합니다.');
        }
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: {
            postId: post.id,
            },
        })
    }, [user && user.id]);

    useEffect(() => {
        setCommentText('');
    },[commentAdded === true]);

    const onChangeCommentText =useCallback((e) => {
        setCommentText(e.target.value);
    }, []);
    return(
        <div>

        <Card
        // key={+post.createdAt}

        // cover={post.img && <img alt="example" src={post.img}/>}
        // actions={[
        //     <Icon type ="retweet" key="retweet"/>,
        //     <Icon type ="heart" key="heart"/>,
        //     <Icon type ="message" key="message" onClick={onToggleComment}/>,
        //     <Icon type ="ellipsis" key="ellipsis"/>,
        // ]}
        // extra = {<Button><Icon type ="heart" key="heart"/></Button>}
        >
            <Card.Meta
            avatar={<Avatar>닉네임</Avatar>}
            title={<div>
                닉네임
                {/* {post.User.name} */}
            <br/>
            <h5>프론트개발자/ React /초보 </h5>
            <Button style={{float:'right'}}>20<Icon type ="heart" key="heart"/></Button>
            <Button style={{float:'right'}}>신고<Icon type ="bell-o" key="bell-o "/></Button></div>}
            description={
                <>
                <Row>
                <Col span={19} push={6}>
                
                {/* {post.content} */}
                <h3>장점</h3> 
                자세히 알려줌
                {/* 복지와 식대가 최고이고 승진의기회와 높은 연봉이 보장되어있다. */}
                <br/><br/>
                <h3>단점</h3>
                너무 비쌈 
                {/* 단점은 야근이 기본으로 하는 분위기라 모두 높은 고강도의 업무를 본다. */}
                <br/><br/>
                <h3>개선점</h3>
                딱히 없음 
                {/* 바라는 점은 딱히 없고 부당한일을 시키지 않았으면 좋겠다. */}
                <br/><br/>
                {/* <h4>이 기업은 1년 후 성장하고 있을 것이다. </h4> 
                <br/> */}
                <h4>이 강의을 추천 합니다!</h4>
                </Col>
                <Col span={5} pull={19}>
                <h4>총점</h4>
                <Rate disabled defaultValue={4} /> 
                <br/><br/>
                <h4>강의력</h4>
                <Rate character={<Icon type="star"/>} disabled defaultValue={3} /> 
                <br/><br/>
                <h4>가격</h4>
                <Rate character={<Icon type="star"/>} disabled defaultValue={3} /> 
                <br/><br/>
                <h4>언어 구사력</h4>
                <Rate character={<Icon type="star"/>} disabled defaultValue={3} /> 
                <br/><br/>
                <h4>강사</h4>
                <Rate character={<Icon type="star"/>} disabled defaultValue={3} /> 
                <br/><br/>
                {/* <h4>경영진</h4>
                <Rate character={<Icon type="star"/>} disabled defaultValue={3} /> 
                <br/><br/> */}
                </Col>
              </Row>
        </>
            }
            />
        </Card>
        </div>
    );
}

LectureReviewCard.propTypes = {
    post: propTypes.shape({
        User: propTypes.object,
        content: propTypes.string,
        img: propTypes.string,
        createdAt: propTypes.object,
    }),
}
export default LectureReviewCard;
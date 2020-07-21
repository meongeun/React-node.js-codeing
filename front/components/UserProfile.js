import { Avatar, Card, Button } from 'antd';
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
                actions={[
                    //<div key="twit">짹쨱<br/> {dummy.Post.length} </div>,

                    // <div key="planner"><Link href="/profile"><a>즐겨찾기한 강의</a></Link></div>,
                    // <div key="planner"><Link href="/portfolio"><a>즐겨찾기한 사이트</a></Link></div>,
                    // <div key="planner"><Link href="/profile"><a>내가 쓴 리뷰</a></Link></div>,
                    // <div key="planner"><Link href="/portfolio"><a>내가 쓴 글</a></Link></div>,
                    // <div key="planner"><Link href="/portfolio"><a>댓글단 글</a></Link></div>,

                    // <div key="following"><Link href="/profile"><a>180 following</a></Link><br />{user.Followings.length} </div>,
                    // <div key="planner"><Link href="/missionlist"><a>미션</a></Link></div>,
                    //<div key="follower">팔로워<br/> {dummy.Followers.length} </div>
                ]}>
                <Card.Meta
                    // style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}
                    avatar = {<Avatar size={100} style={{alignItems:'center'}}>{user.name[0]}</Avatar>}
                    title={
                        <div>
                            {me.nickname}
                          
                        </div>}
                    description={<div>
                        {/* <p>{user.major}</p> */}
                        <p>FullStack Developer</p>
                        <p>#React, #ReactNative, #Flutter, #Node.js, #RubyOnRails</p>
                        <Button onClick={onLogout} style={{float:'right'}}>로그아웃</Button>
                    </div>}>
                </Card.Meta>

            </Card>
  );
};

export default UserProfile;

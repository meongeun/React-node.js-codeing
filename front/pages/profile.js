import React from 'react';
import { List} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from '../components/LoginForm';
import AppLayout from '../components/AppLayout';
import UserProfile from '../components/UserProfile';
import Link from 'next/link';

const Profile = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.user);
  return (
    <div>
            {isLoggedIn ?
                <AppLayout>
                    <UserProfile/>
                    <div>
                        {/* <UsernameEditForm /> */}
                        <List
                            style={{ marginBottom: '20px' }}
                            grid={{ gutter: 4, xs: 1, md: 1}}
                            size="small"
                            // header={<div>즐겨찾기한 강의 목록</div>}
                            // loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                            bordered
                            dataSource={['즐겨찾기한 강의', '즐겨찾기한 사이트', '내가 쓴 리뷰', '내가 쓴 글', '댓글단 글']}
                            renderItem={item => (
                                <List.Item style={{ marginTop: '20px' }}>
                                    <Link href="/userlecturelist"><a>{item}</a></Link>
                                    {/* <Card>
                                        <Card.Meta 
                                        description={<div>{item}
                                            <Icon  key="stop" type="close" style={{float:'right'}}/>
                                        </div>} 
                                        avatar={<Avatar size={30} style={{alignItems:'center'}}>{item[0]}</Avatar>}/>
                                    </Card> */}
                                </List.Item>
                            )}
                        />
                    </div> </AppLayout> : <LoginForm />}
    </div>
  );
};

export default Profile;

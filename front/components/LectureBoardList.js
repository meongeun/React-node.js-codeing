import React, { useCallback, useEffect, useState } from 'react';
import { Avatar, Card, Button, Input, Form, Popover, Typography, PageHeader } from 'antd';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';
import { useInput } from '../pages/signup';
import propTypes from 'prop-types';
// import { setContext } from 'redux-saga/effects';
// { LectureboardList }
const LectureboardList = () => {
    const { mainUsers, Followings, Followers } = useSelector(state => state.user);
    
    const dispatch = useDispatch();
    const onLogout = useCallback(() => {
        dispatch(logoutRequestAction);
    }, []);

    const [name, setNameState] = useState('');
    const { Title } = Typography;

    // const { user } = useSelector(state => state.user);

    const [visible, setVisibleState] = useState(false);

    const onHideVisible = useCallback((e) => {
        setVisibleState(false);
    }, []);

    const onSaveVisible = useCallback((e) => {
        e.preventDefault();

        // dispatch(portfolioAddAction({
        //     id, 
        //     password, 
        //     name,
        //     major,

        // }))
        setVisibleState(
            false
        )
    });

    const onChangeVisible = useCallback((e) => {
        setVisibleState(!e.target.value);
    }, []);

    // useEffect(() => {
    //     setNameState('');
    // }, [networkBoardAdded==true]);
    // const onSubmitBoard = useCallback((e) => {
    //     e.preventDefault();
    //     dispatch({
    //         type: ADD_NETWORK_BOARD_REQUEST,
    //         data: {
    //             networkId: networklayout.id,

    //         }
    //     })
    // }, []);
    const onChangeName = useCallback((e) => {
        setNameState(e.target.value);
    },[]);

    return (
        <>
            <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="#치와와"
                subTitle="작고 귀여운" />


            <Card title="Channels" extra={<Popover
                content={<>
                {/* onSubmit={onSubmitBoard} */}
                    <Form  style={{ padding: 15 }}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <br />
                            <Input name="name" value={name} required onChange={onChangeName} placeholder="채널 이름" />
                        </div>
                        <Button type="dashed"><a onClick={onHideVisible}>취소</a></Button>
                        <Button type="primary" htmlType="submit" onClick={onChangeVisible} >저장</Button>
                        {/* loading={isAddingNetworkBoard} */}

                    </Form>

                </>}

                title="채널 추가"
                trigger="click"
                visible={visible}
                overlayStyle={{
                    background: "rgba(0,0,0,1)",
                    height: "20vh",
                    width: "50vw",
                }}
            >
                <Button type="primary" onClick={onChangeVisible}>+</Button>
            </Popover>}
            >
                 <p><Link href="/networkboard"><a>#고민 털어놓아요</a></Link></p>
                 <p><Link href="/networkboard"><a>#사료 공유</a></Link></p>
                {/* {.map((v) => {
                    return (
                        <p><Link href="/networkboard"><a>{v.name}</a></Link></p>
                    )
                })} */}

                {/* <p><Link href="/networkboard"><a>#우리 만나요</a></Link></p>
            <p><Link href="/networkboard"><a>#스터디</a></Link></p> */}

            </Card>

        </>
    );
}

// LectureboardList.propTypes = {
//     lectureboard: propTypes.shape({
//         // Users: propTypes.object,
//         name: propTypes.string,
//         password: propTypes.string,
//         limit: propTypes.string,
//         notice: propTypes.string,
//         content: propTypes.string,
//         createdAt: propTypes.object,
//     }),
// }

export default LectureboardList;
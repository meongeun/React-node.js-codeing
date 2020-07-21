import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';
import '../style/signup_style.css';
import Link from 'next/link';

const TextInput = ({ value }) => (
    <div>{value}</div>
);

TextInput.propTypes = {
    value: PropTypes.string,
};

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const Findid = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [birth, onChangeBirth] = useInput('');
    const [email, onChangeEmail] = useInput('');
    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector(state => state.user);

    useEffect(() => {
        if (me) {
            alert('로그인했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                userId: id,
                password,
                nickname: nick,
            },
        });
    }, [id, nick, password, passwordCheck, term]);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Noto Sans', marginTop: '95px', marginLeft: '10%' }}>
            <h1 style={{ color: '#132B99' }}>비밀번호 찾기</h1>
            <br />
            <br />
            <Row>
                <Col span={12}>
                    <div className="divf">
                        <h3 style={{ float: 'left', color: '#132B99', fontWeight: 'bold' }}>임시 비밀번호 발급</h3>
                        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                            <div>
                                <br />
                                <Input name="user-nick" value={nick} required onChange={onChangeNick} placeholder="이름입력" />
                                <Input name="user-birth" value={birth} required onChange={onChangeBirth} placeholder="생년월일6자리" />
                                <Input name="user-birth" value={email} required onChange={onChangeEmail} placeholder="휴대폰 번호(EX:01099016655)" />
                            </div>
                            <div style={{ marginTop: 10 }}>
                                <Button type="primary" style={{ width: '438px', height: '40px', background: '#132B99' }} htmlType="submit" loading={isSigningUp}> <Link href="/findpwtemp"><a style={{ color: '#FFFFFF' }}>임시 비밀번호 받기</a></Link></Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="divf">
                        <h3 style={{ float: 'left', color: '#132B99', fontWeight: 'bold' }}>새 비밀번호 설정</h3>
                        <h4 style={{ float: 'left', color: '#132B99', fontWeight: 'bold' }}>본인 인증을 위해 제공되는 정보는 해당 인증 기관에서 직접 수집하며,
    인증 이외의 용도로 이용 또는 저장하지 않습니다. </h4>
                        <br />
                        <div style={{ marginTop: 10, boxSizing:'border-box', textAlign:'left'}}>
                            <label style={{border: '0.4px solid #464646', paddingRight:'360px', width: '438px', background:'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF'}}>
                            이메일 인증</label>
                            <br/>
                            <label style={{ border: '0.4px solid #464646', paddingRight:'360px', width: '438px', background:'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF'}}>
                                휴대폰 인증</label>
                            <Button type="primary" style={{ width: '438px', height: '40px', background: '#132B99' }}> <Link href="/findpwkey"><a style={{ color: '#FFFFFF' }}>비밀번호 설정</a></Link></Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Findid;
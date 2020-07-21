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
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }
    return (
        <div style={{ textAlign: 'center', fontFamily: 'Noto Sans', marginTop: '95px', marginLeft: '10%' }}>
            <h1 style={{ color: '#132B99' }}>아이디 찾기</h1>
            <br />
            <br />
            <h2 style={{ float: 'left', color: '#132B99', fontWeight: 'bold' }}>인증 기관을 통해 찾기</h2>
            <Row>
                <Col span={12}>
                    <div className="divf">

                        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
                            <br />
                            <Checkbox onChange={onChange}>휴대폰 인증</Checkbox>
                            <Input name="user-nick" value={nick} required onChange={onChangeNick} placeholder="이름" />
                            <Input name="user-birth" value={birth} required onChange={onChangeBirth} placeholder="전화번호" />
                            <Input name="user-birth" value={email} required onChange={onChangeEmail} placeholder="인증 번호 6자리 숫자 입력" />

                            <div style={{ marginTop: 10 }}>
                                <Button type="primary" style={{ width: '438px', height: '40px', background: '#132B99' }} htmlType="submit" loading={isSigningUp}> <Link href="/findedid"><a style={{ color: '#FFFFFF' }}>아이디 찾기</a></Link></Button>
                            </div>
                        </Form>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="divf">
                        <div style={{ marginTop: 10, boxSizing: 'border-box', textAlign: 'left' }}>
                        <Checkbox onChange={onChange}>이메일 인증</Checkbox>
                            <Input name="user-nick" value={nick} required onChange={onChangeNick} placeholder="이름" />
                            <Input name="user-birth" value={birth} required onChange={onChangeBirth} placeholder="이메일 주소" />
                            <Input name="user-birth" value={email} required onChange={onChangeEmail} placeholder="인증번호 6자리 숫자 입력" />
                            <Button type="primary" style={{ width: '438px', height: '40px', background: '#132B99' }}> <Link href="/findedid"><a style={{ color: '#FFFFFF' }}>아이디 찾기</a></Link></Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Findid;
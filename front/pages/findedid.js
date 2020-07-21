import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { SIGN_UP_REQUEST } from '../reducers/user';
import '../style/signed_style.css';
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

const Findedid = () => {
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
        <div style={{ textAlign: 'center', fontWeight:'bold',fontFamily: 'Noto Sans', marginTop: '95px', marginLeft: '300px', width: '420px' }}>
            <h1 style={{ color: '#132B99',fontSize:'40px'}}>아이디 확인</h1>
            <h3 style={{color:'#132B99', fontSize:'18px'}}>로그인 후 다양한 서비스를 이용하실 수 있습니다.</h3>
            <div style={{marginTop:'70px'}}>
            <h2 style={{color:'#132B99', fontSize:'18px'}} >김화연님의 아이디는 WEDNES*****입니다.</h2>

            </div>
            <Button type="primary" style={{ width: '396px', height: '54px',marginTop:'120px', background: '#132B99' }}><Link href="/login"><a style={{ color: '#FFFFFF' }}>로그인</a></Link></Button>
            <Button type="primary" style={{ width: '396px', height: '54px', background: '#FFFFFF'}}><Link href="/findpw"><a style={{ color:'#132B99'}}>비밀번호 찾기</a></Link></Button>
        </div>
    );
};

export default Findedid;
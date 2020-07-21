import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox } from 'antd';
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

const Findpwtemp = () => {
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
        <div style={{ textAlign: 'center', fontWeight:'bold',fontFamily: 'Noto Sans', marginTop: '95px', marginLeft: '300px', width: '420px', textAlign:'center' }}>
            <h1 style={{ color: '#132B99',fontSize:'40px'}}>비밀번호 확인</h1>
            <div style={{marginTop:'70px'}}>
            <h2 style={{color:'#132B99', fontSize:'18px'}} >원하시는 방법을 선택해 비밀번호를 확인하실 수 있습니다.</h2>
            <Checkbox onChange={onChange}>회원정보에 등록된 E-mail로 받기(WEDNES**@gmail.com)</Checkbox>
            <Checkbox onChange={onChange}>회원정보에 등록된 휴대전화번호로 받기(010-****-5678)</Checkbox>
            </div>
        </div>
    );
};

export default Findpwtemp;
import React, { useCallback, useState, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
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

const Signup = () => {
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
    <div style={{textAlign:'center', fontFamily: 'Noto Sans', marginTop:'95px', marginLeft:'300px', width:'396px'}}>
    <h1 style={{color:'#132B99'}}>Re;Coder</h1>
    <h3>계정 생성</h3>
      <Form onSubmit={onSubmit} style={{ padding: 10 }}>
        
        <div styel={{border: '0.5px solid #464646'}}>
          <Input name="user-id" value={id} required onChange={onChangeId} placeholder="아이디"/>
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} placeholder="비밀번호"/>
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={onChangePasswordCheck}
            placeholder="비밀번호 확인"
          />
          {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <br />
          <Input name="user-nick" value={nick} required onChange={onChangeNick} placeholder="이름" />
          <Input name="user-birth" value={birth} required onChange={onChangeBirth} placeholder="생년월일(EX.20140515)" />
          <Input name="user-birth" value={email} required onChange={onChangeEmail} placeholder="본인 확인 이메일" />
        </div>

        <div>
          <br />

        </div>

        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>개인 정보 활용에 동의 합니다.</Checkbox>
          {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" style={{width: '396px', height:'54px', background:'#132B99'}} htmlType="submit" loading={isSigningUp}> <Link href="/signup2"><a style={{ color: '#FFFFFF'}}>다음</a></Link></Button>
          {/* htmlType="submit" loading={isSigningUp} */}
        </div>
      </Form>
    </div>
  );
};

export default Signup;

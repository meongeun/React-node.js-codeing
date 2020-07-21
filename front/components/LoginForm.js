import React, { useCallback } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useInput } from '../pages/signup'; // TODO: util 폴더로 옮기기
import { LOG_IN_REQUEST } from '../reducers/user';
import '../style/login_style.css';
const LoginForm = () => {
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const { isLoggingIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: LOG_IN_REQUEST,
      data: {
        userId: id,
        password,
      },
    });
  }, [id, password]);

  return (
    <Form className="div1" onSubmit={onSubmitForm} style={{ textAlign:'center'}}>
      <div >
       <h1 style={{fontSize:'32px', color:'#FFFFFF',  marginTop: '50px' }}>Re;Coder </h1>
        <br />
        <Input className="div2" name="user-id" value={id} onChange={onChangeId} required placeholder="아이디"/>
      </div>
      <div>

        <br />
        <Input className="div3" name="user-password" value={password} onChange={onChangePassword} type="password" required placeholder="비밀번호"/>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Button className="div4" type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
       <label className="font2"><Link  href="/findid"><a style={{color:'#FFFFFF'}}>아이디 찾기</a></Link></label> 
       <label className="font3"><Link  href="/findpw"><a style={{color:'#FFFFFF'}}>비밀번호 찾기</a></Link></label> 
       <label className="font4"><Link  href="/signup"><a style={{color:'#FFFFFF'}}>회원가입</a></Link></label> 
      </div>
    </Form>
  );
};

export default LoginForm;

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Button, Select } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { LOAD_USER_REQUEST } from '../reducers/user';

const { Option } = Select;

const people = [];
for (let i = 0; i < 1000; i++) {
  people.push(<Option key={i.toString(36) + i}>{i.toString(36) + i.toString(36) + i}</Option>);
}

function handlePeopleChange(value) {
  console.log(`selected ${value}`);
}

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log('blur');
}

function onFocus() {
  console.log('focus');
}

function onSearch(val) {
  console.log('search:', val);
}


const AppLayout = ({ children }) => {
  return (
    <>

    <div>
    
        

        {children}


    </div>

</>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node,
};

export default AppLayout;

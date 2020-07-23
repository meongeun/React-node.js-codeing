import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {Button, Select } from 'antd';

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

const AboveBar1 = ({ children }) => {
    return (
      <>
        <div style={{margin:'10px'}}>
            <div  style={{float: 'right', marginRight:'10px'}}>
                <p>
                <Link href="/mypage"><a>MyPage</a></Link>
                |  
                <Link href="/basket"><a>장바구니</a></Link>
                </p>
            </div>
            <h1 style={{ margin: '30px'}}>Code-ing</h1>
            <div style={{ textAlign: 'center' }}>
                            <Select
                            style={{
                                float:'left'}}
                                showSearch
                                style={{ width: 100 }}
                                placeholder="카테고리"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                <Option value="강의">강의</Option>
                                <Option value="언어">언어</Option>
                                {/* <Option value="tom">Tom</Option> */}
                            </Select>
                            <Select
                                mode="multiple"
                                style={{ width: "200px" }}
                                placeholder="검색"
                                defaultValue={[]}
                                onChange={handlePeopleChange}
                            >
                                {people}
                            </Select>
                            <Button style={{ marginTop: '20px' }}>검색</Button></div>
        </div>
  </>
    );
  };
  
  export default AboveBar1;
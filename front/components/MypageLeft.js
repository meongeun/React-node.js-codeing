import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {Button, Row, Avatar} from 'antd';

const dummy_user = {
    nickname:'user1',
    prefer_language:['react-native', 'java', 'c/c#'],
}

const MypageLeft = ({ children }) => {
    return (
        <>
            <Row style={{marginTop:'50px'}}>{<Avatar>{dummy_user.nickname[0]}</Avatar>}</Row>
            <Row>{dummy_user.nickname}</Row>
            <Row style={{margin:'40px 20px 40px 20px'}}>
                <Button href='myFavoriteLectures' style={{width:'100%',backgroundColor:'#464646', color:'white', border:"0px", borderRadius:'0', fontSize:"0.9em"}}>
                    즐겨찾기한 강의
                </Button>
                <Button href='myFavoriteSites' style={{width:'100%',backgroundColor:'#464646', color:'white', border:"0px", borderRadius:'0', fontSize:"0.9em"}}>
                    즐겨찾기한 사이트
                </Button>
                <Button href='myreview' style={{width:'100%',backgroundColor:'#464646', color:'white', border:"0px", borderRadius:'0', fontSize:"0.9em"}}>
                    내가 쓴 리뷰
                </Button>
                <Button href='mypost' style={{width:'100%',backgroundColor:'#464646', color:'white', border:"0px", borderRadius:'0', fontSize:"0.9em"}}>
                    내가 쓴 글
                </Button>
                <Button href='mycomment' style={{width:'100%',backgroundColor:'#464646', color:'white', border:"0px", borderRadius:'0', fontSize:"0.9em"}}>
                    내가 쓴 댓글
                </Button>
            </Row>
        </>
    );
  };
  export default MypageLeft;
  
import React, { useEffect, useState, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOAD_MAIN_POSTS_REQUEST, ADD_POST_REQUEST } from '../reducers/post';
import { List, Rate, Modal, Tag, Card, Menu, Button, Select } from 'antd';
import Link from 'next/link';
import LoginForm from '../components/LoginForm';
import UserProfile from '../components/UserProfile';
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

const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts, isAddingPost, postAdded } = useSelector(state => state.post);
  const [text, setText] = useState('예쓰');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
  }, []);
  useEffect(() => {
    if (!me) {
      dispatch({
        type: LOAD_USER_REQUEST,
      });
    }
  }, []);
  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    //새로운 화면으로 넘어가는 것 방지 
    dispatch({
        type: ADD_POST_REQUEST,
        data: {
            text,
        }
    })
}, []);
  const [ModalVisible, setModalVisibleState] = useState(false);

  const ModalHandleCancel = () => {
    console.log('Clicked cancel button');
    setModalVisibleState(
      false);
  };
  const data = [
    { name: 'Udemy', lang: 'English', fee: 'needed', hard: '초보', teacher: 'Jhon' },
    { name: 'CodeAcademy', lang: 'English', fee: 'needed', hard: '초보', teacher: 'no' },
    { name: 'CodeAcademy', lang: 'English', fee: 'needed', hard: '초보', teacher: 'no' },
    { name: 'CodeAcademy', lang: 'English', fee: 'needed', hard: '초보', teacher: 'no' },
    { name: 'CodeAcademy', lang: 'English', fee: 'needed', hard: '초보', teacher: 'no' },
  ];
  const codingTagsFromServer = ['react', 'node.js', 'c++/c', 'r', 'python', 'spring', 'java', 'ruby', 'vue', 'java', 'android', 'swift', 'flutter', 'react native'];
  const siteTagsFromServer = ['Udemy', 'Codeacademy', 'Programers', 'Inflearn', '생활코딩', 'Youtube', 'Cosera', '패스트캠퍼스'];
  const conceptTagsFromServer = ['DeepLearning', 'MachineLearning', 'Algorithmns', 'Database', 'Web', 'App', 'Arduio', 'Raspberrypi'];
  const { CheckableTag } = Tag;
  const [selectedTags, setSelectedTags] = useState([]);
  function handleChange(tag, checked) {
    // const { selectedTags } = selectedTags;
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  }

  return (
    <div>
                <div  style={{float: 'right', marginRight:'10px'}}>
                    <p>
                    <Link href="/profile"style={{marginRight:'10px'}}><a>MyPage</a></Link>  |  장바구니
                    </p>
                </div>
                <h1 style={{ margin: '15px', paddingTop: '30px'}}>Code-ing</h1>
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
                {/* <Menu mode="horizontal">
                    <Menu.Item key="home"><Link href="/"><a>ProgramRank</a></Link></Menu.Item>
                    <Menu.Item key="reviews"><Link href="/reviews"><a>Reviews</a></Link></Menu.Item>

                </Menu> */}
           
    <div>
      {/* <AppLayout> */}
        
          <br />
          
          <div style={{ marginTop: '10px' }}>
            <h3 style={{ marginLeft: '20px' , color:'#142C9A'}}>프로그램 언어별 랭킹 <div style={{ float: 'right', marginRight: '20px' }}>&lt; &gt;</div></h3>
            <Button size='small' type="text" style={{marginLeft:'20px'}}>전체보기</Button>
            <List
              style={{ marginLeft: '5%' }}
              grid={{ gutter: 15, column: 5 }}
              dataSource={data}
              renderItem={(item, index) => (
                <List.Item>
                  <h3>{"0"+(index + 1)}</h3>
                  <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={<img alt="example" src="https://discountagent.co.uk/uploads/stores/156750398412chers%20code.png" />}
                  >
                    <Card.Meta
                      title={
                        <div>Udemy<Rate defaultValue={3}></Rate></div>
                      }
                      description="#flutter #초급 #영어" />
                  </Card>
                </List.Item>
              )}
            />
            <h3 style={{ marginLeft: '20px' , color:'#142C9A'}}>오늘의 추천 컨텐츠 <div style={{ float: 'right', marginRight: '20px' }}>&lt; &gt;</div></h3>
            <Button size='small' type="text" style={{marginLeft:'20px'}}>전체보기</Button>
            <List
              style={{ marginLeft: '5%' }}
              grid={{ gutter: 15, column: 5 }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card
                    hoverable
                    style={{ width: '240' }}
                    cover={<img alt="example" src="https://discountagent.co.uk/uploads/stores/156750398412chers%20code.png" />}
                  >
                    <Card.Meta
                      title={
                        <div>Udemy<Rate defaultValue={3}></Rate></div>
                      }
                      description="#flutter #초급 #영어" />
                  </Card>
                </List.Item>
              )}
            />

          </div>
          <Modal
            title="프로그래밍 필터"
            visible={ModalVisible}
            onOk={onSubmitForm}
            confirmLoading={isAddingPost}
            onCancel={ModalHandleCancel}
          >


            <span style={{ marginRight: 8 }}>프로그램 언어</span>
            <br />
            {codingTagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => handleChange(tag, checked)}
                style={{ marginTop: '10px', borderColor: '#6495ED' }}
              >
                {tag}
              </CheckableTag>
            ))}
            <br />
            <br />
            <span style={{ marginTop: 10, marginRight: 8 }}>프로그램 사이트</span>
            <br />
            {siteTagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => handleChange(tag, checked)}
                style={{ marginTop: '10px', borderColor: '#6495ED' }}
              >
                {tag}
              </CheckableTag>
            ))}
            <br />
            <br />
            <span style={{ marginTop: 10, marginRight: 8 }}>프로그램 주제별</span>
            <br />
            {conceptTagsFromServer.map(tag => (
              <CheckableTag
                key={tag}
                checked={selectedTags.indexOf(tag) > -1}
                onChange={checked => handleChange(tag, checked)}
                style={{ marginTop: '10px', borderColor: '#6495ED' }}
              >
                {tag}
              </CheckableTag>
            ))}


          </Modal>

          <div style={{ textAlign: 'center' }} >
            <img src="https://programmers.co.kr/assets/img-meta-programmers-e00862a7c9acd8ef5164f8c85b3ab0127d083ab59b3a98d7219690bd3570bf35.png" width="80%" height="200">
            </img>
          </div>
       
      {/* </AppLayout> */}
    </div>
  </div>
  );
};

export default Home;

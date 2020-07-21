webpackHotUpdate("static\\development\\pages\\lecturetalks.js",{

/***/ "./pages/lecturetalks.js":
/*!*******************************!*\
  !*** ./pages/lecturetalks.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_LoginForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LoginForm */ "./components/LoginForm.js");
/* harmony import */ var _components_LectureBoardLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LectureBoardLayout */ "./components/LectureBoardLayout.js");
/* harmony import */ var _components_UserProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UserProfile */ "./components/UserProfile.js");
/* harmony import */ var _components_LectureBoardList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/LectureBoardList */ "./components/LectureBoardList.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/lib/index.es.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\KME\\\uAC1C\uBC1C\uBAA8\uC544\uC870\\recoder\\front\\pages\\lecturetalks.js";









var dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    User: {
      id: 1,
      name: '김명은'
    },
    content: '첫 번째 게시글',
    img: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80'
  }]
};
var listData = [];

for (var i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: "ant design part ".concat(i),
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'goCode',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

var IconText = function IconText(_ref) {
  var type = _ref.type,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: type,
    style: {
      marginRight: 8
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), text);
};

var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;
var people = [];

for (var _i = 0; _i < 1000; _i++) {
  people.push(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Option, {
    key: _i.toString(36) + _i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, _i.toString(36) + _i.toString(36) + _i));
}

function handlePeopleChange(value) {
  console.log("selected ".concat(value));
}

function onChange(value) {
  console.log("selected ".concat(value));
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

var Lecturetalks = function Lecturetalks() {
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.user;
  }),
      user = _useSelector.user,
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts,
      imagePaths = _useSelector2.imagePaths;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      action = _useState2[0],
      setActionState = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      likes = _useState4[0],
      setLikesState = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      dislikes = _useState6[0],
      setDislikesState = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState7, 2),
      contentId = _useState8[0],
      setContentIdState = _useState8[1];

  var like = function like() {
    setLikesState(1);
    setDislikesState(0);
    setActionState('liked');
  };

  var dislike = function dislike() {
    setDislikesState(1);
    setLikesState(0);
    setActionState('disliked');
  };

  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    console.log(e.target.value); // console.log(v);

    setCommentFormOpened(function (prev) {
      return !prev;
    });
    console.log(commentFormOpened);
  }, []);
  var actions = [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    key: "comment-basic-like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(action === 'liked' ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeFilled"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["LikeOutlined"], {
    onClick: like
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "comment-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, likes)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    key: " key=\"comment-basic-dislike\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Dislike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(action === 'liked' ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeFilled"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["DislikeOutlined"], {
    onClick: dislike
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "comment-action",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, dislikes)), // <span key="comment-basic-reply-to"><Icon type ="message" key="message" onClick={onToggleComment}/></span>,
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    key: "comment-basic-reply-to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Reply",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(action === 'reply' ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["MessageFilled"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["MessageOutlined"], {
    onClick: function onClick() {
      setContentIdState(v.id);
      console.log(contentId);
    }
  })))];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_LectureBoardLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    lecture: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Lecturetalks);

/***/ })

})
//# sourceMappingURL=lecturetalks.js.f25dbea0387b379414e8.hot-update.js.map
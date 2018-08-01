webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: []\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit,\n            dis = _ref2.dis;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        state.name = data;\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwiYWN0aW9ucyIsIkdFVF9UT0RPIiwiY29tbWl0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJBRERfVE9ETyIsImRpcyIsInBvc3QiLCJtdXRhdGlvbnMiLCJnZXR0ZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFFBQVE7QUFDVkMsVUFBTTtBQURJLENBQWQ7O0FBSUEsSUFBTUMsVUFBVTtBQUNaQyxjQUFVLHdCQUFjO0FBQUEsWUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUNwQkMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLFlBQVYsRUFDQ0MsSUFERCxDQUNNLG9CQUFZO0FBQ2RDLG9CQUFRQyxHQUFSLENBQVlDLFNBQVNDLElBQXJCO0FBQ0FQLG1CQUFPLFVBQVAsRUFBbUJNLFNBQVNDLElBQTVCO0FBQ0gsU0FKRCxFQUtDQyxLQUxELENBS08saUJBQVM7QUFDWkosb0JBQVFDLEdBQVIsQ0FBWUksS0FBWjtBQUNILFNBUEQ7QUFRSCxLQVZXO0FBV1pDLGNBQVUseUJBQWdCSCxJQUFoQixFQUEwQjtBQUFBLFlBQXhCUCxNQUF3QixTQUF4QkEsTUFBd0I7QUFBQSxZQUFoQlcsR0FBZ0IsU0FBaEJBLEdBQWdCOztBQUNoQ1YsUUFBQSw2Q0FBQUEsQ0FBTVcsSUFBTixDQUFXLFlBQVgsRUFBeUJMLElBQXpCLEVBQ0NKLElBREQsQ0FDTSxvQkFBWTtBQUNkSCxtQkFBTyxVQUFQLEVBQW1CTyxJQUFuQjtBQUNILFNBSEQ7QUFJSDtBQWhCVyxDQUFoQjs7QUFtQkEsSUFBTU0sWUFBWTtBQUNkZCxjQUFVLGtCQUFDSCxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDdkJELGNBQU1DLElBQU4sR0FBYUEsSUFBYjtBQUNILEtBSGE7QUFJZGEsY0FBVSxrQkFBQ2QsS0FBRCxFQUFRVyxJQUFSLEVBQWlCO0FBQ3ZCWCxjQUFNQyxJQUFOLEdBQWFVLElBQWI7QUFDSDtBQU5hLENBQWxCOztBQVNBLElBQU1PLFVBQVU7QUFDWmpCLFVBQU07QUFBQSxlQUFTRCxNQUFNQyxJQUFmO0FBQUE7QUFETSxDQUFoQjs7QUFJQSx5REFBZTtBQUNYRCxnQkFEVztBQUVYRSxvQkFGVztBQUdYZSx3QkFIVztBQUlYQztBQUpXLENBQWYiLCJmaWxlIjoiMTQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lOiBbXSxcbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHtjb21taXR9KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBjb21taXQoJ0dFVF9UT0RPJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgQUREX1RPRE86ICh7Y29tbWl0LCBkaXN9LCBkYXRhKSAgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RvZG8vJywgZGF0YSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29tbWl0KCdBRERfVE9ETycsIGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86IChzdGF0ZSwgbmFtZSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gbmFtZVxuICAgIH0sXG4gICAgQUREX1RPRE86IChzdGF0ZSwgZGF0YSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gZGF0YVxuICAgIH1cbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBuYW1lOiBzdGF0ZSA9PiBzdGF0ZS5uYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///144\n");

/***/ })

})
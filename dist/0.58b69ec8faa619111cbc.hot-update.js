webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: [],\n    names: {}\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    GE: GE\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwibmFtZXMiLCJhY3Rpb25zIiwiR0VUX1RPRE8iLCJjb21taXQiLCJheGlvcyIsImdldCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsIkdFIiwibXV0YXRpb25zIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFVBQU0sRUFESTtBQUVWQyxXQUFPO0FBRkcsQ0FBZDs7QUFLQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQWM7QUFBQSxZQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQ3BCQyxRQUFBLDZDQUFBQSxDQUFNQyxHQUFOLENBQVUsWUFBVixFQUNDQyxJQURELENBQ00sb0JBQVk7QUFDZEMsb0JBQVFDLEdBQVIsQ0FBWUMsU0FBU0MsSUFBckI7QUFDQVAsbUJBQU8sVUFBUCxFQUFtQk0sU0FBU0MsSUFBNUI7QUFDSCxTQUpELEVBS0NDLEtBTEQsQ0FLTyxpQkFBUztBQUNaSixvQkFBUUMsR0FBUixDQUFZSSxLQUFaO0FBQ0gsU0FQRDtBQVFILEtBVlc7QUFXWkM7QUFYWSxDQUFoQjs7QUFjQSxJQUFNQyxZQUFZO0FBQ2RaLGNBQVUsa0JBQUNKLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2QkQsY0FBTUMsSUFBTixHQUFhQSxJQUFiO0FBQ0g7QUFIYSxDQUFsQjs7QUFNQSxJQUFNZ0IsVUFBVTtBQUNaaEIsVUFBTTtBQUFBLGVBQVNELE1BQU1DLElBQWY7QUFBQTtBQURNLENBQWhCOztBQUlBLHlEQUFlO0FBQ1hELGdCQURXO0FBRVhHLG9CQUZXO0FBR1hhLHdCQUhXO0FBSVhDO0FBSlcsQ0FBZiIsImZpbGUiOiIxNDQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWU6IFtdLFxuICAgIG5hbWVzOiB7fVxufVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIEdFVF9UT0RPOiAoe2NvbW1pdH0pID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RvZG8vJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIGNvbW1pdCgnR0VUX1RPRE8nLCByZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBHRVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86IChzdGF0ZSwgbmFtZSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gbmFtZVxuICAgIH1cbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBuYW1lOiBzdGF0ZSA9PiBzdGF0ZS5uYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///144\n");

/***/ })

})
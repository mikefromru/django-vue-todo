webpackHotUpdate(0,{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: '',\n    names: {}\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit,\n            dispatch = _ref.dispatch;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state) {}\n};\n\nvar getters = {};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwibmFtZXMiLCJhY3Rpb25zIiwiR0VUX1RPRE8iLCJjb21taXQiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwibXV0YXRpb25zIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFVBQU0sRUFESTtBQUVWQyxXQUFPO0FBRkcsQ0FBZDs7QUFLQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQXdCO0FBQUEsWUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLFlBQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDOUJDLFFBQUEsNkNBQUFBLENBQU1DLEdBQU4sQ0FBVSxZQUFWLEVBQ0NDLElBREQsQ0FDTSxvQkFBWTtBQUNkQyxvQkFBUUMsR0FBUixDQUFZQyxTQUFTQyxJQUFyQjtBQUNILFNBSEQsRUFJQ0MsS0FKRCxDQUlPLGlCQUFTO0FBQ1pKLG9CQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDSCxTQU5EO0FBT0g7QUFUVyxDQUFoQjs7QUFZQSxJQUFNQyxZQUFZO0FBQ2RaLGNBQVUsa0JBQUNKLEtBQUQsRUFBVyxDQUVwQjtBQUhhLENBQWxCOztBQU1BLElBQU1pQixVQUFVLEVBQWhCOztBQUlBLHlEQUFlO0FBQ1hqQixnQkFEVztBQUVYRyxvQkFGVztBQUdYYSx3QkFIVztBQUlYQztBQUpXLENBQWYiLCJmaWxlIjoiMjcxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lOiAnJyxcbiAgICBuYW1lczoge31cbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHtjb21taXQsIGRpc3BhdGNofSkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdG9kby8nKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86IChzdGF0ZSkgPT4ge1xuICAgICAgICBcbiAgICB9XG59XG5cbmNvbnN0IGdldHRlcnMgPSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zLFxuICAgIGdldHRlcnNcbn1cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///271\n");

/***/ })

})
webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: [],\n    newTodo: '',\n    completed: false\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        //state.name = data\n        var new_Todo = {\n            name: data.name,\n            completed: false\n        };\n        state.name.unshift(new_Todo);\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwibmV3VG9kbyIsImNvbXBsZXRlZCIsImFjdGlvbnMiLCJHRVRfVE9ETyIsImNvbW1pdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiQUREX1RPRE8iLCJwb3N0IiwibXV0YXRpb25zIiwibmV3X1RvZG8iLCJ1bnNoaWZ0IiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFVBQU0sRUFESTtBQUVWQyxhQUFTLEVBRkM7QUFHVkMsZUFBVztBQUhELENBQWQ7O0FBTUEsSUFBTUMsVUFBVTtBQUNaQyxjQUFVLHdCQUFjO0FBQUEsWUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUNwQkMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLFlBQVYsRUFDQ0MsSUFERCxDQUNNLG9CQUFZO0FBQ2RDLG9CQUFRQyxHQUFSLENBQVlDLFNBQVNDLElBQXJCO0FBQ0FQLG1CQUFPLFVBQVAsRUFBbUJNLFNBQVNDLElBQTVCO0FBQ0gsU0FKRCxFQUtDQyxLQUxELENBS08saUJBQVM7QUFDWkosb0JBQVFDLEdBQVIsQ0FBWUksS0FBWjtBQUNILFNBUEQ7QUFRSCxLQVZXO0FBV1pDLGNBQVUseUJBQVdILElBQVgsRUFBcUI7QUFBQSxZQUFuQlAsTUFBbUIsU0FBbkJBLE1BQW1COztBQUMzQkMsUUFBQSw2Q0FBQUEsQ0FBTVUsSUFBTixDQUFXLFlBQVgsRUFBeUJKLElBQXpCLEVBQ0NKLElBREQsQ0FDTSxvQkFBWTtBQUNkSCxtQkFBTyxVQUFQLEVBQW1CTyxJQUFuQjtBQUNILFNBSEQsRUFJQ0MsS0FKRCxDQUlPLGlCQUFTO0FBQ1pKLG9CQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDSCxTQU5EO0FBT0g7QUFuQlcsQ0FBaEI7O0FBc0JBLElBQU1HLFlBQVk7QUFDZGIsY0FBVSxrQkFBQ0wsS0FBRCxFQUFRQyxJQUFSLEVBQWlCO0FBQ3ZCRCxjQUFNQyxJQUFOLEdBQWFBLElBQWI7QUFDSCxLQUhhO0FBSWRlLGNBQVUsa0JBQUNoQixLQUFELEVBQVFhLElBQVIsRUFBaUI7QUFDdkI7QUFDQSxZQUFJTSxXQUFXO0FBQ1hsQixrQkFBTVksS0FBS1osSUFEQTtBQUVYRSx1QkFBVztBQUZBLFNBQWY7QUFJQUgsY0FBTUMsSUFBTixDQUFXbUIsT0FBWCxDQUFtQkQsUUFBbkI7QUFDSDtBQVhhLENBQWxCOztBQWNBLElBQU1FLFVBQVU7QUFDWnBCLFVBQU07QUFBQSxlQUFTRCxNQUFNQyxJQUFmO0FBQUE7QUFETSxDQUFoQjs7QUFJQSx5REFBZTtBQUNYRCxnQkFEVztBQUVYSSxvQkFGVztBQUdYYyx3QkFIVztBQUlYRztBQUpXLENBQWYiLCJmaWxlIjoiMTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lOiBbXSxcbiAgICBuZXdUb2RvOiAnJyxcbiAgICBjb21wbGV0ZWQ6IGZhbHNlLFxufVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIEdFVF9UT0RPOiAoe2NvbW1pdH0pID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RvZG8vJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIGNvbW1pdCgnR0VUX1RPRE8nLCByZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBBRERfVE9ETzogKHtjb21taXR9LCBkYXRhKSAgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RvZG8vJywgZGF0YSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29tbWl0KCdBRERfVE9ETycsIGRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHN0YXRlLCBuYW1lKSA9PiB7XG4gICAgICAgIHN0YXRlLm5hbWUgPSBuYW1lXG4gICAgfSxcbiAgICBBRERfVE9ETzogKHN0YXRlLCBkYXRhKSA9PiB7XG4gICAgICAgIC8vc3RhdGUubmFtZSA9IGRhdGFcbiAgICAgICAgbGV0IG5ld19Ub2RvID0ge1xuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5uYW1lLnVuc2hpZnQobmV3X1RvZG8pXG4gICAgfVxufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuICAgIG5hbWU6IHN0YXRlID0+IHN0YXRlLm5hbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zLFxuICAgIGdldHRlcnNcbn1cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///145\n");

/***/ })

})
webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: [],\n    newTodo: '',\n    completed: false\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        var new_Todo = {\n            name: data.name,\n            completed: false\n            //state.name.unshift(new_Todo)\n        };state.name.shift(new_Todo);\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwibmV3VG9kbyIsImNvbXBsZXRlZCIsImFjdGlvbnMiLCJHRVRfVE9ETyIsImNvbW1pdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiQUREX1RPRE8iLCJwb3N0IiwibXV0YXRpb25zIiwibmV3X1RvZG8iLCJzaGlmdCIsImdldHRlcnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUTtBQUNWQyxVQUFNLEVBREk7QUFFVkMsYUFBUyxFQUZDO0FBR1ZDLGVBQVc7QUFIRCxDQUFkOztBQU1BLElBQU1DLFVBQVU7QUFDWkMsY0FBVSx3QkFBYztBQUFBLFlBQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFDcEJDLFFBQUEsNkNBQUFBLENBQU1DLEdBQU4sQ0FBVSxZQUFWLEVBQ0NDLElBREQsQ0FDTSxvQkFBWTtBQUNkQyxvQkFBUUMsR0FBUixDQUFZQyxTQUFTQyxJQUFyQjtBQUNBUCxtQkFBTyxVQUFQLEVBQW1CTSxTQUFTQyxJQUE1QjtBQUNILFNBSkQsRUFLQ0MsS0FMRCxDQUtPLGlCQUFTO0FBQ1pKLG9CQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDSCxTQVBEO0FBUUgsS0FWVztBQVdaQyxjQUFVLHlCQUFXSCxJQUFYLEVBQXFCO0FBQUEsWUFBbkJQLE1BQW1CLFNBQW5CQSxNQUFtQjs7QUFDM0JDLFFBQUEsNkNBQUFBLENBQU1VLElBQU4sQ0FBVyxZQUFYLEVBQXlCSixJQUF6QixFQUNDSixJQURELENBQ00sb0JBQVk7QUFDZEgsbUJBQU8sVUFBUCxFQUFtQk8sSUFBbkI7QUFDSCxTQUhELEVBSUNDLEtBSkQsQ0FJTyxpQkFBUztBQUNaSixvQkFBUUMsR0FBUixDQUFZSSxLQUFaO0FBQ0gsU0FORDtBQU9IO0FBbkJXLENBQWhCOztBQXNCQSxJQUFNRyxZQUFZO0FBQ2RiLGNBQVUsa0JBQUNMLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2QkQsY0FBTUMsSUFBTixHQUFhQSxJQUFiO0FBQ0gsS0FIYTtBQUlkZSxjQUFVLGtCQUFDaEIsS0FBRCxFQUFRYSxJQUFSLEVBQWlCO0FBQ3ZCLFlBQUlNLFdBQVc7QUFDWGxCLGtCQUFNWSxLQUFLWixJQURBO0FBRVhFLHVCQUFXO0FBRWY7QUFKZSxTQUFmLENBS0FILE1BQU1DLElBQU4sQ0FBV21CLEtBQVgsQ0FBaUJELFFBQWpCO0FBQ0g7QUFYYSxDQUFsQjs7QUFjQSxJQUFNRSxVQUFVO0FBQ1pwQixVQUFNO0FBQUEsZUFBU0QsTUFBTUMsSUFBZjtBQUFBO0FBRE0sQ0FBaEI7O0FBSUEseURBQWU7QUFDWEQsZ0JBRFc7QUFFWEksb0JBRlc7QUFHWGMsd0JBSFc7QUFJWEc7QUFKVyxDQUFmIiwiZmlsZSI6IjE0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZTogW10sXG4gICAgbmV3VG9kbzogJycsXG4gICAgY29tcGxldGVkOiBmYWxzZSxcbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHtjb21taXR9KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBjb21taXQoJ0dFVF9UT0RPJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgQUREX1RPRE86ICh7Y29tbWl0fSwgZGF0YSkgID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90b2RvLycsIGRhdGEpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnQUREX1RPRE8nLCBkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86IChzdGF0ZSwgbmFtZSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gbmFtZVxuICAgIH0sXG4gICAgQUREX1RPRE86IChzdGF0ZSwgZGF0YSkgPT4ge1xuICAgICAgICBsZXQgbmV3X1RvZG8gPSB7XG4gICAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9XG4gICAgICAgIC8vc3RhdGUubmFtZS51bnNoaWZ0KG5ld19Ub2RvKVxuICAgICAgICBzdGF0ZS5uYW1lLnNoaWZ0KG5ld19Ub2RvKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBuYW1lOiBzdGF0ZSA9PiBzdGF0ZS5uYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///145\n");

/***/ })

})
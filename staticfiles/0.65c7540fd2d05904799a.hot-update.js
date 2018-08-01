webpackHotUpdate(0,{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: [],\n    names: {}\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit,\n            dispatch = _ref.dispatch;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwibmFtZXMiLCJhY3Rpb25zIiwiR0VUX1RPRE8iLCJjb21taXQiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwibXV0YXRpb25zIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFVBQU0sRUFESTtBQUVWQyxXQUFPO0FBRkcsQ0FBZDs7QUFLQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQXdCO0FBQUEsWUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLFlBQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDOUJDLFFBQUEsNkNBQUFBLENBQU1DLEdBQU4sQ0FBVSxZQUFWLEVBQ0NDLElBREQsQ0FDTSxvQkFBWTtBQUNkQyxvQkFBUUMsR0FBUixDQUFZQyxTQUFTQyxJQUFyQjtBQUNBUixtQkFBTyxVQUFQLEVBQW1CTyxTQUFTQyxJQUE1QjtBQUNILFNBSkQsRUFLQ0MsS0FMRCxDQUtPLGlCQUFTO0FBQ1pKLG9CQUFRQyxHQUFSLENBQVlJLEtBQVo7QUFDSCxTQVBEO0FBUUg7QUFWVyxDQUFoQjs7QUFhQSxJQUFNQyxZQUFZO0FBQ2RaLGNBQVUsa0JBQUNKLEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2QkQsY0FBTUMsSUFBTixHQUFhQSxJQUFiO0FBQ0g7QUFIYSxDQUFsQjs7QUFNQSxJQUFNZ0IsVUFBVTtBQUNaaEIsVUFBTTtBQUFBLGVBQVNELE1BQU1DLElBQWY7QUFBQTtBQURNLENBQWhCOztBQUlBLHlEQUFlO0FBQ1hELGdCQURXO0FBRVhHLG9CQUZXO0FBR1hhLHdCQUhXO0FBSVhDO0FBSlcsQ0FBZiIsImZpbGUiOiIyNzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IHN0YXRlID0ge1xuICAgIG5hbWU6IFtdLFxuICAgIG5hbWVzOiB7fVxufVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIEdFVF9UT0RPOiAoe2NvbW1pdCwgZGlzcGF0Y2h9KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBjb21taXQoJ0dFVF9UT0RPJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIEdFVF9UT0RPOiAoc3RhdGUsIG5hbWUpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZSA9IG5hbWVcbiAgICB9XG59XG5cbmNvbnN0IGdldHRlcnMgPSB7XG4gICAgbmFtZTogc3RhdGUgPT4gc3RhdGUubmFtZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGUsXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnMsXG4gICAgZ2V0dGVyc1xufVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL21vZHVsZXMvdG9kby5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///271\n");

/***/ })

})
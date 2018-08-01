webpackHotUpdate(0,{

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: []\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        state.name = data;\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwiYWN0aW9ucyIsIkdFVF9UT0RPIiwiY29tbWl0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJBRERfVE9ETyIsInBvc3QiLCJtdXRhdGlvbnMiLCJnZXR0ZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFFBQVE7QUFDVkMsVUFBTTtBQURJLENBQWQ7O0FBSUEsSUFBTUMsVUFBVTtBQUNaQyxjQUFVLHdCQUFjO0FBQUEsWUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUNwQkMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLFlBQVYsRUFDQ0MsSUFERCxDQUNNLG9CQUFZO0FBQ2RDLG9CQUFRQyxHQUFSLENBQVlDLFNBQVNDLElBQXJCO0FBQ0FQLG1CQUFPLFVBQVAsRUFBbUJNLFNBQVNDLElBQTVCO0FBQ0gsU0FKRCxFQUtDQyxLQUxELENBS08saUJBQVM7QUFDWkosb0JBQVFDLEdBQVIsQ0FBWUksS0FBWjtBQUNILFNBUEQ7QUFRSCxLQVZXO0FBV1pDLGNBQVUseUJBQVdILElBQVgsRUFBcUI7QUFBQSxZQUFuQlAsTUFBbUIsU0FBbkJBLE1BQW1COztBQUMzQkMsUUFBQSw2Q0FBQUEsQ0FBTVUsSUFBTixDQUFXLFlBQVgsRUFBeUJKLElBQXpCLEVBQ0NKLElBREQsQ0FDTSxvQkFBWTtBQUNkSCxtQkFBTyxVQUFQLEVBQW1CTyxJQUFuQjtBQUNILFNBSEQ7QUFJSDtBQWhCVyxDQUFoQjs7QUFtQkEsSUFBTUssWUFBWTtBQUNkYixjQUFVLGtCQUFDSCxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDdkJELGNBQU1DLElBQU4sR0FBYUEsSUFBYjtBQUNILEtBSGE7QUFJZGEsY0FBVSxrQkFBQ2QsS0FBRCxFQUFRVyxJQUFSLEVBQWlCO0FBQ3ZCWCxjQUFNQyxJQUFOLEdBQWFVLElBQWI7QUFDSDtBQU5hLENBQWxCOztBQVNBLElBQU1NLFVBQVU7QUFDWmhCLFVBQU07QUFBQSxlQUFTRCxNQUFNQyxJQUFmO0FBQUE7QUFETSxDQUFoQjs7QUFJQSx5REFBZTtBQUNYRCxnQkFEVztBQUVYRSxvQkFGVztBQUdYYyx3QkFIVztBQUlYQztBQUpXLENBQWYiLCJmaWxlIjoiMTQ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lOiBbXSxcbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHtjb21taXR9KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICBjb21taXQoJ0dFVF9UT0RPJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgQUREX1RPRE86ICh7Y29tbWl0fSwgZGF0YSkgID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90b2RvLycsIGRhdGEpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnQUREX1RPRE8nLCBkYXRhKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuY29uc3QgbXV0YXRpb25zID0ge1xuICAgIEdFVF9UT0RPOiAoc3RhdGUsIG5hbWUpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZSA9IG5hbWVcbiAgICB9LFxuICAgIEFERF9UT0RPOiAoc3RhdGUsIGRhdGEpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZSA9IGRhdGFcbiAgICB9XG59XG5cbmNvbnN0IGdldHRlcnMgPSB7XG4gICAgbmFtZTogc3RhdGUgPT4gc3RhdGUubmFtZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGUsXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnMsXG4gICAgZ2V0dGVyc1xufVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL21vZHVsZXMvdG9kby5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///144\n");

/***/ })

})
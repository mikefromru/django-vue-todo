webpackHotUpdate(0,{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: '',\n    names: {}\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit,\n            dispatch = _ref.dispatch;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            console.log(response.data);\n            commit('GET_TODO');\n        }).catch(function (error) {\n            console.log(error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state) {\n        state.name = name;\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwibmFtZXMiLCJhY3Rpb25zIiwiR0VUX1RPRE8iLCJjb21taXQiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwibXV0YXRpb25zIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFVBQU0sRUFESTtBQUVWQyxXQUFPO0FBRkcsQ0FBZDs7QUFLQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQXdCO0FBQUEsWUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjtBQUFBLFlBQWRDLFFBQWMsUUFBZEEsUUFBYzs7QUFDOUJDLFFBQUEsNkNBQUFBLENBQU1DLEdBQU4sQ0FBVSxZQUFWLEVBQ0NDLElBREQsQ0FDTSxvQkFBWTtBQUNkQyxvQkFBUUMsR0FBUixDQUFZQyxTQUFTQyxJQUFyQjtBQUNBUixtQkFBTyxVQUFQO0FBQ0gsU0FKRCxFQUtDUyxLQUxELENBS08saUJBQVM7QUFDWkosb0JBQVFDLEdBQVIsQ0FBWUksS0FBWjtBQUNILFNBUEQ7QUFRSDtBQVZXLENBQWhCOztBQWFBLElBQU1DLFlBQVk7QUFDZFosY0FBVSxrQkFBQ0osS0FBRCxFQUFXO0FBQ2pCQSxjQUFNQyxJQUFOLEdBQWFBLElBQWI7QUFDSDtBQUhhLENBQWxCOztBQU1BLElBQU1nQixVQUFVO0FBQ1poQixVQUFNO0FBQUEsZUFBU0QsTUFBTUMsSUFBZjtBQUFBO0FBRE0sQ0FBaEI7O0FBSUEseURBQWU7QUFDWEQsZ0JBRFc7QUFFWEcsb0JBRlc7QUFHWGEsd0JBSFc7QUFJWEM7QUFKVyxDQUFmIiwiZmlsZSI6IjI3MS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZTogJycsXG4gICAgbmFtZXM6IHt9XG59XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86ICh7Y29tbWl0LCBkaXNwYXRjaH0pID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RvZG8vJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgIGNvbW1pdCgnR0VUX1RPRE8nKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86IChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gbmFtZVxuICAgIH1cbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBuYW1lOiBzdGF0ZSA9PiBzdGF0ZS5uYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///271\n");

/***/ })

})
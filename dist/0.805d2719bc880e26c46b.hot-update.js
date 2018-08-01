webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: []\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    }\n};\n\nvar mutations = {\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        state.name.push(data);\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwiYWN0aW9ucyIsIkdFVF9UT0RPIiwiY29tbWl0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJBRERfVE9ETyIsInBvc3QiLCJtdXRhdGlvbnMiLCJwdXNoIiwiZ2V0dGVycyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRO0FBQ1ZDLFVBQU07QUFESSxDQUFkOztBQUlBLElBQU1DLFVBQVU7QUFDWkMsY0FBVSx3QkFBYztBQUFBLFlBQVpDLE1BQVksUUFBWkEsTUFBWTs7QUFDcEJDLFFBQUEsNkNBQUFBLENBQU1DLEdBQU4sQ0FBVSxZQUFWLEVBQ0NDLElBREQsQ0FDTSxvQkFBWTtBQUNkSCxtQkFBTyxVQUFQLEVBQW1CSSxTQUFTQyxJQUE1QjtBQUNILFNBSEQsRUFJQ0MsS0FKRCxDQUlPLGlCQUFTO0FBQ1pDLG9CQUFRQyxHQUFSLENBQVlDLEtBQVo7QUFDSCxTQU5EO0FBT0gsS0FUVztBQVVaQyxjQUFVLHlCQUFXTCxJQUFYLEVBQXFCO0FBQUEsWUFBbkJMLE1BQW1CLFNBQW5CQSxNQUFtQjs7QUFDM0JDLFFBQUEsNkNBQUFBLENBQU1VLElBQU4sQ0FBVyxZQUFYLEVBQXlCTixJQUF6QixFQUNDRixJQURELENBQ00sb0JBQVk7QUFDZEgsbUJBQU8sVUFBUCxFQUFtQkssSUFBbkI7QUFDSCxTQUhELEVBSUNDLEtBSkQsQ0FJTyxpQkFBUztBQUNaQyxvQkFBUUMsR0FBUixDQUFZQyxLQUFaO0FBQ0gsU0FORDtBQU9IO0FBbEJXLENBQWhCOztBQXFCQSxJQUFNRyxZQUFZO0FBQ2RiLGNBQVUsa0JBQUNILEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2QkQsY0FBTUMsSUFBTixHQUFhQSxJQUFiO0FBQ0gsS0FIYTtBQUlkYSxjQUFVLGtCQUFDZCxLQUFELEVBQVFTLElBQVIsRUFBaUI7QUFDdkJULGNBQU1DLElBQU4sQ0FBV2dCLElBQVgsQ0FBZ0JSLElBQWhCO0FBQ0g7QUFOYSxDQUFsQjs7QUFTQSxJQUFNUyxVQUFVO0FBQ1pqQixVQUFNO0FBQUEsZUFBU0QsTUFBTUMsSUFBZjtBQUFBO0FBRE0sQ0FBaEI7O0FBSUEseURBQWU7QUFDWEQsZ0JBRFc7QUFFWEUsb0JBRlc7QUFHWGMsd0JBSFc7QUFJWEU7QUFKVyxDQUFmIiwiZmlsZSI6IjE0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZTogW10sXG59XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86ICh7Y29tbWl0fSkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdG9kby8nKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0dFVF9UT0RPJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgQUREX1RPRE86ICh7Y29tbWl0fSwgZGF0YSkgID0+IHtcbiAgICAgICAgYXhpb3MucG9zdCgnL2FwaS90b2RvLycsIGRhdGEpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnQUREX1RPRE8nLCBkYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86IChzdGF0ZSwgbmFtZSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gbmFtZVxuICAgIH0sXG4gICAgQUREX1RPRE86IChzdGF0ZSwgZGF0YSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lLnB1c2goZGF0YSlcbiAgICB9XG59XG5cbmNvbnN0IGdldHRlcnMgPSB7XG4gICAgbmFtZTogc3RhdGUgPT4gc3RhdGUubmFtZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhdGUsXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnMsXG4gICAgZ2V0dGVyc1xufVxuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlL21vZHVsZXMvdG9kby5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///145\n");

/***/ })

})
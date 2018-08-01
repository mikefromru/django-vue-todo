webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: []\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    DELETE_ONE_TODO: function DELETE_ONE_TODO(_ref3, data) {\n        var commit = _ref3.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('/api/todo/' + data + '/').then(function (response) {\n            commit('DELETE_ONE_TODO', data);\n        });\n    }\n};\n\nvar mutations = {\n    DELETE_ONE_TODO: function DELETE_ONE_TODO(state, data) {\n        state.name = state.name.filter(function (name) {\n            return name.id != data;\n        });\n    },\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        state.name.push(data);\n        console.log(state.name);\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwiYWN0aW9ucyIsIkdFVF9UT0RPIiwiY29tbWl0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJBRERfVE9ETyIsInBvc3QiLCJERUxFVEVfT05FX1RPRE8iLCJkZWxldGUiLCJtdXRhdGlvbnMiLCJmaWx0ZXIiLCJpZCIsInB1c2giLCJnZXR0ZXJzIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLFFBQVE7QUFDVkMsVUFBTTtBQURJLENBQWQ7O0FBSUEsSUFBTUMsVUFBVTtBQUNaQyxjQUFVLHdCQUFjO0FBQUEsWUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUNwQkMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLFlBQVYsRUFDQ0MsSUFERCxDQUNNLG9CQUFZO0FBQ2RILG1CQUFPLFVBQVAsRUFBbUJJLFNBQVNDLElBQTVCO0FBQ0gsU0FIRCxFQUlDQyxLQUpELENBSU8saUJBQVM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNILFNBTkQ7QUFPSCxLQVRXO0FBVVpDLGNBQVUseUJBQVdMLElBQVgsRUFBcUI7QUFBQSxZQUFuQkwsTUFBbUIsU0FBbkJBLE1BQW1COztBQUMzQixlQUFPLDZDQUFBQyxDQUFNVSxJQUFOLENBQVcsWUFBWCxFQUF5Qk4sSUFBekIsRUFDTkYsSUFETSxDQUNELG9CQUFZO0FBQ2RILG1CQUFPLFVBQVAsRUFBbUJLLElBQW5CO0FBQ0gsU0FITSxFQUlOQyxLQUpNLENBSUEsaUJBQVM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNILFNBTk0sQ0FBUDtBQU9ILEtBbEJXO0FBbUJaRyxxQkFBaUIsZ0NBQVdQLElBQVgsRUFBb0I7QUFBQSxZQUFsQkwsTUFBa0IsU0FBbEJBLE1BQWtCOztBQUNqQ0MsUUFBQSw2Q0FBQUEsQ0FBTVksTUFBTixDQUFhLGVBQWVSLElBQWYsR0FBc0IsR0FBbkMsRUFDQ0YsSUFERCxDQUNNLG9CQUFZO0FBQ2RILG1CQUFPLGlCQUFQLEVBQTBCSyxJQUExQjtBQUNILFNBSEQ7QUFJSDtBQXhCVyxDQUFoQjs7QUEyQkEsSUFBTVMsWUFBWTtBQUNkRixxQkFBaUIseUJBQUNoQixLQUFELEVBQVFTLElBQVIsRUFBaUI7QUFDOUJULGNBQU1DLElBQU4sR0FBYUQsTUFBTUMsSUFBTixDQUFXa0IsTUFBWCxDQUFrQjtBQUFBLG1CQUFRbEIsS0FBS21CLEVBQUwsSUFBV1gsSUFBbkI7QUFBQSxTQUFsQixDQUFiO0FBQ0gsS0FIYTtBQUlkTixjQUFVLGtCQUFDSCxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDdkJELGNBQU1DLElBQU4sR0FBYUEsSUFBYjtBQUNILEtBTmE7QUFPZGEsY0FBVSxrQkFBQ2QsS0FBRCxFQUFRUyxJQUFSLEVBQWlCO0FBQ3ZCVCxjQUFNQyxJQUFOLENBQVdvQixJQUFYLENBQWdCWixJQUFoQjtBQUNBRSxnQkFBUUMsR0FBUixDQUFZWixNQUFNQyxJQUFsQjtBQUNIO0FBVmEsQ0FBbEI7O0FBYUEsSUFBTXFCLFVBQVU7QUFDWnJCLFVBQU07QUFBQSxlQUFTRCxNQUFNQyxJQUFmO0FBQUE7QUFETSxDQUFoQjs7QUFJQSx5REFBZTtBQUNYRCxnQkFEVztBQUVYRSxvQkFGVztBQUdYZ0Isd0JBSFc7QUFJWEk7QUFKVyxDQUFmIiwiZmlsZSI6IjE0NS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RhdGUgPSB7XG4gICAgbmFtZTogW10sXG59XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gICAgR0VUX1RPRE86ICh7Y29tbWl0fSkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvdG9kby8nKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0dFVF9UT0RPJywgcmVzcG9uc2UuZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgQUREX1RPRE86ICh7Y29tbWl0fSwgZGF0YSkgID0+IHtcbiAgICAgICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvdG9kby8nLCBkYXRhKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0FERF9UT0RPJywgZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgREVMRVRFX09ORV9UT0RPOiAoe2NvbW1pdH0sIGRhdGEpID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL3RvZG8vJyArIGRhdGEgKyAnLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnREVMRVRFX09ORV9UT0RPJywgZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBERUxFVEVfT05FX1RPRE86IChzdGF0ZSwgZGF0YSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gc3RhdGUubmFtZS5maWx0ZXIobmFtZSA9PiBuYW1lLmlkICE9IGRhdGEpICBcbiAgICB9LFxuICAgIEdFVF9UT0RPOiAoc3RhdGUsIG5hbWUpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZSA9IG5hbWVcbiAgICB9LFxuICAgIEFERF9UT0RPOiAoc3RhdGUsIGRhdGEpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZS5wdXNoKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLm5hbWUpXG4gICAgfVxufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuICAgIG5hbWU6IHN0YXRlID0+IHN0YXRlLm5hbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zLFxuICAgIGdldHRlcnNcbn1cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///145\n");

/***/ })

})
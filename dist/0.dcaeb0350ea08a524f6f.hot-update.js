webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: []\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        return new Promise(function (resolve, reject) {});\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n            commit('ADD_TODO', data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    DELETE_ONE_TODO: function DELETE_ONE_TODO(_ref3, data) {\n        var commit = _ref3.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('/api/todo/' + data + '/').then(function (response) {\n            commit('DELETE_ONE_TODO', data);\n        });\n    }\n};\n\nvar mutations = {\n    DELETE_ONE_TODO: function DELETE_ONE_TODO(state, data) {\n        state.name = state.name.filter(function (name) {\n            return name.id != data;\n        });\n    },\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        state.name.push(data);\n        console.log(state.name);\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwiYWN0aW9ucyIsIkdFVF9UT0RPIiwiY29tbWl0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJBRERfVE9ETyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicG9zdCIsIkRFTEVURV9PTkVfVE9ETyIsImRlbGV0ZSIsIm11dGF0aW9ucyIsImZpbHRlciIsImlkIiwicHVzaCIsImdldHRlcnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUTtBQUNWQyxVQUFNO0FBREksQ0FBZDs7QUFJQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQWM7QUFBQSxZQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQ3BCQyxRQUFBLDZDQUFBQSxDQUFNQyxHQUFOLENBQVUsWUFBVixFQUNDQyxJQURELENBQ00sb0JBQVk7QUFDZEgsbUJBQU8sVUFBUCxFQUFtQkksU0FBU0MsSUFBNUI7QUFDSCxTQUhELEVBSUNDLEtBSkQsQ0FJTyxpQkFBUztBQUNaQyxvQkFBUUMsR0FBUixDQUFZQyxLQUFaO0FBQ0gsU0FORDtBQU9ILEtBVFc7QUFVWkMsY0FBVSx5QkFBV0wsSUFBWCxFQUFxQjtBQUFBLFlBQW5CTCxNQUFtQixTQUFuQkEsTUFBbUI7O0FBQzNCLGVBQU8sSUFBSVcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQixDQUV2QyxDQUZNLENBQVA7QUFHQVosUUFBQSw2Q0FBQUEsQ0FBTWEsSUFBTixDQUFXLFlBQVgsRUFBeUJULElBQXpCLEVBQ0NGLElBREQsQ0FDTSxvQkFBWTtBQUNkSCxtQkFBTyxVQUFQLEVBQW1CSyxJQUFuQjtBQUNILFNBSEQsRUFJQ0MsS0FKRCxDQUlPLGlCQUFTO0FBQ1pDLG9CQUFRQyxHQUFSLENBQVlDLEtBQVo7QUFDSCxTQU5EO0FBT0gsS0FyQlc7QUFzQlpNLHFCQUFpQixnQ0FBV1YsSUFBWCxFQUFvQjtBQUFBLFlBQWxCTCxNQUFrQixTQUFsQkEsTUFBa0I7O0FBQ2pDQyxRQUFBLDZDQUFBQSxDQUFNZSxNQUFOLENBQWEsZUFBZVgsSUFBZixHQUFzQixHQUFuQyxFQUNDRixJQURELENBQ00sb0JBQVk7QUFDZEgsbUJBQU8saUJBQVAsRUFBMEJLLElBQTFCO0FBQ0gsU0FIRDtBQUlIO0FBM0JXLENBQWhCOztBQThCQSxJQUFNWSxZQUFZO0FBQ2RGLHFCQUFpQix5QkFBQ25CLEtBQUQsRUFBUVMsSUFBUixFQUFpQjtBQUM5QlQsY0FBTUMsSUFBTixHQUFhRCxNQUFNQyxJQUFOLENBQVdxQixNQUFYLENBQWtCO0FBQUEsbUJBQVFyQixLQUFLc0IsRUFBTCxJQUFXZCxJQUFuQjtBQUFBLFNBQWxCLENBQWI7QUFDSCxLQUhhO0FBSWROLGNBQVUsa0JBQUNILEtBQUQsRUFBUUMsSUFBUixFQUFpQjtBQUN2QkQsY0FBTUMsSUFBTixHQUFhQSxJQUFiO0FBQ0gsS0FOYTtBQU9kYSxjQUFVLGtCQUFDZCxLQUFELEVBQVFTLElBQVIsRUFBaUI7QUFDdkJULGNBQU1DLElBQU4sQ0FBV3VCLElBQVgsQ0FBZ0JmLElBQWhCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlaLE1BQU1DLElBQWxCO0FBQ0g7QUFWYSxDQUFsQjs7QUFhQSxJQUFNd0IsVUFBVTtBQUNaeEIsVUFBTTtBQUFBLGVBQVNELE1BQU1DLElBQWY7QUFBQTtBQURNLENBQWhCOztBQUlBLHlEQUFlO0FBQ1hELGdCQURXO0FBRVhFLG9CQUZXO0FBR1htQix3QkFIVztBQUlYSTtBQUpXLENBQWYiLCJmaWxlIjoiMTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lOiBbXSxcbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHtjb21taXR9KSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnR0VUX1RPRE8nLCByZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBBRERfVE9ETzogKHtjb21taXR9LCBkYXRhKSAgPT4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvdG9kby8nLCBkYXRhKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0FERF9UT0RPJywgZGF0YSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgREVMRVRFX09ORV9UT0RPOiAoe2NvbW1pdH0sIGRhdGEpID0+IHtcbiAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL3RvZG8vJyArIGRhdGEgKyAnLycpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbW1pdCgnREVMRVRFX09ORV9UT0RPJywgZGF0YSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBERUxFVEVfT05FX1RPRE86IChzdGF0ZSwgZGF0YSkgPT4ge1xuICAgICAgICBzdGF0ZS5uYW1lID0gc3RhdGUubmFtZS5maWx0ZXIobmFtZSA9PiBuYW1lLmlkICE9IGRhdGEpICBcbiAgICB9LFxuICAgIEdFVF9UT0RPOiAoc3RhdGUsIG5hbWUpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZSA9IG5hbWVcbiAgICB9LFxuICAgIEFERF9UT0RPOiAoc3RhdGUsIGRhdGEpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZS5wdXNoKGRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlLm5hbWUpXG4gICAgfVxufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuICAgIG5hbWU6IHN0YXRlID0+IHN0YXRlLm5hbWVcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXRlLFxuICAgIGFjdGlvbnMsXG4gICAgbXV0YXRpb25zLFxuICAgIGdldHRlcnNcbn1cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///145\n");

/***/ })

})
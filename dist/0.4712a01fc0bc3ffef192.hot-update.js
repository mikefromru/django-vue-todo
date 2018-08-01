webpackHotUpdate(0,{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar state = {\n    name: []\n};\n\nvar actions = {\n    GET_TODO: function GET_TODO(_ref) {\n        var commit = _ref.commit;\n\n        return new Promise(function (resolve, reject) {});\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get('/api/todo/').then(function (response) {\n            commit('GET_TODO', response.data);\n        }).catch(function (error) {\n            console.log(error);\n        });\n    },\n    ADD_TODO: function ADD_TODO(_ref2, data) {\n        var commit = _ref2.commit;\n\n        return new Promise(function (resolve, reject) {\n            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/todo/', data).then(function (response) {\n                commit('ADD_TODO', data);\n                resolve(response);\n            }).catch(function (error) {\n                console.log(error);\n                reject(error);\n            });\n        });\n    },\n    DELETE_ONE_TODO: function DELETE_ONE_TODO(_ref3, data) {\n        var commit = _ref3.commit;\n\n        __WEBPACK_IMPORTED_MODULE_0_axios___default.a.delete('/api/todo/' + data + '/').then(function (response) {\n            commit('DELETE_ONE_TODO', data);\n        });\n    }\n};\n\nvar mutations = {\n    DELETE_ONE_TODO: function DELETE_ONE_TODO(state, data) {\n        state.name = state.name.filter(function (name) {\n            return name.id != data;\n        });\n    },\n    GET_TODO: function GET_TODO(state, name) {\n        state.name = name;\n    },\n    ADD_TODO: function ADD_TODO(state, data) {\n        state.name.push(data);\n        console.log(state.name);\n    }\n};\n\nvar getters = {\n    name: function name(state) {\n        return state.name;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    state: state,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzP2UyNDMiXSwibmFtZXMiOlsic3RhdGUiLCJuYW1lIiwiYWN0aW9ucyIsIkdFVF9UT0RPIiwiY29tbWl0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkFERF9UT0RPIiwicG9zdCIsIkRFTEVURV9PTkVfVE9ETyIsImRlbGV0ZSIsIm11dGF0aW9ucyIsImZpbHRlciIsImlkIiwicHVzaCIsImdldHRlcnMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUTtBQUNWQyxVQUFNO0FBREksQ0FBZDs7QUFJQSxJQUFNQyxVQUFVO0FBQ1pDLGNBQVUsd0JBQWM7QUFBQSxZQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQ3BCLGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQixDQUV2QyxDQUZNLENBQVA7QUFHQUMsUUFBQSw2Q0FBQUEsQ0FBTUMsR0FBTixDQUFVLFlBQVYsRUFDQ0MsSUFERCxDQUNNLG9CQUFZO0FBQ2ROLG1CQUFPLFVBQVAsRUFBbUJPLFNBQVNDLElBQTVCO0FBQ0gsU0FIRCxFQUlDQyxLQUpELENBSU8saUJBQVM7QUFDWkMsb0JBQVFDLEdBQVIsQ0FBWUMsS0FBWjtBQUNILFNBTkQ7QUFPSCxLQVpXO0FBYVpDLGNBQVUseUJBQVdMLElBQVgsRUFBcUI7QUFBQSxZQUFuQlIsTUFBbUIsU0FBbkJBLE1BQW1COztBQUMzQixlQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLFlBQUEsNkNBQUFBLENBQU1VLElBQU4sQ0FBVyxZQUFYLEVBQXlCTixJQUF6QixFQUNDRixJQURELENBQ00sb0JBQVk7QUFDZE4sdUJBQU8sVUFBUCxFQUFtQlEsSUFBbkI7QUFDQU4sd0JBQVFLLFFBQVI7QUFDSCxhQUpELEVBS0NFLEtBTEQsQ0FLTyxpQkFBUztBQUNaQyx3QkFBUUMsR0FBUixDQUFZQyxLQUFaO0FBQ0FULHVCQUFPUyxLQUFQO0FBQ0gsYUFSRDtBQVNILFNBVk0sQ0FBUDtBQVdILEtBekJXO0FBMEJaRyxxQkFBaUIsZ0NBQVdQLElBQVgsRUFBb0I7QUFBQSxZQUFsQlIsTUFBa0IsU0FBbEJBLE1BQWtCOztBQUNqQ0ksUUFBQSw2Q0FBQUEsQ0FBTVksTUFBTixDQUFhLGVBQWVSLElBQWYsR0FBc0IsR0FBbkMsRUFDQ0YsSUFERCxDQUNNLG9CQUFZO0FBQ2ROLG1CQUFPLGlCQUFQLEVBQTBCUSxJQUExQjtBQUNILFNBSEQ7QUFJSDtBQS9CVyxDQUFoQjs7QUFrQ0EsSUFBTVMsWUFBWTtBQUNkRixxQkFBaUIseUJBQUNuQixLQUFELEVBQVFZLElBQVIsRUFBaUI7QUFDOUJaLGNBQU1DLElBQU4sR0FBYUQsTUFBTUMsSUFBTixDQUFXcUIsTUFBWCxDQUFrQjtBQUFBLG1CQUFRckIsS0FBS3NCLEVBQUwsSUFBV1gsSUFBbkI7QUFBQSxTQUFsQixDQUFiO0FBQ0gsS0FIYTtBQUlkVCxjQUFVLGtCQUFDSCxLQUFELEVBQVFDLElBQVIsRUFBaUI7QUFDdkJELGNBQU1DLElBQU4sR0FBYUEsSUFBYjtBQUNILEtBTmE7QUFPZGdCLGNBQVUsa0JBQUNqQixLQUFELEVBQVFZLElBQVIsRUFBaUI7QUFDdkJaLGNBQU1DLElBQU4sQ0FBV3VCLElBQVgsQ0FBZ0JaLElBQWhCO0FBQ0FFLGdCQUFRQyxHQUFSLENBQVlmLE1BQU1DLElBQWxCO0FBQ0g7QUFWYSxDQUFsQjs7QUFhQSxJQUFNd0IsVUFBVTtBQUNaeEIsVUFBTTtBQUFBLGVBQVNELE1BQU1DLElBQWY7QUFBQTtBQURNLENBQWhCOztBQUlBLHlEQUFlO0FBQ1hELGdCQURXO0FBRVhFLG9CQUZXO0FBR1htQix3QkFIVztBQUlYSTtBQUpXLENBQWYiLCJmaWxlIjoiMTQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBzdGF0ZSA9IHtcbiAgICBuYW1lOiBbXSxcbn1cblxuY29uc3QgYWN0aW9ucyA9IHtcbiAgICBHRVRfVE9ETzogKHtjb21taXR9KSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL3RvZG8vJylcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29tbWl0KCdHRVRfVE9ETycsIHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIEFERF9UT0RPOiAoe2NvbW1pdH0sIGRhdGEpICA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3RvZG8vJywgZGF0YSlcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQoJ0FERF9UT0RPJywgZGF0YSlcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIERFTEVURV9PTkVfVE9ETzogKHtjb21taXR9LCBkYXRhKSA9PiB7XG4gICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS90b2RvLycgKyBkYXRhICsgJy8nKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0RFTEVURV9PTkVfVE9ETycsIGRhdGEpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBtdXRhdGlvbnMgPSB7XG4gICAgREVMRVRFX09ORV9UT0RPOiAoc3RhdGUsIGRhdGEpID0+IHtcbiAgICAgICAgc3RhdGUubmFtZSA9IHN0YXRlLm5hbWUuZmlsdGVyKG5hbWUgPT4gbmFtZS5pZCAhPSBkYXRhKSAgXG4gICAgfSxcbiAgICBHRVRfVE9ETzogKHN0YXRlLCBuYW1lKSA9PiB7XG4gICAgICAgIHN0YXRlLm5hbWUgPSBuYW1lXG4gICAgfSxcbiAgICBBRERfVE9ETzogKHN0YXRlLCBkYXRhKSA9PiB7XG4gICAgICAgIHN0YXRlLm5hbWUucHVzaChkYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZS5uYW1lKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0dGVycyA9IHtcbiAgICBuYW1lOiBzdGF0ZSA9PiBzdGF0ZS5uYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGF0ZSxcbiAgICBhY3Rpb25zLFxuICAgIG11dGF0aW9ucyxcbiAgICBnZXR0ZXJzXG59XG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc3RvcmUvbW9kdWxlcy90b2RvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///145\n");

/***/ })

})
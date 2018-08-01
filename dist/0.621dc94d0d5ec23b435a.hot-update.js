webpackHotUpdate(0,{

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(52);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n\n\nvar store = {\n    token: localStorage.getItem('user-token') || '',\n    status: null,\n    profile: {}\n};\n\nvar actions = {\n    AUTH_SOCIAL_FACEBOOK: function AUTH_SOCIAL_FACEBOOK(_ref, data) {\n        var commit = _ref.commit,\n            dispatch = _ref.dispatch;\n\n        return new Promise(function (resolve, reject) {\n            commit('AUTH_REQUEST');\n            __WEBPACK_IMPORTED_MODULE_0_axios___default.a.post('/api/rest-auth/facebook/', data).then(function (response) {\n                var profile = response.data.user;\n                var token = response.data.token;\n                localStorage.setItem('user-token', token);\n                commit('AUTH_SUCCESS', token);\n                commit('GET_PROFILE', profile);\n                resolve(response);\n            }).catch(function (error) {\n                commit('AUTH_ERROR');\n                localStorage.clear();\n                reject(error);\n            });\n        });\n    }\n};\n\nvar mutations = {\n    AUTH_REQUEST: function AUTH_REQUEST(state) {\n        state.status = 'loading...';\n    },\n    AUTH_SUCCESS: function AUTH_SUCCESS(state, token) {\n        state.status = 'success';\n        state.token = token;\n    },\n    AUTH_ERROR: function AUTH_ERROR(state) {\n        state.status = 'error';\n    },\n    GET_PROFILE: function GET_PROFILE(state, profile) {\n        state.profile = profile;\n    }\n};\n\nvar getters = {\n    isAuthenticated: function isAuthenticated(state) {\n        return !!state.token;\n    },\n    authStatus: function authStatus(state) {\n        return state.status;\n    },\n    profile: function profile(state) {\n        return state.profile;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    store: store,\n    actions: actions,\n    mutations: mutations,\n    getters: getters\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvbW9kdWxlcy9hY2NvdW50LmpzPzBmMTciXSwibmFtZXMiOlsic3RvcmUiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzdGF0dXMiLCJwcm9maWxlIiwiYWN0aW9ucyIsIkFVVEhfU09DSUFMX0ZBQ0VCT09LIiwiZGF0YSIsImNvbW1pdCIsImRpc3BhdGNoIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJ1c2VyIiwic2V0SXRlbSIsImNhdGNoIiwiY2xlYXIiLCJlcnJvciIsIm11dGF0aW9ucyIsIkFVVEhfUkVRVUVTVCIsInN0YXRlIiwiQVVUSF9TVUNDRVNTIiwiQVVUSF9FUlJPUiIsIkdFVF9QUk9GSUxFIiwiZ2V0dGVycyIsImlzQXV0aGVudGljYXRlZCIsImF1dGhTdGF0dXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBRUEsSUFBTUEsUUFBUTtBQUNWQyxXQUFPQyxhQUFhQyxPQUFiLENBQXFCLFlBQXJCLEtBQXNDLEVBRG5DO0FBRVZDLFlBQVEsSUFGRTtBQUdWQyxhQUFTO0FBSEMsQ0FBZDs7QUFNQSxJQUFNQyxVQUFVO0FBQ1pDLDBCQUFzQixvQ0FBcUJDLElBQXJCLEVBQThCO0FBQUEsWUFBNUJDLE1BQTRCLFFBQTVCQSxNQUE0QjtBQUFBLFlBQXBCQyxRQUFvQixRQUFwQkEsUUFBb0I7O0FBQ2hELGVBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0osbUJBQU8sY0FBUDtBQUNBSyxZQUFBLDZDQUFBQSxDQUFNQyxJQUFOLENBQVcsMEJBQVgsRUFBdUNQLElBQXZDLEVBQ0NRLElBREQsQ0FDTSxvQkFBWTtBQUNkLG9CQUFJWCxVQUFVWSxTQUFTVCxJQUFULENBQWNVLElBQTVCO0FBQ0Esb0JBQU1qQixRQUFRZ0IsU0FBU1QsSUFBVCxDQUFjUCxLQUE1QjtBQUNBQyw2QkFBYWlCLE9BQWIsQ0FBcUIsWUFBckIsRUFBbUNsQixLQUFuQztBQUNBUSx1QkFBTyxjQUFQLEVBQXVCUixLQUF2QjtBQUNBUSx1QkFBTyxhQUFQLEVBQXNCSixPQUF0QjtBQUNBTyx3QkFBUUssUUFBUjtBQUNILGFBUkQsRUFTQ0csS0FURCxDQVNPLGlCQUFTO0FBQ1pYLHVCQUFPLFlBQVA7QUFDQVAsNkJBQWFtQixLQUFiO0FBQ0FSLHVCQUFPUyxLQUFQO0FBQ0gsYUFiRDtBQWNILFNBaEJNLENBQVA7QUFpQkg7QUFuQlcsQ0FBaEI7O0FBc0JBLElBQU1DLFlBQVk7QUFDZEMsa0JBQWMsc0JBQUNDLEtBQUQsRUFBVztBQUNyQkEsY0FBTXJCLE1BQU4sR0FBZSxZQUFmO0FBQ0gsS0FIYTtBQUlkc0Isa0JBQWMsc0JBQUNELEtBQUQsRUFBUXhCLEtBQVIsRUFBa0I7QUFDNUJ3QixjQUFNckIsTUFBTixHQUFlLFNBQWY7QUFDQXFCLGNBQU14QixLQUFOLEdBQWNBLEtBQWQ7QUFDSCxLQVBhO0FBUWQwQixnQkFBWSxvQkFBQ0YsS0FBRCxFQUFXO0FBQ25CQSxjQUFNckIsTUFBTixHQUFlLE9BQWY7QUFDSCxLQVZhO0FBV2R3QixpQkFBYSxxQkFBQ0gsS0FBRCxFQUFRcEIsT0FBUixFQUFvQjtBQUM3Qm9CLGNBQU1wQixPQUFOLEdBQWdCQSxPQUFoQjtBQUNIO0FBYmEsQ0FBbEI7O0FBZ0JBLElBQU13QixVQUFVO0FBQ1pDLHFCQUFpQjtBQUFBLGVBQVMsQ0FBQyxDQUFDTCxNQUFNeEIsS0FBakI7QUFBQSxLQURMO0FBRVo4QixnQkFBWTtBQUFBLGVBQVNOLE1BQU1yQixNQUFmO0FBQUEsS0FGQTtBQUdaQyxhQUFTO0FBQUEsZUFBU29CLE1BQU1wQixPQUFmO0FBQUE7QUFIRyxDQUFoQjs7QUFNQSx5REFBZTtBQUNYTCxnQkFEVztBQUVYTSxvQkFGVztBQUdYaUIsd0JBSFc7QUFJWE07QUFKVyxDQUFmIiwiZmlsZSI6IjE0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3Qgc3RvcmUgPSB7XG4gICAgdG9rZW46IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyLXRva2VuJykgfHwgJycsXG4gICAgc3RhdHVzOiBudWxsLFxuICAgIHByb2ZpbGU6IHt9LFxufVxuXG5jb25zdCBhY3Rpb25zID0ge1xuICAgIEFVVEhfU09DSUFMX0ZBQ0VCT09LOiAoe2NvbW1pdCwgZGlzcGF0Y2h9LCBkYXRhKSA9PiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb21taXQoJ0FVVEhfUkVRVUVTVCcpXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvYXBpL3Jlc3QtYXV0aC9mYWNlYm9vay8nLCBkYXRhKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBwcm9maWxlID0gcmVzcG9uc2UuZGF0YS51c2VyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXItdG9rZW4nLCB0b2tlbilcbiAgICAgICAgICAgICAgICBjb21taXQoJ0FVVEhfU1VDQ0VTUycsIHRva2VuKVxuICAgICAgICAgICAgICAgIGNvbW1pdCgnR0VUX1BST0ZJTEUnLCBwcm9maWxlKVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb21taXQoJ0FVVEhfRVJST1InKVxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IG11dGF0aW9ucyA9IHtcbiAgICBBVVRIX1JFUVVFU1Q6IChzdGF0ZSkgPT4ge1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnbG9hZGluZy4uLidcbiAgICB9LFxuICAgIEFVVEhfU1VDQ0VTUzogKHN0YXRlLCB0b2tlbikgPT4ge1xuICAgICAgICBzdGF0ZS5zdGF0dXMgPSAnc3VjY2VzcydcbiAgICAgICAgc3RhdGUudG9rZW4gPSB0b2tlblxuICAgIH0sXG4gICAgQVVUSF9FUlJPUjogKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLnN0YXR1cyA9ICdlcnJvcidcbiAgICB9LFxuICAgIEdFVF9QUk9GSUxFOiAoc3RhdGUsIHByb2ZpbGUpID0+IHtcbiAgICAgICAgc3RhdGUucHJvZmlsZSA9IHByb2ZpbGVcbiAgICB9XG59XG5cbmNvbnN0IGdldHRlcnMgPSB7XG4gICAgaXNBdXRoZW50aWNhdGVkOiBzdGF0ZSA9PiAhIXN0YXRlLnRva2VuLFxuICAgIGF1dGhTdGF0dXM6IHN0YXRlID0+IHN0YXRlLnN0YXR1cyxcbiAgICBwcm9maWxlOiBzdGF0ZSA9PiBzdGF0ZS5wcm9maWxlLFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgc3RvcmUsXG4gICAgYWN0aW9ucyxcbiAgICBtdXRhdGlvbnMsXG4gICAgZ2V0dGVycyxcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zdG9yZS9tb2R1bGVzL2FjY291bnQuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///142\n");

/***/ })

})
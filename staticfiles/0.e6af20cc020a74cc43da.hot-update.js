webpackHotUpdate(0,{

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(59);\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'Home',\n    data: function data() {\n        return {};\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_0_vuex__[\"b\" /* mapGetters */])({\n        authStatus: 'authStatus',\n        profile: 'profile'\n    }),\n    methods: {\n        get_todo: function get_todo() {\n            axios.get('/api/todo/');\n        },\n        logout: function logout() {\n            this.$store.dispatch('LOGOUT');\n            this.$router.push({ name: 'login' });\n        }\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YmZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxRQUZBLGtCQUVBO0FBQ0E7QUFFQSxLQUxBOztBQU1BO0FBQ0EsZ0NBREE7QUFFQTtBQUZBLE1BTkE7QUFVQTtBQUNBLGdCQURBLHNCQUNBO0FBQ0E7QUFDQSxTQUhBO0FBSUEsY0FKQSxvQkFJQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkEiLCJmaWxlIjoiNjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19PC9wPlxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0hvbWUnLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcbiAgICAgICAgcHJvZmlsZTogJ3Byb2ZpbGUnXG4gICAgfSksXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRfdG9kbygpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90b2RvLycpXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxuICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pXG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///60\n");

/***/ })

})
webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(11)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform {\\n    width: 300px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AAgDA;IACA,aAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>Welcome to Todo, {{ profile.username }}</p>\\n        <b-btn @click='logout'>logout</b-btn>\\n        <b-form @submit.prevent=\\\"add_todo\\\">\\n            <b-input v-model=\\\"new_todo\\\"></b-input>\\n            <b-btn type=\\\"submit\\\">submint</b-btn>\\n        </b-form>\\n        <div v-for=\\\"x in name\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n        </div>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: null\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        add_todo() {\\n            this.$store.dispatch('ADD')\\n        },\\n        get_todo() {\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        this.get_todo()\\n    }\\n}\\n</script>\\n\\n<style>\\nform {\\n    width: 300px;\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLG1CQUFtQixHQUFHLFVBQVUsOElBQThJLE1BQU0sVUFBVSxnR0FBZ0csb0JBQW9CLGdTQUFnUyxVQUFVLDBGQUEwRixhQUFhLDhCQUE4QixpQ0FBaUMsa0JBQWtCLHVDQUF1QyxPQUFPLDhCQUE4Qiw2RkFBNkYsa0JBQWtCLHNCQUFzQixvREFBb0QsdUJBQXVCLHlEQUF5RCxxQkFBcUIsNEVBQTRFLGNBQWMsWUFBWSxPQUFPLGtCQUFrQixnQ0FBZ0MsR0FBRyw4QkFBOEIsbUJBQW1CLEdBQUcsaUNBQWlDOztBQUV2NUMiLCJmaWxlIjoiMjY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZvcm0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFnREE7SUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcIkhvbWUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxwPldlbGNvbWUgdG8gVG9kbywge3sgcHJvZmlsZS51c2VybmFtZSB9fTwvcD5cXG4gICAgICAgIDxiLWJ0biBAY2xpY2s9J2xvZ291dCc+bG9nb3V0PC9iLWJ0bj5cXG4gICAgICAgIDxiLWZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJhZGRfdG9kb1xcXCI+XFxuICAgICAgICAgICAgPGItaW5wdXQgdi1tb2RlbD1cXFwibmV3X3RvZG9cXFwiPjwvYi1pbnB1dD5cXG4gICAgICAgICAgICA8Yi1idG4gdHlwZT1cXFwic3VibWl0XFxcIj5zdWJtaW50PC9iLWJ0bj5cXG4gICAgICAgIDwvYi1mb3JtPlxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwieCBpbiBuYW1lXFxcIiA6a2V5PVxcXCJ4LmlkXFxcIj5cXG4gICAgICAgICAgICB7eyB4Lm5hbWUgfX1cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0hvbWUnLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBuZXdfdG9kbzogbnVsbFxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgYXV0aFN0YXR1czogJ2F1dGhTdGF0dXMnLFxcbiAgICAgICAgcHJvZmlsZTogJ3Byb2ZpbGUnLFxcbiAgICAgICAgbmFtZTogJ25hbWUnXFxuICAgIH0pLFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBhZGRfdG9kbygpIHtcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQUREJylcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRfdG9kbygpIHtcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxcbiAgICAgICAgfSxcXG4gICAgICAgIGxvZ291dCgpIHtcXG4gICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdMT0dPVVQnKSBcXG4gICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbG9naW4nfSlcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuZ2V0X3RvZG8oKVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5mb3JtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi04ZGM3Y2NlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///266\n");

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(60);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'Home',\n    data: function data() {\n        return {\n            new_todo: null\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        authStatus: 'authStatus',\n        profile: 'profile',\n        name: 'name'\n    }),\n    methods: {\n        add_todo: function add_todo() {\n            this.$store.dispatch('ADD');\n        },\n        get_todo: function get_todo() {\n            this.$store.dispatch('GET_TODO');\n        },\n        logout: function logout() {\n            this.$store.dispatch('LOGOUT');\n            this.$router.push({ name: 'login' });\n        }\n    },\n    created: function created() {\n        this.get_todo();\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YmZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLFFBRkEsa0JBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxLQU5BOztBQU9BO0FBQ0EsZ0NBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsTUFQQTtBQVlBO0FBQ0EsZ0JBREEsc0JBQ0E7QUFDQTtBQUNBLFNBSEE7QUFJQSxnQkFKQSxzQkFJQTtBQUNBO0FBQ0EsU0FOQTtBQU9BLGNBUEEsb0JBT0E7QUFDQTtBQUNBO0FBQ0E7QUFWQSxLQVpBO0FBd0JBLFdBeEJBLHFCQXdCQTtBQUNBO0FBQ0E7QUExQkEiLCJmaWxlIjoiNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19PC9wPlxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XG4gICAgICAgIDxiLWZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiYWRkX3RvZG9cIj5cbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XCJuZXdfdG9kb1wiPjwvYi1pbnB1dD5cbiAgICAgICAgICAgIDxiLWJ0biB0eXBlPVwic3VibWl0XCI+c3VibWludDwvYi1idG4+XG4gICAgICAgIDwvYi1mb3JtPlxuICAgICAgICA8ZGl2IHYtZm9yPVwieCBpbiBuYW1lXCIgOmtleT1cInguaWRcIj5cbiAgICAgICAgICAgIHt7IHgubmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld190b2RvOiBudWxsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcbiAgICAgICAgcHJvZmlsZTogJ3Byb2ZpbGUnLFxuICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICB9KSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZF90b2RvKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FERCcpXG4gICAgICAgIH0sXG4gICAgICAgIGdldF90b2RvKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9UT0RPJylcbiAgICAgICAgfSxcbiAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9HT1VUJykgXG4gICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbG9naW4nfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRfdG9kbygpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbmZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///61\n");

/***/ })

})
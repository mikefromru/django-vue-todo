webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform {\\n    width: 300px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AAsDA;IACA,aAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>Welcome to Todo, {{ profile.username }}</p>\\n        <b-btn @click='logout'>logout</b-btn>\\n        <b-form @submit.prevent=\\\"add_todo\\\">\\n            <b-input v-model=\\\"new_todo\\\"></b-input>\\n            <b-btn type=\\\"submit\\\">submint</b-btn>\\n        </b-form>\\n        <div v-for=\\\"x in name\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n        </div>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: ''\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        add_todo() {\\n            this.$store.dispatch('ADD_TODO', {\\n                'name': this.new_todo,\\n                'user': this.profile.pk\\n                }\\n            )\\n            this.$router.push({name: 'home'})\\n            //this.get_todo()\\n        },\\n        get_todo() {\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        this.get_todo()\\n    }\\n}\\n</script>\\n\\n<style>\\nform {\\n    width: 300px;\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLG1CQUFtQixHQUFHLFVBQVUsOElBQThJLE1BQU0sVUFBVSxnR0FBZ0csb0JBQW9CLGdTQUFnUyxVQUFVLDBGQUEwRixhQUFhLDhCQUE4QixpQ0FBaUMsa0JBQWtCLHFDQUFxQyxPQUFPLDhCQUE4Qiw2RkFBNkYsa0JBQWtCLHNCQUFzQixnREFBZ0Qsb0dBQW9HLGdEQUFnRCxhQUFhLDJDQUEyQyx1QkFBdUIseURBQXlELHFCQUFxQiw0RUFBNEUsY0FBYyxZQUFZLE9BQU8sa0JBQWtCLGdDQUFnQyxHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxpQ0FBaUM7O0FBRTdsRCIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5mb3JtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy90b2RvLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0RBO0lBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJIb21lLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8cD5XZWxjb21lIHRvIFRvZG8sIHt7IHByb2ZpbGUudXNlcm5hbWUgfX08L3A+XFxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XFxuICAgICAgICA8Yi1mb3JtIEBzdWJtaXQucHJldmVudD1cXFwiYWRkX3RvZG9cXFwiPlxcbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XFxcIm5ld190b2RvXFxcIj48L2ItaW5wdXQ+XFxuICAgICAgICAgICAgPGItYnRuIHR5cGU9XFxcInN1Ym1pdFxcXCI+c3VibWludDwvYi1idG4+XFxuICAgICAgICA8L2ItZm9ybT5cXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcInggaW4gbmFtZVxcXCIgOmtleT1cXFwieC5pZFxcXCI+XFxuICAgICAgICAgICAge3sgeC5uYW1lIH19XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdIb21lJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbmV3X3RvZG86ICcnXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgICAgICBhdXRoU3RhdHVzOiAnYXV0aFN0YXR1cycsXFxuICAgICAgICBwcm9maWxlOiAncHJvZmlsZScsXFxuICAgICAgICBuYW1lOiAnbmFtZSdcXG4gICAgfSksXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGFkZF90b2RvKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBRERfVE9ETycsIHtcXG4gICAgICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5ld190b2RvLFxcbiAgICAgICAgICAgICAgICAndXNlcic6IHRoaXMucHJvZmlsZS5wa1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgKVxcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaG9tZSd9KVxcbiAgICAgICAgICAgIC8vdGhpcy5nZXRfdG9kbygpXFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0X3RvZG8oKSB7XFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9UT0RPJylcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2dvdXQoKSB7XFxuICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9HT1VUJykgXFxuICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmdldF90b2RvKClcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuZm9ybSB7XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuPC9zdHlsZT5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOGRjN2NjZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(61);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'Home',\n    data: function data() {\n        return {\n            new_todo: ''\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        authStatus: 'authStatus',\n        profile: 'profile',\n        name: 'name'\n    }),\n    methods: {\n        add_todo: function add_todo() {\n            this.$store.dispatch('ADD_TODO', {\n                'name': this.new_todo,\n                'user': this.profile.pk\n            });\n            this.$router.push({ name: 'home' });\n            //this.get_todo()\n        },\n        get_todo: function get_todo() {\n            this.$store.dispatch('GET_TODO');\n        },\n        logout: function logout() {\n            this.$store.dispatch('LOGOUT');\n            this.$router.push({ name: 'login' });\n        }\n    },\n    created: function created() {\n        this.get_todo();\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YmZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLFFBRkEsa0JBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxLQU5BOztBQU9BO0FBQ0EsZ0NBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsTUFQQTtBQVlBO0FBQ0EsZ0JBREEsc0JBQ0E7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQSxTQVRBO0FBVUEsZ0JBVkEsc0JBVUE7QUFDQTtBQUNBLFNBWkE7QUFhQSxjQWJBLG9CQWFBO0FBQ0E7QUFDQTtBQUNBO0FBaEJBLEtBWkE7QUE4QkEsV0E5QkEscUJBOEJBO0FBQ0E7QUFDQTtBQWhDQSIsImZpbGUiOiI2Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cD5XZWxjb21lIHRvIFRvZG8sIHt7IHByb2ZpbGUudXNlcm5hbWUgfX08L3A+XG4gICAgICAgIDxiLWJ0biBAY2xpY2s9J2xvZ291dCc+bG9nb3V0PC9iLWJ0bj5cbiAgICAgICAgPGItZm9ybSBAc3VibWl0LnByZXZlbnQ9XCJhZGRfdG9kb1wiPlxuICAgICAgICAgICAgPGItaW5wdXQgdi1tb2RlbD1cIm5ld190b2RvXCI+PC9iLWlucHV0PlxuICAgICAgICAgICAgPGItYnRuIHR5cGU9XCJzdWJtaXRcIj5zdWJtaW50PC9iLWJ0bj5cbiAgICAgICAgPC9iLWZvcm0+XG4gICAgICAgIDxkaXYgdi1mb3I9XCJ4IGluIG5hbWVcIiA6a2V5PVwieC5pZFwiPlxuICAgICAgICAgICAge3sgeC5uYW1lIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdIb21lJyxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3X3RvZG86ICcnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcbiAgICAgICAgcHJvZmlsZTogJ3Byb2ZpbGUnLFxuICAgICAgICBuYW1lOiAnbmFtZSdcbiAgICB9KSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGFkZF90b2RvKCkge1xuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FERF9UT0RPJywge1xuICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5uZXdfdG9kbyxcbiAgICAgICAgICAgICAgICAndXNlcic6IHRoaXMucHJvZmlsZS5wa1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaG9tZSd9KVxuICAgICAgICAgICAgLy90aGlzLmdldF90b2RvKClcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0X3RvZG8oKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxuICAgICAgICB9LFxuICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdMT0dPVVQnKSBcbiAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldF90b2RvKClcbiAgICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuZm9ybSB7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuPC9zdHlsZT5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hvbWUudnVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///62\n");

/***/ })

})
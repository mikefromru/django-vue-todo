webpackHotUpdate(0,{

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(10)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform {\\n    width: 300px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AA6DA;IACA,aAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>Welcome to Todo, {{ profile.username }}</p>\\n        <b-btn @click='logout'>logout</b-btn>\\n        <b-form @submit.prevent=\\\"add_todo\\\">\\n            <b-input v-model=\\\"new_todo\\\"></b-input>\\n            <b-btn type=\\\"submit\\\">submint</b-btn>\\n        </b-form>\\n        <div v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n            <span @click=\\\"delete_one_todo(x.id)\\\">delete</span>\\n        </div>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: '',\\n            completed: false\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        delete_one_todo(id) {\\n            this.$store.dispatch('DELETE_ONE_TODO', id)\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        add_todo() {\\n            this.$store.dispatch('ADD_TODO', {\\n                'name': this.new_todo,\\n                'user': this.profile.pk\\n                //'completed': this.completed \\n                }\\n                .then(response => {\\n                    //this.$store.dispatch('GET_TODO')\\n                    this.new_todo = ''\\n                })\\n            )\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        //this.get_todo()\\n        this.$store.dispatch('GET_TODO')\\n    }\\n}\\n</script>\\n\\n<style>\\nform {\\n    width: 300px;\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLG1CQUFtQixHQUFHLFVBQVUsOElBQThJLE1BQU0sVUFBVSxnR0FBZ0csb0JBQW9CLGtUQUFrVCxVQUFVLDRKQUE0SixhQUFhLDhCQUE4QixpQ0FBaUMsa0JBQWtCLG9FQUFvRSxPQUFPLDhCQUE4Qiw2RkFBNkYsa0JBQWtCLCtCQUErQixrSEFBa0gsdUJBQXVCLGdEQUFnRCxvSkFBb0oscUNBQXFDLG1IQUFtSCwyQkFBMkIscUJBQXFCLDRFQUE0RSxjQUFjLFlBQVksT0FBTyxrQkFBa0IsNEVBQTRFLEdBQUcsOEJBQThCLG1CQUFtQixHQUFHLGlDQUFpQzs7QUFFejdEIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZvcm0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2REE7SUFDQSxhQUFBO0NBQ0FcIixcImZpbGVcIjpcIkhvbWUudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxwPldlbGNvbWUgdG8gVG9kbywge3sgcHJvZmlsZS51c2VybmFtZSB9fTwvcD5cXG4gICAgICAgIDxiLWJ0biBAY2xpY2s9J2xvZ291dCc+bG9nb3V0PC9iLWJ0bj5cXG4gICAgICAgIDxiLWZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJhZGRfdG9kb1xcXCI+XFxuICAgICAgICAgICAgPGItaW5wdXQgdi1tb2RlbD1cXFwibmV3X3RvZG9cXFwiPjwvYi1pbnB1dD5cXG4gICAgICAgICAgICA8Yi1idG4gdHlwZT1cXFwic3VibWl0XFxcIj5zdWJtaW50PC9iLWJ0bj5cXG4gICAgICAgIDwvYi1mb3JtPlxcbiAgICAgICAgPGRpdiB2LWZvcj1cXFwieCBpbiBuYW1lLnNsaWNlKCkucmV2ZXJzZSgpXFxcIiA6a2V5PVxcXCJ4LmlkXFxcIj5cXG4gICAgICAgICAgICB7eyB4Lm5hbWUgfX1cXG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XFxcImRlbGV0ZV9vbmVfdG9kbyh4LmlkKVxcXCI+ZGVsZXRlPC9zcGFuPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnSG9tZScsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIG5ld190b2RvOiAnJyxcXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgICAgICBhdXRoU3RhdHVzOiAnYXV0aFN0YXR1cycsXFxuICAgICAgICBwcm9maWxlOiAncHJvZmlsZScsXFxuICAgICAgICBuYW1lOiAnbmFtZSdcXG4gICAgfSksXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGRlbGV0ZV9vbmVfdG9kbyhpZCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdERUxFVEVfT05FX1RPRE8nLCBpZClcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFkZF90b2RvKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBRERfVE9ETycsIHtcXG4gICAgICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5ld190b2RvLFxcbiAgICAgICAgICAgICAgICAndXNlcic6IHRoaXMucHJvZmlsZS5wa1xcbiAgICAgICAgICAgICAgICAvLydjb21wbGV0ZWQnOiB0aGlzLmNvbXBsZXRlZCBcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5ld190b2RvID0gJydcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICApXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9nb3V0KCkge1xcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxcbiAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgLy90aGlzLmdldF90b2RvKClcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbmZvcm0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LThkYzdjY2UyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(61);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'Home',\n    data: function data() {\n        return {\n            new_todo: '',\n            completed: false\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_1_vuex__[\"b\" /* mapGetters */])({\n        authStatus: 'authStatus',\n        profile: 'profile',\n        name: 'name'\n    }),\n    methods: {\n        delete_one_todo: function delete_one_todo(id) {\n            this.$store.dispatch('DELETE_ONE_TODO', id);\n            this.$store.dispatch('GET_TODO');\n        },\n        add_todo: function add_todo() {\n            var _this = this;\n\n            this.$store.dispatch('ADD_TODO', {\n                'name': this.new_todo,\n                'user': this.profile.pk\n                //'completed': this.completed \n            }.then(function (response) {\n                //this.$store.dispatch('GET_TODO')\n                _this.new_todo = '';\n            }));\n        },\n        logout: function logout() {\n            this.$store.dispatch('LOGOUT');\n            this.$router.push({ name: 'login' });\n        }\n    },\n    created: function created() {\n        //this.get_todo()\n        this.$store.dispatch('GET_TODO');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YmZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUZBO0FBSUEsS0FQQTs7QUFRQTtBQUNBLGdDQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBLE1BUkE7QUFhQTtBQUNBLHVCQURBLDJCQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsZ0JBTEEsc0JBS0E7QUFBQTs7QUFDQTtBQUNBLHFDQURBO0FBRUE7QUFDQTtBQUhBLGNBS0EsSUFMQSxDQUtBO0FBQ0E7QUFDQTtBQUNBLGFBUkE7QUFVQSxTQWhCQTtBQWlCQSxjQWpCQSxvQkFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFwQkEsS0FiQTtBQW1DQSxXQW5DQSxxQkFtQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0Q0EiLCJmaWxlIjoiNjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19PC9wPlxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XG4gICAgICAgIDxiLWZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiYWRkX3RvZG9cIj5cbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XCJuZXdfdG9kb1wiPjwvYi1pbnB1dD5cbiAgICAgICAgICAgIDxiLWJ0biB0eXBlPVwic3VibWl0XCI+c3VibWludDwvYi1idG4+XG4gICAgICAgIDwvYi1mb3JtPlxuICAgICAgICA8ZGl2IHYtZm9yPVwieCBpbiBuYW1lLnNsaWNlKCkucmV2ZXJzZSgpXCIgOmtleT1cInguaWRcIj5cbiAgICAgICAgICAgIHt7IHgubmFtZSB9fVxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVwiZGVsZXRlX29uZV90b2RvKHguaWQpXCI+ZGVsZXRlPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld190b2RvOiAnJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2VcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcbiAgICAgICAgYXV0aFN0YXR1czogJ2F1dGhTdGF0dXMnLFxuICAgICAgICBwcm9maWxlOiAncHJvZmlsZScsXG4gICAgICAgIG5hbWU6ICduYW1lJ1xuICAgIH0pLFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZGVsZXRlX29uZV90b2RvKGlkKSB7XG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnREVMRVRFX09ORV9UT0RPJywgaWQpXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxuICAgICAgICB9LFxuICAgICAgICBhZGRfdG9kbygpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBRERfVE9ETycsIHtcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHRoaXMubmV3X3RvZG8sXG4gICAgICAgICAgICAgICAgJ3VzZXInOiB0aGlzLnByb2ZpbGUucGtcbiAgICAgICAgICAgICAgICAvLydjb21wbGV0ZWQnOiB0aGlzLmNvbXBsZXRlZCBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvL3RoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV3X3RvZG8gPSAnJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxuICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIC8vdGhpcy5nZXRfdG9kbygpXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbmZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///62\n");

/***/ })

})
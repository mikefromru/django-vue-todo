webpackHotUpdate(0,{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(274);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(73);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(151);\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = ({\n    name: 'Home',\n    data: function data() {\n        return {\n            new_todo: '',\n            complete: false\n        };\n    },\n\n    computed: Object(__WEBPACK_IMPORTED_MODULE_2_vuex__[\"b\" /* mapGetters */])({\n        authStatus: 'authStatus',\n        profile: 'profile',\n        name: 'name'\n    }),\n    methods: {\n        delete_one_todo: function delete_one_todo(id) {\n            this.$store.dispatch('DELETE_ONE_TODO', id);\n            this.$store.dispatch('GET_TODO');\n        },\n        add_todo: function add_todo() {\n            var _this = this;\n\n            return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                        switch (_context.prev = _context.next) {\n                            case 0:\n                                _context.next = 2;\n                                return _this.$store.dispatch('ADD_TODO', {\n                                    'name': _this.new_todo,\n                                    'user': _this.profile.pk,\n                                    'complete': _this.complete\n                                });\n\n                            case 2:\n                                _this.new_todo = '';\n\n                                _this.$store.dispatch('GET_TODO');\n\n                            case 4:\n                            case 'end':\n                                return _context.stop();\n                        }\n                    }\n                }, _callee, _this);\n            }))();\n        },\n        logout: function logout() {\n            this.$store.dispatch('LOGOUT');\n            this.$router.push({ name: 'login' });\n        }\n    },\n    created: function created() {\n        //this.get_todo()\n        this.$store.dispatch('GET_TODO');\n    }\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSG9tZS52dWU/YmZmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsUUFGQSxrQkFFQTtBQUNBO0FBQ0Esd0JBREE7QUFFQTtBQUZBO0FBSUEsS0FQQTs7QUFRQTtBQUNBLGdDQURBO0FBRUEsMEJBRkE7QUFHQTtBQUhBLE1BUkE7QUFhQTtBQUNBLHVCQURBLDJCQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsZ0JBTEEsc0JBS0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FDQTtBQUNBLDBEQURBO0FBRUEsNERBRkE7QUFHQTtBQUhBLGtDQURBOztBQUFBO0FBTUEsbURBTkE7O0FBT0EsaUVBUEE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQSxTQWJBO0FBY0EsY0FkQSxvQkFjQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQSxLQWJBO0FBZ0NBLFdBaENBLHFCQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQSIsImZpbGUiOiIxNTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19PC9wPlxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XG4gICAgICAgIDxiLWZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwiYWRkX3RvZG9cIj5cbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XCJuZXdfdG9kb1wiPjwvYi1pbnB1dD5cbiAgICAgICAgICAgIDxiLWJ0biB0eXBlPVwic3VibWl0XCI+c3VibWludDwvYi1idG4+XG4gICAgICAgIDwvYi1mb3JtPlxuXG4gICAgICAgIDxkaXYgdi1mb3I9XCJ4IGluIG5hbWUuc2xpY2UoKS5yZXZlcnNlKClcIiA6a2V5PVwieC5pZFwiPlxuICAgICAgICAgICAge3sgeC5uYW1lIH19XG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XCJkZWxldGVfb25lX3RvZG8oeC5pZClcIj5kZWxldGU8L3NwYW4+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgXCJiYWJlbC1wb2x5ZmlsbFwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld190b2RvOiAnJyxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xuICAgICAgICBhdXRoU3RhdHVzOiAnYXV0aFN0YXR1cycsXG4gICAgICAgIHByb2ZpbGU6ICdwcm9maWxlJyxcbiAgICAgICAgbmFtZTogJ25hbWUnXG4gICAgfSksXG4gICAgbWV0aG9kczoge1xuICAgICAgICBkZWxldGVfb25lX3RvZG8oaWQpIHtcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdERUxFVEVfT05FX1RPRE8nLCBpZClcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGFkZF90b2RvKCkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FERF9UT0RPJywge1xuICAgICAgICAgICAgICAgICduYW1lJzogdGhpcy5uZXdfdG9kbyxcbiAgICAgICAgICAgICAgICAndXNlcic6IHRoaXMucHJvZmlsZS5wayxcbiAgICAgICAgICAgICAgICAnY29tcGxldGUnOiB0aGlzLmNvbXBsZXRlXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRoaXMubmV3X3RvZG8gPSAnJyxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXG4gICAgICAgIH0sXG4gICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxuICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIC8vdGhpcy5nZXRfdG9kbygpXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbmZvcm0ge1xuICAgIHdpZHRoOiAzMDBweDtcbn1cbjwvc3R5bGU+XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ib21lLnZ1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///152\n");

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform {\\n    width: 300px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AA8DA;IACA,aAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>Welcome to Todo, {{ profile.username }}</p>\\n        <b-btn @click='logout'>logout</b-btn>\\n        <b-form @submit.prevent=\\\"add_todo\\\">\\n            <b-input v-model=\\\"new_todo\\\"></b-input>\\n            <b-btn type=\\\"submit\\\">submint</b-btn>\\n        </b-form>\\n\\n        <div v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n            <span @click=\\\"delete_one_todo(x.id)\\\">delete</span>\\n            \\n        </div>\\n\\n    </div>\\n</template>\\n\\n<script>\\nimport \\\"babel-polyfill\\\"\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: '',\\n            complete: false\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        delete_one_todo(id) {\\n            this.$store.dispatch('DELETE_ONE_TODO', id)\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        async add_todo() {\\n            await this.$store.dispatch('ADD_TODO', {\\n                'name': this.new_todo,\\n                'user': this.profile.pk,\\n                'complete': this.complete\\n            }),\\n            this.new_todo = '',\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        //this.get_todo()\\n        this.$store.dispatch('GET_TODO')\\n    }\\n}\\n</script>\\n\\n<style>\\nform {\\n    width: 300px;\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLG1CQUFtQixHQUFHLFVBQVUsOElBQThJLE1BQU0sVUFBVSxnR0FBZ0csb0JBQW9CLG9UQUFvVCxVQUFVLHVNQUF1TSxhQUFhLDhCQUE4QixpQ0FBaUMsa0JBQWtCLG1FQUFtRSxPQUFPLDhCQUE4Qiw2RkFBNkYsa0JBQWtCLCtCQUErQixrSEFBa0gsNkJBQTZCLHNEQUFzRCw0SUFBNEksNEZBQTRGLHFCQUFxQiw0RUFBNEUsY0FBYyxZQUFZLE9BQU8sa0JBQWtCLDRFQUE0RSxHQUFHLDhCQUE4QixtQkFBbUIsR0FBRyxpQ0FBaUM7O0FBRWw1RCIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5mb3JtIHtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy90b2RvLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOERBO0lBQ0EsYUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJIb21lLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8cD5XZWxjb21lIHRvIFRvZG8sIHt7IHByb2ZpbGUudXNlcm5hbWUgfX08L3A+XFxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XFxuICAgICAgICA8Yi1mb3JtIEBzdWJtaXQucHJldmVudD1cXFwiYWRkX3RvZG9cXFwiPlxcbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XFxcIm5ld190b2RvXFxcIj48L2ItaW5wdXQ+XFxuICAgICAgICAgICAgPGItYnRuIHR5cGU9XFxcInN1Ym1pdFxcXCI+c3VibWludDwvYi1idG4+XFxuICAgICAgICA8L2ItZm9ybT5cXG5cXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcInggaW4gbmFtZS5zbGljZSgpLnJldmVyc2UoKVxcXCIgOmtleT1cXFwieC5pZFxcXCI+XFxuICAgICAgICAgICAge3sgeC5uYW1lIH19XFxuICAgICAgICAgICAgPHNwYW4gQGNsaWNrPVxcXCJkZWxldGVfb25lX3RvZG8oeC5pZClcXFwiPmRlbGV0ZTwvc3Bhbj5cXG4gICAgICAgICAgICBcXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IFxcXCJiYWJlbC1wb2x5ZmlsbFxcXCJcXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnSG9tZScsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIG5ld190b2RvOiAnJyxcXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2VcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcXG4gICAgICAgIHByb2ZpbGU6ICdwcm9maWxlJyxcXG4gICAgICAgIG5hbWU6ICduYW1lJ1xcbiAgICB9KSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZGVsZXRlX29uZV90b2RvKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0RFTEVURV9PTkVfVE9ETycsIGlkKVxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgYWRkX3RvZG8oKSB7XFxuICAgICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FERF9UT0RPJywge1xcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHRoaXMubmV3X3RvZG8sXFxuICAgICAgICAgICAgICAgICd1c2VyJzogdGhpcy5wcm9maWxlLnBrLFxcbiAgICAgICAgICAgICAgICAnY29tcGxldGUnOiB0aGlzLmNvbXBsZXRlXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgdGhpcy5uZXdfdG9kbyA9ICcnLFxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9nb3V0KCkge1xcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxcbiAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgLy90aGlzLmdldF90b2RvKClcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbmZvcm0ge1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LThkYzdjY2UyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})
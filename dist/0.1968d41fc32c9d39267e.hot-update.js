webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(11)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\ninput {\\n    width:\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AA6CA;IACA,MAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>Welcome to Todo, {{ profile.username }}</p>\\n        <b-btn @click='logout'>logout</b-btn>\\n        <b-form @submit.prevent=\\\"add_todo\\\">\\n            <b-input v-model=\\\"new_todo\\\"></b-input>\\n            <b-btn type=\\\"submit\\\">submint</b-btn>\\n        </b-form>\\n        <div v-for=\\\"x in name\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n        </div>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: null\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        get_todo() {\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        this.get_todo()\\n    }\\n}\\n</script>\\n\\n<style>\\ninput {\\n    width: \\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esa0NBQW1DLGVBQWUsVUFBVSw4SUFBOEksTUFBTSxVQUFVLGdHQUFnRyxvQkFBb0IsZ1NBQWdTLFVBQVUsMEZBQTBGLGFBQWEsOEJBQThCLGlDQUFpQyxrQkFBa0IsdUNBQXVDLE9BQU8sOEJBQThCLDZGQUE2RixrQkFBa0Isc0JBQXNCLHlEQUF5RCxxQkFBcUIsNEVBQTRFLGNBQWMsWUFBWSxPQUFPLGtCQUFrQixnQ0FBZ0MsR0FBRywrQkFBK0IsZ0JBQWdCLGlDQUFpQzs7QUFFajBDIiwiZmlsZSI6IjI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5pbnB1dCB7XFxuICAgIHdpZHRoOlxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy90b2RvLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNkNBO0lBQ0EsTUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJIb21lLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXY+XFxuICAgICAgICA8cD5XZWxjb21lIHRvIFRvZG8sIHt7IHByb2ZpbGUudXNlcm5hbWUgfX08L3A+XFxuICAgICAgICA8Yi1idG4gQGNsaWNrPSdsb2dvdXQnPmxvZ291dDwvYi1idG4+XFxuICAgICAgICA8Yi1mb3JtIEBzdWJtaXQucHJldmVudD1cXFwiYWRkX3RvZG9cXFwiPlxcbiAgICAgICAgICAgIDxiLWlucHV0IHYtbW9kZWw9XFxcIm5ld190b2RvXFxcIj48L2ItaW5wdXQ+XFxuICAgICAgICAgICAgPGItYnRuIHR5cGU9XFxcInN1Ym1pdFxcXCI+c3VibWludDwvYi1idG4+XFxuICAgICAgICA8L2ItZm9ybT5cXG4gICAgICAgIDxkaXYgdi1mb3I9XFxcInggaW4gbmFtZVxcXCIgOmtleT1cXFwieC5pZFxcXCI+XFxuICAgICAgICAgICAge3sgeC5uYW1lIH19XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdIb21lJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbmV3X3RvZG86IG51bGxcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcXG4gICAgICAgIHByb2ZpbGU6ICdwcm9maWxlJyxcXG4gICAgICAgIG5hbWU6ICduYW1lJ1xcbiAgICB9KSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZ2V0X3RvZG8oKSB7XFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0dFVF9UT0RPJylcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2dvdXQoKSB7XFxuICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnTE9HT1VUJykgXFxuICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2xvZ2luJ30pXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmdldF90b2RvKClcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuaW5wdXQge1xcbiAgICB3aWR0aDogXFxufVxcbjwvc3R5bGU+XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LThkYzdjY2UyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOmZhbHNlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(11)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nform {\\n    width: 0px;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AA6CA;IACA,WAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>Welcome to Todo, {{ profile.username }}</p>\\n        <b-btn @click='logout'>logout</b-btn>\\n        <b-form @submit.prevent=\\\"add_todo\\\">\\n            <b-input v-model=\\\"new_todo\\\"></b-input>\\n            <b-btn type=\\\"submit\\\">submint</b-btn>\\n        </b-form>\\n        <div v-for=\\\"x in name\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n        </div>\\n    </div>\\n</template>\\n\\n<script>\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: null\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        get_todo() {\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        this.get_todo()\\n    }\\n}\\n</script>\\n\\n<style>\\nform {\\n    width: 0px;\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0EsaUNBQWtDLGlCQUFpQixHQUFHLFVBQVUsOElBQThJLE1BQU0sVUFBVSxnR0FBZ0csb0JBQW9CLGdTQUFnUyxVQUFVLDBGQUEwRixhQUFhLDhCQUE4QixpQ0FBaUMsa0JBQWtCLHVDQUF1QyxPQUFPLDhCQUE4Qiw2RkFBNkYsa0JBQWtCLHNCQUFzQix5REFBeUQscUJBQXFCLDRFQUE0RSxjQUFjLFlBQVksT0FBTyxrQkFBa0IsZ0NBQWdDLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLGlDQUFpQzs7QUFFeDBDIiwiZmlsZSI6IjI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5mb3JtIHtcXG4gICAgd2lkdGg6IDBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvdG9kby1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvSG9tZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZDQTtJQUNBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSG9tZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19PC9wPlxcbiAgICAgICAgPGItYnRuIEBjbGljaz0nbG9nb3V0Jz5sb2dvdXQ8L2ItYnRuPlxcbiAgICAgICAgPGItZm9ybSBAc3VibWl0LnByZXZlbnQ9XFxcImFkZF90b2RvXFxcIj5cXG4gICAgICAgICAgICA8Yi1pbnB1dCB2LW1vZGVsPVxcXCJuZXdfdG9kb1xcXCI+PC9iLWlucHV0PlxcbiAgICAgICAgICAgIDxiLWJ0biB0eXBlPVxcXCJzdWJtaXRcXFwiPnN1Ym1pbnQ8L2ItYnRuPlxcbiAgICAgICAgPC9iLWZvcm0+XFxuICAgICAgICA8ZGl2IHYtZm9yPVxcXCJ4IGluIG5hbWVcXFwiIDprZXk9XFxcInguaWRcXFwiPlxcbiAgICAgICAgICAgIHt7IHgubmFtZSB9fVxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnSG9tZScsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIG5ld190b2RvOiBudWxsXFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzICh7XFxuICAgICAgICBhdXRoU3RhdHVzOiAnYXV0aFN0YXR1cycsXFxuICAgICAgICBwcm9maWxlOiAncHJvZmlsZScsXFxuICAgICAgICBuYW1lOiAnbmFtZSdcXG4gICAgfSksXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGdldF90b2RvKCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9nb3V0KCkge1xcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxcbiAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5nZXRfdG9kbygpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbmZvcm0ge1xcbiAgICB3aWR0aDogMHB4O1xcbn1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi04ZGM3Y2NlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSAyNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
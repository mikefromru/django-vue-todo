webpackHotUpdate(0,{

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.horisont {\\n}\\n.horisont * {\\n    display: inline-block;\\n}\\n.form-control {\\n    /* width: 300px; */\\n    margin-bottom: 10px;\\n}\\n.checkbox {\\n    /* margin: auto; */\\n    /* top: 7px; */\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AA8FA;CAEA;AACA;IACA,sBAAA;CACA;AACA;IACA,mBAAA;IACA,oBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <div class=\\\"container col-sm-8 col-sm-offset-2\\\">\\n        <p>Welcome to Todo, {{ profile.username }} <a href @click=\\\"logout\\\">logout</a></p>\\n        <div class=\\\"panel panel-default\\\">\\n            <h2 class=\\\"text-center\\\">Add new task</h2>\\n\\n            <b-form class=\\\"horisont\\\" @submit.prevent=\\\"add_todo\\\">\\n                <div>\\n                    <b-input class=\\\"form-control\\\" v-model=\\\"new_todo\\\" placeholder=\\\"Add a new todo\\\"></b-input>\\n                </div>\\n                <div>\\n                    <b-btn type=\\\"submit\\\" class=\\\"btn-block\\\">submint</b-btn>\\n                </div>\\n            </b-form>\\n            \\n        </div>\\n\\n        <table class=\\\"table\\\">\\n            <thead>\\n                <th>Checkmark Done</th>\\n                <th>Task name</th>\\n                <th>Delete</th>\\n            </thead>\\n\\n            <tbody>\\n                <tr v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\">\\n                    <td><b-form-checkbox @input=\\\"set_bird(x.id)\\\" class=\\\"checkbox\\\" ></b-form-checkbox></td>\\n                    <td>{{ x.name }}</td>\\n                    <td><b-btn variant=\\\"danger\\\" @click=\\\"delete_one_todo(x.id)\\\">delete</b-btn></td>\\n                </tr>\\n            </tbody>\\n        </table>\\n\\n        <!-- <div v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\">\\n            {{ x.name }}\\n            <span @click=\\\"delete_one_todo(x.id)\\\">delete</span>\\n            <b-form-checkbox @input=\\\"st_bird(x.id)\\\" class=\\\"checkbox\\\"></b-form-checkbox>\\n        </div> -->\\n\\n    </div>\\n</template>\\n\\n<script>\\nimport \\\"babel-polyfill\\\"\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: '',\\n            complete: false\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        set_bird(id) {\\n            console.log(id)\\n            // console.log('----------hello world----------')\\n            // axios.post('/api/todo/' + id + '/')\\n            // .then(response => {\\n                // console.log(id)\\n            // })\\n        },\\n        delete_one_todo(id) {\\n            this.$store.dispatch('DELETE_ONE_TODO', id)\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        async add_todo() {\\n            await this.$store.dispatch('ADD_TODO', {\\n                'name': this.new_todo,\\n                'user': this.profile.pk,\\n                'complete': this.complete\\n            }),\\n            this.new_todo = '',\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        //this.get_todo()\\n        this.$store.dispatch('GET_TODO')\\n    }\\n}\\n</script>\\n\\n<style>\\n.horisont {\\n\\n}\\n.horisont * {\\n    display: inline-block;\\n}\\n.form-control {\\n    /* width: 300px; */\\n    margin-bottom: 10px;\\n}\\n\\n.checkbox {\\n    /* margin: auto; */\\n    /* top: 7px; */\\n}\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXVDLEdBQUcsZUFBZSw0QkFBNEIsR0FBRyxpQkFBaUIsc0JBQXNCLDZCQUE2QixHQUFHLGFBQWEsc0JBQXNCLHFCQUFxQixNQUFNLFVBQVUsOElBQThJLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLDZJQUE2SSxvQkFBb0IsdTlCQUF1OUIsVUFBVSxzUUFBc1EsVUFBVSwwUkFBMFIsYUFBYSw4QkFBOEIsaUNBQWlDLGtCQUFrQixtRUFBbUUsT0FBTyw4QkFBOEIsNkZBQTZGLGtCQUFrQix3QkFBd0Isb0xBQW9MLHNEQUFzRCxZQUFZLGdDQUFnQyxrSEFBa0gsNkJBQTZCLHNEQUFzRCw0SUFBNEksNEZBQTRGLHFCQUFxQiw0RUFBNEUsY0FBYyxZQUFZLE9BQU8sa0JBQWtCLDRFQUE0RSxHQUFHLG1DQUFtQyxLQUFLLGVBQWUsNEJBQTRCLEdBQUcsaUJBQWlCLHNCQUFzQiw2QkFBNkIsR0FBRyxlQUFlLHNCQUFzQixxQkFBcUIsTUFBTSxpQ0FBaUM7O0FBRTVtSCIsImZpbGUiOiI5Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaG9yaXNvbnQge1xcbn1cXG4uaG9yaXNvbnQgKiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZvcm0tY29udHJvbCB7XFxuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLmNoZWNrYm94IHtcXG4gICAgLyogbWFyZ2luOiBhdXRvOyAqL1xcbiAgICAvKiB0b3A6IDdweDsgKi9cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvdG9kby1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvSG9tZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQThGQTtDQUVBO0FBQ0E7SUFDQSxzQkFBQTtDQUNBO0FBQ0E7SUFDQSxtQkFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJIb21lLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiPlxcbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19IDxhIGhyZWYgQGNsaWNrPVxcXCJsb2dvdXRcXFwiPmxvZ291dDwvYT48L3A+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbCBwYW5lbC1kZWZhdWx0XFxcIj5cXG4gICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5BZGQgbmV3IHRhc2s8L2gyPlxcblxcbiAgICAgICAgICAgIDxiLWZvcm0gY2xhc3M9XFxcImhvcmlzb250XFxcIiBAc3VibWl0LnByZXZlbnQ9XFxcImFkZF90b2RvXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxiLWlucHV0IGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIHYtbW9kZWw9XFxcIm5ld190b2RvXFxcIiBwbGFjZWhvbGRlcj1cXFwiQWRkIGEgbmV3IHRvZG9cXFwiPjwvYi1pbnB1dD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1idG4gdHlwZT1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuLWJsb2NrXFxcIj5zdWJtaW50PC9iLWJ0bj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9iLWZvcm0+XFxuICAgICAgICAgICAgXFxuICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cXFwidGFibGVcXFwiPlxcbiAgICAgICAgICAgIDx0aGVhZD5cXG4gICAgICAgICAgICAgICAgPHRoPkNoZWNrbWFyayBEb25lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPlRhc2sgbmFtZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD5EZWxldGU8L3RoPlxcbiAgICAgICAgICAgIDwvdGhlYWQ+XFxuXFxuICAgICAgICAgICAgPHRib2R5PlxcbiAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XFxcInggaW4gbmFtZS5zbGljZSgpLnJldmVyc2UoKVxcXCIgOmtleT1cXFwieC5pZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGItZm9ybS1jaGVja2JveCBAaW5wdXQ9XFxcInNldF9iaXJkKHguaWQpXFxcIiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiID48L2ItZm9ybS1jaGVja2JveD48L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHgubmFtZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGItYnRuIHZhcmlhbnQ9XFxcImRhbmdlclxcXCIgQGNsaWNrPVxcXCJkZWxldGVfb25lX3RvZG8oeC5pZClcXFwiPmRlbGV0ZTwvYi1idG4+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG5cXG4gICAgICAgIDwhLS0gPGRpdiB2LWZvcj1cXFwieCBpbiBuYW1lLnNsaWNlKCkucmV2ZXJzZSgpXFxcIiA6a2V5PVxcXCJ4LmlkXFxcIj5cXG4gICAgICAgICAgICB7eyB4Lm5hbWUgfX1cXG4gICAgICAgICAgICA8c3BhbiBAY2xpY2s9XFxcImRlbGV0ZV9vbmVfdG9kbyh4LmlkKVxcXCI+ZGVsZXRlPC9zcGFuPlxcbiAgICAgICAgICAgIDxiLWZvcm0tY2hlY2tib3ggQGlucHV0PVxcXCJzdF9iaXJkKHguaWQpXFxcIiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPjwvYi1mb3JtLWNoZWNrYm94PlxcbiAgICAgICAgPC9kaXY+IC0tPlxcblxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IFxcXCJiYWJlbC1wb2x5ZmlsbFxcXCJcXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnSG9tZScsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIG5ld190b2RvOiAnJyxcXG4gICAgICAgICAgICBjb21wbGV0ZTogZmFsc2VcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcXG4gICAgICAgIHByb2ZpbGU6ICdwcm9maWxlJyxcXG4gICAgICAgIG5hbWU6ICduYW1lJ1xcbiAgICB9KSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgc2V0X2JpcmQoaWQpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpZClcXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLWhlbGxvIHdvcmxkLS0tLS0tLS0tLScpXFxuICAgICAgICAgICAgLy8gYXhpb3MucG9zdCgnL2FwaS90b2RvLycgKyBpZCArICcvJylcXG4gICAgICAgICAgICAvLyAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxcbiAgICAgICAgICAgIC8vIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgZGVsZXRlX29uZV90b2RvKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0RFTEVURV9PTkVfVE9ETycsIGlkKVxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgYWRkX3RvZG8oKSB7XFxuICAgICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FERF9UT0RPJywge1xcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHRoaXMubmV3X3RvZG8sXFxuICAgICAgICAgICAgICAgICd1c2VyJzogdGhpcy5wcm9maWxlLnBrLFxcbiAgICAgICAgICAgICAgICAnY29tcGxldGUnOiB0aGlzLmNvbXBsZXRlXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgdGhpcy5uZXdfdG9kbyA9ICcnLFxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9nb3V0KCkge1xcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxcbiAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgLy90aGlzLmdldF90b2RvKClcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbi5ob3Jpc29udCB7XFxuXFxufVxcbi5ob3Jpc29udCAqIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZm9ybS1jb250cm9sIHtcXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXFxuICAgIC8qIHRvcDogN3B4OyAqL1xcbn1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi04ZGM3Y2NlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})
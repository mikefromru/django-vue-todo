webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#loginPage[data-v-ef68022e] {\\n    col\\n    background: #4381BA;\\n\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AAmFA;IACA;wBACA;;IAEA,aAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <center>\\n        <p>My name is Login</p>\\n        <div>\\n            <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n            <g-signin-button  \\n                    :params=\\\"googleSignInParams\\\" \\n                    @success=\\\"onGoogleSignInSuccess\\\"\\n            >\\n            <b-button variant=\\\"success\\\" id=\\\"btn-google\\\">\\n                Google Signin\\n            </b-button>\\n            </g-signin-button>\\n        </div>\\n        </center>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n#loginPage {\\n    col\\n    background: #4381BA;\\n\\n    height: 100%;\\n}\\n#btn-facebook {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n\\n#btn-google {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLHdEQUF5RCxtQ0FBbUMscUJBQXFCLEdBQUcsa0NBQWtDLG1CQUFtQixnQkFBZ0IsMEJBQTBCLEdBQUcsZ0NBQWdDLG1CQUFtQixnQkFBZ0IsMEJBQTBCLEdBQUcsVUFBVSwrSUFBK0ksTUFBTSxLQUFLLE9BQU8sVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLDRvQkFBNG9CLGtDQUFrQyxrQkFBa0IsbUNBQW1DLGdPQUFnTyxXQUFXLE9BQU8saUJBQWlCLDRDQUE0Qyw4R0FBOEcsb0RBQW9ELDRCQUE0Qix1REFBdUQsWUFBWSw0QkFBNEIsZ0lBQWdJLDZEQUE2RCw0QkFBNEIsdURBQXVELFlBQVksZ0NBQWdDLG9DQUFvQyw2REFBNkQsbURBQW1ELDBDQUEwQyxZQUFZLG1FQUFtRSx1REFBdUQsZUFBZSx3Q0FBd0MsaURBQWlELDJCQUEyQiwySUFBMkksMERBQTBELDREQUE0RCxnRkFBZ0YsaURBQWlELDJGQUEyRixPQUFPLGlGQUFpRixtQkFBbUIsZ0JBQWdCLFdBQVcsT0FBTyxrQkFBa0IseUNBQXlDLEdBQUcsMkNBQTJDLG1DQUFtQyxxQkFBcUIsR0FBRyxpQkFBaUIsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyxpQkFBaUIsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyw2QkFBNkI7O0FBRTVqSCIsImZpbGUiOiIyNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2xvZ2luUGFnZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgY29sXFxuICAgIGJhY2tncm91bmQ6ICM0MzgxQkE7XFxuXFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2J0bi1mYWNlYm9va1tkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM0NDYzQTQ7XFxufVxcbiNidG4tZ29vZ2xlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvdG9kby1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvTG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtRkE7SUFDQTt3QkFDQTs7SUFFQSxhQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGlkPVxcXCJsb2dpblBhZ2VcXFwiPlxcbiAgICAgICAgPGNlbnRlcj5cXG4gICAgICAgIDxwPk15IG5hbWUgaXMgTG9naW48L3A+XFxuICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgIDxiLWJ1dHRvbiBpZD1cXFwiYnRuLWZhY2Vib29rXFxcIiB2YXJpYW50PVxcXCJzdWNjZXNzXFxcIiBAY2xpY2s9XFxcIndpdGhfRmFjZWJvb2tcXFwiPkZhY2Vib29rPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICA8Zy1zaWduaW4tYnV0dG9uICBcXG4gICAgICAgICAgICAgICAgICAgIDpwYXJhbXM9XFxcImdvb2dsZVNpZ25JblBhcmFtc1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICBAc3VjY2Vzcz1cXFwib25Hb29nbGVTaWduSW5TdWNjZXNzXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cXFwic3VjY2Vzc1xcXCIgaWQ9XFxcImJ0bi1nb29nbGVcXFwiPlxcbiAgICAgICAgICAgICAgICBHb29nbGUgU2lnbmluXFxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICA8L2ctc2lnbmluLWJ1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9jZW50ZXI+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdMb2dpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGdvb2dsZVNpZ25JblBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAvLyBjbGllbnRfaWQ6ICc0NzIzMzI2MzI1NTQtczUxMzZlZWQwNGZ1cWxoczlnY2lzNnZlOTlqZHVwcDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9uR29vZ2xlU2lnbkluU3VjY2VzcyAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLlppLmFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9HT09HTEUnLCB7XFxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgd2l0aF9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gRkIuZ2V0QXV0aFJlc3BvbnNlKClbJ2FjY2Vzc1Rva2VuJ11cXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQVVUSF9TT0NJQUxfRkFDRUJPT0snLCB7XFxuICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBhY2Nlc3NfdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgY29ubmVjdFRvRmFjZWJvb2soKSB7XFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChkLCBzLCBpZCkge1xcbiAgICAgICAgICAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XFxuICAgICAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcXG4gICAgICAgICAgICAgICAganMuc3JjID0gXFxcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXFxcIjtcXG4gICAgICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xcbiAgICAgICAgICAgIH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XFxuXFxuICAgICAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgIEZCLmluaXQoe1xcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6ICcxNDk4OTE0MjczNDczNzMwJyxcXG4gICAgICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ3YyLjgnLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBGQi5nZXRMb2dpblN0YXR1cyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS1jb25uZWN0ZWQtLS0nKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPm5vdF9hdXRob3JpemVkJylcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLT5lbHNlJylcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmNvbm5lY3RUb0ZhY2Vib29rKClcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiNsb2dpblBhZ2Uge1xcbiAgICBjb2xcXG4gICAgYmFja2dyb3VuZDogIzQzODFCQTtcXG5cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jYnRuLWZhY2Vib29rIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM0NDYzQTQ7XFxufVxcblxcbiNidG4tZ29vZ2xlIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICNFQTQzMzU7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWVmNjgwMjJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
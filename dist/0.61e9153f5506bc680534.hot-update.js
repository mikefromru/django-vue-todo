webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#btn\\n#loginPage[data-v-ef68022e] {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AAmFA;;IAEA,aAAA;IACA,oBAAA;IACA,aAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <center>\\n        <p>My name is Login</p>\\n        <div id=\\\"btns\\\">\\n            <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n            <g-signin-button  \\n                    :params=\\\"googleSignInParams\\\" \\n                    @success=\\\"onGoogleSignInSuccess\\\"\\n            >\\n            <b-button variant=\\\"success\\\" id=\\\"btn-google\\\">\\n                Google Signin\\n            </b-button>\\n            </g-signin-button>\\n        </div>\\n        </center>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n#btn\\n#loginPage {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n\\n#btn-google {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLDhEQUErRCxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGtDQUFrQyxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGdDQUFnQyxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLFVBQVUsK0lBQStJLE9BQU8sVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyx3cEJBQXdwQixrQ0FBa0Msa0JBQWtCLG1DQUFtQyxnT0FBZ08sV0FBVyxPQUFPLGlCQUFpQiw0Q0FBNEMsOEdBQThHLG9EQUFvRCw0QkFBNEIsdURBQXVELFlBQVksNEJBQTRCLGdJQUFnSSw2REFBNkQsNEJBQTRCLHVEQUF1RCxZQUFZLGdDQUFnQyxvQ0FBb0MsNkRBQTZELG1EQUFtRCwwQ0FBMEMsWUFBWSxtRUFBbUUsdURBQXVELGVBQWUsd0NBQXdDLGlEQUFpRCwyQkFBMkIsMklBQTJJLDBEQUEwRCw0REFBNEQsZ0ZBQWdGLGlEQUFpRCwyRkFBMkYsT0FBTyxpRkFBaUYsbUJBQW1CLGdCQUFnQixXQUFXLE9BQU8sa0JBQWtCLHlDQUF5QyxHQUFHLGlEQUFpRCxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLDZCQUE2Qjs7QUFFOW1IIiwiZmlsZSI6IjI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jYnRuXFxuI2xvZ2luUGFnZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2tbZGF0YS12LWVmNjgwMjJlXSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ2M0E0O1xcbn1cXG4jYnRuLWdvb2dsZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICNFQTQzMzU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBbUZBOztJQUVBLGFBQUE7SUFDQSxvQkFBQTtJQUNBLGFBQUE7Q0FDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0NBQ0FcIixcImZpbGVcIjpcIkxvZ2luLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgaWQ9XFxcImxvZ2luUGFnZVxcXCI+XFxuICAgICAgICA8Y2VudGVyPlxcbiAgICAgICAgPHA+TXkgbmFtZSBpcyBMb2dpbjwvcD5cXG4gICAgICAgIDxkaXYgaWQ9XFxcImJ0bnNcXFwiPlxcbiAgICAgICAgICAgIDxiLWJ1dHRvbiBpZD1cXFwiYnRuLWZhY2Vib29rXFxcIiB2YXJpYW50PVxcXCJzdWNjZXNzXFxcIiBAY2xpY2s9XFxcIndpdGhfRmFjZWJvb2tcXFwiPkZhY2Vib29rPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICA8Zy1zaWduaW4tYnV0dG9uICBcXG4gICAgICAgICAgICAgICAgICAgIDpwYXJhbXM9XFxcImdvb2dsZVNpZ25JblBhcmFtc1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICBAc3VjY2Vzcz1cXFwib25Hb29nbGVTaWduSW5TdWNjZXNzXFxcIlxcbiAgICAgICAgICAgID5cXG4gICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cXFwic3VjY2Vzc1xcXCIgaWQ9XFxcImJ0bi1nb29nbGVcXFwiPlxcbiAgICAgICAgICAgICAgICBHb29nbGUgU2lnbmluXFxuICAgICAgICAgICAgPC9iLWJ1dHRvbj5cXG4gICAgICAgICAgICA8L2ctc2lnbmluLWJ1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9jZW50ZXI+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdMb2dpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGdvb2dsZVNpZ25JblBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAvLyBjbGllbnRfaWQ6ICc0NzIzMzI2MzI1NTQtczUxMzZlZWQwNGZ1cWxoczlnY2lzNnZlOTlqZHVwcDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9uR29vZ2xlU2lnbkluU3VjY2VzcyAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLlppLmFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9HT09HTEUnLCB7XFxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgd2l0aF9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gRkIuZ2V0QXV0aFJlc3BvbnNlKClbJ2FjY2Vzc1Rva2VuJ11cXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQVVUSF9TT0NJQUxfRkFDRUJPT0snLCB7XFxuICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBhY2Nlc3NfdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgY29ubmVjdFRvRmFjZWJvb2soKSB7XFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChkLCBzLCBpZCkge1xcbiAgICAgICAgICAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XFxuICAgICAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcXG4gICAgICAgICAgICAgICAganMuc3JjID0gXFxcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXFxcIjtcXG4gICAgICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xcbiAgICAgICAgICAgIH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XFxuXFxuICAgICAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgIEZCLmluaXQoe1xcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6ICcxNDk4OTE0MjczNDczNzMwJyxcXG4gICAgICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ3YyLjgnLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBGQi5nZXRMb2dpblN0YXR1cyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS1jb25uZWN0ZWQtLS0nKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPm5vdF9hdXRob3JpemVkJylcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLT5lbHNlJylcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmNvbm5lY3RUb0ZhY2Vib29rKClcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiNidG5cXG4jbG9naW5QYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2sge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogIzQ0NjNBNDtcXG59XFxuXFxuI2J0bi1nb29nbGUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZWY2ODAyMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
webpackHotUpdate(0,{

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#loginPage {\\n    background: white;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AA+EA;IACA,kBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template id>\\n    <div>\\n        <p>My name is Login</p>\\n        <b-button variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n        <g-signin-button \\n                  :params=\\\"googleSignInParams\\\" \\n                  @success=\\\"onGoogleSignInSuccess\\\"\\n        >\\n        <b-button variant=\\\"success\\\">\\n            Google Signin\\n        </b-button>\\n        </g-signin-button>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style>\\n#loginPage {\\n    background: white;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/MjJmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLHVDQUF3Qyx3QkFBd0IsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFdBQVcsbWZBQW1mLGtDQUFrQyxrQkFBa0IsbUNBQW1DLGdPQUFnTyxXQUFXLE9BQU8saUJBQWlCLDRDQUE0Qyw4R0FBOEcsb0RBQW9ELDRCQUE0Qix1REFBdUQsWUFBWSw0QkFBNEIsZ0lBQWdJLDZEQUE2RCw0QkFBNEIsdURBQXVELFlBQVksZ0NBQWdDLG9DQUFvQyw2REFBNkQsbURBQW1ELDBDQUEwQyxZQUFZLG1FQUFtRSx1REFBdUQsZUFBZSx3Q0FBd0MsaURBQWlELDJCQUEyQiwySUFBMkksMERBQTBELDREQUE0RCxnRkFBZ0YsaURBQWlELDJGQUEyRixPQUFPLGlGQUFpRixtQkFBbUIsZ0JBQWdCLFdBQVcsT0FBTyxrQkFBa0IseUNBQXlDLEdBQUcsb0NBQW9DLHdCQUF3QixHQUFHLDZCQUE2Qjs7QUFFMTRGIiwiZmlsZSI6IjI2My5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbG9naW5QYWdlIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0VBO0lBQ0Esa0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZSBpZD5cXG4gICAgPGRpdj5cXG4gICAgICAgIDxwPk15IG5hbWUgaXMgTG9naW48L3A+XFxuICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cXFwic3VjY2Vzc1xcXCIgQGNsaWNrPVxcXCJ3aXRoX0ZhY2Vib29rXFxcIj5GYWNlYm9vazwvYi1idXR0b24+XFxuICAgICAgICA8Zy1zaWduaW4tYnV0dG9uIFxcbiAgICAgICAgICAgICAgICAgIDpwYXJhbXM9XFxcImdvb2dsZVNpZ25JblBhcmFtc1xcXCIgXFxuICAgICAgICAgICAgICAgICAgQHN1Y2Nlc3M9XFxcIm9uR29vZ2xlU2lnbkluU3VjY2Vzc1xcXCJcXG4gICAgICAgID5cXG4gICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVxcXCJzdWNjZXNzXFxcIj5cXG4gICAgICAgICAgICBHb29nbGUgU2lnbmluXFxuICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgPC9nLXNpZ25pbi1idXR0b24+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdMb2dpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGdvb2dsZVNpZ25JblBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAvLyBjbGllbnRfaWQ6ICc0NzIzMzI2MzI1NTQtczUxMzZlZWQwNGZ1cWxoczlnY2lzNnZlOTlqZHVwcDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9uR29vZ2xlU2lnbkluU3VjY2VzcyAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLlppLmFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9HT09HTEUnLCB7XFxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgd2l0aF9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gRkIuZ2V0QXV0aFJlc3BvbnNlKClbJ2FjY2Vzc1Rva2VuJ11cXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQVVUSF9TT0NJQUxfRkFDRUJPT0snLCB7XFxuICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBhY2Nlc3NfdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgY29ubmVjdFRvRmFjZWJvb2soKSB7XFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChkLCBzLCBpZCkge1xcbiAgICAgICAgICAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XFxuICAgICAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcXG4gICAgICAgICAgICAgICAganMuc3JjID0gXFxcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXFxcIjtcXG4gICAgICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xcbiAgICAgICAgICAgIH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XFxuXFxuICAgICAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgIEZCLmluaXQoe1xcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6ICcxNDk4OTE0MjczNDczNzMwJyxcXG4gICAgICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ3YyLjgnLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBGQi5nZXRMb2dpblN0YXR1cyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS1jb25uZWN0ZWQtLS0nKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPm5vdF9hdXRob3JpemVkJylcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLT5lbHNlJylcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmNvbm5lY3RUb0ZhY2Vib29rKClcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuI2xvZ2luUGFnZSB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1lZjY4MDIyZVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///263\n");

/***/ })

})
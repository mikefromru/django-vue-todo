webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#btns[data-v-ef68022e] {\\n    display: inline-block;\\n}\\n#loginPage[data-v-ef68022e] {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AAyFA;IACA,sBAAA;CACA;AACA;IACA,aAAA;IACA,oBAAA;IACA,aAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <center>\\n        <p>My name is Login</p>\\n        <div id=\\\"btns\\\">\\n            <div>\\n                <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n            </div>\\n\\n            <div>\\n                <g-signin-button  \\n                        :params=\\\"googleSignInParams\\\" \\n                        @success=\\\"onGoogleSignInSuccess\\\"\\n                >\\n                <b-button variant=\\\"success\\\" id=\\\"btn-google\\\">\\n                    Google Signin\\n                </b-button>\\n                </g-signin-button>\\n            </div>\\n\\n        </div>\\n        </center>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n#btns {\\n    display: inline-block;\\n}\\n#loginPage {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLG1EQUFvRCw0QkFBNEIsR0FBRywrQkFBK0IsbUJBQW1CLDBCQUEwQixtQkFBbUIsR0FBRyxrQ0FBa0MsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyxnQ0FBZ0MsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsOHdCQUE4d0Isa0NBQWtDLGtCQUFrQixtQ0FBbUMsZ09BQWdPLFdBQVcsT0FBTyxpQkFBaUIsNENBQTRDLDhHQUE4RyxvREFBb0QsNEJBQTRCLHVEQUF1RCxZQUFZLDRCQUE0QixnSUFBZ0ksNkRBQTZELDRCQUE0Qix1REFBdUQsWUFBWSxnQ0FBZ0Msb0NBQW9DLDZEQUE2RCxtREFBbUQsMENBQTBDLFlBQVksbUVBQW1FLHVEQUF1RCxlQUFlLHdDQUF3QyxpREFBaUQsMkJBQTJCLDJJQUEySSwwREFBMEQsNERBQTRELGdGQUFnRixpREFBaUQsMkZBQTJGLE9BQU8saUZBQWlGLG1CQUFtQixnQkFBZ0IsV0FBVyxPQUFPLGtCQUFrQix5Q0FBeUMsR0FBRyxzQ0FBc0MsNEJBQTRCLEdBQUcsY0FBYyxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGVBQWUsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyw2QkFBNkI7O0FBRTMwSCIsImZpbGUiOiIyNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2J0bnNbZGF0YS12LWVmNjgwMjJlXSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2xvZ2luUGFnZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2tbZGF0YS12LWVmNjgwMjJlXSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ2M0E0O1xcbn1cXG4jYnRuLWdvb2dsZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICNFQTQzMzU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBeUZBO0lBQ0Esc0JBQUE7Q0FDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwibG9naW5QYWdlXFxcIj5cXG4gICAgICAgIDxjZW50ZXI+XFxuICAgICAgICA8cD5NeSBuYW1lIGlzIExvZ2luPC9wPlxcbiAgICAgICAgPGRpdiBpZD1cXFwiYnRuc1xcXCI+XFxuICAgICAgICAgICAgPGRpdj5cXG4gICAgICAgICAgICAgICAgPGItYnV0dG9uIGlkPVxcXCJidG4tZmFjZWJvb2tcXFwiIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiIEBjbGljaz1cXFwid2l0aF9GYWNlYm9va1xcXCI+RmFjZWJvb2s8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgIDxnLXNpZ25pbi1idXR0b24gIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwYXJhbXM9XFxcImdvb2dsZVNpZ25JblBhcmFtc1xcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgQHN1Y2Nlc3M9XFxcIm9uR29vZ2xlU2lnbkluU3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICAgICAgPlxcbiAgICAgICAgICAgICAgICA8Yi1idXR0b24gdmFyaWFudD1cXFwic3VjY2Vzc1xcXCIgaWQ9XFxcImJ0bi1nb29nbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgR29vZ2xlIFNpZ25pblxcbiAgICAgICAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgICAgICA8L2ctc2lnbmluLWJ1dHRvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9jZW50ZXI+XFxuICAgIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdMb2dpbicsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGdvb2dsZVNpZ25JblBhcmFtczoge1xcbiAgICAgICAgICAgICAgICAvLyBjbGllbnRfaWQ6ICc0NzIzMzI2MzI1NTQtczUxMzZlZWQwNGZ1cWxoczlnY2lzNnZlOTlqZHVwcDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXFxuICAgICAgICAgICAgICAgIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9uR29vZ2xlU2lnbkluU3VjY2VzcyAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLlppLmFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9HT09HTEUnLCB7XFxuICAgICAgICAgICAgICAgIGFjY2Vzc190b2tlbjogdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgd2l0aF9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICBsZXQgYWNjZXNzX3Rva2VuID0gRkIuZ2V0QXV0aFJlc3BvbnNlKClbJ2FjY2Vzc1Rva2VuJ11cXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQVVUSF9TT0NJQUxfRkFDRUJPT0snLCB7XFxuICAgICAgICAgICAgICAgICdhY2Nlc3NfdG9rZW4nOiBhY2Nlc3NfdG9rZW5cXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKVxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICB9LFxcbiAgICAgICAgY29ubmVjdFRvRmFjZWJvb2soKSB7XFxuICAgICAgICAgICAgKGZ1bmN0aW9uIChkLCBzLCBpZCkge1xcbiAgICAgICAgICAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XFxuICAgICAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICBqcyA9IGQuY3JlYXRlRWxlbWVudChzKTsganMuaWQgPSBpZDtcXG4gICAgICAgICAgICAgICAganMuc3JjID0gXFxcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXFxcIjtcXG4gICAgICAgICAgICAgICAgZmpzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGpzLCBmanMpO1xcbiAgICAgICAgICAgIH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XFxuXFxuICAgICAgICAgICAgd2luZG93LmZiQXN5bmNJbml0ID0gZnVuY3Rpb24oKSB7XFxuICAgICAgICAgICAgICAgIEZCLmluaXQoe1xcbiAgICAgICAgICAgICAgICAgICAgYXBwSWQ6ICcxNDk4OTE0MjczNDczNzMwJyxcXG4gICAgICAgICAgICAgICAgICAgIHhmYm1sOiB0cnVlLFxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ3YyLjgnLFxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgICAgICBGQi5nZXRMb2dpblN0YXR1cyhmdW5jdGlvbiAocmVzcG9uc2UpIHtcXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdjb25uZWN0ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS1jb25uZWN0ZWQtLS0nKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09ICdub3RfYXV0aG9yaXplZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPm5vdF9hdXRob3JpemVkJylcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLT5lbHNlJylcXG4gICAgICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH0sXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmNvbm5lY3RUb0ZhY2Vib29rKClcXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcbiNidG5zIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4jbG9naW5QYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2sge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogIzQ0NjNBNDtcXG59XFxuI2J0bi1nb29nbGUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZWY2ODAyMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
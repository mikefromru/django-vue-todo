webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#loginPage[data-v-ef68022e] {\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n}\\n#btn-google[data-v-ef68022e] {\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AA+EA;IACA,oBAAA;IACA,aAAA;CACA;AACA;CAEA;AACA;CAEA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <p>My name is Login</p>\\n        <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n        <g-signin-button id=\\\"btn-google\\\" \\n                  :params=\\\"googleSignInParams\\\" \\n                  @success=\\\"onGoogleSignInSuccess\\\"\\n        >\\n        <b-button variant=\\\"success\\\">\\n            Google Signin\\n        </b-button>\\n        </g-signin-button>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n#loginPage {\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook {\\n\\n}\\n#btn-google {\\n\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLHdEQUF5RCwwQkFBMEIsbUJBQW1CLEdBQUcsa0NBQWtDLEdBQUcsZ0NBQWdDLEdBQUcsVUFBVSwrSUFBK0ksTUFBTSxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyx1aUJBQXVpQixrQ0FBa0Msa0JBQWtCLG1DQUFtQyxnT0FBZ08sV0FBVyxPQUFPLGlCQUFpQiw0Q0FBNEMsOEdBQThHLG9EQUFvRCw0QkFBNEIsdURBQXVELFlBQVksNEJBQTRCLGdJQUFnSSw2REFBNkQsNEJBQTRCLHVEQUF1RCxZQUFZLGdDQUFnQyxvQ0FBb0MsNkRBQTZELG1EQUFtRCwwQ0FBMEMsWUFBWSxtRUFBbUUsdURBQXVELGVBQWUsd0NBQXdDLGlEQUFpRCwyQkFBMkIsMklBQTJJLDBEQUEwRCw0REFBNEQsZ0ZBQWdGLGlEQUFpRCwyRkFBMkYsT0FBTyxpRkFBaUYsbUJBQW1CLGdCQUFnQixXQUFXLE9BQU8sa0JBQWtCLHlDQUF5QyxHQUFHLDJDQUEyQywwQkFBMEIsbUJBQW1CLEdBQUcsaUJBQWlCLEtBQUssZUFBZSxLQUFLLDZCQUE2Qjs7QUFFaHBHIiwiZmlsZSI6IjI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbG9naW5QYWdlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2tbZGF0YS12LWVmNjgwMjJlXSB7XFxufVxcbiNidG4tZ29vZ2xlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWlrZWZyb21ydS9kamFuZ29fYXBwcy90b2RvLWRqYW5nby12dWUvcHJvamVjdC9zcmMvY29tcG9uZW50cy9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStFQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7Q0FFQTtBQUNBO0NBRUFcIixcImZpbGVcIjpcIkxvZ2luLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICAgIDxkaXYgaWQ9XFxcImxvZ2luUGFnZVxcXCI+XFxuICAgICAgICA8cD5NeSBuYW1lIGlzIExvZ2luPC9wPlxcbiAgICAgICAgPGItYnV0dG9uIGlkPVxcXCJidG4tZmFjZWJvb2tcXFwiIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiIEBjbGljaz1cXFwid2l0aF9GYWNlYm9va1xcXCI+RmFjZWJvb2s8L2ItYnV0dG9uPlxcbiAgICAgICAgPGctc2lnbmluLWJ1dHRvbiBpZD1cXFwiYnRuLWdvb2dsZVxcXCIgXFxuICAgICAgICAgICAgICAgICAgOnBhcmFtcz1cXFwiZ29vZ2xlU2lnbkluUGFyYW1zXFxcIiBcXG4gICAgICAgICAgICAgICAgICBAc3VjY2Vzcz1cXFwib25Hb29nbGVTaWduSW5TdWNjZXNzXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgIEdvb2dsZSBTaWduaW5cXG4gICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ctc2lnbmluLWJ1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0xvZ2luJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZ29vZ2xlU2lnbkluUGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIC8vIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkOiAnNDcyMzMyNjMyNTU0LXM1MTM2ZWVkMDRmdXFsaHM5Z2NpczZ2ZTk5amR1cHAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgb25Hb29nbGVTaWduSW5TdWNjZXNzIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuWmkuYWNjZXNzX3Rva2VuXFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FVVEhfU09DSUFMX0dPT0dMRScsIHtcXG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0b2tlblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICB3aXRoX0ZhY2Vib29rKCkge1xcbiAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBGQi5nZXRBdXRoUmVzcG9uc2UoKVsnYWNjZXNzVG9rZW4nXVxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9GQUNFQk9PSycsIHtcXG4gICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBjb25uZWN0VG9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XFxuICAgICAgICAgICAgICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcXG4gICAgICAgICAgICAgICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm47XFxuICAgICAgICAgICAgICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xcbiAgICAgICAgICAgICAgICBqcy5zcmMgPSBcXFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcXFwiO1xcbiAgICAgICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XFxuICAgICAgICAgICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcXG5cXG4gICAgICAgICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgRkIuaW5pdCh7XFxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogJzE0OTg5MTQyNzM0NzM3MzAnLFxcbiAgICAgICAgICAgICAgICAgICAgeGZibWw6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiAndjIuOCcsXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLWNvbm5lY3RlZC0tLScpXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0+bm90X2F1dGhvcml6ZWQnKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPmVsc2UnKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuY29ubmVjdFRvRmFjZWJvb2soKVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuI2xvZ2luUGFnZSB7XFxuICAgIGJhY2tncm91bmQ6ICM0MzgxQkE7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2J0bi1mYWNlYm9vayB7XFxuXFxufVxcbiNidG4tZ29vZ2xlIHtcXG5cXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZWY2ODAyMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
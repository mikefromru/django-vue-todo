webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\nbody[data-v-ef68022e] {\\n    background: wi\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AA+EA;IACA,cAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div>\\n        <p>My name is Login</p>\\n        <b-button variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n        <g-signin-button \\n                  :params=\\\"googleSignInParams\\\" \\n                  @success=\\\"onGoogleSignInSuccess\\\"\\n        >\\n        <b-button variant=\\\"success\\\">\\n            Google Signin\\n        </b-button>\\n        </g-signin-button>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\nbody {\\n    background: wi\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLGtEQUFtRCx1QkFBdUIsVUFBVSwrSUFBK0ksTUFBTSxVQUFVLGdmQUFnZixrQ0FBa0Msa0JBQWtCLG1DQUFtQyxnT0FBZ08sV0FBVyxPQUFPLGlCQUFpQiw0Q0FBNEMsOEdBQThHLG9EQUFvRCw0QkFBNEIsdURBQXVELFlBQVksNEJBQTRCLGdJQUFnSSw2REFBNkQsNEJBQTRCLHVEQUF1RCxZQUFZLGdDQUFnQyxvQ0FBb0MsNkRBQTZELG1EQUFtRCwwQ0FBMEMsWUFBWSxtRUFBbUUsdURBQXVELGVBQWUsd0NBQXdDLGlEQUFpRCwyQkFBMkIsMklBQTJJLDBEQUEwRCw0REFBNEQsZ0ZBQWdGLGlEQUFpRCwyRkFBMkYsT0FBTyxpRkFBaUYsbUJBQW1CLGdCQUFnQixXQUFXLE9BQU8sa0JBQWtCLHlDQUF5QyxHQUFHLHFDQUFxQyx1QkFBdUIsNkJBQTZCOztBQUUxNEYiLCJmaWxlIjoiMjY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHlbZGF0YS12LWVmNjgwMjJlXSB7XFxuICAgIGJhY2tncm91bmQ6IHdpXFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0VBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJMb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2PlxcbiAgICAgICAgPHA+TXkgbmFtZSBpcyBMb2dpbjwvcD5cXG4gICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVxcXCJzdWNjZXNzXFxcIiBAY2xpY2s9XFxcIndpdGhfRmFjZWJvb2tcXFwiPkZhY2Vib29rPC9iLWJ1dHRvbj5cXG4gICAgICAgIDxnLXNpZ25pbi1idXR0b24gXFxuICAgICAgICAgICAgICAgICAgOnBhcmFtcz1cXFwiZ29vZ2xlU2lnbkluUGFyYW1zXFxcIiBcXG4gICAgICAgICAgICAgICAgICBAc3VjY2Vzcz1cXFwib25Hb29nbGVTaWduSW5TdWNjZXNzXFxcIlxcbiAgICAgICAgPlxcbiAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiPlxcbiAgICAgICAgICAgIEdvb2dsZSBTaWduaW5cXG4gICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICA8L2ctc2lnbmluLWJ1dHRvbj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0xvZ2luJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZ29vZ2xlU2lnbkluUGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIC8vIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkOiAnNDcyMzMyNjMyNTU0LXM1MTM2ZWVkMDRmdXFsaHM5Z2NpczZ2ZTk5amR1cHAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgb25Hb29nbGVTaWduSW5TdWNjZXNzIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuWmkuYWNjZXNzX3Rva2VuXFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FVVEhfU09DSUFMX0dPT0dMRScsIHtcXG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0b2tlblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICB3aXRoX0ZhY2Vib29rKCkge1xcbiAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBGQi5nZXRBdXRoUmVzcG9uc2UoKVsnYWNjZXNzVG9rZW4nXVxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9GQUNFQk9PSycsIHtcXG4gICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBjb25uZWN0VG9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XFxuICAgICAgICAgICAgICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcXG4gICAgICAgICAgICAgICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm47XFxuICAgICAgICAgICAgICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xcbiAgICAgICAgICAgICAgICBqcy5zcmMgPSBcXFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcXFwiO1xcbiAgICAgICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XFxuICAgICAgICAgICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcXG5cXG4gICAgICAgICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgRkIuaW5pdCh7XFxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogJzE0OTg5MTQyNzM0NzM3MzAnLFxcbiAgICAgICAgICAgICAgICAgICAgeGZibWw6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiAndjIuOCcsXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLWNvbm5lY3RlZC0tLScpXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0+bm90X2F1dGhvcml6ZWQnKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPmVsc2UnKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuY29ubmVjdFRvRmFjZWJvb2soKVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IHdpXFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWVmNjgwMjJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
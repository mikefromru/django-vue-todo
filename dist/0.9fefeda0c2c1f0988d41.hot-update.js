webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#btns[data-v-ef68022e] {\\n}\\n#loginPage[data-v-ef68022e] {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AAmFA;CAEA;AACA;IACA,aAAA;IACA,oBAAA;IACA,aAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <center>\\n        <p>My name is Login</p>\\n        <div id=\\\"btns\\\">\\n            <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n            <g-signin-button  \\n                    :params=\\\"googleSignInParams\\\" \\n                    @success=\\\"onGoogleSignInSuccess\\\"\\n            >\\n            <b-button variant=\\\"success\\\" id=\\\"btn-google\\\">\\n                Google Signin\\n            </b-button>\\n            </g-signin-button>\\n        </div>\\n        </center>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n#btns {\\n    \\n}\\n#loginPage {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n\\n#btn-google {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLG1EQUFvRCxHQUFHLCtCQUErQixtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGtDQUFrQyxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGdDQUFnQyxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLFVBQVUsK0lBQStJLE1BQU0sS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsd3BCQUF3cEIsa0NBQWtDLGtCQUFrQixtQ0FBbUMsZ09BQWdPLFdBQVcsT0FBTyxpQkFBaUIsNENBQTRDLDhHQUE4RyxvREFBb0QsNEJBQTRCLHVEQUF1RCxZQUFZLDRCQUE0QixnSUFBZ0ksNkRBQTZELDRCQUE0Qix1REFBdUQsWUFBWSxnQ0FBZ0Msb0NBQW9DLDZEQUE2RCxtREFBbUQsMENBQTBDLFlBQVksbUVBQW1FLHVEQUF1RCxlQUFlLHdDQUF3QyxpREFBaUQsMkJBQTJCLDJJQUEySSwwREFBMEQsNERBQTRELGdGQUFnRixpREFBaUQsMkZBQTJGLE9BQU8saUZBQWlGLG1CQUFtQixnQkFBZ0IsV0FBVyxPQUFPLGtCQUFrQix5Q0FBeUMsR0FBRyxzQ0FBc0MsU0FBUyxjQUFjLG1CQUFtQiwwQkFBMEIsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixnQkFBZ0IsMEJBQTBCLEdBQUcsaUJBQWlCLG1CQUFtQixnQkFBZ0IsMEJBQTBCLEdBQUcsNkJBQTZCOztBQUUxcEgiLCJmaWxlIjoiMjY2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNidG5zW2RhdGEtdi1lZjY4MDIyZV0ge1xcbn1cXG4jbG9naW5QYWdlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICM0MzgxQkE7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2J0bi1mYWNlYm9va1tkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM0NDYzQTQ7XFxufVxcbiNidG4tZ29vZ2xlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvdG9kby1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvTG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtRkE7Q0FFQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwibG9naW5QYWdlXFxcIj5cXG4gICAgICAgIDxjZW50ZXI+XFxuICAgICAgICA8cD5NeSBuYW1lIGlzIExvZ2luPC9wPlxcbiAgICAgICAgPGRpdiBpZD1cXFwiYnRuc1xcXCI+XFxuICAgICAgICAgICAgPGItYnV0dG9uIGlkPVxcXCJidG4tZmFjZWJvb2tcXFwiIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiIEBjbGljaz1cXFwid2l0aF9GYWNlYm9va1xcXCI+RmFjZWJvb2s8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgIDxnLXNpZ25pbi1idXR0b24gIFxcbiAgICAgICAgICAgICAgICAgICAgOnBhcmFtcz1cXFwiZ29vZ2xlU2lnbkluUGFyYW1zXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIEBzdWNjZXNzPVxcXCJvbkdvb2dsZVNpZ25JblN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgPlxcbiAgICAgICAgICAgIDxiLWJ1dHRvbiB2YXJpYW50PVxcXCJzdWNjZXNzXFxcIiBpZD1cXFwiYnRuLWdvb2dsZVxcXCI+XFxuICAgICAgICAgICAgICAgIEdvb2dsZSBTaWduaW5cXG4gICAgICAgICAgICA8L2ItYnV0dG9uPlxcbiAgICAgICAgICAgIDwvZy1zaWduaW4tYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2NlbnRlcj5cXG4gICAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0xvZ2luJyxcXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgZ29vZ2xlU2lnbkluUGFyYW1zOiB7XFxuICAgICAgICAgICAgICAgIC8vIGNsaWVudF9pZDogJzQ3MjMzMjYzMjU1NC1zNTEzNmVlZDA0ZnVxbGhzOWdjaXM2dmU5OWpkdXBwMC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSdcXG4gICAgICAgICAgICAgICAgY2xpZW50X2lkOiAnNDcyMzMyNjMyNTU0LXM1MTM2ZWVkMDRmdXFsaHM5Z2NpczZ2ZTk5amR1cHAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgb25Hb29nbGVTaWduSW5TdWNjZXNzIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuWmkuYWNjZXNzX3Rva2VuXFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FVVEhfU09DSUFMX0dPT0dMRScsIHtcXG4gICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiB0b2tlblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICB3aXRoX0ZhY2Vib29rKCkge1xcbiAgICAgICAgICAgIGxldCBhY2Nlc3NfdG9rZW4gPSBGQi5nZXRBdXRoUmVzcG9uc2UoKVsnYWNjZXNzVG9rZW4nXVxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBVVRIX1NPQ0lBTF9GQUNFQk9PSycsIHtcXG4gICAgICAgICAgICAgICAgJ2FjY2Vzc190b2tlbic6IGFjY2Vzc190b2tlblxcbiAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICBjb25uZWN0VG9GYWNlYm9vaygpIHtcXG4gICAgICAgICAgICAoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XFxuICAgICAgICAgICAgICAgIHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcXG4gICAgICAgICAgICAgICAgaWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm47XFxuICAgICAgICAgICAgICAgIGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xcbiAgICAgICAgICAgICAgICBqcy5zcmMgPSBcXFwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcXFwiO1xcbiAgICAgICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XFxuICAgICAgICAgICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdmYWNlYm9vay1qc3NkaycpKTtcXG5cXG4gICAgICAgICAgICB3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbigpIHtcXG4gICAgICAgICAgICAgICAgRkIuaW5pdCh7XFxuICAgICAgICAgICAgICAgICAgICBhcHBJZDogJzE0OTg5MTQyNzM0NzM3MzAnLFxcbiAgICAgICAgICAgICAgICAgICAgeGZibWw6IHRydWUsXFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiAndjIuOCcsXFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgICAgIEZCLmdldExvZ2luU3RhdHVzKGZ1bmN0aW9uIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ2Nvbm5lY3RlZCcpIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLWNvbm5lY3RlZC0tLScpXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gJ25vdF9hdXRob3JpemVkJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0+bm90X2F1dGhvcml6ZWQnKVxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPC0tLS0tLS0tLS0tPmVsc2UnKVxcbiAgICAgICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgICAgICB9KVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuY29ubmVjdFRvRmFjZWJvb2soKVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuI2J0bnMge1xcbiAgICBcXG59XFxuI2xvZ2luUGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzQzODFCQTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jYnRuLWZhY2Vib29rIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM0NDYzQTQ7XFxufVxcblxcbiNidG4tZ29vZ2xlIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICNFQTQzMzU7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWVmNjgwMjJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
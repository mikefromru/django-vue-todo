webpackHotUpdate(0,{

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#loginPage[data-v-ef68022e] {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AAoFA;IACA,aAAA;IACA,oBAAA;IACA,aAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA;AAEA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <center>\\n        <p>My name is Login</p>\\n        <div id=\\\"btns\\\">\\n            <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n            <g-signin-button  \\n                    :params=\\\"googleSignInParams\\\" \\n                    @success=\\\"onGoogleSignInSuccess\\\"\\n            >\\n            <b-button variant=\\\"success\\\" id=\\\"btn-google\\\">\\n                Google Signin\\n            </b-button>\\n            </g-signin-button>\\n        </div>\\n        </center>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n\\n#loginPage {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n\\n#btn-google {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLHdEQUF5RCxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGtDQUFrQyxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGdDQUFnQyxtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLFVBQVUsK0lBQStJLE1BQU0sVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyx3cEJBQXdwQixrQ0FBa0Msa0JBQWtCLG1DQUFtQyxnT0FBZ08sV0FBVyxPQUFPLGlCQUFpQiw0Q0FBNEMsOEdBQThHLG9EQUFvRCw0QkFBNEIsdURBQXVELFlBQVksNEJBQTRCLGdJQUFnSSw2REFBNkQsNEJBQTRCLHVEQUF1RCxZQUFZLGdDQUFnQyxvQ0FBb0MsNkRBQTZELG1EQUFtRCwwQ0FBMEMsWUFBWSxtRUFBbUUsdURBQXVELGVBQWUsd0NBQXdDLGlEQUFpRCwyQkFBMkIsMklBQTJJLDBEQUEwRCw0REFBNEQsZ0ZBQWdGLGlEQUFpRCwyRkFBMkYsT0FBTyxpRkFBaUYsbUJBQW1CLGdCQUFnQixXQUFXLE9BQU8sa0JBQWtCLHlDQUF5QyxHQUFHLDZDQUE2QyxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLDZCQUE2Qjs7QUFFbm1IIiwiZmlsZSI6IjI2Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jbG9naW5QYWdlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6ICM0MzgxQkE7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuI2J0bi1mYWNlYm9va1tkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM0NDYzQTQ7XFxufVxcbiNidG4tZ29vZ2xlW2RhdGEtdi1lZjY4MDIyZV0ge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21pa2Vmcm9tcnUvZGphbmdvX2FwcHMvdG9kby1kamFuZ28tdnVlL3Byb2plY3Qvc3JjL2NvbXBvbmVudHMvc3JjL2NvbXBvbmVudHMvTG9naW4udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvRkE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxvQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJMb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8ZGl2IGlkPVxcXCJsb2dpblBhZ2VcXFwiPlxcbiAgICAgICAgPGNlbnRlcj5cXG4gICAgICAgIDxwPk15IG5hbWUgaXMgTG9naW48L3A+XFxuICAgICAgICA8ZGl2IGlkPVxcXCJidG5zXFxcIj5cXG4gICAgICAgICAgICA8Yi1idXR0b24gaWQ9XFxcImJ0bi1mYWNlYm9va1xcXCIgdmFyaWFudD1cXFwic3VjY2Vzc1xcXCIgQGNsaWNrPVxcXCJ3aXRoX0ZhY2Vib29rXFxcIj5GYWNlYm9vazwvYi1idXR0b24+XFxuICAgICAgICAgICAgPGctc2lnbmluLWJ1dHRvbiAgXFxuICAgICAgICAgICAgICAgICAgICA6cGFyYW1zPVxcXCJnb29nbGVTaWduSW5QYXJhbXNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgQHN1Y2Nlc3M9XFxcIm9uR29vZ2xlU2lnbkluU3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiIGlkPVxcXCJidG4tZ29vZ2xlXFxcIj5cXG4gICAgICAgICAgICAgICAgR29vZ2xlIFNpZ25pblxcbiAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgPC9nLXNpZ25pbi1idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvY2VudGVyPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnTG9naW4nLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBnb29nbGVTaWduSW5QYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgLy8gY2xpZW50X2lkOiAnNDcyMzMyNjMyNTU0LXM1MTM2ZWVkMDRmdXFsaHM5Z2NpczZ2ZTk5amR1cHAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQ6ICc0NzIzMzI2MzI1NTQtczUxMzZlZWQwNGZ1cWxoczlnY2lzNnZlOTlqZHVwcDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBvbkdvb2dsZVNpZ25JblN1Y2Nlc3MgKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5aaS5hY2Nlc3NfdG9rZW5cXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQVVUSF9TT0NJQUxfR09PR0xFJywge1xcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRva2VuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdpdGhfRmFjZWJvb2soKSB7XFxuICAgICAgICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IEZCLmdldEF1dGhSZXNwb25zZSgpWydhY2Nlc3NUb2tlbiddXFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FVVEhfU09DSUFMX0ZBQ0VCT09LJywge1xcbiAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogYWNjZXNzX3Rva2VuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbm5lY3RUb0ZhY2Vib29rKCkge1xcbiAgICAgICAgICAgIChmdW5jdGlvbiAoZCwgcywgaWQpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xcbiAgICAgICAgICAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcXG4gICAgICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XFxuICAgICAgICAgICAgICAgIGpzLnNyYyA9IFxcXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1xcXCI7XFxuICAgICAgICAgICAgICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcXG4gICAgICAgICAgICB9KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xcblxcbiAgICAgICAgICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgICAgICBGQi5pbml0KHtcXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiAnMTQ5ODkxNDI3MzQ3MzczMCcsXFxuICAgICAgICAgICAgICAgICAgICB4ZmJtbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICd2Mi44JyxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tY29ubmVjdGVkLS0tJylcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLT5ub3RfYXV0aG9yaXplZCcpXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0+ZWxzZScpXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5jb25uZWN0VG9GYWNlYm9vaygpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXG4jbG9naW5QYWdlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2sge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogIzQ0NjNBNDtcXG59XFxuXFxuI2J0bi1nb29nbGUge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgYmFja2dyb3VuZDogI0VBNDMzNTtcXG59XFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZWY2ODAyMmVcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
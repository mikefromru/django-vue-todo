webpackHotUpdate(0,{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { attrs: { id: \"loginPage\" } },\n    [\n      _c(\"center\", [\n        _c(\"p\", [_vm._v(\"My name is Login\")]),\n        _vm._v(\" \"),\n        _c(\n          \"div\",\n          { attrs: { id: \"btns\" } },\n          [\n            _c(\n              \"div\",\n              [\n                _c(\n                  \"b-button\",\n                  {\n                    attrs: { id: \"btn-facebook\", variant: \"success\" },\n                    on: { click: _vm.with_Facebook }\n                  },\n                  [_vm._v(\"Facebook\")]\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\n              \"g-signin-button\",\n              {\n                attrs: { params: _vm.googleSignInParams },\n                on: { success: _vm.onGoogleSignInSuccess }\n              },\n              [\n                _c(\n                  \"b-button\",\n                  { attrs: { variant: \"success\", id: \"btn-google\" } },\n                  [_vm._v(\"\\n            Google Signin\\n        \")]\n                )\n              ],\n              1\n            )\n          ],\n          1\n        )\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(11)      .rerender(\"data-v-ef68022e\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/MmM5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLFNBQVMsa0JBQWtCLEVBQUU7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxTQUFTLGFBQWEsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5Q0FBeUM7QUFDckUseUJBQXlCO0FBQ3pCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUNBQWlDO0FBQ3pELHFCQUFxQjtBQUNyQixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsdUNBQXVDLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjI2NS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImxvZ2luUGFnZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcImNlbnRlclwiLCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiTXkgbmFtZSBpcyBMb2dpblwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgYXR0cnM6IHsgaWQ6IFwiYnRuc1wiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJidG4tZmFjZWJvb2tcIiwgdmFyaWFudDogXCJzdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS53aXRoX0ZhY2Vib29rIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRmFjZWJvb2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImctc2lnbmluLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcGFyYW1zOiBfdm0uZ29vZ2xlU2lnbkluUGFyYW1zIH0sXG4gICAgICAgICAgICAgICAgb246IHsgc3VjY2VzczogX3ZtLm9uR29vZ2xlU2lnbkluU3VjY2VzcyB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdmFyaWFudDogXCJzdWNjZXNzXCIsIGlkOiBcImJ0bi1nb29nbGVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgR29vZ2xlIFNpZ25pblxcbiAgICAgICAgXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1lZjY4MDIyZVwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWVmNjgwMjJlXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///265\n");

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(14)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n#btns[data-v-ef68022e] {\\n    display: inline-block;\\n}\\n#loginPage[data-v-ef68022e] {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google[data-v-ef68022e] {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Login.vue\"],\"names\":[],\"mappings\":\";AAsFA;IACA,sBAAA;CACA;AACA;IACA,aAAA;IACA,oBAAA;IACA,aAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA;AACA;IACA,aAAA;IACA,UAAA;IACA,oBAAA;CACA\",\"file\":\"Login.vue\",\"sourcesContent\":[\"<template>\\n    <div id=\\\"loginPage\\\">\\n        <center>\\n        <p>My name is Login</p>\\n        <div id=\\\"btns\\\">\\n            <div>\\n\\n            <b-button id=\\\"btn-facebook\\\" variant=\\\"success\\\" @click=\\\"with_Facebook\\\">Facebook</b-button>\\n            </div>\\n            <g-signin-button  \\n                    :params=\\\"googleSignInParams\\\" \\n                    @success=\\\"onGoogleSignInSuccess\\\"\\n            >\\n            <b-button variant=\\\"success\\\" id=\\\"btn-google\\\">\\n                Google Signin\\n            </b-button>\\n            </g-signin-button>\\n        </div>\\n        </center>\\n    </div>\\n</template>\\n\\n<script>\\nexport default {\\n    name: 'Login',\\n    data() {\\n        return {\\n            googleSignInParams: {\\n                // client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n                client_id: '472332632554-s5136eed04fuqlhs9gcis6ve99jdupp0.apps.googleusercontent.com'\\n            }\\n        }\\n    },\\n    methods: {\\n        onGoogleSignInSuccess (response) {\\n            const token = response.Zi.access_token\\n            this.$store.dispatch('AUTH_SOCIAL_GOOGLE', {\\n                access_token: token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        with_Facebook() {\\n            let access_token = FB.getAuthResponse()['accessToken']\\n            this.$store.dispatch('AUTH_SOCIAL_FACEBOOK', {\\n                'access_token': access_token\\n            })\\n            .then(() => {\\n                this.$router.push('/')\\n            })\\n        },\\n        connectToFacebook() {\\n            (function (d, s, id) {\\n                var js, fjs = d.getElementsByTagName(s)[0];\\n                if (d.getElementById(id)) return;\\n                js = d.createElement(s); js.id = id;\\n                js.src = \\\"//connect.facebook.net/en_US/sdk.js\\\";\\n                fjs.parentNode.insertBefore(js, fjs);\\n            }(document, 'script', 'facebook-jssdk'));\\n\\n            window.fbAsyncInit = function() {\\n                FB.init({\\n                    appId: '1498914273473730',\\n                    xfbml: true,\\n                    version: 'v2.8',\\n                })\\n                FB.getLoginStatus(function (response) {\\n                    if (response.status === 'connected') {\\n                         console.log('---connected---')\\n                    } else if (response.status === 'not_authorized') {\\n                        console.log('<----------->not_authorized')\\n                    } else {\\n                        console.log('<----------->else')\\n                    }\\n                })\\n            }\\n        }\\n    },\\n    created() {\\n        this.connectToFacebook()\\n    }\\n}\\n</script>\\n\\n<style scoped>\\n#btns {\\n    display: inline-block;\\n}\\n#loginPage {\\n    color: white;\\n    background: #4381BA;\\n    height: 100%;\\n}\\n#btn-facebook {\\n    width: 150px;\\n    border: 0;\\n    background: #4463A4;\\n}\\n#btn-google {\\n    width: 150px;\\n    border: 0;\\n    background: #EA4335;\\n}\\n</style>\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWU/ODFlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOzs7QUFHQTtBQUNBLG1EQUFvRCw0QkFBNEIsR0FBRywrQkFBK0IsbUJBQW1CLDBCQUEwQixtQkFBbUIsR0FBRyxrQ0FBa0MsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyxnQ0FBZ0MsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyxVQUFVLCtJQUErSSxNQUFNLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsaXNCQUFpc0Isa0NBQWtDLGtCQUFrQixtQ0FBbUMsZ09BQWdPLFdBQVcsT0FBTyxpQkFBaUIsNENBQTRDLDhHQUE4RyxvREFBb0QsNEJBQTRCLHVEQUF1RCxZQUFZLDRCQUE0QixnSUFBZ0ksNkRBQTZELDRCQUE0Qix1REFBdUQsWUFBWSxnQ0FBZ0Msb0NBQW9DLDZEQUE2RCxtREFBbUQsMENBQTBDLFlBQVksbUVBQW1FLHVEQUF1RCxlQUFlLHdDQUF3QyxpREFBaUQsMkJBQTJCLDJJQUEySSwwREFBMEQsNERBQTRELGdGQUFnRixpREFBaUQsMkZBQTJGLE9BQU8saUZBQWlGLG1CQUFtQixnQkFBZ0IsV0FBVyxPQUFPLGtCQUFrQix5Q0FBeUMsR0FBRyxzQ0FBc0MsNEJBQTRCLEdBQUcsY0FBYyxtQkFBbUIsMEJBQTBCLG1CQUFtQixHQUFHLGlCQUFpQixtQkFBbUIsZ0JBQWdCLDBCQUEwQixHQUFHLGVBQWUsbUJBQW1CLGdCQUFnQiwwQkFBMEIsR0FBRyw2QkFBNkI7O0FBRTl2SCIsImZpbGUiOiIyNjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuI2J0bnNbZGF0YS12LWVmNjgwMjJlXSB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2xvZ2luUGFnZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDM4MUJBO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbiNidG4tZmFjZWJvb2tbZGF0YS12LWVmNjgwMjJlXSB7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjNDQ2M0E0O1xcbn1cXG4jYnRuLWdvb2dsZVtkYXRhLXYtZWY2ODAyMmVdIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICNFQTQzMzU7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBc0ZBO0lBQ0Esc0JBQUE7Q0FDQTtBQUNBO0lBQ0EsYUFBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtDQUNBO0FBQ0E7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFDQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0Esb0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTG9naW4udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG4gICAgPGRpdiBpZD1cXFwibG9naW5QYWdlXFxcIj5cXG4gICAgICAgIDxjZW50ZXI+XFxuICAgICAgICA8cD5NeSBuYW1lIGlzIExvZ2luPC9wPlxcbiAgICAgICAgPGRpdiBpZD1cXFwiYnRuc1xcXCI+XFxuICAgICAgICAgICAgPGRpdj5cXG5cXG4gICAgICAgICAgICA8Yi1idXR0b24gaWQ9XFxcImJ0bi1mYWNlYm9va1xcXCIgdmFyaWFudD1cXFwic3VjY2Vzc1xcXCIgQGNsaWNrPVxcXCJ3aXRoX0ZhY2Vib29rXFxcIj5GYWNlYm9vazwvYi1idXR0b24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGctc2lnbmluLWJ1dHRvbiAgXFxuICAgICAgICAgICAgICAgICAgICA6cGFyYW1zPVxcXCJnb29nbGVTaWduSW5QYXJhbXNcXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgQHN1Y2Nlc3M9XFxcIm9uR29vZ2xlU2lnbkluU3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICA+XFxuICAgICAgICAgICAgPGItYnV0dG9uIHZhcmlhbnQ9XFxcInN1Y2Nlc3NcXFwiIGlkPVxcXCJidG4tZ29vZ2xlXFxcIj5cXG4gICAgICAgICAgICAgICAgR29vZ2xlIFNpZ25pblxcbiAgICAgICAgICAgIDwvYi1idXR0b24+XFxuICAgICAgICAgICAgPC9nLXNpZ25pbi1idXR0b24+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvY2VudGVyPlxcbiAgICA8L2Rpdj5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnTG9naW4nLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBnb29nbGVTaWduSW5QYXJhbXM6IHtcXG4gICAgICAgICAgICAgICAgLy8gY2xpZW50X2lkOiAnNDcyMzMyNjMyNTU0LXM1MTM2ZWVkMDRmdXFsaHM5Z2NpczZ2ZTk5amR1cHAwLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJ1xcbiAgICAgICAgICAgICAgICBjbGllbnRfaWQ6ICc0NzIzMzI2MzI1NTQtczUxMzZlZWQwNGZ1cWxoczlnY2lzNnZlOTlqZHVwcDAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBvbkdvb2dsZVNpZ25JblN1Y2Nlc3MgKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5aaS5hY2Nlc3NfdG9rZW5cXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnQVVUSF9TT0NJQUxfR09PR0xFJywge1xcbiAgICAgICAgICAgICAgICBhY2Nlc3NfdG9rZW46IHRva2VuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdpdGhfRmFjZWJvb2soKSB7XFxuICAgICAgICAgICAgbGV0IGFjY2Vzc190b2tlbiA9IEZCLmdldEF1dGhSZXNwb25zZSgpWydhY2Nlc3NUb2tlbiddXFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FVVEhfU09DSUFMX0ZBQ0VCT09LJywge1xcbiAgICAgICAgICAgICAgICAnYWNjZXNzX3Rva2VuJzogYWNjZXNzX3Rva2VuXFxuICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvJylcXG4gICAgICAgICAgICB9KVxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbm5lY3RUb0ZhY2Vib29rKCkge1xcbiAgICAgICAgICAgIChmdW5jdGlvbiAoZCwgcywgaWQpIHtcXG4gICAgICAgICAgICAgICAgdmFyIGpzLCBmanMgPSBkLmdldEVsZW1lbnRzQnlUYWdOYW1lKHMpWzBdO1xcbiAgICAgICAgICAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkpIHJldHVybjtcXG4gICAgICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XFxuICAgICAgICAgICAgICAgIGpzLnNyYyA9IFxcXCIvL2Nvbm5lY3QuZmFjZWJvb2submV0L2VuX1VTL3Nkay5qc1xcXCI7XFxuICAgICAgICAgICAgICAgIGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcXG4gICAgICAgICAgICB9KGRvY3VtZW50LCAnc2NyaXB0JywgJ2ZhY2Vib29rLWpzc2RrJykpO1xcblxcbiAgICAgICAgICAgIHdpbmRvdy5mYkFzeW5jSW5pdCA9IGZ1bmN0aW9uKCkge1xcbiAgICAgICAgICAgICAgICBGQi5pbml0KHtcXG4gICAgICAgICAgICAgICAgICAgIGFwcElkOiAnMTQ5ODkxNDI3MzQ3MzczMCcsXFxuICAgICAgICAgICAgICAgICAgICB4ZmJtbDogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICd2Mi44JyxcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICAgICAgRkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XFxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tY29ubmVjdGVkLS0tJylcXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnbm90X2F1dGhvcml6ZWQnKSB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJzwtLS0tLS0tLS0tLT5ub3RfYXV0aG9yaXplZCcpXFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc8LS0tLS0tLS0tLS0+ZWxzZScpXFxuICAgICAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5jb25uZWN0VG9GYWNlYm9vaygpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4jYnRucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuI2xvZ2luUGFnZSB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogIzQzODFCQTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jYnRuLWZhY2Vib29rIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICM0NDYzQTQ7XFxufVxcbiNidG4tZ29vZ2xlIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGJhY2tncm91bmQ6ICNFQTQzMzU7XFxufVxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWVmNjgwMjJlXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6ZmFsc2V9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Mb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDI2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///266\n");

/***/ })

})
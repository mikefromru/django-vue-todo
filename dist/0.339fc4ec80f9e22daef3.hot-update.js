webpackHotUpdate(0,{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container col-sm-8 col-sm-offset-2\" }, [\n    _c(\"p\", [\n      _vm._v(\"Welcome to Todo, \" + _vm._s(_vm.profile.username) + \" \"),\n      _c(\"a\", { attrs: { href: \"\" }, on: { click: _vm.logout } }, [\n        _vm._v(\"logout\")\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"panel\" },\n      [\n        _c(\"h2\", { staticClass: \"text-center\" }, [_vm._v(\"Add new task\")]),\n        _vm._v(\" \"),\n        _c(\n          \"b-form\",\n          {\n            attrs: { inline: \"\" },\n            on: {\n              submit: function($event) {\n                $event.preventDefault()\n                return _vm.test($event)\n              }\n            }\n          },\n          [\n            _c(\"b-input\", {\n              attrs: { name: \"test\", \"aria-placeholder\": \"test test test\" },\n              model: {\n                value: _vm.model_test,\n                callback: function($$v) {\n                  _vm.model_test = $$v\n                },\n                expression: \"model_test\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"b-btn\", { attrs: { type: \"submit\" } }, [_vm._v(\"test\")])\n          ],\n          1\n        ),\n        _vm._v(\" \"),\n        _c(\n          \"b-form\",\n          {\n            attrs: { inline: \"\" },\n            on: {\n              submit: function($event) {\n                $event.preventDefault()\n                return _vm.add_todo($event)\n              }\n            }\n          },\n          [\n            _c(\"b-input\", {\n              staticClass: \"mb-2 mr-sm-2 mb-sm-0\",\n              attrs: { placeholder: \"Add a new todo\" },\n              model: {\n                value: _vm.new_todo,\n                callback: function($$v) {\n                  _vm.new_todo = $$v\n                },\n                expression: \"new_todo\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"b-btn\", { attrs: { type: \"submit\" } }, [_vm._v(\"submit\")])\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        _vm._l(_vm.name.slice().reverse(), function(x) {\n          return _c(\"tr\", { key: x.id }, [\n            _c(\n              \"td\",\n              [\n                _c(\"b-form-checkbox-group\", [\n                  x.complete\n                    ? _c(\n                        \"div\",\n                        [\n                          _c(\"b-form-checkbox\", {\n                            staticClass: \"checkbox\",\n                            on: {\n                              input: function($event) {\n                                _vm.set_bird(x.id)\n                              }\n                            },\n                            model: {\n                              value: _vm.complete,\n                              callback: function($$v) {\n                                _vm.complete = $$v\n                              },\n                              expression: \"complete\"\n                            }\n                          })\n                        ],\n                        1\n                      )\n                    : _vm._e()\n                ])\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(_vm._s(x.complete))]),\n            _vm._v(\" \"),\n            _c(\"td\", [_vm._v(_vm._s(x.name))]),\n            _vm._v(\" \"),\n            _c(\n              \"td\",\n              [\n                _c(\n                  \"b-btn\",\n                  {\n                    attrs: { variant: \"danger\" },\n                    on: {\n                      click: function($event) {\n                        _vm.delete_one_todo(x.id)\n                      }\n                    }\n                  },\n                  [_vm._v(\"delete\")]\n                )\n              ],\n              1\n            )\n          ])\n        })\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"th\", [_vm._v(\"Checkmark Done\")]),\n      _vm._v(\" \"),\n      _c(\"th\", [_vm._v(\"Completed\")]),\n      _vm._v(\" \"),\n      _c(\"th\", [_vm._v(\"Task name\")]),\n      _vm._v(\" \"),\n      _c(\"th\", [_vm._v(\"Delete\")])\n    ])\n  }\n]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(42)      .rerender(\"data-v-8dc7cce2\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT8zNGE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFvRDtBQUN4RTtBQUNBO0FBQ0EsZUFBZSxTQUFTLFdBQVcsT0FBTyxvQkFBb0IsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QjtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLHNCQUFzQixxREFBcUQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHlCQUF5QixTQUFTLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGFBQWE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnQ0FBZ0M7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHlCQUF5QixTQUFTLGlCQUFpQixFQUFFO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiNDc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lciBjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcIiB9LCBbXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcIldlbGNvbWUgdG8gVG9kbywgXCIgKyBfdm0uX3MoX3ZtLnByb2ZpbGUudXNlcm5hbWUpICsgXCIgXCIpLFxuICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9LCBvbjogeyBjbGljazogX3ZtLmxvZ291dCB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwibG9nb3V0XCIpXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJwYW5lbFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaDJcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sIFtfdm0uX3YoXCJBZGQgbmV3IHRhc2tcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJiLWZvcm1cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBpbmxpbmU6IFwiXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRlc3QoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImItaW5wdXRcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInRlc3RcIiwgXCJhcmlhLXBsYWNlaG9sZGVyXCI6IFwidGVzdCB0ZXN0IHRlc3RcIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kZWxfdGVzdCxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ubW9kZWxfdGVzdCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RlbF90ZXN0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJiLWJ0blwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSB9LCBbX3ZtLl92KFwidGVzdFwiKV0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYi1mb3JtXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgaW5saW5lOiBcIlwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRfdG9kbygkZXZlbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiYi1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTIgbXItc20tMiBtYi1zbS0wXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIkFkZCBhIG5ldyB0b2RvXCIgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm5ld190b2RvLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5uZXdfdG9kbyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuZXdfdG9kb1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiYi1idG5cIiwgeyBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0gfSwgW192bS5fdihcInN1Ym1pdFwiKV0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZVwiIH0sIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICBfdm0uX2woX3ZtLm5hbWUuc2xpY2UoKS5yZXZlcnNlKCksIGZ1bmN0aW9uKHgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogeC5pZCB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tY2hlY2tib3gtZ3JvdXBcIiwgW1xuICAgICAgICAgICAgICAgICAgeC5jb21wbGV0ZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJiLWZvcm0tY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNldF9iaXJkKHguaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jb21wbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbXBsZXRlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoeC5jb21wbGV0ZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyh4Lm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYi1idG5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdmFyaWFudDogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZWxldGVfb25lX3RvZG8oeC5pZClcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZGVsZXRlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ2hlY2ttYXJrIERvbmVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDb21wbGV0ZWRcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUYXNrIG5hbWVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJEZWxldGVcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxudmFyIGVzRXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmV4cG9ydCBkZWZhdWx0IGVzRXhwb3J0c1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi04ZGM3Y2NlMlwiLCBlc0V4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LThkYzdjY2UyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2NvbXBvbmVudHMvSG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///476\n");

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.checkbox {\\n    /* margin: auto; */\\n    /* top: 7px; */\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AAyGA;IACA,mBAAA;IACA,eAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <!-- <b-container> -->\\n    <div class=\\\"container col-sm-8 col-sm-offset-2\\\">\\n        <p>Welcome to Todo, {{ profile.username }} <a href @click=\\\"logout\\\">logout</a></p>\\n        <div class=\\\"panel\\\">\\n           \\n            <h2 class=\\\"text-center\\\">Add new task</h2>\\n\\n            <b-form inline @submit.prevent=\\\"test\\\">\\n                <b-input name=\\\"test\\\" v-model=\\\"model_test\\\" aria-placeholder=\\\"test test test\\\"></b-input>\\n                <b-btn type=\\\"submit\\\">test</b-btn>\\n            </b-form>\\n\\n            <b-form inline @submit.prevent=\\\"add_todo\\\">\\n                    <b-input class=\\\"mb-2 mr-sm-2 mb-sm-0\\\" v-model=\\\"new_todo\\\" placeholder=\\\"Add a new todo\\\"></b-input>\\n                    <b-btn type=\\\"submit\\\">submit</b-btn>\\n            </b-form>\\n            \\n        </div>\\n\\n        <table class=\\\"table\\\">\\n            <thead>\\n                <th>Checkmark Done</th>\\n                <th>Completed</th>\\n                <th>Task name</th>\\n                <th>Delete</th>\\n            </thead>\\n\\n            <tbody>\\n                <tr v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\">\\n                    <td>\\n                        <b-form-checkbox-group>\\n                            <div v-if=\\\"x.complete\\\">\\n                            <b-form-checkbox v-model=complete @input=\\\"set_bird(x.id)\\\" class=\\\"checkbox\\\" ></b-form-checkbox>\\n                            <!-- <b-form-checkbox checked=\\\"true\\\" v-model=\\\"complete\\\" @input=\\\"set_bird(x.id)\\\" class=\\\"checkbox\\\" ></b-form-checkbox> -->\\n                            </div>\\n                        </b-form-checkbox-group>\\n                    </td>\\n                    <td>{{ x.complete }}</td>\\n                    <td>{{ x.name }}</td>\\n                    <td><b-btn variant=\\\"danger\\\" @click=\\\"delete_one_todo(x.id)\\\">delete</b-btn></td>\\n                </tr>\\n            </tbody>\\n        </table>\\n\\n    </div>\\n    <!-- </b-container> -->\\n</template>\\n\\n<script>\\nimport \\\"babel-polyfill\\\"\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            model_test: 'test',\\n            new_todo: '',\\n            complete: true\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name'\\n    }),\\n    methods: {\\n        set_bird(id) {\\n            console.log(this.complete, id)\\n            if (this.complete[0] === true) {\\n                axios.patch('/api/todo/' + id + '/', {'complete': true})\\n                .then(response => {\\n                })\\n            } else {\\n                axios.patch('/api/todo/' + id + '/', {'complete': false})\\n            }\\n        },\\n        delete_one_todo(id) {\\n            this.$store.dispatch('DELETE_ONE_TODO', id)\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        async add_todo() {\\n            await this.$store.dispatch('ADD_TODO', {\\n                'name': this.new_todo,\\n                'user': this.profile.pk,\\n                'complete': this.complete\\n            }),\\n            this.new_todo = '',\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        //this.get_todo()\\n        this.$store.dispatch('GET_TODO')\\n    }\\n}\\n</script>\\n\\n<style>\\n\\n.checkbox {\\n    /* margin: auto; */\\n    /* top: 7px; */\\n}\\n\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXVDLHNCQUFzQixxQkFBcUIsTUFBTSxZQUFZLDhJQUE4SSxNQUFNLFdBQVcsVUFBVSx5S0FBeUssb0JBQW9CLHNoREFBc2hELGNBQWMsaUNBQWlDLFVBQVUsZ1RBQWdULGFBQWEsOEJBQThCLGlDQUFpQyxrQkFBa0IsbUdBQW1HLE9BQU8sOEJBQThCLDZGQUE2RixrQkFBa0Isd0JBQXdCLDBGQUEwRix3REFBd0QsaUJBQWlCLHNDQUFzQyxtQkFBbUIsZ0JBQWdCLE9BQU8sd0RBQXdELGtCQUFrQixnQkFBZ0IsV0FBVyxnQ0FBZ0Msa0hBQWtILDZCQUE2QixzREFBc0QsNElBQTRJLDRGQUE0RixxQkFBcUIsNEVBQTRFLGNBQWMsWUFBWSxPQUFPLGtCQUFrQiw0RUFBNEUsR0FBRyxxQ0FBcUMsc0JBQXNCLHFCQUFxQixNQUFNLG1DQUFtQzs7QUFFdnpIIiwiZmlsZSI6Ijk2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jaGVja2JveCB7XFxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cXG4gICAgLyogdG9wOiA3cHg7ICovXFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5R0E7SUFDQSxtQkFBQTtJQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSG9tZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8IS0tIDxiLWNvbnRhaW5lcj4gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiPlxcbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19IDxhIGhyZWYgQGNsaWNrPVxcXCJsb2dvdXRcXFwiPmxvZ291dDwvYT48L3A+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5BZGQgbmV3IHRhc2s8L2gyPlxcblxcbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lIEBzdWJtaXQucHJldmVudD1cXFwidGVzdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxiLWlucHV0IG5hbWU9XFxcInRlc3RcXFwiIHYtbW9kZWw9XFxcIm1vZGVsX3Rlc3RcXFwiIGFyaWEtcGxhY2Vob2xkZXI9XFxcInRlc3QgdGVzdCB0ZXN0XFxcIj48L2ItaW5wdXQ+XFxuICAgICAgICAgICAgICAgIDxiLWJ0biB0eXBlPVxcXCJzdWJtaXRcXFwiPnRlc3Q8L2ItYnRuPlxcbiAgICAgICAgICAgIDwvYi1mb3JtPlxcblxcbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lIEBzdWJtaXQucHJldmVudD1cXFwiYWRkX3RvZG9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItaW5wdXQgY2xhc3M9XFxcIm1iLTIgbXItc20tMiBtYi1zbS0wXFxcIiB2LW1vZGVsPVxcXCJuZXdfdG9kb1xcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZCBhIG5ldyB0b2RvXFxcIj48L2ItaW5wdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1idG4gdHlwZT1cXFwic3VibWl0XFxcIj5zdWJtaXQ8L2ItYnRuPlxcbiAgICAgICAgICAgIDwvYi1mb3JtPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0aD5DaGVja21hcmsgRG9uZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD5Db21wbGV0ZWQ8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGg+VGFzayBuYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cXFwieCBpbiBuYW1lLnNsaWNlKCkucmV2ZXJzZSgpXFxcIiA6a2V5PVxcXCJ4LmlkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWNoZWNrYm94LWdyb3VwPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XFxcInguY29tcGxldGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Yi1mb3JtLWNoZWNrYm94IHYtbW9kZWw9Y29tcGxldGUgQGlucHV0PVxcXCJzZXRfYmlyZCh4LmlkKVxcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIiA+PC9iLWZvcm0tY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGItZm9ybS1jaGVja2JveCBjaGVja2VkPVxcXCJ0cnVlXFxcIiB2LW1vZGVsPVxcXCJjb21wbGV0ZVxcXCIgQGlucHV0PVxcXCJzZXRfYmlyZCh4LmlkKVxcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIiA+PC9iLWZvcm0tY2hlY2tib3g+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ItZm9ybS1jaGVja2JveC1ncm91cD5cXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgeC5jb21wbGV0ZSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgeC5uYW1lIH19PC90ZD5cXG4gICAgICAgICAgICAgICAgICAgIDx0ZD48Yi1idG4gdmFyaWFudD1cXFwiZGFuZ2VyXFxcIiBAY2xpY2s9XFxcImRlbGV0ZV9vbmVfdG9kbyh4LmlkKVxcXCI+ZGVsZXRlPC9iLWJ0bj48L3RkPlxcbiAgICAgICAgICAgICAgICA8L3RyPlxcbiAgICAgICAgICAgIDwvdGJvZHk+XFxuICAgICAgICA8L3RhYmxlPlxcblxcbiAgICA8L2Rpdj5cXG4gICAgPCEtLSA8L2ItY29udGFpbmVyPiAtLT5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuaW1wb3J0IFxcXCJiYWJlbC1wb2x5ZmlsbFxcXCJcXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnSG9tZScsXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIG1vZGVsX3Rlc3Q6ICd0ZXN0JyxcXG4gICAgICAgICAgICBuZXdfdG9kbzogJycsXFxuICAgICAgICAgICAgY29tcGxldGU6IHRydWVcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMgKHtcXG4gICAgICAgIGF1dGhTdGF0dXM6ICdhdXRoU3RhdHVzJyxcXG4gICAgICAgIHByb2ZpbGU6ICdwcm9maWxlJyxcXG4gICAgICAgIG5hbWU6ICduYW1lJ1xcbiAgICB9KSxcXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgc2V0X2JpcmQoaWQpIHtcXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbXBsZXRlLCBpZClcXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZVswXSA9PT0gdHJ1ZSkge1xcbiAgICAgICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS90b2RvLycgKyBpZCArICcvJywgeydjb21wbGV0ZSc6IHRydWV9KVxcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XFxuICAgICAgICAgICAgICAgIH0pXFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvdG9kby8nICsgaWQgKyAnLycsIHsnY29tcGxldGUnOiBmYWxzZX0pXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGRlbGV0ZV9vbmVfdG9kbyhpZCkge1xcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdERUxFVEVfT05FX1RPRE8nLCBpZClcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFzeW5jIGFkZF90b2RvKCkge1xcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdBRERfVE9ETycsIHtcXG4gICAgICAgICAgICAgICAgJ25hbWUnOiB0aGlzLm5ld190b2RvLFxcbiAgICAgICAgICAgICAgICAndXNlcic6IHRoaXMucHJvZmlsZS5wayxcXG4gICAgICAgICAgICAgICAgJ2NvbXBsZXRlJzogdGhpcy5jb21wbGV0ZVxcbiAgICAgICAgICAgIH0pLFxcbiAgICAgICAgICAgIHRoaXMubmV3X3RvZG8gPSAnJyxcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxcbiAgICAgICAgfSxcXG4gICAgICAgIGxvZ291dCgpIHtcXG4gICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdMT0dPVVQnKSBcXG4gICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnbG9naW4nfSlcXG4gICAgICAgIH1cXG4gICAgfSxcXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIC8vdGhpcy5nZXRfdG9kbygpXFxuICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnR0VUX1RPRE8nKVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4uY2hlY2tib3gge1xcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXFxuICAgIC8qIHRvcDogN3B4OyAqL1xcbn1cXG5cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi04ZGM3Y2NlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})
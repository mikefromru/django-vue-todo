webpackHotUpdate(0,{

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"container col-sm-8 col-sm-offset-2\" }, [\n    _c(\"p\", [\n      _vm._v(\"Welcome to Todo, \" + _vm._s(_vm.profile.username) + \" \"),\n      _c(\"a\", { attrs: { href: \"\" }, on: { click: _vm.logout } }, [\n        _vm._v(\"logout\")\n      ])\n    ]),\n    _vm._v(\" \"),\n    _c(\n      \"div\",\n      { staticClass: \"panel\" },\n      [\n        _c(\"h2\", { staticClass: \"text-center\" }, [_vm._v(\"Add new task\")]),\n        _vm._v(\" \"),\n        _c(\n          \"b-form\",\n          {\n            attrs: { inline: \"\" },\n            on: {\n              submit: function($event) {\n                $event.preventDefault()\n                return _vm.add_todo($event)\n              }\n            }\n          },\n          [\n            _c(\"b-input\", {\n              staticClass: \"mb-2 mr-sm-2 mb-sm-0\",\n              attrs: { placeholder: \"Add a new todo\" },\n              model: {\n                value: _vm.new_todo,\n                callback: function($$v) {\n                  _vm.new_todo = $$v\n                },\n                expression: \"new_todo\"\n              }\n            }),\n            _vm._v(\" \"),\n            _c(\"b-btn\", { attrs: { type: \"submit\" } }, [_vm._v(\"submit\")])\n          ],\n          1\n        )\n      ],\n      1\n    ),\n    _vm._v(\" \"),\n    _c(\"table\", { staticClass: \"table\" }, [\n      _vm._m(0),\n      _vm._v(\" \"),\n      _c(\n        \"tbody\",\n        _vm._l(_vm.name.slice().reverse(), function(x) {\n          return _c(\"tr\", { key: x.id }, [\n            _c(\n              \"td\",\n              [\n                _c(\n                  \"b-form-checkbox-group\",\n                  {\n                    model: {\n                      value: x.complete,\n                      callback: function($$v) {\n                        _vm.$set(x, \"complete\", $$v)\n                      },\n                      expression: \"x.complete\"\n                    }\n                  },\n                  [\n                    _c(\"b-form-checkbox\", {\n                      staticClass: \"checkbox\",\n                      on: {\n                        input: function($event) {\n                          _vm.set_bird(x)\n                        }\n                      }\n                    })\n                  ],\n                  1\n                )\n              ],\n              1\n            ),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _vm._v(_vm._s(x.complete) + \"!\" + _vm._s(x.complete[0]))\n            ]),\n            _vm._v(\" \"),\n            _c(\"td\", [\n              _c(\"span\", { class: { taskDone: x.complete } }, [\n                _vm._v(_vm._s(x.name))\n              ])\n            ]),\n            _vm._v(\" \"),\n            _c(\n              \"td\",\n              [\n                _c(\n                  \"b-btn\",\n                  {\n                    attrs: { variant: \"danger\" },\n                    on: {\n                      click: function($event) {\n                        _vm.delete_one_todo(x.id)\n                      }\n                    }\n                  },\n                  [_vm._v(\"delete\")]\n                )\n              ],\n              1\n            )\n          ])\n        })\n      )\n    ])\n  ])\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"thead\", [\n      _c(\"th\", [_vm._v(\"Checkmark Done\")]),\n      _vm._v(\" \"),\n      _c(\"th\", [_vm._v(\"Completed\")]),\n      _vm._v(\" \"),\n      _c(\"th\", [_vm._v(\"Task name\")]),\n      _vm._v(\" \"),\n      _c(\"th\", [_vm._v(\"Delete\")])\n    ])\n  }\n]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n    __webpack_require__(42)      .rerender(\"data-v-8dc7cce2\", esExports)\n  }\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT8zNGE0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9EQUFvRDtBQUN4RTtBQUNBO0FBQ0EsZUFBZSxTQUFTLFdBQVcsT0FBTyxvQkFBb0IsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVCQUF1QjtBQUM5QjtBQUNBLGtCQUFrQiw2QkFBNkI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsYUFBYTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdDQUFnQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUJBQXlCLFNBQVMsaUJBQWlCLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsWUFBWTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVMsdUJBQXVCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiI0NzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyIGNvbC1zbS04IGNvbC1zbS1vZmZzZXQtMlwiIH0sIFtcbiAgICBfYyhcInBcIiwgW1xuICAgICAgX3ZtLl92KFwiV2VsY29tZSB0byBUb2RvLCBcIiArIF92bS5fcyhfdm0ucHJvZmlsZS51c2VybmFtZSkgKyBcIiBcIiksXG4gICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0sIG9uOiB7IGNsaWNrOiBfdm0ubG9nb3V0IH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJsb2dvdXRcIilcbiAgICAgIF0pXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInBhbmVsXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoMlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyXCIgfSwgW192bS5fdihcIkFkZCBuZXcgdGFza1wiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImItZm9ybVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGlubGluZTogXCJcIiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkX3RvZG8oJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImItaW5wdXRcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yIG1yLXNtLTIgbWItc20tMFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCJBZGQgYSBuZXcgdG9kb1wiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uZXdfdG9kbyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0ubmV3X3RvZG8gPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmV3X3RvZG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImItYnRuXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9IH0sIFtfdm0uX3YoXCJzdWJtaXRcIildKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcInRhYmxlXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGVcIiB9LCBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgX3ZtLl9sKF92bS5uYW1lLnNsaWNlKCkucmV2ZXJzZSgpLCBmdW5jdGlvbih4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IHguaWQgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWZvcm0tY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogeC5jb21wbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldCh4LCBcImNvbXBsZXRlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwieC5jb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYi1mb3JtLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZXRfYmlyZCh4KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHguY29tcGxldGUpICsgXCIhXCIgKyBfdm0uX3MoeC5jb21wbGV0ZVswXSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IHsgdGFza0RvbmU6IHguY29tcGxldGUgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyh4Lm5hbWUpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJiLWJ0blwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YXJpYW50OiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlbGV0ZV9vbmVfdG9kbyh4LmlkKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJkZWxldGVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJDaGVja21hcmsgRG9uZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNvbXBsZXRlZFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRhc2sgbmFtZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRlbGV0ZVwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG52YXIgZXNFeHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuZXhwb3J0IGRlZmF1bHQgZXNFeHBvcnRzXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LThkYzdjY2UyXCIsIGVzRXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtOGRjN2NjZTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///476\n");

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(37)(true);\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.taskDone {\\n    text-decoration: line-through;\\n}\\n.checkbox {\\n    /* margin: auto; */\\n    /* top: 7px; */\\n}\\n\\n\", \"\", {\"version\":3,\"sources\":[\"/home/mikefromru/django_apps/todo-django-vue/project/src/components/src/components/Home.vue\"],\"names\":[],\"mappings\":\";AAsGA;IACA,8BAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;CACA\",\"file\":\"Home.vue\",\"sourcesContent\":[\"<template>\\n    <!-- <b-container> -->\\n    <div class=\\\"container col-sm-8 col-sm-offset-2\\\">\\n        <p>Welcome to Todo, {{ profile.username }} <a href @click=\\\"logout\\\">logout</a></p>\\n        <div class=\\\"panel\\\">\\n           \\n            <h2 class=\\\"text-center\\\">Add new task</h2>\\n\\n            <b-form inline @submit.prevent=\\\"add_todo\\\">\\n                    <b-input class=\\\"mb-2 mr-sm-2 mb-sm-0\\\" v-model=\\\"new_todo\\\" placeholder=\\\"Add a new todo\\\"></b-input>\\n                    <b-btn type=\\\"submit\\\">submit</b-btn>\\n            </b-form>\\n            \\n        </div>\\n\\n        <table class=\\\"table\\\">\\n            <thead>\\n                <th>Checkmark Done</th>\\n                <th>Completed</th>\\n                <th>Task name</th>\\n                <th>Delete</th>\\n            </thead>\\n\\n            <tbody>\\n                <!-- <tr v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\"> -->\\n                <tr v-for=\\\"x in name.slice().reverse()\\\" :key=\\\"x.id\\\">\\n                    <td>\\n                        <b-form-checkbox-group v-model=\\\"x.complete\\\">\\n                            <b-form-checkbox @input=\\\"set_bird(x)\\\" class=\\\"checkbox\\\" ></b-form-checkbox>\\n                        </b-form-checkbox-group>\\n                    </td>\\n                    <td>{{ x.complete }}!{{ x.complete[0] }}</td>\\n                    <!-- <td><span :class=\\\"{ taskDone: x.complete}\\\">{{ x.name }}</span></td> -->\\n                    <td><span :class=\\\"{ taskDone: x.complete}\\\">{{ x.name }}</span></td>\\n                    <td><b-btn variant=\\\"danger\\\" @click=\\\"delete_one_todo(x.id)\\\">delete</b-btn></td>\\n                </tr>\\n            </tbody>\\n        </table>\\n\\n    </div>\\n    <!-- </b-container> -->\\n</template>\\n\\n<script>\\nimport \\\"babel-polyfill\\\"\\nimport axios from 'axios'\\nimport { mapGetters } from 'vuex'\\nexport default {\\n    name: 'Home',\\n    data() {\\n        return {\\n            new_todo: '',\\n            // complete: false,\\n        }\\n    },\\n    computed: mapGetters ({\\n        authStatus: 'authStatus',\\n        profile: 'profile',\\n        name: 'name',\\n\\n    }),\\n\\n    methods: {\\n        set_bird(x) {\\n            console.log(x.complete)\\n            if (x.complete[0] === true || x.complete === true) {\\n                axios.patch('/api/todo/' + x.id + '/', {'complete': true})\\n                .then(response => {\\n                })\\n            } else if(x.complete[0] !== true || x.complete === false){\\n                axios.patch('/api/todo/' + x.id + '/', {'complete': false})\\n                .then(response => {\\n                })\\n            }\\n        },\\n        delete_one_todo(id) {\\n            this.$store.dispatch('DELETE_ONE_TODO', id)\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        async add_todo() {\\n            await this.$store.dispatch('ADD_TODO', {\\n                'name': this.new_todo,\\n                'user': this.profile.pk,\\n                'complete': this.complete\\n            }),\\n            this.new_todo = '',\\n            this.$store.dispatch('GET_TODO')\\n        },\\n        logout() {\\n           this.$store.dispatch('LOGOUT') \\n           this.$router.push({name: 'login'})\\n        }\\n    },\\n    created() {\\n        //this.get_todo()\\n        this.$store.dispatch('GET_TODO')\\n    }\\n}\\n</script>\\n\\n<style>\\n\\n.taskDone {\\n    text-decoration: line-through;\\n}\\n\\n.checkbox {\\n    /* margin: auto; */\\n    /* top: 7px; */\\n}\\n\\n</style>\\n\\n\"],\"sourceRoot\":\"\"}]);\n\n// exports\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ib21lLnZ1ZT9hMjg5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7OztBQUdBO0FBQ0Esc0NBQXVDLG9DQUFvQyxHQUFHLGFBQWEsc0JBQXNCLHFCQUFxQixNQUFNLFlBQVksOElBQThJLE1BQU0sV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLHlLQUF5SyxvQkFBb0IsaW9DQUFpb0MsY0FBYyxHQUFHLGlCQUFpQixvREFBb0Qsc0JBQXNCLEtBQUssVUFBVSwwREFBMEQsc0JBQXNCLEtBQUssVUFBVSx1VEFBdVQsYUFBYSw4QkFBOEIsaUNBQWlDLGtCQUFrQix1RUFBdUUsT0FBTyw4QkFBOEIsZ0dBQWdHLG9CQUFvQix1QkFBdUIsdUdBQXVHLDBEQUEwRCxpQkFBaUIsc0NBQXNDLG1CQUFtQixnQkFBZ0IseURBQXlELDBEQUEwRCxrQkFBa0Isc0NBQXNDLG1CQUFtQixnQkFBZ0IsV0FBVyxnQ0FBZ0Msa0hBQWtILDZCQUE2QixzREFBc0QsNElBQTRJLDRGQUE0RixxQkFBcUIsNEVBQTRFLGNBQWMsWUFBWSxPQUFPLGtCQUFrQiw0RUFBNEUsR0FBRyxxQ0FBcUMsb0NBQW9DLEdBQUcsZUFBZSxzQkFBc0IscUJBQXFCLE1BQU0sbUNBQW1DOztBQUU3eUgiLCJmaWxlIjoiOTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhc2tEb25lIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcbi5jaGVja2JveCB7XFxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cXG4gICAgLyogdG9wOiA3cHg7ICovXFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWtlZnJvbXJ1L2RqYW5nb19hcHBzL3RvZG8tZGphbmdvLXZ1ZS9wcm9qZWN0L3NyYy9jb21wb25lbnRzL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFzR0E7SUFDQSw4QkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSG9tZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgICA8IS0tIDxiLWNvbnRhaW5lcj4gLS0+XFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lciBjb2wtc20tOCBjb2wtc20tb2Zmc2V0LTJcXFwiPlxcbiAgICAgICAgPHA+V2VsY29tZSB0byBUb2RvLCB7eyBwcm9maWxlLnVzZXJuYW1lIH19IDxhIGhyZWYgQGNsaWNrPVxcXCJsb2dvdXRcXFwiPmxvZ291dDwvYT48L3A+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwYW5lbFxcXCI+XFxuICAgICAgICAgICBcXG4gICAgICAgICAgICA8aDIgY2xhc3M9XFxcInRleHQtY2VudGVyXFxcIj5BZGQgbmV3IHRhc2s8L2gyPlxcblxcbiAgICAgICAgICAgIDxiLWZvcm0gaW5saW5lIEBzdWJtaXQucHJldmVudD1cXFwiYWRkX3RvZG9cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGItaW5wdXQgY2xhc3M9XFxcIm1iLTIgbXItc20tMiBtYi1zbS0wXFxcIiB2LW1vZGVsPVxcXCJuZXdfdG9kb1xcXCIgcGxhY2Vob2xkZXI9XFxcIkFkZCBhIG5ldyB0b2RvXFxcIj48L2ItaW5wdXQ+XFxuICAgICAgICAgICAgICAgICAgICA8Yi1idG4gdHlwZT1cXFwic3VibWl0XFxcIj5zdWJtaXQ8L2ItYnRuPlxcbiAgICAgICAgICAgIDwvYi1mb3JtPlxcbiAgICAgICAgICAgIFxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlXFxcIj5cXG4gICAgICAgICAgICA8dGhlYWQ+XFxuICAgICAgICAgICAgICAgIDx0aD5DaGVja21hcmsgRG9uZTwvdGg+XFxuICAgICAgICAgICAgICAgIDx0aD5Db21wbGV0ZWQ8L3RoPlxcbiAgICAgICAgICAgICAgICA8dGg+VGFzayBuYW1lPC90aD5cXG4gICAgICAgICAgICAgICAgPHRoPkRlbGV0ZTwvdGg+XFxuICAgICAgICAgICAgPC90aGVhZD5cXG5cXG4gICAgICAgICAgICA8dGJvZHk+XFxuICAgICAgICAgICAgICAgIDwhLS0gPHRyIHYtZm9yPVxcXCJ4IGluIG5hbWUuc2xpY2UoKS5yZXZlcnNlKClcXFwiIDprZXk9XFxcInguaWRcXFwiPiAtLT5cXG4gICAgICAgICAgICAgICAgPHRyIHYtZm9yPVxcXCJ4IGluIG5hbWUuc2xpY2UoKS5yZXZlcnNlKClcXFwiIDprZXk9XFxcInguaWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tY2hlY2tib3gtZ3JvdXAgdi1tb2RlbD1cXFwieC5jb21wbGV0ZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiLWZvcm0tY2hlY2tib3ggQGlucHV0PVxcXCJzZXRfYmlyZCh4KVxcXCIgY2xhc3M9XFxcImNoZWNrYm94XFxcIiA+PC9iLWZvcm0tY2hlY2tib3g+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9iLWZvcm0tY2hlY2tib3gtZ3JvdXA+XFxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgICAgICAgICAgPHRkPnt7IHguY29tcGxldGUgfX0he3sgeC5jb21wbGV0ZVswXSB9fTwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8IS0tIDx0ZD48c3BhbiA6Y2xhc3M9XFxcInsgdGFza0RvbmU6IHguY29tcGxldGV9XFxcIj57eyB4Lm5hbWUgfX08L3NwYW4+PC90ZD4gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gOmNsYXNzPVxcXCJ7IHRhc2tEb25lOiB4LmNvbXBsZXRlfVxcXCI+e3sgeC5uYW1lIH19PC9zcGFuPjwvdGQ+XFxuICAgICAgICAgICAgICAgICAgICA8dGQ+PGItYnRuIHZhcmlhbnQ9XFxcImRhbmdlclxcXCIgQGNsaWNrPVxcXCJkZWxldGVfb25lX3RvZG8oeC5pZClcXFwiPmRlbGV0ZTwvYi1idG4+PC90ZD5cXG4gICAgICAgICAgICAgICAgPC90cj5cXG4gICAgICAgICAgICA8L3Rib2R5PlxcbiAgICAgICAgPC90YWJsZT5cXG5cXG4gICAgPC9kaXY+XFxuICAgIDwhLS0gPC9iLWNvbnRhaW5lcj4gLS0+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcbmltcG9ydCBcXFwiYmFiZWwtcG9seWZpbGxcXFwiXFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0hvbWUnLFxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBuZXdfdG9kbzogJycsXFxuICAgICAgICAgICAgLy8gY29tcGxldGU6IGZhbHNlLFxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyAoe1xcbiAgICAgICAgYXV0aFN0YXR1czogJ2F1dGhTdGF0dXMnLFxcbiAgICAgICAgcHJvZmlsZTogJ3Byb2ZpbGUnLFxcbiAgICAgICAgbmFtZTogJ25hbWUnLFxcblxcbiAgICB9KSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgc2V0X2JpcmQoeCkge1xcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHguY29tcGxldGUpXFxuICAgICAgICAgICAgaWYgKHguY29tcGxldGVbMF0gPT09IHRydWUgfHwgeC5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xcbiAgICAgICAgICAgICAgICBheGlvcy5wYXRjaCgnL2FwaS90b2RvLycgKyB4LmlkICsgJy8nLCB7J2NvbXBsZXRlJzogdHJ1ZX0pXFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9IGVsc2UgaWYoeC5jb21wbGV0ZVswXSAhPT0gdHJ1ZSB8fCB4LmNvbXBsZXRlID09PSBmYWxzZSl7XFxuICAgICAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL3RvZG8vJyArIHguaWQgKyAnLycsIHsnY29tcGxldGUnOiBmYWxzZX0pXFxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcXG4gICAgICAgICAgICAgICAgfSlcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgZGVsZXRlX29uZV90b2RvKGlkKSB7XFxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0RFTEVURV9PTkVfVE9ETycsIGlkKVxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgYXN5bmMgYWRkX3RvZG8oKSB7XFxuICAgICAgICAgICAgYXdhaXQgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0FERF9UT0RPJywge1xcbiAgICAgICAgICAgICAgICAnbmFtZSc6IHRoaXMubmV3X3RvZG8sXFxuICAgICAgICAgICAgICAgICd1c2VyJzogdGhpcy5wcm9maWxlLnBrLFxcbiAgICAgICAgICAgICAgICAnY29tcGxldGUnOiB0aGlzLmNvbXBsZXRlXFxuICAgICAgICAgICAgfSksXFxuICAgICAgICAgICAgdGhpcy5uZXdfdG9kbyA9ICcnLFxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgICAgICB9LFxcbiAgICAgICAgbG9nb3V0KCkge1xcbiAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ0xPR09VVCcpIFxcbiAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdsb2dpbid9KVxcbiAgICAgICAgfVxcbiAgICB9LFxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgLy90aGlzLmdldF90b2RvKClcXG4gICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdHRVRfVE9ETycpXFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbi50YXNrRG9uZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uY2hlY2tib3gge1xcbiAgICAvKiBtYXJnaW46IGF1dG87ICovXFxuICAgIC8qIHRvcDogN3B4OyAqL1xcbn1cXG5cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi04ZGM3Y2NlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjpmYWxzZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3NyYy9jb21wb25lbnRzL0hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///96\n");

/***/ })

})
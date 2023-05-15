module.exports = [
  {
    "id": "35e35970-407c-43bd-8ea2-62c79ea57bfc",
    "question": "What will return the following code?```[5,2].map((a, b) => a + b)```",
    "type": "mc",
    "choices": {
      "1": "[5, 3]",
      "2": "7",
      "3": "[6, 4]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array.map"
    ],
    "explanation": ""
  },
  {
    "id": "f644aa17-896f-4360-9169-064a6ab1d36c",
    "question": "What will return the following code?```[0,0].map((a, b, c) => a + b + c)```",
    "type": "mc",
    "choices": {
      "1": "[\"00,0\", \"10,0\"]\n",
      "2": "[0,1]",
      "3": "0",
      "4": "[\"0\",\"1\"]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array.map"
    ],
    "explanation": "In the provided JavaScript code, the `map` function is called on an array `[0, 0]`. The `map` function takes a callback function as an argument, which is called for each element of the array with the following parameters: \n" +
      "`a`: The current element being processed in the array. \n" +
      "`b`: The index of the current element being processed in the array. \n" +
      "`c`: The array on which the `map` function was called. \n" +
      "The provided callback function is `(a, b, c) => a + b + c`. It adds the current element `a`, its index `b`, and the array `c` (coerced to a number). \n" +
      "When you run the provided code, the `map` function will create a new array with the results of the callback function for each element of the original array. Here's the breakdown of the calculations: \n" +
      "For the first element (`a = 0, b = 0, c = [0, 0]`): `0 + 0 + [0, 0]` results in the string `\"00,0\"`, as the array is coerced to a string during the addition operation. \n" +
      "For the second element (`a = 0, b = 1, c = [0, 0]`): `0 + 1 + [0, 0]` results in the string `\"10,0\"`. "
  },
  {
    "id": "4f40252d-c6b9-4348-a383-1136a6bab87e",
    "question": "Are Object keys ordered?",
    "type": "mc",
    "choices": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
    },
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": "https://stackoverflow.com/questions/30076219/does-es6-introduce-a-well-defined-order-of-enumeration-for-object-properties"
  },
  {
    "id": "82773ec8-f6a6-48bf-bace-ad2b088bc697",
    "question": "Are Hashes (or rather, the keys in them) sorted?",
    "type": "mc",
    "choices": {
      "1": "Implementations are NOT required to define a specific order of enumeration",
      "2": "Sorted, order is reverse insertion order",
      "3": "Not sorted",
      "4": "Sorted alphabetically"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "92a4ed1a-5d1d-4cc7-83ee-52571df56e5d",
    "question": "What will be the output of the following code?```" +
      "console.log(str); // ?\n" +
      "let str = \"Hello\";```",
    "type": "mc",
    "choices": {
      "1": "ReferenceError:",
      "2": "Hello",
      "3": "undefined",
      "4": "null"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "The output will be a `ReferenceError` because you're " +
      "attempting to use `str` before it has been declared. This is a quirk " +
      "of JavaScript's \"hoisting\" behavior."
  },
  {
    "id": "defa1f28-ad52-4a3b-a58f-231851cdec49",
    "question": "What will be output of the following code?```" +
      "let x = 1;\n" +
      "function xValue() { console.log(x); }\n" +
      "setTimeout(function() {\n" +
      " let x = 2;\n" +
      " xValue(); }, 1000);```",
    "type": "mc",
    "choices": {
      "1": "1",
      "2": "2",
      "3": "undefined",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "The output of the code will be `1`.\n" +
      "In JavaScript, functions have access to the variables of the scope in " +
      "which they were defined, not where they are invoked. This is known as " +
      "closure in JavaScript. So, when `xValue` is defined, it has access to " +
      "the variable `x` in the outer scope, which is `1`.\n" +
      "The `setTimeout` function creates a new scope. Inside this new scope, " +
      "a new `x` variable is declared with a value of `2`. This does not " +
      "affect the `x` in the outer scope, which is still `1`. When `xValue` " +
      "is called inside the `setTimeout`, it still refers to the `x` from " +
      "the outer scope, because that's where `xValue` was defined. " +
      "Therefore, `1` is logged to the console."
  },

  {
    "id": "f6d4c6d2-7f11-4bd0-9f49-be9683a2c0ef",
    "question": "What will be the output of the following code?```" +
      "let a = new Array(1,2), b = new Array(3);\n" +
      "console.log(a[0] + b[0]);```",
    "type": "mc",
    "choices": {
      "1": "NaN",
      "2": "4",
      "3": "[1,2,3]",
      "4": "undefined"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array"
    ],
    "explanation": "The output of this code will be `NaN`.\n" +
      "The `new Array()` constructor in JavaScript behaves differently based " +
      "on the number of arguments passed. \n" +
      "- When you pass more than one argument or one argument that is not a " +
      "number (as in `new Array(1, 2)`), it creates a new array with the " +
      "arguments as elements. So, `a = new Array(1, 2)` creates an array `a` " +
      "such that `a[0]` is `1` and `a[1]` is `2`.\n" +
      "- When you pass a single numeric argument (as in `new Array(3)`), it " +
      "creates a new array with its length property set to that number, and " +
      "the array is empty. So, `b = new Array(3)` creates an array `b` with " +
      "length `3`, but `b[0]` is `undefined`.\n" +
      "So when you add `a[0]` and `b[0]`, you are adding `1` and " +
      "`undefined`, which results in `NaN` in JavaScript. So, " +
      "`alert(a[0] + b[0])` alerts `NaN`."
  },

  {
    "id": "4daaf22c-0511-44c9-a06c-959d269dc871",
    "question": "What will be the output of the following code?```" +
      "for(let i=0; i<10; i++) {\n" +
      " setTimeout(function() {\n" +
      "  console.log(i);\n" +
      " }, 100); }```",
    "type": "mc",
    "choices": {
      "1": "Numbers from 0 to 9",
      "2": "Numbers from 0 to 10",
      "3": "10 times number 10",
      "4": "10 times number 0"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "Scope"
    ],
    "explanation": ""
  },
  {
    "id": "aefd92fb-71ea-4460-bc71-4c7544387711",
    "question": "What will be the output of the following code?```1 && 2 && null && 0 && undefined```",
    "type": "mc",
    "choices": {
      "1": "null",
      "2": "false",
      "3": "undefined",
      "4": "0",
      "5": "1",
      "6": "2"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "&&"
    ],
    "explanation": "The `&&` (logical AND) operator returns " +
      "the first falsy value it encounters. If it doesn't encounter any " +
      "falsy values, it returns the last value."
  },
  {
    "id": "977dca2e-bdb3-40b3-af73-79ff50245301",
    "question": "What will return the following code?```(1,5 - 1) * 2```",
    "type": "mc",
    "choices": {
      "1": "8",
      "2": "-0.5",
      "3": "1",
      "4": "0.999999999",
      "5": "0.5"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", ","
    ],
    "explanation": "The output of this code will be `8`.\n" +
      "The comma operator (`,`) evaluates each of its operands (from left to " +
      "right) and returns the value of the last operand. So, in the " +
      "expression `(1,5 - 1)`, the `5 - 1` is evaluated last, and its result " +
      "`4` is returned."
  },
  /*

{
  "id": "",
  "question": "What will be the output of the following code?\n<code>...</code>",
  "type": "mc",
  "choices": {
    "1": "",
    "2": "",
    "3": "",
    "4": ""
  },
  "answer": "1",
  "tags": [
    "-level"
  ],
  "explanation": ""
},
*/
]

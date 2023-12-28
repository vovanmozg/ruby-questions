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
  {
    "id": "79bf99aa-6353-4c89-9205-037bcf86f4f5",
    "question": "What will be the output of the following code?```console.log(1 +  \"2\" + \"2\");```",
    "type": "mc",
    "choices": {
      "1": "122",
      "2": "32",
      "3": "NaN",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "1. The number `1` is added to the string `\"2\"`, so JavaScript will coerce the number `1` to a " +
      "string, making it `\"1\"`. Then, it will concatenate the strings `\"1\"` and `\"2\"`, resulting in the string `\"12\"`.\n" +
      "2. The string `\"12\"` is then concatenated with the string `\"2\"`, resulting in the final output: `\"122\"`."
  },
  {
    "id": "98520309-899e-4cac-a768-83678f571728",
    "question": "What will be the output of the following code?```[1, 10, 2].sort()```",
    "type": "mc",
    "choices": {
      "1": "[1, 10, 2]",
      "2": "[1, 2, 10]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "The `sort()` method, when used without a custom compare function, sorts the elements as strings " +
      "in lexicographic (or \"dictionary\") order."
  },
  {
    "id": "d70dae17-1cdc-4a9d-ab7d-f0a2e25abf99",
    "question": "What will return the following code? `6 / \"3\"`",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "\"2\"",
      "3": "2.0",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["basic-level", "type-coercion"],
    "explanation": "When dividing a number by a string containing a number, the string is converted to a number."
  },
  {
    "id": "7a82ca8c-2fe6-4eb9-b468-4a58ef13c433",
    "question": "What will return the following code? `\"2\" * \"3\"`",
    "type": "mc",
    "choices": {
      "1": "6",
      "2": "\"6\"",
      "3": "Error",
      "4": "\"23\""
    },
    "answer": "1",
    "tags": ["basic-level", "type-coercion"],
    "explanation": "When multiplying strings that can be converted to numbers, they are converted and the operation is performed."
  },
  {
    "id": "ca0fbe65-256f-4621-860e-e214e8ba1a47",
    "question": "What will return the following code? `4 + 5 + \"px\"`",
    "type": "mc",
    "choices": {
      "1": "\"9px\"",
      "2": "\"45px\"",
      "3": "9px",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["basic-level", "string-concatenation"],
    "explanation": "JavaScript executes operations from left to right. First it adds the numbers 4 and 5, then converts the result to a string and concatenates with 'px'."
  },
  {
    "id": "16c74038-b4e6-4169-b3fc-1099aa57b6a7",
    "question": "What will return the following code? `\"$\" + 4 + 5`",
    "type": "mc",
    "choices": {
      "1": "\"$45\"",
      "2": "\"$9\"",
      "3": "9",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["basic-level", "string-concatenation"],
    "explanation": "In this expression, JavaScript treats all operands as strings starting with the first string, thus concatenating them."
  },
  {
    "id": "b19b9718-38c1-4313-abb4-c7409a19b063",
    "question": "What will return the following code? `\"4\" - 2`",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "\"2\"",
      "3": "Error",
      "4": "\"4-2\""
    },
    "answer": "1",
    "tags": ["basic-level", "type-coercion"],
    "explanation": "The subtraction operator converts strings to numbers if possible, hence '4' becomes 4, and the result is 2."
  },
  {
    "id": "4ef718ea-495d-4e3d-bd10-d13d64b01a82",
    "question": "What will return the following code? `\"4px\" - 2`",
    "type": "mc",
    "choices": {
      "1": "NaN",
      "2": "Error",
      "3": "2px",
      "4": "\"2px\""
    },
    "answer": "3",
    "tags": ["basic-level", "type-coercion"],
    "explanation": "When attempting to subtract a number from a string that cannot be fully converted to a number, JavaScript returns NaN (Not a Number)."
  },
  {
    "id": "906a63f0-fa99-425e-806c-b3baa8634a56",
    "question": "What will return the following code? `7 / 0`",
    "type": "mc",
    "choices": {
      "1": "Infinity",
      "2": "0",
      "3": "Error",
      "4": "NaN"
    },
    "answer": "1",
    "tags": ["basic-level", "arithmetic-operations"],
    "explanation": "In JavaScript, dividing any number by zero results in Infinity. This is a special numeric value representing infinity."
  },
  {
    "id": "24a61faa-8ef5-4344-b904-463f99acc55f",
    "question": "What will return the following code? `typeof null`",
    "type": "mc",
    "choices": {
      "1": "\"object\"",
      "2": "\"null\"",
      "3": "\"undefined\"",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["basic-level", "types"],
    "explanation": "`null` is a primitive value, but `typeof null` returns 'object'. https://stackoverflow.com/questions/18808226/why-is-typeof-null-object."
  },
  {
    "id": "e8152344-c44d-4e95-a896-5f161235f356",
    "question": "What will return the following code? `typeof {}[0]`",
    "type": "mc",
    "choices": {
      "1": "\"undefined\"",
      "2": "\"object\"",
      "3": "\"number\"",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["intermediate-level", "types", "objects"],
    "explanation": "This expression evaluates to `typeof {}` which is 'object', and then attempts to access index [0] of 'object'. Since 'object' is not an array, the result is 'undefined'."
  },
  {
    "id": "1171464c-85e6-474b-808a-e3519a5ad53b",
    "question": "What will return the following code? `typeof (\"4px\" - 2)`",
    "type": "mc",
    "choices": {
      "1": "\"number\"",
      "2": "\"string\"",
      "3": "\"undefined\"",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["basic-level", "types"],
    "explanation": "The expression `\"4px\" - 2` results in NaN (Not a Number) because '4px' cannot be converted into a number. The typeof NaN is 'number'."
  },
  {
    "id": "9192709a-c52b-4f43-b8c1-e7bee7b3303c",
    "question": "What will return the following code? `parseInt(\"09\")`",
    "type": "mc",
    "choices": {
      "1": "9",
      "2": "0",
      "3": "09",
      "4": "Error"
    },
    "answer": "1",
    "tags": ["basic-level", "functions"],
    "explanation": "The `parseInt` function parses a string argument and returns an integer of the specified radix (base). In this case, '09' is parsed as a base-10 integer, resulting in 9."
  },
  {
    "id": "9725d3fe-406a-4340-ae89-0a3bff435d42",
    "question": "What will return the following code? `5 && 2`",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "5",
      "3": "true",
      "4": "false"
    },
    "answer": "1",
    "tags": ["basic-level", "logical-operators"],
    "explanation": "The logical AND (`&&`) operator returns the first falsy value or the last value if none were found. Since both 5 and 2 are truthy, it returns the last value, which is 2."
  },
  {
    "id": "ae685883-d89a-4f91-8105-56f7a71d7a42",
    "question": "What will return the following code? `5 || 0`",
    "type": "mc",
    "choices": {
      "1": "5",
      "2": "0",
      "3": "true",
      "4": "false"
    },
    "answer": "1",
    "tags": ["basic-level", "logical-operators"],
    "explanation": "The logical OR (`||`) operator returns the first truthy value it encounters or the last value if no truthy value is found. Since 5 is truthy, it is returned."
  }


  //
  //
  //
  // a4baa8ea-72e1-47da-bd40-b6ef077b5d2d
  // c095ae1e-3a2a-4f56-a394-5224b99d97cc
  // 6e9021bb-25e6-419d-abc1-f53b1b24309a
  // e0ad1ef0-155e-474c-8e60-1c4b80779fef
  // 62e9a0d3-53c3-40aa-8f64-173b4022d3c7
  // f5c870b0-b02a-4a54-8bea-105ee90589e5
  // 4b7566a5-bc90-46b0-8212-18d73fb79975
  // 331ec0a6-ed1b-47cc-a79c-5dda94ee49b2
  // ae1cbb7f-f595-41c4-81ed-17d49e295ab0
  // 88acfc40-bc2e-41da-9c15-4be663c1a153
  // 20974d9d-7126-4a66-ba15-c16f1ce4c89f
  // 02d161d4-a3f0-4f3f-9076-3ba11115ceaa
  // bc9f1926-fc05-44ad-94fc-043f48159b78
  // 07c0c95f-efd1-49ea-af1e-f1a770c08359
  // 3ddc4b61-cfab-44db-b05d-d0b81777695e
  // 22a68a9d-9caa-408d-b756-935bcf63a350

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

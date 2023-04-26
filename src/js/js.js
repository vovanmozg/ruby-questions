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

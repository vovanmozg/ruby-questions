module.exports = [
  /*
  {
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
  {
    "question": "How to add elements from slice s2 to slice s1",
    "type": "mc",
    "choices": {
      "1": "s1 = append(s1, s2...)",
      "2": "append(s1, s2...)",
      "3": "s1 = append(s1, s2)",
      "4": "append(s1, s2)"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "How to get length of slice?",
    "type": "mc",
    "choices": {
      "1": "len",
      "2": "length",
      "3": "size",
      "4": "count",
      "4": "capacity"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What will return <code>cap</code> function (for slice)?",
    "type": "mc",
    "choices": {
      "1": "the total number of elements that the slice can hold before new memory needs to be allocated",
      "2": "slice elements count",
      "3": "the number of free elements in the slice",
      "4": "the total number of occupied elements in slice"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "Go was designed at:",
    "type": "mc",
    "choices": {
      "1": "Google",
      "2": "Facebook",
      "3": "Microsoft",
      "4": "Amazon"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What will be output this code: <code>numbers := []int{0, 1, 2, 3, 4}\nfmt.Println(numbers[1:4])</code>",
    "type": "mc",
    "choices": {
      "1": "[1 2 3]",
      "2": "[0 1 2 3 4]",
      "3": "[0 1 2 3]",
      "4": "[1 2 3 4]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What value will be returned if we try to access a map with a non-existent key",
    "type": "mc",
    "choices": {
      "1": "Default falue for this type",
      "2": "false",
      "3": "null",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "How to iterate map?",
    "type": "mc",
    "choices": {
      "1": "for key, value := range myMapVal { ... }",
      "2": "foreach myMapVal as $key => $value { ... }",
      "3": "while (my ($key, $value) = each %myMapVal ) { ... }",
      "4": "for k,v in myMapVal.items() { ... }"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "In what order execute the functions in defer?",
    "type": "mc",
    "choices": {
      "1": "In reverse addition order",
      "2": "Simultaneously",
      "3": "In random order",
      "4": "In order of declaration"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "What keyword declares the structure?",
    "type": "mc",
    "choices": {
      "1": "struct",
      "2": "class",
      "3": "structure",
      "4": "str"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "How can a structure correspond to an interface?",
    "type": "mc",
    "choices": {
      "1": "If the struct has all the methods that the given interface requires",
      "2": "If the struct contains a built-in anonymous struct that satisfies the given interface",
      "3": "If you embed the interface into the structure",
      "4": "If a struct declares that it implements a given interface"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "question": "myVal, ok := emptyInterfaceVal.(int)\nWhat will be in the myVal variable if it is not possible to convert the type from the empty interface ( ok == false )",    
    "type": "mc",
    "choices": {
      "1": "Default value, 0 for int",
      "2": "nil",
      "3": "the program will panic",
      "4": "The value that was previously in memory"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
]












  





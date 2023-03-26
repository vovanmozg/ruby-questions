module.exports = [
  /*
  {
    "id": "8db9c11f-3312-49e9-b408-43564008a682",
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
    "id": "f4ffa8c6-d986-44c6-8987-c7e2e6a745b3",
    "question": "What will return the following code?\n<code>[{ a: 1 }, { a: 2 }].map(&->(x) { x[:a] })</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2]",
      "2": "Error",
      "3": "[:a, :a]",
      "4": "[:x, :x]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "The code will return an array containing the values of " +
      "the a property for each object in the original array.\n" +
      "In this case, the original array is [{ a: 1 }, { a: 2 }], which " +
      "contains two objects with the property a. The map method is called " +
      "on this array and a lambda function (also known as a <em>stabby lambda" +
      "</em> in Ruby) is passed as an argument.\n" +
      "The lambda function takes a single parameter x, which represents each" +
      " object in the original array. The function returns the value of the " +
      "a property for each object.\n" +
      "So, the output of the code will be the array [1, 2], which contains " +
      "the values of the a property for each object in the original array."
  },
  {
    "id": "06d91a15-23ad-4058-9edb-f70b054cb19b",
    "question": "What will return the following code?\n<code>->(str){str[0]=''}[str='123'] && str</code>",
    "type": "mc",
    "choices": {
      "1": "23",
      "2": "123",
      "3": "true",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "A lambda function is defined: `->(str){str[0]=''}`. This function takes a string argument `str` and modifies its first character to an empty string.\n" +
      "The lambda function is immediately called with the argument `'123'`, resulting in the string `'23'`.\n" +
      "The result of the lambda function call is then logically AND-ed (`&&`) with `str`. Since the lambda function call returns the modified string `'23'`, which is a truthy value, the AND expression evaluates to `true`.\n" +
      "Finally, the value of `str` is returned, which is the original string that was modified by the lambda function, now equal to `'23'`."
  },
  {
    "id": "5d3df965-22c9-4eb8-b17e-0f0e0617eaea",
    "question": "What will return the following code?\n<code>{a: 1, b: 2, c: 1}.invert</code>",
    "type": "mc",
    "choices": {
      "1": "{1=>:c, 2=>:b}",
      "2": "{c: 1, b: 2, a: 1}",
      "3": "{1=>:a, 2=>:b, 1=>:c}",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "The following Ruby code `{a: 1, b: 2, c: 1}.invert` will return a new hash where the keys and values are inverted. In other words, the keys of the original hash will become the values of the new hash, and the values of the original hash will become the keys of the new hash.\n" +
      "In this specific case, the original hash `{a: 1, b: 2, c: 1}` has two keys with the same value (`:a` and `:c` both have a value of `1`). Since a hash can't have duplicate keys, one of the keys will be overwritten. Therefore, the resulting inverted hash will have two keys (`1` and `2`) and two values (`:a` and `:b`), like this: `{1=>:c, 2=>:b}`.\n" +
      "https://ruby-doc.org/3.2.1/Hash.html#method-i-invert"
  },
  {
    "id": "947a529a-edcc-4ce1-9b4b-fec5bc55bb32",
    "question": "What will return the following code?\n<code>[[0]][0]|[0]</code>",
    "type": "mc",
    "choices": {
      "1": "[0]",
      "2": "0",
      "3": "nil",
      "4": "false",
      "5": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "07396737-bcb9-4cb3-a40a-ff965f5be0ce",
    "question": "What will return the following code?\n<code>[1,2] || [5,1,2]</code>",
    "type": "mc",
    "choices": {
      "1": "[1,2]",
      "2": "[1,2,5]",
      "3": "[1,2,5,1,2]",
      "4": "true",
      "5": "false",
      "6": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "||"
    ],
    "explanation": "The `||` operator in Ruby returns the first operand if it is truthy, and the second operand otherwise. In this case, the first operand `[1, 2]` is truthy, so it will be returned.\n" +
      "Therefore, the overall expression evaluates to `[1, 2]`, which will be returned."
  },
  {
    "id": "693cd589-5ab3-464e-bbf8-c6e22e1ad63e",
    "question": "What will return the following code?\n<code>[1,2] | [5,1,2]</code>",
    "type": "mc",
    "choices": {
      "1": "[1,2,5]",
      "2": "[5,1,2]",
      "3": "[1,2,5,1,2]",
      "4": "true",
      "5": "false",
      "6": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "|"
    ],
    "explanation": "The vertical bar `|` character is used to perform a set union operation on two arrays, which results in a new array containing all unique elements from both arrays.\n" +
      "In this case, the first array `[1, 2]` and the second array `[5, 1, 2]` have some common elements, so the resulting array will have only unique elements, namely `[1, 2, 5]`.\n" +
      "Therefore, the overall expression evaluates to `[1, 2, 5]`, which will be returned."
  },
  {
    "id": "707680d4-8f92-4c88-be44-bd3a44f43114",
    "question": "What will return the following code?\n<code>[1,2] && [5,1,2]</code>",
    "type": "mc",
    "choices": {
      "1": "[5,1,2]",
      "2": "[1,2,5]",
      "3": "[1,2,5,1,2]",
      "4": "[1,2]",
      "5": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "&&"
    ],
    "explanation": "The `&&` operator returns the first operand if it is falsy, and the second operand otherwise. In this case, both operands `[1, 2]` and `[5, 1, 2]` are truthy, so the second operand `[5, 1, 2]` will be returned.\n" +
      "Therefore, the overall expression evaluates to `[5, 1, 2]`, which will be returned."
  },
  {
    "id": "c71ea416-a54d-443b-a293-ca3a625d58d4",
    "question": "What will return the following code?\n<code>[1,2] & [5,1,2]</code>",
    "type": "mc",
    "choices": {
      "1": "[1,2]",
      "2": "[1,2,5]",
      "3": "[1,2,5,1,2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "&"
    ],
    "explanation": "The ampersand `&` operator is used to perform a set intersection operation on two arrays, which results in a new array containing only the elements that are present in both arrays.\n" +
      "In this case, the first array `[1, 2]` and the second array `[5, 1, 2]` have some common elements, namely `1` and `2`, so the resulting array will contain only those elements."
  },
  {
    "id": "6aa56b55-9bb2-4b8e-8fb0-135c6f7e3407",
    "question": "What will return the following code?\n<code>true && 0</code>",
    "type": "mc",
    "choices": {
      "1": "0",
      "2": "false",
      "3": "true",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "&&"
    ],
    "explanation": "The `&&` operator returns the first operand if it is falsy, and the second operand otherwise. In this case, the first operand true is truthy, so the second operand 0 will be evaluated. Since 0 is also falsy in Ruby, it will be returned."
  },
  {
    "id": "591b89b2-8e51-46a0-9bd1-890460a17ae4",
    "question": "What will return the following code?\n<code>true & 0</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "0"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "&"
    ],
    "explanation": ""
  },
  {
    "id": "dbe208ce-b4fc-43e2-8f2c-19fcf1f46fb3",
    "question": "What will return the following code?\n<code>0 & true</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "false",
      "3": "true",
      "4": "0"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "&"
    ],
    "explanation": "The ampersand `&` character is a bitwise operator used for performing bitwise AND operations on two integers. However, in the given code, one of the operands is a boolean (`true`) and the other operand is an integer (`0`), which will result in a `TypeError`."
  },
  {
    "id": "74fbb2c8-6efd-4df1-a582-d20c770e69f5",
    "question": "What will return the following code?\n<code>'abcd'.tap(&:capitalize)</code>",
    "type": "mc",
    "choices": {
      "1": "abcd",
      "2": "Error",
      "3": "ABCD",
      "4": "Abcd"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "tap", "capitalize"
    ],
    "explanation": ""
  },
  {
    "id": "519d2980-c25f-4af3-a91c-70df2c63fad1",
    "question": "What will return the following code?\n<code>'abcd'.tap(&:capitalize!)</code>",
    "type": "mc",
    "choices": {
      "1": "Abcd",
      "2": "Error",
      "3": "ABCD",
      "4": "abcd"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "57f8e530-cf18-4028-a95f-fa05fac83415",
    "question": "What will return the following code?\n<code>['11/06/2018'].map(&Date.method(:parse))</code>",
    "type": "mc",
    "choices": {
      "1": "Date object",
      "2": "[nil]",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "map", "Date.parse"
    ],
    "explanation": "the <a href='https://apidock.com/ruby/v2_6_3/Array/map'>map</a> method is used to transform each element of an array based on a given block of code. In the given code, the block passed to `map` is <a href='https://apidock.com/ruby/v2_6_3/DateTime/parse/class'>Date.method(:parse)</a>, which retrieves the `parse` method from the `Date` class.\n" +
      "The `parse` method is a class method of the `Date` class that takes a string as an argument and returns a `Date` object representing the date parsed from that string. In this case, the array `['11/06/2018']` contains a single string element that represents the date `\"11/06/2018\"` in the format \"dd/mm/yyyy\".\n" +
      "When `map` is called with the `Date.parse` method as the block, it applies the `parse` method to each element of the array and returns a new array with the transformed values. In this case, the `parse` method is called on the string `\"11/06/2018\"`, which returns a Date object representing the date `2018-06-11`.\n" +
      "Therefore, the expression `['11/06/2018'].map(&Date.method(:parse))` returns an array containing a single `Date` object representing the date `2018-06-11`."
  },
  {
    "id": "427f9192-d6d2-4b20-8fcb-ebbf32a81cba",
    "question": "What will return the following code?\n<code>3.to_a</code>",
    "type": "mc",
    "choices": {
      "1": "NoMethodError",
      "2": "[3]",
      "3": "[1,2,3]",
      "4": "[0,1,2,3]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "to_a"
    ],
    "explanation": "In Ruby, the `to_a` method is defined for certain types of objects, such as arrays, ranges, and hashes. The `to_a` method is used to convert these objects to an array.\n" +
      "However, the `to_a` method is not defined for integers. When we call the to_a method on an integer like `3`, Ruby raises a `NoMethodError`, indicating that the `to_a` method is undefined for integers.\n" +
      "To convert an integer to an array in Ruby, we can use the `Array` method with the integer as an argument, like this:\n" +
      "`Array(3) #=> [3]`\n" +
      "This will convert the integer `3` to an array containing a single element `3`."
  },
  {
    "id": "7ef0a8e7-534e-4fb2-ae2f-f3d56ca6aab1",
    "question": "What will return the following code?\n<code>/b/ === /b/</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "'b'",
      "5": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "c6129e64-2b6a-44e4-885d-bbfd38ac5036",
    "question": "What will return the following code?\n<code>/^[0-9]*$/ === '2048'</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "===", "regex"
    ],
    "explanation": "In this case, the `===` operator is used for pattern matching. For regular expressions, the `===` operator returns `true` if the regex matches the input string.\n" +
      "In this case, the regex `/^[0-9]*$/` matches any string that contains zero or more digits from 0 to 9. The `^` character anchors the pattern to the beginning of the string, and the `$` character anchors the pattern to the end of the string. So the regex matches only strings that consist entirely of digits.\n" +
      "The input string `'2048'` consists entirely of digits, so it matches the regex `/^[0-9]*$/`. Therefore, the `===` operator returns `true`."
  },
  {
    "id": "603b19c7-6fd7-4e80-bf77-44a4467b4148",
    "question": "What will return the following code?\n<code>/^[^0-9]*$/ === '2048'</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "===", "regex"
    ],
    "explanation": "In this case, the `===` operator is used for pattern matching. For regular expressions, the === operator returns true if the regex matches the input string.\n" +
      "The regular expression `/^[^0-9]*$/` matches strings that contain zero or more characters that are not digits, from the beginning `^` to the end `$` of the string.\n" +
      "In this case, the string being tested is `'2048'`, which contains digits. Therefore, the regular expression will not match the string, and the `===` operator will return `false`.\n" +
      "https://stackoverflow.com/questions/4467538/what-does-the-operator-do-in-ruby/4467823#4467823"
  },
  {
    "id": "13c52ba5-a0a4-4804-8132-7ac32b1fcfae",
    "question": "What will return the following code?\n<code>Object === 'text'</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": "In this case, the `===` operator checks if the argument is an instance of the receiver class or one of its descendants. The `Object` class is the root of the Ruby class hierarchy, so `Object === 'text'` is equivalent to `'text'.is_a?(Object)`.\n" +
      "Since every object in Ruby is an instance of the `Object` class, including strings, `'text'` is indeed an instance of `Object`, so the expression will evaluate to `true`.\n" +
      "https://thoughtbot.com/blog/case-equality-operator-in-ruby"
  },
  {
    "id": "b7b99869-2f3a-42a1-8d88-9ff150e1dded",
    "question": "What will return the following code?\n<code>String === 'text'</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": "In this case, the `===` operator checks if the argument is an instance of the receiver class or one of its descendants. The `String` class is a descendant of the `Object` class, so `String === 'text'` is equivalent to `'text'.is_a?(String)`.\n" +
      "Keep in mind that for different types the meaning of the operator may be slightly different.\n" +
      "https://thoughtbot.com/blog/case-equality-operator-in-ruby"
  },
  {
    "id": "73610281-ba6f-469e-bad4-2ba05e711653",
    "question": "What will return the following code?\n<code>'text' === String</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": "Avoid explicit use of the case equality operator `===`. As its name implies it is meant to be used implicitly by case expressions and outside of them it yields some pretty confusing code." +
      "In this case is better to use `text.is_a?(String)` construction.\n" +
      "https://thoughtbot.com/blog/case-equality-operator-in-ruby"
  },
  {
    "id": "2d9ec058-8395-438f-844a-0ee336064bb0",
    "question": "What will return the following code?\n<code>Class === 'text'</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": "In this case, the `===` operator checks if the argument is an instance of the receiver class or one of its descendants. The `Class` class is a descendant of the `Module` class, so `Class === 'text'` is equivalent to `'text'.is_a?(Class)`.\n" +
      "Since `'text'` is not a class, the expression will evaluate to `false`.\n" +
      "https://thoughtbot.com/blog/case-equality-operator-in-ruby"
  },
  {
    "id": "020d1950-a717-4dbc-8275-e4ba5e76e56c",
    "question": "What will return the following code?\n<code>/^[^0-9]*$/ === '2048'</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "da0d4a7e-9c8e-44d2-9150-c834c3e43ce4",
    "question": "What will return the following code?\n<code>Class === 'text'</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": "In the code `Class === 'text'`, the `Class` is a class in Ruby and the `'text'` is a string object. When `===` is used between `Class` and `'text'`, it will check if `'text'` is an instance of `Class` or its subclass.\n" +
      "Since `'text'` is not an instance of `Class` or its subclass, the expression `Class === 'text'` will return `false`.\n" +
      "https://ruby-doc.org/core-2.7.1/Object.html#method-i-3D-3D-3D"
  },
  {
    "id": "153320d1-3792-412b-8d66-31f01ca9df9a",
    "question": "What will return the following code?\n<code>[1...10] === [1...10]</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "35d3f427-7c56-4d1f-b0d9-0b1f344e1188",
    "question": "What will return the following code?\n<code>(1...10) === (1...10)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "fbf83d17-08b9-4c41-a065-a2dd8fb4f43c",
    "question": "What will return the following code?\n<code>(1..10) === 5</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": 5
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": "In this case, the === operator is used for pattern matching, " +
      "and it is implemented differently depending on the type of object " +
      "being compared." + "\n" +
      "When using the === operator with a range object like (1...10), it " +
      "checks if the right-hand side object is an element within the range. " +
      "In this case, 5 is indeed an element within the range from 1 to 10 " +
      "(excluding 10), so the expression (1...10) === 5 returns true." + "\n" +
      "Note that if you use the == operator instead of ===, the expression " +
      "would return false because a range object is not equal to any of its " +
      "elements." + "\n" +
      "<a href='https://ruby-doc.org/core-2.7.1/Range.html#method-i-3D-3D-3D'" +
      ">https://ruby-doc.org/core-2.7.1/Range.html#method-i-3D-3D-3D</a>"
  },
  {
    "id": "13e9521e-03f4-4c14-adf0-1feb9abf2092",
    "question": "What will be the output of the following code?\n<code>puts [1, 2] + [2, 3] === [1, 2] | [2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "006e5848-cdc6-41e3-be89-e93856270137",
    "question": "What will be the output of the following code?\n<code>puts (1..5) === 3</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "e6b56812-bd62-4245-b342-48fea1a8fb93",
    "question": "What will be the result of the following code?\n<code>(42 === Numeric) == (Numeric === 42)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "42"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "71aad3c2-2216-47a2-b560-5a5455163d1f",
    "question": "What will be the result of the following code?\n<code>(42 == Numeric) === (Numeric == 42)</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "42"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "40a89e01-f5a7-4942-b4d1-0c7324a2cb72",
    "question": "What will be the result of the following code?\n<code>42 == Numeric === Numeric == 42</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "false",
      "3": "true",
      "4": "42"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "fc44101d-e9f9-4b4a-82c8-c43ffbc40251",
    "question": "What will be the result of the following code?\n<code>/ell/ === 'Hello'</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "String"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "b2808207-c9f4-492c-8ab0-ea08c3d798ab",
    "question": "What returns <code>(1...10) === 5</code>",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level", "==="
    ],
    "explanation": ""
  },
  {
    "id": "b183f36b-e10f-4cc8-adae-ce79259f5b2d",
    "question": "What will return the following code?\n<code>['ivan','oleg','egor'].grep(/eg/)</code>",
    "type": "mc",
    "choices": {
      "1": "['oleg','egor']",
      "2": "['eg']",
      "3": "['eg','eg']",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "grep"
    ],
    "explanation": "This code will return an array containing all elements from the original array that match the regular expression /eg/.\n" +
      "https://ruby-doc.org/core-2.7.1/Enumerable.html#method-i-grep"
  },
  {
    "id": "28f9f0c7-3e67-42bb-9d3b-87e3d696ff1a",
    "question": "What will return the following code?\n<code>(1..10).grep(3..5)</code>",
    "type": "mc",
    "choices": {
      "1": "[3,4,5]",
      "2": "[3]",
      "3": "3",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "grep"
    ],
    "explanation": "The `grep` method in Ruby is used to filter an array or a range based on a given pattern. In this case, the range `(1..10)` is being filtered based on the pattern `3..5`, which is another range that represents the numbers 3, 4, and 5.\n" +
      "When `grep` is called on a range, it returns an array of all values in the range that match the pattern. So, the resulting array contains the values 3, 4, and 5, which are the values that match the pattern `(3..5)` in the range `(1..10)`.\n" +
      "https://ruby-doc.org/core-2.7.1/Enumerable.html#method-i-grep"
  },
  {
    "id": "a7a96bb8-82ea-4832-9d85-6242c24c3200",
    "question": "What will return the following code?\n<code>(1..10).grep(-2..2)</code>",
    "type": "mc",
    "choices": {
      "1": "[1,2]",
      "2": "[1]",
      "3": "1",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "grep"
    ],
    "explanation": "https://ruby-doc.org/core-2.7.1/Enumerable.html#method-i-grep"
  },
  {
    "id": "6f95f0e4-c261-43d9-a051-46aea4c3f0de",
    "question": "What will return the following code?\n<code>(1..10).grep(8..12)</code>",
    "type": "mc",
    "choices": {
      "1": "[8,9,10]",
      "2": "[8]",
      "3": "7",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "grep"
    ],
    "explanation": "https://ruby-doc.org/core-2.7.1/Enumerable.html#method-i-grep"
  },
  {
    "id": "636152b2-001f-4689-86c6-ed42ee01c438",
    "question": "What will return the following code?\n<code>(1..10).grep(3...5)</code>",
    "type": "mc",
    "choices": {
      "1": "[3,4]",
      "2": "[8]",
      "3": "7",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "6463977e-b7d6-4c6a-875c-0a5ec131c7d6",
    "question": "What will return the following code?\n<code>(1..10).grep(-2...2)</code>",
    "type": "mc",
    "choices": {
      "1": "[1]",
      "2": "[1,2]",
      "3": "1",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "c4b0c94f-97aa-49fa-9553-afd53f701e42",
    "question": "What will return the following code?\n<code>(1...10).grep(8...12)</code>",
    "type": "mc",
    "choices": {
      "1": "[8,9]",
      "2": "[8,9,10]",
      "3": "8",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "66183e3d-3a30-4523-9742-f665c091a37e",
    "question": "What will return the following code?\n<code>(1...10).grep(->(x){x%2==0}</code>",
    "type": "mc",
    "choices": {
      "1": "[2,4,6,8]",
      "2": "[2,4,6,8,10]",
      "3": "[3,5,7,9]",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "4e9158b1-5276-4463-91f6-5269573d7b96",
    "question": "What will be the output of the following code?\n<code>p (1..10).grep(7..10)</code>",
    "type": "mc",
    "choices": {
      "1": "[7, 8, 9, 10]",
      "2": "true",
      "3": "7, 8, 9",
      "4": "10"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "69778c80-eb8d-439b-9526-7fc140d98217",
    "question": "What will return the following code?\n<code>0Xaa == 0XAa</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "literal"
    ],
    "explanation": "Integers can be represented in various formats, including hexadecimal notation, which starts with `0x` or `0X`, followed by one or more digits (0-9) or letters (A-F). The letters in the hexadecimal notation can be either uppercase or lowercase, and they represent the values 10 to 15.\n" +
      "In this code, `0Xaa` and `0XAa` are two hexadecimal integer literals. Both represent the same value, which is the decimal value 170.\n" +
      "https://ruby-doc.org/core-2.7.1/doc/syntax/literals_rdoc.html#label-Numbers"
  },
  {
    "id": "0edf76b1-0b46-4e8b-af1d-804be041ba30",
    "question": "What will be `a` variable contain?\n<code>a = ??</code>",
    "type": "mc",
    "choices": {
      "1": "?",
      "2": "??",
      "3": "Error",
      "4": "false",
      "5": "true"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "d3aa38b1-a7c7-4bf3-be9b-de716b14305b",
    "question": "What will return the following code?\n<code>obj = Object.new\nobj.define_singleton_method(:foo) do 42 end\nobj.dup.foo</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "42",
      "3": "nil",
      "4": "Object"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://stackoverflow.com/questions/10183370"
  },
  {
    "id": "4ae27912-b4a6-405d-bcb5-47242946167b",
    "question": "What will return the following code?\n<code>obj = Object.new\nobj.define_singleton_method(:foo) do 42 end\nobj.clone.foo</code>",
    "type": "mc",
    "choices": {
      "1": "42",
      "2": "Error",
      "3": "nil",
      "4": "Object"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://stackoverflow.com/questions/10183370"
  },
  {
    "id": "7c24b1dc-6f13-4f0e-9b61-f3007f7e1226",
    "question": "What will return the following code?\n<code>obj = Object.new\ndef obj.foo\n  42\nend\nobj.dup.foo</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "42",
      "3": "nil",
      "4": "Object"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://stackoverflow.com/questions/10183370"
  },
  {
    "id": "a34fd9b7-996a-49b2-9ae8-19138eef78b6",
    "question": "What will return the following code?\n<code>obj = Object.new\ndef obj.foo\n  42\nend\nobj.clone.foo</code>",
    "type": "mc",
    "choices": {
      "1": "42",
      "2": "Error",
      "3": "nil",
      "4": "Object"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://stackoverflow.com/questions/10183370"
  },
  {
    "id": "fa6cb816-a018-4c51-937b-00770614059a",
    "question": "What will return the following code?\n<code>5.minutes.to_f</code>",
    "type": "mc",
    "choices": {
      "1": "300.0",
      "2": "300",
      "3": "5",
      "4": "5.0"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "d7f1a103-e057-495d-a324-2f002cadf0d0",
    "question": "What class is standard Ruby class?",
    "type": "mc",
    "choices": {
      "1": "TypeError",
      "2": "ValueError",
      "3": "MethodError",
      "4": "InputError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "ed4160a5-307d-415e-afbb-b2207cac90da",
    "question": "What class is not standard Ruby class?",
    "type": "mc",
    "choices": {
      "1": "NotImplementedError",
      "2": "NoMemoryError",
      "3": "NoMethodError",
      "4": "NoAttributeError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "da37df57-46e5-4a76-9ae6-4ff736f90c3d",
    "question": "What will return the following code?\n<code>%w{ one two three }.map &method(:p)</code>",
    "type": "mc",
    "choices": {
      "1": "[\"one\", \"two\", \"three\"]",
      "2": "[nil, nil, nil]",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "e7f435eb-7028-44e4-9033-72a3e14c4442",
    "question": "What will be the output of the following code?\n<code>def a\n" +
      "  print 'kuku'\n" +
      "  return\n" +
      "ensure\n" +
      "  print 'epta'\n" +
      "end</code>",
    "type": "mc",
    "choices": {
      "1": "kukuepta",
      "2": "kuku",
      "3": "epta",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/ensure.html"
  },
  {
    "id": "a19324fb-12d7-4cdf-bba0-be09937b9a58",
    "question": "What will return the following code?\n<code>[1,2].first == [1,2].first(1)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "d6ff6134-7dcd-4a2f-98b6-ef20466a9ae1",
    "question": "What will be the output of the following code?\n<code>(class B; def !; p 42; end; end); B.new.!</code>",
    "type": "mc",
    "choices": {
      "1": "42",
      "2": "nil",
      "3": "Error",
      "4": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "dd765c6a-1667-47dc-8a1d-d3cc6e993314",
    "question": "What will be the output of the following code?\n<code>123.digits</code>",
    "type": "mc",
    "choices": {
      "1": "[3, 2, 1]",
      "2": "[1, 2, 3]",
      "3": "'1111011'",
      "4": "[1,1,1,1,0,1,1]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://ruby-doc.org/core-2.4.0/Integer.html#method-i-digits"
  },
  {
    "id": "c399d872-0a1a-4242-810b-94a074e1e898",
    "question": "What will return the following code?\n<code>[1...10] == [1...10]</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "7c747401-9dee-4324-b50b-a5878aaa86db",
    "question": "What will return the following code?\n<code>(1...10) == (1...10)</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "df3b70b2-879d-40d7-b2c4-5c15d6dad69a",
    "question": "What will be the output of the following code?\n<code>puts [1,nil,2].compact</code>",
    "type": "mc",
    "choices": {
      "1": "[1,2]",
      "2": "[1,2,nil]",
      "3": "[1,nil,2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "compact"
    ],
    "explanation": "https://apidock.com/ruby/Array/compact"
  },
  {
    "id": "2dede66f-fbb2-47db-b1bd-08df29f1ea90",
    "question": "What will be the output of the following code?\n<code>puts({ String => -> { } }[String])</code>",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "String",
      "3": "Proc",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "16ebb0f9-c12d-405a-941b-a1f272b8879a",
    "question": "What will be the output of the following code?\n<code>puts String > Object</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Object",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://apidock.com/ruby/Module/%3E"
  },
  {
    "id": "058f4744-147f-44df-b23a-3db3a42e599e",
    "question": "Which expression will return true?",
    "type": "mc",
    "choices": {
      "1": "Class < Module",
      "2": "String > Object",
      "3": "Kernel <= Module",
      "4": "StandardError < ArgumentError"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "https://apidock.com/ruby/Module/%3E%3D"
  },
  {
    "id": "fc5d1ed3-7b26-45c0-bbe6-03f46be062fa",
    "question": "<code>x = [a: 1, b: 2]</code>\nWhich expression will return true?",
    "type": "mc",
    "choices": {
      "1": "x[0][:a] == 1",
      "2": "x[:a] == 1",
      "3": "x[:a] == :b",
      "4": "x[0] == 1"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "8360e9bd-f933-4de9-a794-8372d7fb5b89",
    "question": "How do pick randomly from an array?",
    "type": "mc",
    "choices": {
      "1": "ar.sample",
      "2": "ar.rand",
      "3": "ar.random",
      "4": "ar.pick_random"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://apidock.com/ruby/Array/sample"
  },
  {
    "id": "c2c20f72-7849-41a9-969c-0b3a38fdc1db",
    "question": "What will be the output of the following code?\n<code>What will be output of this code?\n" +
      "f = File.open('file.txt', 'w')\n" +
      "f.write('1')\n" +
      "File.rename('file.txt', 'file2.txt')\n" +
      "f.write('2')\n" +
      "f.close\n" +
      "p IO.read('file2.txt')\n</code>",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "1",
      "3": "2",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "057467ed-22e7-405d-8a32-bf0ee754128d",
    "question": "What will be the output of the following code?\n<code>'Minkovsky'[/k/]</code>",
    "type": "mc",
    "choices": {
      "1": "\"k\"",
      "2": "[\"k\", \"k\"]",
      "3": "[3, 7]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "https://apidock.com/ruby/String/%5B%5D"
  },
  {
    "id": "d072ea00-5593-478e-8f39-adde2c69e901",
    "question": "Choise right way to get a resulting string \"Hello world!\"",
    "type": "ma",
    "choices": {
      "1": "\"Hello\" + \"world\" + \"!\"",
      "2": "\"Hello\".concat(\" world\", \"!\")",
      "3": "\"Hello\" << \"world\" << \"!\"",
      "4": "concat(\"Hello\", \" world\", \"!\")"
    },
    "answer": ["1", "2", "3"],
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "d0d64e0b-f64d-419f-bb75-e18d919e5536",
    "question": "What will be the output of the following code?\n<code>text = \"hello\"\n" +
      "text.concat(\"2\")\n" +
      "p text</code>",
    "type": "mc",
    "choices": {
      "1": "hello2",
      "2": "hello",
      "3": "hellohello",
      "4": "hello hello"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://apidock.com/ruby/String/concat"
  },
  {
    "id": "b44bac43-be08-44dc-bfbf-9250c34afd41",
    "question": "What will be the output of the following code?\n<code>p \"hello\".concat(33)</code>",
    "type": "mc",
    "choices": {
      "1": "hello!",
      "2": "hello33",
      "3": "hello",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://apidock.com/ruby/String/concat"
  },
  {
    "id": "e1f7adcd-f6c6-44ba-84ad-da51bbe09840",
    "question": "What error is not inherited from StandardError",
    "type": "mc",
    "choices": {
      "1": "SyntaxError",
      "2": "FiberError",
      "3": "NameError",
      "4": "RuntimeError"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "31098e6a-ccbf-4a11-8584-629c6b825f6f",
    "question": "What error is inherited from StandardError",
    "type": "mc",
    "choices": {
      "1": "ThreadError",
      "2": "LoadError",
      "3": "SecurityError",
      "4": "SystemExit"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "9c54ff43-ef84-4fc9-8d20-4da6125e1f2c",
    "question": "What will be the output of the following code?\n<code>Range.new(*[2, -3].sort).sum</code>",
    "type": "mc",
    "choices": {
      "1": "-3",
      "2": "0",
      "3": "-1",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "402e946d-a3f1-4525-84f8-a4813b2a427e",
    "question": "What expression returns <code>-3</code>",
    "type": "mc",
    "choices": {
      "1": "Range.new(*[2, -3].sort).sum",
      "2": "Range.new([2, -3].sort).sum",
      "3": "[2, -3].sort.sum",
      "4": "Range.new([-3, 2].sort).sum"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "80030412-172b-4840-8230-98a6bdb3b7df",
    "question": "What will be the output of the following code?\n<code>!!:false</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "db47f4e6-ba66-46c0-8fe6-d6ef4a39b5d0",
    "question": "What will be the output of the following code?\n<code>{a: 1} + {b: 2}</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "{a: 1, b: 2}",
      "3": "[{a: 1}, {b: 2}]",
      "4": "{ab: 3}"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "6ff9ad57-6567-4092-8501-a18e3faea087",
    "question": "What will be the output of the following code?\n<code>p begin;1/0.0;rescue;2;end</code>",
    "type": "mc",
    "choices": {
      "1": "Infinity",
      "2": "2",
      "3": "ZeroDivisionError",
      "4": "Block"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "2eb6dc75-9a10-4adf-afc8-6fb7016dbc06",
    "question": "What will be the output of the following code?\n<code>p begin;1/0;rescue;2;end</code>",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "Infinity",
      "3": "ZeroDivisionError",
      "4": "Block"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "2ae67dc6-e881-44c8-9a87-99bfff8993cd",
    "question": "What will be the output of the following code?\n<code>module M; class A; end; end\n" +
      "p M::A.new.class</code>",
    "type": "mc",
    "choices": {
      "1": "M::A",
      "2": "A",
      "3": "Class<A>",
      "4": "Class<M::A>"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "47ca76a6-80e7-4b80-9589-be1e7558829d",
    "question": "What code should precede <code>p -[]*-[]</code> to get 16",
    "type": "mc",
    "choices": {
      "1": "Array.class_eval { def -@; 4; end }",
      "2": "Array.instance_eval { def -@; 4; end }",
      "3": "def Array.-@; 4; end",
      "4": "Array.add_method(:-@, ->{4})"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "6a964046-f36a-45c5-999e-f12692e7615a",
    "question": "What will be the output of the next code? <code>[1, 1, 2].tally</code>",
    "type": "mc",
    "choices": {
      "1": "{ 1 => 2, 2 => 1 }",
      "2": "[[1], [2]]",
      "3": "{ 1 => 1, 2 => nil }",
      "4": "[2, 1, 1]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "17d1018d-2241-4759-899b-a37079286236",
    "question": "What will be the output of the following code?\n<code>def foo(*a)\n" +
      "\tprint *a\n" +
      "end\n" +
      "foo(1, 2)</code>",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "[1,2]",
      "3": "Error",
      "4": "2"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "45e2026a-fd31-4886-bb1e-eff377700d77",
    "question": "Which way is preferable?",
    "type": "mc",
    "choices": {
      "1": "if an_object && an_object.method?",
      "2": "if an_object != nil && an_object.method? == true"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "f8c28b3d-99a7-48bc-ab65-d4e5aef1f791",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = (\"hello\" or \"world\")</code>",
    "type": "mc",
    "choices": {
      "1": "hello",
      "2": "world",
      "3": "hello world",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "b2d022c7-ebf3-4c30-9ffd-74933b72265a",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo =(\"hello\" || \"world\")</code>",
    "type": "mc",
    "choices": {
      "1": "hello",
      "2": "world",
      "3": "hello world",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "96f8cd11-df98-4fd6-9d4c-6d48dc3a8b51",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = (\"hello\" and \"world\")</code>",
    "type": "mc",
    "choices": {
      "1": "world",
      "2": "hello",
      "3": "hello world",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "45ea1552-e8b7-48cf-9de7-653b6298f0cb",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = (\"hello\" && \"world\")</code>",
    "type": "mc",
    "choices": {
      "1": "world",
      "2": "hello",
      "3": "hello world",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "fa56538f-18ae-47a2-bb4f-49837c1cba85",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = (\"hello\" | \"world\")</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "hello",
      "3": "world",
      "4": "hello world"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "63407b84-2327-48f5-8205-682e2ee8ea98",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = (\"hello\" & \"world\")</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "hello",
      "3": "world",
      "4": "hello world"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "c9878bc7-5c99-4bf2-8d7c-6d3f6a6192fb",
    "question": "What will be the output of the following code?\n<code>puts !!0</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "da10a58f-9210-4007-a14f-04b43ed5224b",
    "question": "What will be the output of the following code?\n<code>(lambda {}).is_a?(Proc) == true</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "2a5bfab8-639e-4072-9665-4fc697f1a0b9",
    "question": "What will be the output of the following code?\n<code>(42 if 5) == (5 && 42)</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "908d876f-8622-4410-ba17-580ca3407124",
    "question": "What faster?",
    "type": "mc",
    "choices": {
      "1": "flat_map",
      "2": "map.flatten"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "8f2fd21c-3435-4a8e-a1f6-2cc25e0d2acb",
    "question": "What code is need to generate the following output?\n<code>[:a, :b, :c]</code>",
    "type": "mc",
    "choices": {
      "1": "%i(a b c)",
      "2": "%S(a, b, c)",
      "3": "%w(a b c)",
      "4": "%r(a, b, c)"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "965d2b6e-cb9f-4280-8924-0d9385a0bf63",
    "question": "What will be the output of the following code?\n<code>%I(a b c#{1)</code>",
    "type": "mc",
    "choices": {
      "1": "[:a, :b, :c1]",
      "2": "Error",
      "3": "[:a, :b, :c#{1)]",
      "4": "['a', 'b', 'c1']"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "74e177d7-d9b4-4799-8ce0-0ac41b34995c",
    "question": "What will be the output of the following code?\n<code>a = 1; a &&= 2; puts a</code>",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "1",
      "3": "Error",
      "4": "false"
    },
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "b85b3e4a-e410-4557-84e5-91db23c8f670",
    "question": "What will be the output of the following code?\n<code>def test\n" +
      "  def test\n" +
      "    2\n" +
      "  end\n" +
      "  1\n" +
      "end</code>",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "11",
      "3": "22",
      "4": "21"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "5418c5ee-6f83-4cab-8b0a-2350900c9746",
    "question": "What is correct manner to check method <code>:foo</code> is defined in class <code>A</code>\n",
    "type": "mc",
    "choices": {
      "1": "class.method_defined?(:foo)",
      "2": "method_defined?(:foo, A)",
      "3": "method_defined?(A, :foo)",
      "4": "foo.method_defined?(A)"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "5350f1f2-7421-4aa7-8f88-025a7c630c54",
    "question": "What will happen if you run the program with the key <code>-w</code>?\n",
    "type": "mc",
    "choices": {
      "1": "turn warnings on for your script",
      "2": "turn warnings off",
      "3": "sets default warning level",
      "4": "turns on tainting checks"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "b206c7f7-3fa1-4740-8de0-7122e65f298e",
    "question": "What will be the output of the following code?\n<code>puts [1, 2, 3].each_with_object({}) { |a, b| a }</code>",
    "type": "mc",
    "choices": {
      "1": "{}",
      "2": "{1: 1, 2: 2, 3: 3}",
      "3": "[]",
      "4": "[1, 2, 3]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "4f6c7834-a647-45fb-a171-3502687e4127",
    "question": "What will be the output of the following code?\n<code>puts [1, 2, 3].reduce({}) { |a, b| a[b] = b }</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "{1: 1, 2: 2, 3: 3}",
      "3": "3",
      "4": "[1, 2, 3]"
    },
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "fa55e5a7-9939-45a9-863c-05ea5e6e4943",
    "question": "What will be the output of the following code?\n<code>puts 17_100</code>",
    "type": "mc",
    "choices": {
      "1": "17_100",
      "2": "17100",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "a8af112e-03c4-49db-8722-a8da8e552596",
    "question": "What the better name for variable?\n<code>... = Time.now.strftime('%Y/%m/%d')</code>",
    "type": "mc",
    "choices": {
      "1": "current_date",
      "2": "currentData",
      "3": "yyyymmdstr",
      "4": "cd"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "7de73184-9dd7-465c-b737-5d5b3de3a8b1",
    "question": "What will be the result of the following code?\n<code>[1, 2] | [2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2, 3]",
      "2": "[1, 2]",
      "3": "[2]",
      "4": "[2, 3]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "ff0592a8-216e-42a8-86da-0d618b0d2a9e",
    "question": "What will be the result of the following code?\n<code>[1, 2] || [2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2]",
      "2": "[2, 3]",
      "3": "[2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "0e7ff4d2-d3c7-4035-b284-8f8e0453fff7",
    "question": "What will be the result of the following code?\n<code>[1, 2] & [2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "[2]",
      "2": "[2, 3]",
      "3": "[1, 2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "8b9c7df0-0f5b-4579-ba7f-3cb0fbe7b3ae",
    "question": "What will be the result of the following code?\n<code>[1, 2] && [2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "[2, 3]",
      "2": "[1, 2]",
      "3": "[2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "6f0ae3d6-3722-4fc3-88f3-43d9726f41f3",
    "question": "How to get a following result?\n<code>\"[1, 2]\"</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2] || [2, 3]",
      "2": "[1, 2] && [2, 3]",
      "3": "[1, 2] and [2, 3]",
      "4": "[1, 2] | [2, 3]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "a87c174e-7ecd-4b93-a134-bd34b8a1b006",
    "question": "How to get a following result?\n<code>\"[2]\"</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2] & [2, 3]",
      "2": "[1, 2] && [2, 3]",
      "3": "[1, 2] || [2, 3]",
      "4": "[1, 2] | [2, 3]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "db7fcacd-a818-4e11-a185-ae9914a9ecaf",
    "question": "How to get a following result?\n<code>[2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2] && [2, 3]",
      "2": "[1, 2] & [2, 3]",
      "3": "[1, 2] || [2, 3]",
      "4": "[1, 2] | [2, 3]"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "b1fe1b3a-9b3b-4e9e-bb65-03dca540d02e",
    "question": "What will be the result of the following code?\n<code>x = {a: 1}\n" +
      "y = x < {b: 2}</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "{a: 1, b: 2}",
      "3": "{b: 2}",
      "4": "{a: 1}",
      "5": "Error",
      "6": "true"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "65d5554e-10a0-4d58-aa04-fe759176fb66",
    "question": "What result of <code>53.divmod(10)</code>",
    "type": "mc",
    "choices": {
      "1": "[5, 3]",
      "2": "5.3",
      "3": "53",
      "4": "[0, 3]"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "b445d8ae-2231-4c7b-8d7a-5f8b09f4fcfa",
    "question": "What will be the output of the following code?\n<code>a, b = [1, 2]\n" +
      "print \"#{a}#{b}\"</code>",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "Error",
      "3": "[1, 2]nil",
      "4": "1, 2"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "0d4b5888-6d72-4c2f-8d21-0b2f7a1cde1e",
    "question": "What will be the output of the following code?\n<code>a, b = 15, 20\n" +
      "begin\n" +
      "\ta, b = b, a % b\n" +
      "end until b == 0 \n" +
      "p a</code>",
    "type": "mc",
    "choices": {
      "1": "5",
      "2": "10",
      "3": "15",
      "4": "0"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "eb78cd2e-ed52-490d-8be4-86e942ef197a",
    "question": "What will be the output of the following code?\n<code>[1] - 1</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "[]",
      "3": "[1, -1]",
      "4": "[0]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "cb8eb20a-6a2b-4a91-b454-b700d16be4bb",
    "question": "What will be the output of the following code?\n<code>[1, 2] + [2, 3] - [2]</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 3]",
      "2": "[1, 2, 3]",
      "3": "Error",
      "4": "[1, 2, 2, -2]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "a022a5b6-8587-43cd-b7e1-4716821ab96f",
    "question": "How to access the class private method?",
    "type": "mc",
    "choices": {
      "1": "instance.send(:method_name)",
      "2": "instance.call(:method_name)",
      "3": "instance.self(:method_name)",
      "4": "no way"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "ed9ecc8e-37ed-47f9-b1a8-79d93f3bbb7a",
    "question": "What makes the command <code>rake -T</code>",
    "type": "mc",
    "choices": {
      "1": "Shows the list of tasks",
      "2": "Creates task",
      "3": "Runs default task",
      "4": "Turns on execute tracing"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "d882a7ad-ca9b-41f3-9d6a-943b7e83121b",
    "question": "What is valid name for rake file?",
    "type": "ma",
    "choices": {
      "1": "rakefile",
      "2": "Rakefile",
      "3": "rakefile.rb",
      "4": "Rakefile.rb"
    },
    "answer": ["1", "2", "3", "4"],
    "tags": [
      "rails5", "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "cdb02dd3-b6ba-47f8-81e1-fdb0da86a724",
    "question": "What is the output of this code?\n<code>def foo\n	Proc.new { return 'jo' }[]\n	'mo'\nend\ndef bar\n	->() { return 'jo' }[]\n	'mo'\nend\nprint foo, bar</code>",
    "type": "mc",
    "choices": {
      "1": "mojo",
      "2": "jomo",
      "3": "jojo",
      "4": "momo"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "97f6eb65-2892-4678-a135-427c7f08f0f9",
    "question": "What is the output of this code?\n<code>require 'prime'\np Prime.each(7).map{ |x| 5 % x }</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2, 0, 5]",
      "2": "[4]",
      "3": "[1, 2, 0]",
      "4": "[2, 3, 5, 7, 11, 13, 17]"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "b754376d-5166-4de7-80ba-1af5c89180c7",
    "question": "What will be the output of the following code?\n<code>[:name, :age].zip('igor', 33)</code>",
    "type": "mc",
    "choices": {
      "1": "[[:name, 'igor'], [:age, 33]]",
      "2": "[:name, 'igor', :age, 33]",
      "3": "[{ name: 'igor' }, { age: 33 }]",
      "4": "[[:name, :age], ['igor', 33]]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "d6cc7c1c-9789-46e6-9838-9847b8070bc8",
    "question": "What will be the output of the following code?\n<code>([1,2] | [1,3]) | [1,4] == [1,2] | ([1,3]) | [1,4])</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "a0dd2626-919c-40c3-a688-a33a627ccd15",
    "question": "What will be the output of the following code?\n<code>[1, 2] <=> [2, 1]</code>",
    "type": "mc",
    "choices": {
      "1": "-1",
      "2": "0",
      "3": "1",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "a4134225-1677-4d01-9813-574b4e5b8af2",
    "question": "What will be the output of the following code?\n<code>{nil => 42} == [[nil, 42]].to_h</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "c7a2fa20-9138-4da8-8294-cb975022d87d",
    "question": "What will be the output of the following code?\n<code>def bar(*a, &b)\nb.call(a)\nend\nputs bar(1, 2) { |x| x * 2 }</code>",
    "type": "mc",
    "choices": {
      "1": "[1, 2, 1, 2]",
      "2": "[2, 4]",
      "3": "2",
      "4": "4"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "d060a27f-f0bd-4372-96a7-71d50d428691",
    "question": "What configuration parameter uses by RSpec to whitelisted examples or group",
    "type": "mc",
    "choices": {
      "1": "config.filter_run",
      "2": "config.include",
      "3": "config.include_filter_run",
      "4": "config.filter"
    },
    "answer": "1",
    "tags": [
      "rspec",
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "d2a3e174-ac6a-461c-bb45-a07461087d58",
    "question": "How to find all gems, containing 'rails'",
    "type": "mc",
    "choices": {
      "1": "gem search rails",
      "2": "gem search ^rails",
      "3": "gem find rails",
      "4": "gem find ^rails"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "e48d9828-1d69-4f04-8abc-9790d6ec72c3",
    "question": "What is the purpose of the next command?\n<code>gem list</code>",
    "type": "mc",
    "choices": {
      "1": "Shows locally installed gems",
      "2": "Shows list of all gems",
      "3": "Shows all gems from Gemfile",
      "4": "No such command"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "4890726d-4297-4949-808d-8637a0ac1905",
    "question": "Which gems not contains in standard Ruby installation?",
    "type": "mc",
    "choices": {
      "1": "mail",
      "2": "zlib",
      "3": "webrick",
      "4": "rdoc"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "7a58f29d-3e60-4279-9b22-d7c9cc3e1a2f",
    "question": "What does this command?\n<code>gem search ^rails</code>",
    "type": "mc",
    "choices": {
      "1": "Looking for all the gems starting the 'rails'",
      "2": "Looking for all the gems containing the 'rails'",
      "3": "Looking for locally installed gems containing the 'rails'",
      "4": "Looking for the gems starting the 'rails' in Gemfile"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "d4a5aabe-1d60-4506-9c37-80cd64588d2b",
    "question": "What way to run the Interactive Ruby Shell is included in the ruby distribution?",
    "type": "mc",
    "choices": {
      "1": "irb",
      "2": "pry",
      "3": "nothing",
      "4": "both"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "a721dede-3e5d-43e6-8482-b61ca7cf9e10",
    "question": "What will be the output of the following code?\n<code>[1,2,3].detect{|a| a==2} == [1,2,3].find{|a| a==2}</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "1"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "7ee59e87-1274-42c9-bddb-52ca54750d0b",
    "question": "What will be the output of the following code?\n<code>class E2 < StandardError; end\nbegin\nputs 1 / 0\nrescue E2 => e\nputs 'oops'\nend</code>",
    "type": "mc",
    "choices": {
      "1": "ZeroDivisionError",
      "2": "\"oops\"",
      "3": "Infinity"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "6195f1a8-cc53-4762-9946-6cb831b4db2f",
    "question": "What will be the output of the following code?\n<code>class E2 < StandardError; end\nclass ZeroDivisionError < E2; end\nbegin\nputs 1 / 0\nrescue E2 => e\nputs 'oops'\nend</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "\"oops\"",
      "3": "Infinity"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "c0709d49-b597-4e05-943b-56f3196b7c45",
    "question": "What ways you can create an array [1, 2, 3]",
    "type": "ma",
    "choices": {
      "1": "%w<1 2 3>",
      "2": "%w>1 2 3>",
      "3": "%w>1 2 3<",
      "4": "%w<1 2 3<"
    },
    "answer": ["1", "2"],
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "54731721-5ea4-43bf-8179-42cf90920672",
    "question": "What will be the output of the following code?\n<code>(\"\" << 48) + 48.chr)</code>",
    "type": "mc",
    "choices": {
      "1": "\"00\"",
      "2": "\"4848\"",
      "3": "Error",
      "4": "[48, \"0\"]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "<<", "chr"
    ],
    "explanation": ""
  },
  {
    "id": "dd22c722-106b-4e51-9726-c488dbba4898",
    "question": "What will be the output of the following code?\n<code>%Q{#{%w==}#{%W==}#{Array.new}#{[]}}</code>",
    "type": "mc",
    "choices": {
      "1": "\"[][][][]\"",
      "2": "Error",
      "3": "4",
      "4": "\"#{%w==}#{%W==}#{Array.new}#{[]}\""
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "6da36ec4-8426-413f-9159-cf9dd076fbcd",
    "question": "Select valid ways to run shell command",
    "type": "ma",
    "choices": {
      "1": "`echo 'hi'`",
      "2": "%x(echo 'hi')",
      "3": "system(\"echo 'hi'\")",
      "4": "exec(\"echo 'hi'\")"
    },
    "answer": ["1", "2", "3", "4"],
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "95aef357-28a5-44af-8338-b1db5b7aa2b6",
    "question": "What will be the output of the following code?\n<code>%s[hello]</code>",
    "type": "mc",
    "choices": {
      "1": ":hello",
      "2": "[:hello]",
      "3": "[\"hello\"]",
      "4": "\"hello\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "0aef3e59-324b-4b2a-a1d7-dcc2d48c106a",
    "question": "What code returns the symbol: hello?",
    "type": "mc",
    "choices": {
      "1": "%q(hello)",
      "2": "%s(hello)",
      "3": "%i(hello)",
      "4": "%w(hello)"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "fed7c542-8ab3-40f3-939c-4fe050cd850a",
    "question": "What will be the output of the following code?\n<code>.%R[[0]] == /[0]/</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "false",
      "3": "true"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "01e78536-294b-4269-8a78-9010ab4d582f",
    "question": "What will be the output of the following code?\n<code>%r[[0]] == /[0]/</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "a7db4c7f-3c3c-4577-905e-59d80e44b6ab",
    "question": "What will be the output of the following code?\n<code>%q_[=_=]_</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "\"[=_=]\"",
      "3": "\"[==]\"",
      "4": "\"==\""
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "8420aac6-bc90-44e3-82b2-e2dac2e67913",
    "question": "What will be the output of the following code?\n<code>%q[#{\"1\"}] == %Q[#{\"1\"}]</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "0304997a-8668-4671-a8fc-208312babf50",
    "question": "What will be the output of the following code?\n<code>%q[satoshi] == %q%satoshi%</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "d322ae2f-c889-49f3-bdf0-1afab7c3f782",
    "question": "What will be the output of the following code?\n<code>puts %Q[#{\"ivan\"} \"susanin\"]</code>",
    "type": "mc",
    "choices": {
      "1": "\"ivan \\\"susanin\\\"\"",
      "2": "\"\\#{\\\"ivan\\\"} \\\"susanin\\\"\"",
      "3": "Error",
      "4": "\"ivan susanin\""
    },
    "answer": "1",
    "tags": [
      "-level"
    ],
    "explanation": ""
  },
  {
    "id": "b1179406-ad74-4b73-84f4-7a5311716754",
    "question": "What will be the output of the following code?\n<code>puts %q[#{\"ivan\"} \"susanin\"]</code>",
    "type": "mc",
    "choices": {
      "1": "\"\\#{\\\"ivan\\\"} \\\"susanin\\\"\"",
      "2": "\"ivan \\\"susanin\\\"\"",
      "3": "Error",
      "4": "\"ivan susanin\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "f4e0566c-fc82-4221-b07b-258dbba10c58",
    "question": "What will be the output of the following code?\n<code>puts %i{ein zwei drei}</code>",
    "type": "mc",
    "choices": {
      "1": "[:ein, :zwei, :drei]",
      "2": "[\"ein\", \"zwei\", \"drei\"]",
      "3": "Error",
      "4": "\"ein zwei drei\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "3643b2c1-832a-46c0-b561-e9379f5948f9",
    "question": "What will be the output of the following code?\n<code>%h{} == Hash.new</code>",
    "type": "mc",
    "choices": {
      "1": "SyntaxError",
      "2": "true",
      "3": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "5f365612-2d0b-4ecd-bdfe-dbb8d158b352",
    "question": "What will ary contain after executing the code\n<code>[[1,2], [3,4]].map { |a; b| b }</code>",
    "type": "mc",
    "choices": {
      "1": "[nil, nil]",
      "2": "[2, 3]",
      "3": "[[1,2], [3,4]]",
      "4": "SyntaxError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "18fc2599-fe12-4000-b8c8-b4c9d7dca04e",
    "question": "What will be the output of the following code?\n<code>2 ** (10 **10) < 3 ** (10 ** 10)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "2E10000000000"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "66f8cd99-a1e0-4762-8424-62078a4e5880",
    "question": "What will be the output of the following code?\n<code>2 ** (10 ** 10)</code>",
    "type": "mc",
    "choices": {
      "1": "Infinity",
      "2": "Error",
      "3": "2E10000000000",
      "4": "200"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "e7cd83d7-a398-4544-8146-45c68e349e66",
    "question": "What will be the output of the following code?\n<code>2 ** (10 **10) < 1 / 0</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "true",
      "3": "false",
      "4": "Infinity"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "cf2ac631-a3ea-40d9-a056-234c6fae6002",
    "question": "What will be the output of the following code?\n<code>10 ** 10 ** 10 > 2 ** 10 ** 10</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "f2d4ed73-cc45-48e4-a0e0-667284f7b509",
    "question": "What will be the output of the following code?\n<code>10 ** 10 ** 10 == Float::INFINITY</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "7128de51-3140-4be2-aaa2-ca1030664f82",
    "question": "What will be the output of the following code?\n<code>2 ** 10 ** 2 == 2 ** (10 ** 2)</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "13f82949-ff71-4634-96a9-5d36aa4991f0",
    "question": "What will be the output of the following code?\n<code>2 ** 10 ** 2 == 2 ** (10 ** 2)</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "Float::INFINITY"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "d579ddb9-1c25-49ed-b23d-f62343e78300",
    "question": "What will be the output of the following code?\n<code>16 ** 0.5</code>",
    "type": "mc",
    "choices": {
      "1": "4.0",
      "2": "4",
      "3": "8",
      "4": "32"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "81353c07-36cd-4e96-a9b7-8eb4184cfa1e",
    "question": "What will be the output of the following code?\n<code>'8' ** 2</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "16",
      "3": "64",
      "4": "88888888"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "9dd2a4fe-7c0d-42b1-a7b1-8e5857fb1d1d",
    "question": "What will be the output of the following code?\n<code>Float::INFINITY - Float::INFINITY</code>",
    "type": "mc",
    "choices": {
      "1": "NaN",
      "2": "0",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "a5616614-56c5-434b-b17e-1c93316203e6",
    "question": "What will be the output of the following code?\n<code>'8' * 4</code>",
    "type": "mc",
    "choices": {
      "1": "\"8888\"",
      "2": "32",
      "3": "\"32\"",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "2e80857d-3d49-43c6-a1eb-21a6605d161a",
    "question": "What will be the output of the following code?\n<code>'8888' / 4</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "2222",
      "3": "\"2222\"",
      "4": "\"4\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "92b7ffba-105b-4837-b381-178a79c31aa8",
    "question": "What will be the output of the following code?\n<code>1 / 3  * 3</code>",
    "type": "mc",
    "choices": {
      "1": "0",
      "2": "0.9999999999996",
      "3": "1.0000000000004",
      "4": "1"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "8a19a418-fc5b-4f4e-90dd-cd56157896c3",
    "question": "What will be the output of the following code?\n<code>1 / 3.0  * 3.0</code>",
    "type": "mc",
    "choices": {
      "1": "1",
      "2": "0.9999999999996",
      "3": "1.0000000000004",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "7b24f956-542e-4e0e-a173-7823a3776d52",
    "question": "What will be the output of the following code?\n<code>puts 1 / 0</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "Infinity",
      "3": "0",
      "4": "1"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "51c5faa7-d058-49cd-a463-fffc63c16e15",
    "question": "What will be the output of the following code?\n<code>puts 1/10r + 2/10r</code>",
    "type": "mc",
    "choices": {
      "1": "3/10",
      "2": "Error",
      "3": "\"1/10r2/10r\"",
      "4": "0.3"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "c7f59e05-ca0b-4788-976e-274f246ce2c1",
    "question": "What will be the output of the following code?\n<code>0.1 + 0.2</code>",
    "type": "mc",
    "choices": {
      "1": "0.30000000000000004",
      "2": "0.3",
      "3": "0",
      "4": "1"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "7e0fb4bd-a2d1-424f-9a0f-a2d42fbc6286",
    "question": "What will be the output of the following code?\n <code>print 1 + 1.5</code>",
    "type": "mc",
    "choices": {
      "1": "2.5",
      "2": "2",
      "3": "3"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "e784a0b6-9e95-4484-bea8-9851b384e81f",
    "question": "What will be the output of the following code?\n<code>print 1.5 + '4'</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "5.5",
      "3": "1.5",
      "4": "5"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "147bed6b-9818-4dc7-8036-3517d30818c5",
    "question": "What will be the output of the following code?\n<code>print '4' + 1.5</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "5.5",
      "3": "1.5",
      "4": "5"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "f13d0f41-2411-4ff7-853c-2e2f01ef50ee",
    "question": "What will be the output of the following code?\n<code>print 1.5 + true</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "true",
      "3": "1.5",
      "4": "2.5"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "ce87171e-b03e-45f3-ad29-8380082ec3f6",
    "question": "What will be the output of the following code?\n<code>print 42.length</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "2",
      "3": "42",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "6a9d1248-88f7-4e78-ab2b-fcc392ebf2a7",
    "question": "What will be the output of the following code?\n<code>true + false</code>",
    "choices": {
      "1": "Error",
      "2": "true",
      "3": "false",
      "4": "1",
      "5": "0"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "3bda0a73-2d61-46c8-aeb6-d847bbc89785",
    "question": "What will be the output of the following code?\n<code>print Array.new.tap { |a| a << 1 << 2 << 3 }</code>",
    "choices": {
      "1": "[1, 2, 3]",
      "2": "[]",
      "3": "Error",
      "4": "3"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "bf01a67e-4f01-4a80-8dd7-52d80712ab62",
    "question": "What returns code:\n<code>def foo(a,*b,c)\n    a,b,c\n    end\n    foo(1,2,3,4,5)</code>",
    "choices": {
      "1": "[1, [2, 3, 4], 5]",
      "2": "1",
      "3": "5",
      "4": "[1, 2, 3, 4, 5]"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "eb543470-dd3d-4798-91a2-86f14b6fee71",
    "question": "What’s the output of the following code?<code>def foo(*args)\nputs args[1]\nend\nfoo <<EOS, __LINE__\nhello\nEOS</code>",
    "choices": {
      "1": "4",
      "2": "hello",
      "3": "nil",
      "4": "Error"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "1b1c35bd-1902-4b82-893b-5380c6cb8fcc",
    "question": "What will the variables contain after executing the code?\n<code>a, *b = [1, 2, 3]</code>",
    "choices": {
      "1": "a = 1, b = [2, 3]",
      "2": "a = 1, b = 2",
      "3": "a = [1, 2], b = 3",
      "4": "Error"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "75497cd2-d7c3-4e6a-8dd1-67188e7dc4f7",
    "question": "What will the variables contain after executing the code?\n<code>a, b = [1, 2, 3]</code>",
    "type": "wc",
    "choices": {
      "1": "a = 1, b = 2",
      "2": "a = 1, b = [2, 3]",
      "3": "a = [1, 2], b = 3",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "4628eb4f-ea50-44c1-aff0-7a6b1a21e0b9",
    "question": "Which way to call lambda is incorrect?\n<code>l = ->(a, &b){b.call(a)}</code>",
    "choices": {
      "1": "l['world'] { |who| \"Hello, #{who}!\" }",
      "2": "l.('world') { |who| \"Hello, #{who}!\" }",
      "3": "l.call('world') { |who| \"Hello, #{who}!\" }",
      "4": "l.yield('world') { |who| \"Hello, #{who}!\" }"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "4869ce08-9c35-45e6-be2f-82e55962fd0e",
    "question": "Select correct ways to call lambda\n<code>l = lambda { |a| puts a }</code>",
    "choices": {
      "1": "l.call('kuku')",
      "2": "l['kuku']",
      "3": "l.('kuku')",
      "4": "lam.yield 'kuku'"
    },
    "type": "ma",
    "answer": [
      "1",
      "2",
      "3",
      "4"
    ],
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "fcd6f775-cb44-4915-8a30-56468b17189d",
    "question": "What is correct ways to create and call lambda?",
    "choices": {
      "1": "-> a,b {a+b}[1,2]",
      "2": "-> |a,b| {a+b}[1,2]",
      "3": "-> a,b {a+b}(1,2)",
      "4": "-> (a,b){a+b}(1,2)"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "485ef49a-1262-4887-a47f-0f8bdd55c301",
    "question": "Is code correct?\n<code>l = -> a,b,c {a+b+c}\np l[1,2,3]</code>",
    "choices": {
      "1": "yes",
      "2": "no"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "fe31d377-f02b-41e8-aa72-18892b88d15f",
    "question": "What returns <code>(1..3).each</code>",
    "choices": {
      "1": "<Enumerator:0x12627c>",
      "2": "[1, 2, 3]",
      "3": "Error",
      "4": "nil"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "631bce01-4426-488d-90aa-4d98069d7a7e",
    "question": "What returns <code>(1..5).class</code>",
    "choices": {
      "1": "Range",
      "2": "Array",
      "3": "Enumerator",
      "4": "Integer"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "0840b2a3-0350-4fe6-9073-72af76b23a30",
    "question": "What will be the output of the following code?\n<code>p \"#{5 <=> 6}#{5 <=> 4}#{5 <=> 5}\"</code>",
    "choices": {
      "1": "-110",
      "2": "655",
      "3": "545",
      "4": "1-10"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "2ed4843b-dcee-4f32-b3db-62a368781225",
    "question": "What returns <code>loop.size</code>",
    "choices": {
      "1": "Infinity",
      "2": "Error",
      "3": "0",
      "4": "Enumerator"
    },
    "type": "",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "3a1f9077-831b-4f93-a47a-3ac5e5cf21c0",
    "question": "What returns this code?\n<code>[3,2,1].to_enum.next.next.next.next</code>",
    "choices": {
      "1": "6",
      "2": "5",
      "3": "3",
      "4": "Error"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "d0b391c9-426d-4844-b5c2-629f145075e4",
    "question": "What returns this code?\n<code>(1..5).to_a.inject(:+)</code>",
    "choices": {
      "1": "15",
      "2": "Error",
      "3": "5",
      "4": "[1, 2, 3, 4, 5]"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "ad97532e-4c31-4f4d-a780-432736eb7443",
    "question": "What preferable way to write hash?",
    "type": "mc",
    "choices": {
      "1": "{a: 'b'}",
      "2": "{:a => 'b'}"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "729b2014-c568-4039-8843-9164c37989d5",
    "question": "Which method returns Integer ordinal of the first character of the string?",
    "type": "mc",
    "choices": {
      "1": "ord",
      "2": "code",
      "3": "enc",
      "4": "mime"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "3e1fa719-5e45-471d-abee-271dd286e04f",
    "question": "What methods are in String?",
    "choices": {
      "1": "each_line",
      "2": "each_byte",
      "3": "each",
      "4": "forEach"
    },
    "type": "ma",
    "answer": [
      "1",
      "2"
    ],
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "9a228b6b-aab4-465a-9023-fca0eb4148bc",
    "question": "What will be the output of the following code?\n<code>p [1,2,3].to_s</code>",
    "type": "mc",
    "choices": {
      "1": "\"[1, 2, 3]\"",
      "2": "\"1 2 3\"",
      "3": "\"1,2,3\"",
      "4": "\"[1 2 3]\""
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "4d968b34-0f38-40b5-8c0d-4eb4424ac45d",
    "question": "How to make string 'abcde' with all elements of ary = array [a b c d e]",
    "type": "mc",
    "choices": {
      "1": "ary.join",
      "2": "ary.to_s",
      "3": "ary.implode",
      "4": "ary.concat"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "b232b189-b81a-4d1a-9960-8040ccc074fe",
    "question": "What will be the output of the following code?\n<code>i = 0\n[1,2,3].each{|i| i += i}\np i</code>",
    "type": "mc",
    "choices": {
      "1": "0",
      "2": "3",
      "3": "6",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "https://stackoverflow.com/questions/6259314/"
  },
  {
    "id": "5b0e5f85-63a8-4aeb-9160-1690649d469b",
    "question": "What will be the output of the following code?\n<code>@a = 7\n[1,2,3].each{|@a| print @a}</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "123",
      "3": "777",
      "4": "nilnilnil"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "82773ec8-f6a6-48bf-bace-ad2b088bc697",
    "question": "Are Hashes (or rather, the keys in them) sorted?",
    "type": "mc",
    "choices": {
      "1": "Sorted, order is insertion order",
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
    "id": "101abdff-ea1f-47b7-ad62-f5ee77910efa",
    "question": "What will be the output of the following code?\n<code>BasicObject.ancestors</code>",
    "type": "mc",
    "choices": {
      "1": "[BasicObject]",
      "2": "[Object, Kernel, BasicObject]",
      "3": "[Kernel, BasicObject]",
      "4": "[Kernel]"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "93beb93c-486d-4bef-a042-20c3db01bfd5",
    "question": "What returns <code>instance_methods</code>?",
    "type": "mc",
    "choices": {
      "1": "Array of symbols",
      "2": "Array of defs",
      "3": "Array of strings",
      "4": "Array of lambdas"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "dbdf557f-3b33-436e-a4a4-17d876538c32",
    "question": "What will be the output of the following code?\n<code>'andrik'.each { |s| print \"#{s}!\" }</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "andrik!",
      "3": "a!n!d!r!i!k!",
      "4": "117!85!97!110!100!114!105!107!"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "978ff693-cebb-44c1-b3f6-a6831122a025",
    "question": "What will be the output of the following code?\n<code>p 'ruby'[1]</code>",
    "type": "mc",
    "choices": {
      "1": "u",
      "2": "r",
      "3": "117",
      "4": "ruby"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "79dd3e8c-65e6-4c03-97e4-90f046988baf",
    "question": "What will be the output of the following code?\n<code>p ?с</code>",
    "type": "mc",
    "choices": {
      "1": "\"с\"",
      "2": "Error",
      "3": "99",
      "4": "true"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "d38defe3-65bc-4646-87ca-fa92d86be3dd",
    "question": "p ->(_){->(){_*_}}[2][]",
    "type": "mc",
    "choices": {
      "1": "4",
      "2": "nil",
      "3": "Error",
      "4": "2"
    },
    "answer": "1",
    "tags": [
      "#advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "55bb7b2f-ec26-4402-b7d4-4e69b0afc615",
    "question": "[1,2,3].map{|_| ->(_){->(_){_*_}[_]}[_]}",
    "type": "mc",
    "choices": {
      "1": "[1, 4, 9]",
      "2": "Error",
      "3": "[1, 2, 3, 2, 4, 6, 3, 6, 9]",
      "4": "[]"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "b28098b2-dc75-492a-a42b-67304b73252a",
    "question": "What will code output?\n<code>x = true and false\ny = true && false\nx == y</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "ruby",
      "intermediate-level"
    ],
    "explanation": "Operators `and` and `&&` have different priority. Operator `and` priority lower than `=`, and operator `&&` has higher. The code from the question can be written like this \n (x = true) and false \ny = (true && false)"
  },
  {
    "id": "3c8a737e-a48b-4ff9-bdfd-04405877146c",
    "question": "It what cases a.object_id == b.object_id will return true",
    "type": "ma",
    "choices": {
      "1": "b = (a = 42).dup",
      "2": "b = (a = :red).dup",
      "3": "b = (a = { x: 42 }).dup",
      "4": "b = (a = 'red').dup"
    },
    "answer": [
      "1",
      "2"
    ],
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
    "id": "ff406878-3437-4940-8bed-435c32a8ded6",
    "question": "What the right way to get 'buzz' string from array without array modify?\n<code>ary = ['foo', 'bar', 'buzz']</code>",
    "type": "ma",
    "choices": {
      "1": "ary.last",
      "2": "ary[-1]",
      "3": "ary[3]",
      "4": "ary.shift"
    },
    "answer": [
      "1",
      "2"
    ],
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "id": "386baf3d-2882-48be-b71b-e84086ea7371",
    "question": "Can ary contain different types of variables\n<code>ary = [-3, :albert, 'einstein', Object.new]</code>",
    "type": "",
    "choices": {
      "1": "yes",
      "2": "no"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "3a48e509-5b2e-41c6-bc7d-2b38e610a4d5",
    "question": "What will be the output of the following code?\n<code>[1, 2, 3].map {|num| num == 1 ? 'first' : num}</code>",
    "type": "mc",
    "choices": {
      "1": "['first', 2, 3]",
      "2": "[1, 2, 3]",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "The code will iterate through each element of the array [1, 2, 3], and for each element that is equal to 1, it will replace it with the string 'first'. The result will be the new array ['first', 2, 3]."
  },
  {
    "id": "ce97b63c-7e0e-4b74-8d70-53c7cad5dd83",
    "question": "What is the difference between #puts and #print?",
    "type": "mc",
    "choices": {
      "1": "#puts appends a newline character to the output. #print prints a value of special variable $_ when called without arguments.",
      "2": "#puts prints the value of a special variable $_ when called without arguments. #print appends a newline character to the output.",
      "3": "#puts and #print are two different names for the same method.",
      "4": "#puts is used to output integers and #print is used to output strings."
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": ""
  },
  {
    "id": "155fbafd-486e-4568-a67e-b6d520e096dc",
    "question": "What is the difference between an instance variable and a class variable?",
    "type": "mc",
    "choices": {
      "1": "A class variable is evaluated in reference to the class object created by the enclosing class definition while an instance variable is evaluated in reference to self. Instance variables cannot be referenced outside of instance methods.",
      "2": "An instance variable is evaluated in reference to self while a class variable is evaluated in reference to the class object created by the enclosing class definition. Class variables cannot be referenced outside of class methods.",
      "3": "Both instance variables and class variables are evaluated in reference to the class object created by the enclosing class definition. Instance variables can be referenced outside of instance methods while class variables cannot be referenced outside of class methods.",
      "4": "A class variable is used to store information that is specific to an instance of a class, while an instance variable is used to store information that is specific to the class itself."
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "A class variable is declared using @@ at the beginning of the variable name and is shared among all instances of a class, while an instance variable is declared using @ at the beginning of the variable name and is unique to each instance of a class. Instance variables are accessible from instance methods of a class, while class variables are accessible from class methods and class level only."
  }

]

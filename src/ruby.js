module.exports = [
  // {
  //   "id": "3e1fa719-5e45-471d-abee-271dd286e04f",
  //   "question": "What methods are in String?",
  //   "choices": {
  //     "1": "each_line",
  //     "2": "each_byte",
  //     "3": "each",
  //     "4": "forEach"
  //   },
  //   "type": "ma",
  //   "answer": [
  //     "1",
  //     "2"
  //   ],
  //   "tags": [
  //     "intermediate-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "4869ce08-9c35-45e6-be2f-82e55962fd0e",
  //   "question": "Select correct ways to call lambda\n<code>l = lambda { |a| puts a }</code>",
  //   "choices": {
  //     "1": "l.call('kuku')",
  //     "2": "l['kuku']",
  //     "3": "l.('kuku')",
  //     "4": "lam.yield 'kuku'"
  //   },
  //   "type": "ma",
  //   "answer": [
  //     "1",
  //     "2",
  //     "3",
  //     "4"
  //   ],
  //   "tags": [
  //     "advanced-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "d882a7ad-ca9b-41f3-9d6a-943b7e83121b",
  //   "question": "What is valid name for rake file?",
  //   "type": "ma",
  //   "choices": {
  //     "1": "rakefile",
  //     "2": "Rakefile",
  //     "3": "rakefile.rb",
  //     "4": "Rakefile.rb"
  //   },
  //   "answer": ["1", "2", "3", "4"],
  //   "tags": [
  //     "rails5", "advanced-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "c0709d49-b597-4e05-943b-56f3196b7c45",
  //   "question": "What ways you can create an array [1, 2, 3]",
  //   "type": "ma",
  //   "choices": {
  //     "1": "%w<1 2 3>",
  //     "2": "%w>1 2 3>",
  //     "3": "%w>1 2 3<",
  //     "4": "%w<1 2 3<"
  //   },
  //   "answer": ["1", "2"],
  //   "tags": [
  //     "intermediate-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "6da36ec4-8426-413f-9159-cf9dd076fbcd",
  //   "question": "Select valid ways to run shell command",
  //   "type": "ma",
  //   "choices": {
  //     "1": "`echo 'hi'`",
  //     "2": "%x(echo 'hi')",
  //     "3": "system(\"echo 'hi'\")",
  //     "4": "exec(\"echo 'hi'\")"
  //   },
  //   "answer": ["1", "2", "3", "4"],
  //   "tags": [
  //     "intermediate-level"
  //   ],
  //   "explanation": ""
  // },
  // { TODO: remove useless questions
  //   "id": "d322ae2f-c889-49f3-bdf0-1afab7c3f782",
  //   "question": "What will be the output of the following code?\n<code>puts %Q[#{\"ivan\"} \"susanin\"]</code>",
  //   "type": "mc",
  //   "choices": {
  //     "1": "\"ivan \\\"susanin\\\"\"",
  //     "2": "\"\\#{\\\"ivan\\\"} \\\"susanin\\\"\"",
  //     "3": "Error",
  //     "4": "\"ivan susanin\""
  //   },
  //   "answer": "1",
  //   "tags": [
  //     "-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "b1179406-ad74-4b73-84f4-7a5311716754",
  //   "question": "What will be the output of the following code?\n<code>puts %q[#{\"ivan\"} \"susanin\"]</code>",
  //   "type": "mc",
  //   "choices": {
  //     "1": "\"\\#{\\\"ivan\\\"} \\\"susanin\\\"\"",
  //     "2": "\"ivan \\\"susanin\\\"\"",
  //     "3": "Error",
  //     "4": "\"ivan susanin\""
  //   },
  //   "answer": "1",
  //   "tags": [
  //     "intermediate-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "d072ea00-5593-478e-8f39-adde2c69e901",
  //   "question": "Choose the right way to get a resulting string \"Hello world!\"",
  //   "type": "ma",
  //   "choices": {
  //     "1": "\"Hello\" + \"world\" + \"!\"",
  //     "2": "\"Hello\".concat(\" world\", \"!\")",
  //     "3": "\"Hello\" << \"world\" << \"!\"",
  //     "4": "concat(\"Hello\", \" world\", \"!\")"
  //   },
  //   "answer": ["1", "2", "3"],
  //   "tags": [
  //     "intermediate-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "3c8a737e-a48b-4ff9-bdfd-04405877146c",
  //   "question": "It what cases a.object_id == b.object_id will return true",
  //   "type": "ma",
  //   "choices": {
  //     "1": "b = (a = 42).dup",
  //     "2": "b = (a = :red).dup",
  //     "3": "b = (a = { x: 42 }).dup",
  //     "4": "b = (a = 'red').dup"
  //   },
  //   "answer": [
  //     "1",
  //     "2"
  //   ],
  //   "tags": [
  //     "advanced-level"
  //   ],
  //   "explanation": ""
  // },
  // {
  //   "id": "ff406878-3437-4940-8bed-435c32a8ded6",
  //   "question": "What the right way to get 'buzz' string from array without array modify?\n<code>ary = ['foo', 'bar', 'buzz']</code>",
  //   "type": "ma",
  //   "choices": {
  //     "1": "ary.last",
  //     "2": "ary[-1]",
  //     "3": "ary[3]",
  //     "4": "ary.shift"
  //   },
  //   "answer": [
  //     "1",
  //     "2"
  //   ],
  //   "tags": [
  //     "intermediate-level"
  //   ],
  //   "explanation": ""
  // },
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
    "id": "4628eb4f-ea50-44c1-aff0-7a6b1a21e0b9",
    "question": "Which way to call lambda is incorrect?\n<code>l = ->(a, &b){b.call(a)}</code>",
    "choices": {
      "1": "l('world') { |who| \"Hello, #{who}!\" }",
      "2": "l.('world') { |who| \"Hello, #{who}!\" }",
      "3": "l.call('world') { |who| \"Hello, #{who}!\" }",
      "4": "l.yield('world') { |who| \"Hello, #{who}!\" }",
      "5": "l['world'] { |who| \"Hello, #{who}!\" }"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level", "Lambda#call", "lambda"
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
      "advanced-level", "lambda"
    ],
    "explanation": ""
  },
  {
    "id": "c7a2fa20-9138-4da8-8294-cb975022d87d",
    "question": "What will be the output of the following code?```" +
      "def bar(*a, &b)\n" +
      " b.call(a)\n" +
      "end\n" +
      "p bar(1, 2) { |x| x * 2 }```",
    "type": "mc",
    "choices": {
      "1": "[1, 2, 1, 2]",
      "2": "[2, 4]",
      "3": "2",
      "4": "4"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Array#*", "Proc#call"
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
      "intermediate-level", "&"
    ],
    "explanation": "The `&` operator, when used with boolean values (`true` and `false`), acts as a logical AND. " +
      "Since `0` is considered a truthy value (only `nil` and `false` are falsy), `true & 0` returns `true`."
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
      "intermediate-level", "Array"
    ],
    "explanation": ""
  },
  {
    "id": "8f2fd21c-3435-4a8e-a1f6-2cc25e0d2acb",
    "question": "What code is need to generate the following output?```[:a, :b, :c]```",
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
      "intermediate-level", "errors"
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
      "advanced-level", "errors"
    ],
    "explanation": ""
  },
  {
    "id": "6195f1a8-cc53-4762-9946-6cb831b4db2f",
    "question": "What will be the output of the following code?```" +
      "class E2 < StandardError; end\n" +
      "class ZeroDivisionError < E2; end\n" +
      "begin\n" +
      "puts 1 / 0\n" +
      "rescue E2\n" +
      "puts 'oops'\n" +
      "end```",
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
    "id": "5418c5ee-6f83-4cab-8b0a-2350900c9746",
    "question": "What is correct manner to check method <code>:foo</code> is defined in class <code>A</code>",
    "type": "mc",
    "choices": {
      "1": "class.method_defined?(:foo)",
      "2": "method_defined?(:foo, A)",
      "3": "method_defined?(A, :foo)",
      "4": "foo.method_defined?(A)"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "methods"
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
      "advanced-level", "gem"
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
      "intermediate-level", "irb"
    ],
    "explanation": ""
  },
  {
    "id": "0aef3e59-324b-4b2a-a1d7-dcc2d48c106a",
    "question": "What code returns the symbol `:hello`?",
    "type": "mc",
    "choices": {
      "1": "%s(hello)",
      "2": "%q(hello)",
      "3": "%i(hello)",
      "4": "%w(hello)"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "%s"
    ],
    "explanation": ""
  },
  {
    "id": "8a19a418-fc5b-4f4e-90dd-cd56157896c3",
    "question": "What will be the output of the following code?\n<code>1 / 3.0 * 3.0</code>",
    "type": "mc",
    "choices": {
      "1": "1",
      "2": "0.9999999999996",
      "3": "1.0000000000004",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Float#*", "Float#/"
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
    "id": "c0b0b2f1-3b1f-4b0f-9b0f-3b3b0f2b0b0b",
    "question": "What will return the following code?" +
      "```def a(x); yield x; end\n" +
      "a(3.14, &:to_i)```",
    "type": "mc",
    "choices": {
      "1": "3",
      "2": "3.14",
      "3": "SyntaxError",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "blocks", "yield", "Proc"
    ],
    "explanation": ""
  },
  {
    "id": "c36096cf-a75e-4761-ac4c-0d1f8e8ee8d0",
    "question": "What will return the following code?" +
      "```def a(x); yield x; end\n" +
      "a(&:to_i, 3.14)```",
    "type": "mc",
    "choices": {
      "1": "SyntaxError",
      "2": "3",
      "3": "3.14",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "blocks", "yield", "Proc"
    ],
    "explanation": ""
  },
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
      "intermediate-level", "Array#map", "map", "lambda"
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
      "intermediate-level", "lambda", "String"
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
      "intermediate-level", "Hash", "invert", "Hash#invert"
    ],
    "explanation": "The following Ruby code `{a: 1, b: 2, c: 1}.invert` will return a new hash where the keys and values are inverted. In other words, the keys of the original hash will become the values of the new hash, and the values of the original hash will become the keys of the new hash.\n" +
      "In this specific case, the original hash `{a: 1, b: 2, c: 1}` has two keys with the same value (`:a` and `:c` both have a value of `1`). Since a hash can't have duplicate keys, one of the keys will be overwritten. Therefore, the resulting inverted hash will have two keys (`1` and `2`) and two values (`:a` and `:b`), like this: `{1=>:c, 2=>:b}`.\n" +
      "https://ruby-doc.org/3.2.1/Hash.html#method-i-invert"
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
      "intermediate-level", "tap", "capitalize", "proc"
    ],
    "explanation": "When `&:capitalize` is used as an argument to a method " +
      "call, it will convert the symbol :capitalize into a Proc instance " +
      "with the Symbol#to_proc method. `tap` applies `capitalize` method to " +
      "'abcd' but capitalize is not mutating method, so 'abcd' string will " +
      "not be changed.\n" +
      "https://blog.pjam.me/posts/ruby-symbol-to-proc-the-short-version/"
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
      "intermediate-level", "tap", "capitalize!"
    ],
    "explanation": "The code provided uses the `tap` method, which is a Ruby " +
      "method that yields self to the given block and returns self. The " +
      "block of code `&:capitalize!` is using the `capitalize!` method, " +
      "which modifies the original string by capitalizing the first letter " +
      "of the string and downcasing the remaining characters."
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
      "advanced-level", "===",
    ],
    "explanation": "The code creates two arrays each containing a single " +
      "element, which is a range. Two arrays are considered equal if they " +
      "contain the same number of elements and if each element is equal to " +
      "the corresponding element in the other array. Since both arrays " +
      "contain the same single range element (`1...10`), they are considered " +
      "equal."
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
    "explanation": "The triple equals `===` operator in the context of Range " +
      "objects is essentially a membership test. It checks if the right-hand " +
      "operand falls within the range of the left-hand operand.\n" +
      "In this specific case, the right-hand side `(1...10)` does not fall " +
      "within the range of the left-hand side `(1...10)`, because the " +
      "right-hand side is a Range object itself, not an individual number. " +
      "Therefore, it returns `false`."
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
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "==="
    ],
    "explanation": "`[1, 2] + [2, 3]` results in `[1, 2, 2, 3]`. The `+` " +
      "operator concatenates two arrays.\n" +
      "`[1, 2] | [2, 3]` results in `[1, 2, 3]`. The `|` operator performs a " +
      "set union operation which combines the arrays and removes any duplicates.\n" +
      "In the context of Arrays, `===` behaves the same as `==`, comparing " +
      "elements of the arrays in order and considering two arrays equal only " +
      "if all corresponding elements are equal."
  },
  {
    "id": "006e5848-cdc6-41e3-be89-e93856270137",
    "question": "What will be the output of the following code?\n<code>puts 3 === (1..5)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "==="
    ],
    "explanation": "The `===` operator behaves differently depending on the " +
      "type of the object on its left side. When the left side is a number, " +
      "the `===` operator essentially behaves like the `==` operator. So " +
      "`3 === (1..5)` is checking if the integer `3` is equal to the range " +
      "`(1..5)`, which is obviously `false`.\n" +
      "Conversely, when the range is on the left side, as in `(1..5) === 3`, " +
      "the `===` operator checks whether the number on the right side falls " +
      "within the range, which would return `true`."
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
    "explanation": "In Ruby, `===` is known as the case equality operator. " +
      "It is used to test equality within a when clause of a case statement.\n" +
      "For `Numeric === 42`, it will return `true` because `42` is an " +
      "instance of `Numeric` class.\n" +
      "However, `42 === Numeric` will return `false` because `Numeric` is " +
      "not an instance of `Integer` (which is the class of `42`)."
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
      "advanced-level", "FalseClass#==="
    ],
    "explanation": "In many cases, `===` behaves just like `==`, especially " +
      "with many of the built-in classes like `Integer`, `String`, `Array`, " +
      "and `Hash`. So when you do `false === false`, it behaves the same as " +
      "`false == false` and returns `true`."
  },

  {
    "id": "34a182d7-7098-4b57-b603-b4d680b916dd",
    "question": "What will be the output of the following code?```(TrueClass === TrueClass) == (Object === Object)```",
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
    "explanation": "`TrueClass === TrueClass` checks whether `TrueClass` is " +
      "a `TrueClass` or an instance of its subclasses, which is not the " +
      "case, so it returns `false`.\n" +
      "`Object === Object` checks whether `Object` is an `Object` or an " +
      "instance of its subclasses. Since `Object` is indeed an instance of " +
      "itself, this expression returns `true`."
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
      "intermediate-level", "RegExp#==="
    ],
    "explanation": "The `===` operator behaves differently depending on the " +
      "context. In the case of a Regular Expression (RegExp) and a string, " +
      "it checks if the string matches the pattern defined by the RegExp."
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
      "beginner-level", "grep", "Enumerable.grep"
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
      "beginner-level", "grep", "range"
    ],
    "explanation": "The expression `(1..10).grep(3...5)` will return an array containing the elements of the range `1..10` that match the pattern specified by the range `3...5`.\n" +
      "In this case, the range `3...5` specifies a pattern that includes all the integers from 3 up to, but not including, 5. So the expression will return an array `[3, 4]`.\n" +
      "The `grep` method in Ruby is usually used to search for patterns in arrays or enumerables, but it can also be used with ranges. When used with a range, `grep` checks each element of the range against the pattern and returns a new array containing the elements that match."
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
      "beginner-level", "grep", "range"
    ],
    "explanation": "The provided Ruby code uses the `grep` method to filter " +
      "elements from a range `(1..10)` that match the given pattern " +
      "`(-2...2)`. The pattern is an exclusive range, meaning it includes " +
      "the start value (-2) but excludes the end value (2). Since the " +
      "pattern is a range of (-2...2), and the range (1..10) starts from 1, " +
      "there is only one element that matches the pattern, which is 1."
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
      "beginner-level", "grep", "range"
    ],
    "explanation": "The provided code uses the `grep` method to filter " +
      "elements from a range (1...10) that match the given pattern (8...12). " +
      "Both ranges are exclusive, meaning they include the start value but " +
      "exclude the end value."
  },
  {
    "id": "66183e3d-3a30-4523-9742-f665c091a37e",
    "question": "What will return the following code?\n<code>(1...10).grep(->(x){x%2==0})</code>",
    "type": "mc",
    "choices": {
      "1": "[2,4,6,8]",
      "2": "[2,4,6,8,10]",
      "3": "[3,5,7,9]",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "grep", "lambda", "range"
    ],
    "explanation": "This code uses the `grep` method to filter elements from " +
      "the range (1...10) that match the given lambda function. The lambda " +
      "function checks if the element (x) is an even number (x % 2 == 0). " +
      "The range is (1...10), an exclusive range, meaning it includes the " +
      "start value (1) but excludes the end value (10)."
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
      "intermediate-level", "grep", "range"
    ],
    "explanation": "This code uses the `grep` method to filter elements from " +
      "a range (1..10) that match the given pattern (7..10). The pattern is " +
      "an inclusive range, meaning it includes both the start value (7) and " +
      "the end value (10). Since the pattern is a range of (7..10), the " +
      "overlapping elements are 7, 8, 9, and 10."
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
    "id": "d3aa38b1-a7c7-4bf3-be9b-de716b14305b",
    "question": "What will return the following code?\n<code>obj = Object.new\nobj.define_singleton_method(:foo) do 42 end\nobj.dup.foo</code>",
    "type": "mc",
    "choices": {
      "1": "NoMethodError",
      "2": "42",
      "3": "nil",
      "4": "Object"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "dup", "singleton-methods"
    ],
    "explanation": "The provided code defines a singleton method `foo` on an " +
      "instance of `Object` and then attempts to duplicate the object and " +
      "call the method `foo` on the duplicated object. However, there's an " +
      "issue with this code. Singleton methods are not copied when you " +
      "duplicate an object using the `dup` method. Therefore, calling the " +
      "`foo` method on the duplicated object will raise a `NoMethodError`, " +
      "because the `foo` method is not defined on the duplicated object." +
      "https://stackoverflow.com/questions/10183370"
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
      "advanced-level", "clone", "singleton-methods"
    ],
    "explanation": "This code defines a singleton method `foo` on an " +
      "instance of `Object`, clones the object, and then calls the method " +
      "`foo` on the cloned object. In this case, the `clone` method creates " +
      "a shallow copy of the object and preserves the singleton methods. " +
      "https://stackoverflow.com/questions/10183370"
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
    "explanation": "This code defines a singleton method `foo` on an " +
      "instance of `Object` and then attempts to duplicate the object and " +
      "call the method foo on the duplicated object. However, there's an " +
      "issue with this code. Singleton methods are not copied when you " +
      "duplicate an object using the `dup` method. Therefore, calling the " +
      "foo method on the duplicated object will raise a NoMethodError, " +
      "because the `foo` method is not defined on the duplicated object." +
      "https://stackoverflow.com/questions/10183370"
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
      "advanced-level", "clone"
    ],
    "explanation": "The provided Ruby code defines a singleton method `foo` " +
      "on an instance of `Object`, clones the object, and then calls the " +
      "method `foo` on the cloned object. In this case, the `clone` method " +
      "creates a shallow copy of the object and preserves the singleton " +
      "methods. Therefore, calling the `foo` method on the cloned object " +
      "will return the value `42`." +
      "https://stackoverflow.com/questions/10183370"
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
      "advanced-level", "p", "method", "proc", "map"
    ],
    "explanation": "The provided Ruby code uses %w{ one two three } to create an array of strings and then attempts to call the map method with the p method as its argument using the & syntax." +
      "The `&` syntax is used to convert a method into a proc. In this case, " +
      "the `method(:p)` expression creates a `Method` object for the " +
      "built-in `p` method. And then `p` method is applied to all elements " +
      "of array. `p` prints value and also returns it. This code is similar " +
      "to the following: ```%w{ one two three }.map { |e| p e }```"
  },
  {
    "id": "e7f435eb-7028-44e4-9033-72a3e14c4442",
    "question": "What will be the output of calling `foo` method?\n<code>def foo\n" +
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
      "intermediate-level", "ensure"
    ],
    "explanation": "When you call the method `foo`, it will execute the following steps:\n" +
      "The `print 'kuku'` statement will be executed, and 'kuku' will be printed.\n" +
      "The `return` statement will be executed, and the method will start to return.\n" +
      "The `ensure` block will be executed, and 'epta' will be printed.\n" +
      "https://ruby-doc.org/docs/ruby-doc-bundle/UsersGuide/rg/ensure.html"
  },
  {
    "id": "a19324fb-12d7-4cdf-bba0-be09937b9a58",
    "question": "What will return the following code?\n<code>[1,2].first == [1,2].first(1)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "The `first` method behaves differently based on whether " +
      "it is provided an argument. \n" +
      "If it's not provided an argument, it will return the first element of " +
      "the array. For example, `[1, 2].first` will return `1`.\n" +
      "If it's provided an argument `n`, it will return the first `n` " +
      "elements of the array as a new array. For example, `[1, 2].first(1)` " +
      "will return `[1]`."
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
      "intermediate-level", "methods"
    ],
    "explanation": "In this code snippet, we define a class `B` with a " +
      "method `!`. The method `!` will print the integer `42`. After " +
      "defining the class, we create a new instance of the `B` class and " +
      "call the `!` method on that instance.\n" +
      "https://docs.ruby-lang.org/en/3.0/syntax/methods_rdoc.html#label-Method+Names"
  },
  {
    "id": "dd765c6a-1667-47dc-8a1d-d3cc6e993314",
    "question": "What will return the following code?\n<code>123.digits</code>",
    "type": "mc",
    "choices": {
      "1": "[3, 2, 1]",
      "2": "[1, 2, 3]",
      "3": "'1111011'",
      "4": "[1,1,1,1,0,1,1]"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Integer#digits"
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
      "advanced-level", "Range", "Array"
    ],
    "explanation": "In this case, you are comparing two arrays, each " +
      "containing a single element, which is the range (1...10). Two arrays " +
      "are considered equal if they have the same elements in the same order."
  },
  {
    "id": "7c747401-9dee-4324-b50b-a5878aaa86db",
    "question": "What will return the following code?```(1...10) == (1...10)```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Range"
    ],
    "explanation": "Ruby compares the range objects based on their starting " +
      "and ending values, as well as the inclusiveness of the range. In this " +
      "case, both ranges have the same starting value (1), the same ending " +
      "value (10), and are exclusive (indicated by `...`)."
  },
  {
    "id": "df3b70b2-879d-40d7-b2c4-5c15d6dad69a",
    "question": "What will be the output of the following code?```puts [1,nil,2].compact```",
    "type": "mc",
    "choices": {
      "1": "[1,2]",
      "2": "[1,2,nil]",
      "3": "[1,nil,2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#compact"
    ],
    "explanation": "The `compact` method is used to remove `nil` elements from an array.\n" +
      "https://apidock.com/ruby/Array/compact"
  },
  {
    "id": "2dede66f-fbb2-47db-b1bd-08df29f1ea91",
    "question": "What will return the following code?```{ String => -> { } }[String]```",
    "type": "mc",
    "choices": {
      "1": "#<Proc:...",
      "2": "String",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "lambda", "Proc"
    ],
    "explanation": "The given Ruby code is a hash with a single key-value " +
      "pair. The key is the `String` class, and the value is a lambda " +
      "(anonymous function) that takes no arguments and does nothing.\n" +
      "When you access the value in the hash using the `String` key, it " +
      "returns the associated lambda."
  },
  {
    "id": "16ebb0f9-c12d-405a-941b-a1f272b8879a",
    "question": "What will be the output of the following code?\n`puts String > Object`",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Object",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", ">", "Module"
    ],
    "explanation": "The given Ruby code is comparing two classes, `String` " +
      "and `Object`, using the `>` (greater than) operator. This operator " +
      "checks if the class on the left side is a subclass of the class on " +
      "the right side.\n" +
      "In Ruby, the `String` class is a subclass of the `Object` class. " +
      "So, the expression `String > Object` will return `false` because " +
      "`String` is not a subclass \"below\" `Object`.\n" +
      "https://apidock.com/ruby/Module/%3E"
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
      "advanced-level", ">", "<", "Module"
    ],
    "explanation": "Class is actually a subclass of Module, so this expression will return true.\n" +
      "https://apidock.com/ruby/Module/%3E"
  },
  {
    "id": "fc5d1ed3-7b26-45c0-bbe6-03f46be062fa",
    "question": "```x = [a: 1, b: 2]```\nWhich expression will return true?",
    "type": "mc",
    "choices": {
      "1": "x[0][:a] == 1",
      "2": "x[:a] == 1",
      "3": "x[:a] == :b",
      "4": "x[0] == 1"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Hash", "Array"
    ],
    "explanation": "This code snippet initializes an array `x` with a single " +
      "element, which is a hash containing two key-value pairs: `:a` with a " +
      "value of `1` and `:b` with a value of `2`.\n" +
      "Expression `x[0][:a] == 1` accesses the first element of the array " +
      "`x` (the hash) and then retrieves the value for the key `:a`, which " +
      "is `1`. The expression evaluates to `1 == 1`, which returns `true`."
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
      "beginner-level", "Array#sample"
    ],
    "explanation": "https://apidock.com/ruby/Array/sample"
  },
  {
    "id": "c2c20f72-7849-41a9-969c-0b3a38fdc1db",
    "question": "What will be the output of the following code?\n" +
      "<code>" +
      "f = File.open('file.txt', 'w')\n" +
      "f.write('1')\n" +
      "File.rename('file.txt', 'file2.txt')\n" +
      "f.write('2')\n" +
      "f.close\n" +
      "p IO.read('file2.txt')\n" +
      "</code>",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "1",
      "3": "2",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "File.open", "File.rename", "File#write", "IO.read"
    ],
    "explanation": "The given code snippet performs the following actions:\n" +
      "\n" +
      "Opens a file named `file.txt` in write mode, creating it if it doesn't exist.\n" +
      "Writes the character `1` to the file.\n" +
      "Renames the file from `file.txt` to `file2.txt`.\n" +
      "Writes the character `2` to the file, which is now named `file2.txt`.\n" +
      "Closes the file.\n" +
      "Reads the contents of `file2.txt` and prints it using the p method."
  },
  {
    "id": "057467ed-22e7-405d-8a32-bf0ee754128d",
    "question": "What will be the output of the following code?\n`'Minkovsky'[/k/]`",
    "type": "mc",
    "choices": {
      "1": "\"k\"",
      "2": "[\"k\", \"k\"]",
      "3": "[3, 7]",
      "4": "SyntaxError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "String", "[]", "Regexp"
    ],
    "explanation": "The given Ruby code is using a regular expression to " +
      "match a pattern in a string. The regular expression `/k/` is looking " +
      "for the first occurrence of the character 'k' in the string 'Minkovsky'.\n" +
      "https://apidock.com/ruby/String/%5B%5D"
  },
  {
    "id": "ed51916b-4ed4-4ce0-bcc6-cf2e025f302f",
    "question": "What will be the output of the following code?```'Einstein'[/k/g]```",
    "type": "mc",
    "choices": {
      "1": "SyntaxError",
      "2": "[3, 7]",
      "3": "[\"k\", \"k\"]",
      "4": "[\"k\", \"g\"]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "String", "[]", "Regexp"
    ],
    "explanation": "In Ruby, regular expression flags are specified within " +
      "the pattern itself rather than after the pattern, as seen in some " +
      "other languages. In your example, `/k/g` is an incorrect syntax for " +
      "Ruby regular expressions."
  },
  {
    "id": "d0d64e0b-f64d-419f-bb75-e18d919e5536",
    "question": "What will be the output of the following code?```text = \"hello\"\n" +
      "text.concat(\"2\")\n" +
      "p text```",
    "type": "mc",
    "choices": {
      "1": "hello2",
      "2": "hello",
      "3": "hellohello",
      "4": "hello hello"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "String#concat"
    ],
    "explanation": "1. Assigns the string `\"hello\"` to the variable `text`.\n" +
      "2. Concatenates the string `\"2\"` to the `text` variable using the `concat` method.\n" +
      "3. Prints the value of the `text` variable using the `p` method.\n" +
      "https://apidock.com/ruby/String/concat"
  },
  {
    "id": "b44bac43-be08-44dc-bfbf-9250c34afd41",
    "question": "What will be the output of the following code?```p \"hello\".concat(33)```",
    "type": "mc",
    "choices": {
      "1": "hello!",
      "2": "hello33",
      "3": "hello",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "String#concat"
    ],
    "explanation": "The given code snippet is trying to concatenate the " +
      "Unicode code point 33 to the string `\"hello\"`.\n" +
      "https://apidock.com/ruby/String/concat"
  },
  {
    "id": "e1f7adcd-f6c6-44ba-84ad-da51bbe09840",
    "question": "What error is not inherited from StandardError?",
    "type": "mc",
    "choices": {
      "1": "SyntaxError",
      "2": "FiberError",
      "3": "NameError",
      "4": "RuntimeError"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "StandardError"
    ],
    "explanation": "1. `SyntaxError`: This error is raised when there is a syntax error in the Ruby code. It is a subclass of `ScriptError`, not `StandardError`.\n" +
      "\n" +
      "2. `FiberError`: This error is raised when there is an issue with fibers, lightweight concurrency primitives in Ruby. It is a subclass of `StandardError`.\n" +
      "\n" +
      "3. `NameError`: This error is raised when a variable, method, or constant is referenced, but it is not defined. It is a subclass of `StandardError`.\n" +
      "\n" +
      "4. `RuntimeError`: This error is raised when there is a generic runtime error, and no other error class is specified. It is a subclass of `StandardError`."
  },
  {
    "id": "31098e6a-ccbf-4a11-8584-629c6b825f6f",
    "question": "What error is inherited from StandardError",
    "type": "mc",
    "choices": {
      "1": "ThreadError",
      "2": "LoadError",
      "3": "NotImplementedError",
      "4": "SystemExit"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "StandardError"
    ],
    "explanation": "1. `ThreadError`: This error is raised when there is an " +
      "issue with thread operations in Ruby. It is a subclass of " +
      "`StandardError`.\n" +
      "\n" +
      "2. `LoadError`: This error is raised when there is an issue with " +
      "loading external files or libraries in Ruby. It is a subclass of " +
      "`ScriptError`, not `StandardError`.\n" +
      "\n" +
      "3. `NotImplementedError`: This error is raised when a method is " +
      "called that needs to be implemented by a subclass or a method marked " +
      "as \"not implemented\" is called. It is a subclass of `ScriptError`, " +
      "not `StandardError`.\n" +
      "\n" +
      "4. `SystemExit`: This error is raised when the Ruby program is " +
      "terminated using the exit method or when the program finishes " +
      "executing. It is a subclass of `Exception`, not `StandardError`."
  },
  {
    "id": "9c54ff43-ef84-4fc9-8d20-4da6125e1f2c",
    "question": "What will be the output of the following code?```Range.new(*[2, -3].sort).sum```",
    "type": "mc",
    "choices": {
      "1": "-3",
      "2": "0",
      "3": "-1",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Enumerable#sum"
    ],
    "explanation": "1. Creates an array `[2, -3]`.\n" +
      "2. Sorts the array, resulting in `[-3, 2]`.\n" +
      "3. Uses the splat operator (`*`) to pass the sorted array elements " +
      "as arguments to `Range.new`, creating a range from -3 to 2.\n" +
      "4. Computes the sum of the numbers in the range. The range includes " +
      "the numbers -3, -2, -1, 0, 1, and 2.\n" +
      "https://ruby-doc.org/core-3.1.0/Enumerable.html#method-i-sum"
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
      "intermediate-level", 'Range.new', 'Splat operator'
    ],
    "explanation": "`Range.new([2, -3].sort).sum` and `Range.new([-3, 2].sort).sum`: " +
      "These expressions are incorrect, as the `Range.new` method expects two arguments for " +
      "the starting and ending values of the range, but only one argument " +
      "(an array) is provided.\n" +
      "\n" +
      "`[2, -3].sort.sum`: This expression sorts the array `[2, -3]` " +
      "resulting in `[-3, 2]`, and then calculates the sum of the elements " +
      "in the array, which is -1.\n" +
      "\n" +
      "`Range.new(*[2, -3].sort).sum`: This expression sorts the array " +
      "`[2, -3]` resulting in `[-3, 2]`, creates a range using the splat " +
      "operator (`*`) from -3 to 2, and then calculates the sum of the numbers " +
      "in the range, which is -3."
  },
  {
    "id": "80030412-172b-4840-8230-98a6bdb3b7df",
    "question": "What will be the output of the following code?```!!:false```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "!"
    ],
    "explanation": "In Ruby, the double exclamation marks (`!!`) are used to " +
      "convert a value to its boolean equivalent. The given code snippet is " +
      "trying to convert the symbol `:false` to a boolean value.\n" +
      "Since the `:false` symbol is truthy (all symbols are truthy in Ruby), " +
      "applying the double exclamation marks will result in true."
  },
  {
    "id": "db47f4e6-ba66-46c0-8fe6-d6ef4a39b5d0",
    "question": "What will be the output of the following code?```{a: 1} + {b: 2}```",
    "type": "mc",
    "choices": {
      "1": "NoMethodError",
      "2": "{a: 1, b: 2}",
      "3": "[{a: 1}, {b: 2}]",
      "4": "{ab: 3}"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Hash", "+"
    ],
    "explanation": "In Ruby, the `+` operator is not supported for merging " +
      "hashes. The given code snippet will result in an error."
  },
  {
    "id": "6ff9ad57-6567-4092-8501-a18e3faea087",
    "question": "What will be the output of the following code?```p begin;1/0.0;rescue;2;end```",
    "type": "mc",
    "choices": {
      "1": "Infinity",
      "2": "2",
      "3": "ZeroDivisionError",
      "4": "Block"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Float::INFINITY"
    ],
    "explanation": "The expression `1/0.0` results in a `Float::INFINITY`, " +
      "as dividing by 0.0 in Ruby results in infinity.\n" +
      "Since there is no exception raised in this case, the `rescue` block " +
      "does not execute."
  },
  {
    "id": "2eb6dc75-9a10-4adf-afc8-6fb7016dbc06",
    "question": "What will be the output of the following code?```p begin;1/0;rescue;2;end```",
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
    "explanation": "The expression `1/0` raises a `ZeroDivisionError` " +
      "exception, as dividing by 0 is not allowed.\n" +
      "The `rescue` block is executed because of the raised exception."
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
      "intermediate-level", "Module"
    ],
    "explanation": "The code will execute as follows:\n" +
      "A module `M` is defined.\n" +
      "A class `A` is defined within the module `M`.\n" +
      "An instance of the class `A` within the module `M` is created using `M::A.new`.\n" +
      "The `class` method is called on the instance to obtain the class name.\n" +
      "The `p` method prints the result and returns it as well."
  },
  {
    "id": "47ca76a6-80e7-4b80-9589-be1e7558829d",
    "question": "What code should precede `p -[]*-[]` to get 16",
    "type": "mc",
    "choices": {
      "1": "Array.class_eval { def -@; 4; end }",
      "2": "Array.instance_eval { def -@; 4; end }",
      "3": "def Array.-@; 4; end",
      "4": "Array.add_method(:-@, ->{4})"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "Operator overloading"
    ],
    "explanation": "To achieve the desired output of 16 with the expression `p -[]*-[]`, we need to override the unary negation operator `-@` for the `Array` class. Here are the given choices and the explanation of each option:\n" +
      "\n" +
      "1. `Array.class_eval { def -@; 4; end }`: This option uses `class_eval` to add the `-@` method to the `Array` class, and it returns 4. When the `-@` operator is used on an array, it will now return 4. The expression `-[]*-[]` will become `4 * 4`, which equals 16.\n" +
      "2. `Array.instance_eval { def -@; 4; end }`: This option uses `instance_eval` to define the `-@` method on the singleton class of the `Array` class itself, not on the instances of the `Array` class. It will not affect the behavior of the `-@` operator on array instances.\n" +
      "3. `def Array.-@; 4; end`: This option is a syntax error, as it's not a valid way to define a method for the `Array` class.\n" +
      "4. `Array.add_method(:-@, ->{4})`: This option is incorrect, as there is no `add_method` method for the `Array` class."

  },
  {
    "id": "6a964046-f36a-45c5-999e-f12692e7615a",
    "question": "What will be the output of the next code? ```[1, 1, 2].tally```",
    "type": "mc",
    "choices": {
      "1": "{ 1 => 2, 2 => 1 }",
      "2": "[[1], [2]]",
      "3": "{ 1 => 1, 2 => nil }",
      "4": "[2, 1, 1]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Enumerable#tally"
    ],
    "explanation": "`tally` counts the occurrences of each element in the " +
      "enumerable (in this case, an array) and returns a hash with the " +
      "elements as keys and their counts as values.\n"
  },
  {
    "id": "17d1018d-2241-4759-899b-a37079286236",
    "question": "What will be the output of the following code?```def foo(*a)\n" +
      "\tprint *a\n" +
      "end\n" +
      "foo(1, 2)```",
    "type": "mc",
    "choices": {
      "1": "12",
      "2": "[1,2]",
      "3": "Error",
      "4": "2"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Splat operator"
    ],
    "explanation": "The `print` method is called with the arguments 1 and 2, " +
      "using the splat operator (`*`) to pass the elements of the array `a` " +
      "as separate arguments. The `print` method prints the arguments " +
      "without any separators, resulting in the output \"12\"."
  },
  {
    "id": "45e2026a-fd31-4886-bb1e-eff377700d77",
    "question": "Which way is more idiomatic?",
    "type": "mc",
    "choices": {
      "1": "if an_object && an_object.method?",
      "2": "if an_object != nil && an_object.method? == true"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "Option 1: `if an_object && an_object.method?` is generally considered more idiomatic in Ruby. \n" +
      "This is because Ruby encourages expressive, concise code. Option 1 leverages Ruby's built-in truthy and falsy values: in Ruby, `nil` and `false` are falsy, and everything else (including `0`, empty arrays, and empty strings) are truthy. \n" +
      "Option 2 is more verbose and doesn't take full advantage of Ruby's truthiness. Explicitly checking `an_object != nil` and `an_object.method? == true` is generally not necessary in Ruby. \n" +
      "That being said, if for some reason it's important in your specific context to ensure `an_object` is not `nil` and `an_object.method?` returns the Boolean value `true` (not just a truthy value), then you might want to use Option 2. But in general, Option 1 is more idiomatic Ruby."
  },
  {
    "id": "96f8cd11-df98-4fd6-9d4c-6d48dc3a8b51",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = \"hello\" and \"world\"</code>",
    "type": "mc",
    "choices": {
      "1": "hello",
      "2": "world",
      "3": "hello world",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "and", "Precedence order"
    ],
    "explanation": "The `and` keyword has lower precedence than `=` " +
      "(assignment operator), so the assignment `foo = \"hello\"` is " +
      "performed first, then `\"world\"` is evaluated but its result is not " +
      "stored anywhere."
  },
  {
    "id": "45ea1552-e8b7-48cf-9de7-653b6298f0cb",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = \"hello\" && \"world\"</code>",
    "type": "mc",
    "choices": {
      "1": "world",
      "2": "hello",
      "3": "hello world",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "&&", "Precedence order"
    ],
    "explanation": "The `&&` operator is a boolean operator. It returns the " +
      "first operand if it is false or nil, otherwise, it returns the second " +
      "operand."
    },
  {
    "id": "fa56538f-18ae-47a2-bb4f-49837c1cba85",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = \"hello\" | \"world\"</code>",
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
    "explanation": "Trying to use the `|` operator between two strings, like " +
      "`\"hello\" | \"world\"`, is incorrect and will result in an error. \n" +
      "This is because the pipe (`|`) operator is not defined for string " +
      "concatenation or logical OR in Ruby. It is mainly used for performing " +
      "bitwise OR operations on numbers and union operations on arrays."
  },
  {
    "id": "63407b84-2327-48f5-8205-682e2ee8ea98",
    "question": "What will be the value of the variable <code>foo</code>?\n<code>foo = \"hello\" & \"world\"</code>",
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
    "explanation": "The `&` operator is not defined for String objects. " +
      "It's mainly used for performing bitwise AND operations on numbers or " +
      "set intersection operations on arrays."
  },
  {
    "id": "b2e92db2-2870-42fb-ba8e-c32e4d36a8e6",
    "question": "What will be the value of the variable `foo`?```foo = false || true```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "||"
    ],
    "explanation": "The `||` operator is a logical OR operator. It returns " +
      "`true` if either or both of its operands (the values it's working " +
      "with) are `true`, and `false` only if both operands are `false`."
  },
  {
    "id": "99532661-1847-466b-a69a-cf7532597007",
    "question": "What will be the value of the variable `foo`?```foo = false or true```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Precedence order"
    ],
    "explanation": "In Ruby, the `or` keyword is used for control flow and " +
      "has lower precedence than the assignment operator `=`.\n" +
      "Due to the lower precedence of the `or` keyword, the assignment " +
      "operator `=` will be executed first. This means the value `false` " +
      "will be assigned to the variable `foo`. The `or` keyword won't change " +
      "the outcome in this case."
  },
  {
    "id": "abd951cf-9b39-489e-8e9d-ad5b64ebb903",
    "question": "What will return the following code?```true or true ? false : true```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "SyntaxError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "or", "Ternary operator", "Precedence order"
    ],
    "explanation": "The `or` operator has lower precedence than the ternary " +
      "conditional operator (`? :`)."
  },
  {
    "id": "c11d7070-ac77-4041-bd74-7d921d60195a",
    "question": "What will return the following code?```false and false ? false : true```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "SyntaxError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "and", "Ternary operator", "Precedence order"
    ],
    "explanation": "The `and` operator has lower precedence than the ternary " +
      "conditional operator (`? :`). The code is interpreted as follows:" +
      "```false and (false ? false : true)```.\n" +
      "Since `false` is the first operand of the `and` operator, the overall " +
      "expression short-circuits and evaluates to `false` without even " +
      "evaluating the right-hand side of the `and` operator."
  },

  {
    "id": "97512517-214a-459b-bc83-952e42d4ad27",
    "question": "What will return the following code?```true and not false && !true```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "SyntaxError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Precedence order"
    ],
    "explanation": "http://phrogz.net/programmingruby/language.html#table_18.4"
  },
  {
    "id": "c9878bc7-5c99-4bf2-8d7c-6d3f6a6192fb",
    "question": "What will be the output of the following code?```puts !!0```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "!!0"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
    ],
    "explanation": "In Ruby, the number `0` is considered truthy, unlike " +
      "some other languages where it might be considered falsy. The given " +
      "code will output `true`. The double negation operator `!!` is a " +
      "common trick used to convert a truthy value to `true` and a falsy " +
      "value to `false`. Since `0` is truthy, applying `!!` to it will " +
      "result in `true`."
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
      "advanced-level", "Proc", "lambda"
    ],
    "explanation": "The given code checks whether a `lambda` is an instance " +
      "of the `Proc` class. lambdas in Ruby are indeed instances of the " +
      "`Proc` class."
  },
  {
    "id": "2a5bfab8-639e-4072-9665-4fc697f1a0b9",
    "question": "What will be the output of the following code?```(42 if 5) == (5 && 42)```",
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
    "explanation": "The given code compares two expressions:\n" +
      "1. `(42 if 5)`: Any non-`nil` and non-`false` value is " +
      "considered truthy. Since `5` is truthy, the `if` condition evaluates " +
      "to `true`, and the expression returns `42`.\n" +
      "2. `(5 && 42)`: The `&&` operator returns the first falsy value in " +
      "the expression, or the last value if all are truthy. Since both `5` " +
      "and `42` are truthy, the expression returns `42`."
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
    "explanation": "https://gist.github.com/PragTob/8f037b6cab4bffca411063aced6a7917"
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
    "explanation": "https://gist.github.com/jakimowicz/df1e4afb6e226e25d678"
  },
  {
    "id": "74e177d7-d9b4-4799-8ce0-0ac41b34995c",
    "question": "What will be the output of the following code?```a = 1; a &&= 2; puts a```",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "1",
      "3": "Error",
      "4": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "&&="
    ],
    "explanation": "If the variable `a` is truthy (i.e., not `nil` or " +
      "`false`), it assigns the right-hand side value (`2`) to `a`."
  },
  {
    "id": "b85b3e4a-e410-4557-84e5-91db23c8f670",
    "question": "What will return the following code?```def test\n" +
      "  def test\n" +
      "    2\n" +
      "  end\n" +
      "  1\n" +
      "end\n" +
      "test + test```",
    "type": "mc",
    "choices": {
      "1": "3",
      "2": "2",
      "3": "1",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "methods"
    ],
    "explanation": "When the `test` method is called the first time, it " +
      "defines the inner `test` method and returns `1`. After this call, the " +
      "inner `test` method will override the outer `test` method. When you " +
      "call the `test` method again, it will execute the inner `test` method " +
      "and return `2`. So, the expression `test + test` will return `1 + 2`, " +
      "which equals `3`."
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
    "explanation": "Running a Ruby program with the `-w` option will enable " +
      "verbose mode, which displays additional warnings and diagnostic " +
      "messages during the execution of your script."
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
      "beginner-level", "Enumerable#each_with_object"
    ],
    "explanation": "The `each_with_object` method iterates over the elements " +
      "of an array, yielding each element to the block along with the " +
      "provided object. In this case, the provided object is an empty hash " +
      "(`{}`). The block just returns the element `a` without modifying the " +
      "hash `b`. Since the hash `b` is never modified in the block, the " +
      "final result of `each_with_object` will be the unmodified empty hash " +
      "(`{}`)."
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
      "beginner-level"
    ],
    "explanation": "The code will raise a `TypeError` because the `reduce` " +
      "function is expecting the block to return the accumulator for the " +
      "next iteration. However, the block `a[b] = b` returns the value " +
      "assigned (i.e., `b`), not the accumulator (`a`)."
  },
  {
    "id": "fa55e5a7-9939-45a9-863c-05ea5e6e4943",
    "question": "What will be the output of the following code?```puts 17_100```",
    "type": "mc",
    "choices": {
      "1": "17_100",
      "2": "17100",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "numbers"
    ],
    "explanation": "In Ruby, you can use underscores as a visual separator " +
      "for large numbers to make them more readable. These underscores are " +
      "ignored when the code is executed."
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
      "beginner-level", "style-guide"
    ],
    "explanation": "The better name for the variable in this case would be " +
      "\"current_date\". It is descriptive and follows the snake_case naming " +
      "convention used in Ruby."
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
      "beginner-level", "Array#|"
    ],
    "explanation": "The `|` operator performs a set union operation between " +
      "two arrays, returning a new array containing the unique elements from " +
      "both arrays.\n" +
      "https://ruby-doc.org/core-3.1.0/Array.html#method-i-7C"
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
      "beginner-level", "||"
    ],
    "explanation": "The `||` operator is a logical OR operator in Ruby. It " +
      "returns the first operand if it is truthy (not `nil` or `false`), " +
      "otherwise, it returns the second operand. In this case, since the " +
      "first array `[1, 2]` is truthy, the operator returns `[1, 2]`."
  },
  {
    "id": "0e7ff4d2-d3c7-4035-b284-8f8e0453fff7",
    "question": "What will be the result of the following code?```[1, 2] & [2, 3]```",
    "type": "mc",
    "choices": {
      "1": "[2]",
      "2": "[2, 3]",
      "3": "[1, 2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Array#&"
    ],
    "explanation": "The `&` operator performs an array intersection between " +
      "the two arrays. It returns a new array containing the elements common " +
      "to the two arrays, without duplicates. In this case, the element `2` " +
      "is common to both `[1, 2]` and `[2, 3]`.\n" +
      "https://ruby-doc.org/core-3.1.0/Array.html#method-i-26"
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
      "beginner-level", "&&"
    ],
    "explanation": "The `&&` operator returns the right-hand operand if both operands are truthy "
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
      "beginner-level", "||"
    ],
    "explanation": "1. \"[1, 2] || [2, 3]\": The `||` operator returns the " +
      "first \"truthy\" value it encounters. Because `[1, 2]` is truthy " +
      "(i.e., it's a non-empty array), it will return this value.\n" +
      "2. \"[1, 2] && [2, 3]\": The `&&` operator returns the second value " +
      "if the first one is truthy. So it will return `[2, 3]`.\n" +
      "3. \"[1, 2] and [2, 3]\": The `and` operator is similar to `&&` but " +
      "has lower precedence. However, it doesn't affect the result in this " +
      "case, as there are no other operations to compete with. So it will " +
      "return `[2, 3]`.\n" +
      "4. \"[1, 2] | [2, 3]\": The `|` operator is the set union operator, " +
      "which combines two arrays and removes duplicates. So it will return " +
      "`[1, 2, 3]`."
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
      "beginner-level", "Array#&", "Array#&&", "Array#||", "Array#|"
    ],
    "explanation": "The `&` operator is used for finding the intersection of " +
      "two arrays, meaning it will return the common elements between the " +
      "two arrays. Here it will return [2], as 2 is the common element in " +
      "both arrays.\n" +
      "The `&&` operator is a logical AND operator. It returns the first " +
      "value if it can be interpreted as false; otherwise, it returns the " +
      "second value. Since arrays are always interpreted as true in a " +
      "boolean context (unless they're `nil`), this would return the second " +
      "array, [2, 3].\n" +
      "The `||` operator is a logical OR operator. It returns the first " +
      "value if it can be interpreted as true; otherwise, it returns the " +
      "second value. Since arrays are always interpreted as true in a " +
      "boolean context (unless they're `nil`), this would return the first " +
      "array, [1, 2].\n" +
      "The `|` operator is used for finding the union of two arrays, meaning " +
      "it combines both arrays and removes any duplicates. In this case, it " +
      "would return [1, 2, 3]."
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
      "beginner-level", "Array#&", "Array#&&", "Array#||", "Array#|"
    ],
    "explanation": "Here are the other choices and what they would return:\n" +
      "The `&&` operator is a logical AND. It returns the second operand if " +
      "the first is truthy, otherwise, it returns the first operand. In this " +
      "case, both `[1, 2]` and `[2, 3]` are truthy (non-empty arrays), so it " +
      "returns `[2, 3]`.\n" +
      "2. The `&` operator returns the intersection of the two arrays. In " +
      "this case, it would return `[2]`." +
      "3. The `||` operator is a logical OR. It returns the first operand " +
      "if it's truthy, otherwise, it returns the second operand. In this " +
      "case, `[1, 2]` is truthy, so it returns `[1, 2]`.\n" +
      "4. The `|` operator returns a new array containing the union of the " +
      "two arrays (i.e., unique elements from both arrays). In this case, " +
      "it would return `[1, 2, 3]`."
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
      "advanced-level", "Hash#<"
    ],
    "explanation": "The `Hash#<` operator returns true if hash is subset " +
      "of other."
  },
  {
    "id": "65d5554e-10a0-4d58-aa04-fe759176fb66",
    "question": "What result of `53.divmod(10)`",
    "type": "mc",
    "choices": {
      "1": "[5, 3]",
      "2": "5.3",
      "3": "53",
      "4": "[0, 3]"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "Integer#divmod"
    ],
    "explanation": "The `divmod` method returns an array containing the " +
      "quotient and the remainder of the division. " +
      "https://rubyapi.org/3.2/o/integer#method-i-divmod"
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
      "beginner-level", "Multiple assignment"
    ],
    "explanation": "`a` and `b` are assigned the values 1 and 2 " +
      "respectively, and the string interpolation inside the `print` " +
      "statement combines them into a single string \"12\"\n." +
      "https://docs.ruby-lang.org/en/3.0/syntax/assignment_rdoc.html#label-Multiple+Assignment"
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
    "explanation": "Here's a step-by-step explanation:\n" +
      "1. a = 15, b = 20\n" +
      "2. a, b = b, a % b => a = 20, b = 15\n" +
      "3. a, b = b, a % b => a = 15, b = 5\n" +
      "4. a, b = b, a % b => a = 5, b = 0\n" +
      "At this point, b becomes 0, so the loop terminates, and the value " +
      "of `a` (5) is printed."
  },
  {
    "id": "eb78cd2e-ed52-490d-8be4-86e942ef197a",
    "question": "What will be the output of the following code?```[1] - 1```",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "[]",
      "3": "[1, -1]",
      "4": "[0]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#-"
    ],
    "explanation": "The given code is incorrect. The `-` operator on an " +
      "array expects another array as its operand, but you have provided " +
      "an integer.\n" +
      "https://rubyapi.org/3.2/o/array#method-i-2D"
  },
  {
    "id": "cb8eb20a-6a2b-4a91-b454-b700d16be4bb",
    "question": "What will be the output of the following code?```[1, 2] + [2, 3] - [2]```",
    "type": "mc",
    "choices": {
      "1": "[1, 3]",
      "2": "[1, 2, 3]",
      "3": "Error",
      "4": "[1, 2, 2, -2]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#+", "Array#-"
    ],
    "explanation": "The given code concatenates two arrays `[1, 2]` and " +
      "`[2, 3]` ([1, 2, 2, 3]) and then removes the elements `2` from the " +
      "resulting array.\n" +
      "https://rubyapi.org/3.2/o/array#method-i-2B"
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
      "intermediate-level", "Object#send"
    ],
    "explanation": "You cannot directly call a private method from outside " +
      "the class. However, you can use the `send` method to bypass the " +
      "access control and call the private method. Keep in mind that using " +
      "`send` to access private methods can potentially break encapsulation " +
      "and should generally be avoided, as it may lead to unexpected behavior.\n" +
      "https://rubyapi.org/3.2/o/object#method-i-send"
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
    "explanation": "http://docs.seattlerb.org/rake/doc/command_line_usage_rdoc.html"
  },
  {
    "id": "cdb02dd3-b6ba-47f8-81e1-fdb0da86a724",
    "question": "What is the output of this code?```def foo" +
      " Proc.new { return 'jo' }[]" +
      " 'mo'" +
      "end" +
      "def bar" +
      "	->() { return 'jo' }[]" +
      "	'mo'" +
      "end" +
      "print foo, bar```",
    "type": "mc",
    "choices": {
      "1": "jomo",
      "2": "mojo",
      "3": "jojo",
      "4": "momo"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "Proc", "lambda", "return"
    ],
    "explanation": "This is because the Proc object created in the `foo` " +
      "method uses `return` to return the string 'jo', which means the `foo` " +
      "method terminates immediately and the string 'jo' is printed. In " +
      "contrast, the lambda function created in the `bar` method uses " +
      "`return` to return from the lambda function only, but not from the " +
      "`bar` method. As a result, the `bar` method continues executing after " +
      "the lambda function is called, and prints the string 'mo' after the " +
      "lambda function returns 'jo'.\n" +
      "https://www.rubyguides.com/2016/02/ruby-procs-and-lambdas/"
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
      "advanced-level", "Prime.each", "Enumerator#map"
    ],
    "explanation": "`Prime.each(7)` generates a prime number sequence up to " +
      "7, which is `[2, 3, 5, 7]`. The `map` method then iterates through " +
      "each element in the array and returns the remainder of `5` divided by " +
      "each element, which is `[1, 2, 0, 5]`.\n" +
      "https://ruby-doc.org/stdlib-3.0.0/libdoc/prime/rdoc/Prime.html"
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
      "intermediate-level", "Array#zip"
    ],
    "explanation": "https://ruby-doc.org/core-3.0.0/Array.html#method-i-zip"
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
      "intermediate-level", "Array#|"
    ],
    "explanation": "The `|` operator in Ruby is used for finding the union " +
      "of two arrays, which means it combines both arrays and removes any " +
      "duplicates. The operation is left-associative, which means it groups " +
      "from left to right.\n" +
      "Therefore, when we evaluate the expression `([1,2] | [1,3]) | [1,4]`, " +
      "it first combines `[1,2]` and `[1,3]` to get `[1,2,3]`, and then " +
      "combines this with `[1,4]` to get `[1,2,3,4]`.\n" +
      "Similarly, for the expression `[1,2] | ([1,3] | [1,4])`, it first " +
      "combines `[1,3]` and `[1,4]` to get `[1,3,4]`, and then combines this " +
      "with `[1,2]` to get `[1,2,3,4]`.\n" +
      "So the output of the code `([1,2] | [1,3]) | [1,4] == [1,2] | ([1,3] | [1,4])` " +
      "would be `true`, because the left and right hand side of the `==` " +
      "operator are both equal to `[1,2,3,4]`."
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
      "intermediate-level", "Array#<=>"
    ],
    "explanation": "The `<=>` operator in Ruby is the spaceship operator " +
      "used to compare two objects and returns -1, 0, or 1 depending on " +
      "whether the left-hand side is less than, equal to, or greater than " +
      "the right-hand side.\n" +
      "In the case of the code you provided, the comparison is between two " +
      "arrays `[1, 2]` and `[2, 1]`. When two arrays are compared using the " +
      "spaceship operator, Ruby compares the element at index 0 of both " +
      "arrays first, then moves to the next elements, until it finds a pair " +
      "of unequal elements or one array runs out of elements.\n" +
      "In this case, the comparison starts with the first element in each " +
      "array, `1` and `2`. Since `1` is less than `2`, the comparison " +
      "returns `-1`. Ruby doesn't compare the second element because it's " +
      "not necessary.\n" +
      "https://rubyapi.org/3.2/o/array#method-i-3C-3D-3E"
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
      "intermediate-level", "Hash#==", "Array#to_h"
    ],
    "explanation": "1. `{nil => 42}` is a hash with a single key-value pair," +
      " where the key is `nil` and the value is `42`.\n" +
      "2. `[[nil, 42]].to_h` is an array containing a single sub-array " +
      "`[nil, 42]`, which is then converted to a hash using the `to_h` " +
      "method. The resulting hash is also `{nil => 42}`.\n" +
      "3. The two hashes are compared using the `==` operator, and since " +
      "they have the same key-value pairs, the result is `true`."
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
      "beginner-level", "gem"
    ],
    "explanation": "https://guides.rubygems.org/command-reference/"
  },
  {
    "id": "e48d9828-1d69-4f04-8abc-9790d6ec72c3",
    "question": "What is the purpose of the next command?\n<code>gem list</code>",
    "type": "mc",
    "choices": {
      "1": "Shows locally installed gems",
      "2": "Shows list of all gems from rubygems.org",
      "3": "Shows all gems from Gemfile",
      "4": "No such command"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "gem"
    ],
    "explanation": "https://guides.rubygems.org/command-reference/"
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
      "beginner-level", "gem"
    ],
    "explanation": "https://guides.rubygems.org/command-reference/"
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
    "explanation": "`detect` and `find` are synonyms in Ruby and both " +
      "methods search an enumerable for the first element that matches the " +
      "condition specified in the block. In this case, the block " +
      "`{ |a| a == 2 }` specifies that we are searching for the first " +
      "element that is equal to `2`."
  },
  {
    "id": "7ee59e87-1274-42c9-bddb-52ca54750d0b",
      "question": "What will be the output of the following code?```" +
        "class E2 < StandardError; end" +
        "begin" +
        "  puts 1 / 0" +
        "rescue E2" +
        "  puts 'oops'" +
        "end```",
    "type": "mc",
    "choices": {
      "1": "ZeroDivisionError",
      "2": "\"oops\"",
      "3": "Infinity"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "rescue"
    ],
    "explanation": "In the code, you are attempting to divide by 0, which " +
      "will raise a `ZeroDivisionError`. However, the rescue block is only " +
      "set up to handle the `E2` exception, which is a subclass of " +
      "`StandardError`. Since `ZeroDivisionError` is not a subclass of " +
      "`E2`, the rescue block will not be executed."
  },
  {
    "id": "54731721-5ea4-43bf-8179-42cf90920672",
    "question": "What will return the following code?```(\"\" << 48) + 48.chr)```",
    "type": "mc",
    "choices": {
      "1": "\"00\"",
      "2": "\"4848\"",
      "3": "Error",
      "4": "[48, \"0\"]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "String#<<", "String#chr"
    ],
    "explanation": "1. `\"\" << 48` appends the character with the ASCII " +
      "value 48 to the empty string. The character with the ASCII value 48 " +
      "is \"0\", so the result is `\"0\"`.\n" +
      "2. `48.chr` converts the ASCII value 48 to its corresponding " +
      "character, which is \"0\".\n" +
      "3. `\"0\" + \"0\"` concatenates the two strings, resulting in `\"00\"`."
  },
  {
    "id": "dd22c722-106b-4e51-9726-c488dbba4898",
    "question": "What will be the output of the following code?```%Q{#{%w==}#{%W==}#{Array.new}#{[]}}```",
    "type": "mc",
    "choices": {
      "1": "\"[][][][]\"",
      "2": "Error",
      "3": "4",
      "4": "\"#{%w==}#{%W==}#{Array.new}#{[]}\""
    },
    "answer": "1",
    "tags": [
      "advanced-level", "%Q", "%w", "%W", "Array.new"
    ],
    "explanation":
      "1. `%w==` and `%W==` create empty arrays with the `%w` and `%W` " +
      "notation, respectively. Both notations are used to create an array " +
      "of strings separated by whitespace, but `%W` allows for string " +
      "interpolation while `%w` does not. In this case, the arrays are empty " +
      "because there are no elements between the equal signs `==`.\n" +
      "2. `Array.new` creates an empty array.\n" +
      "3. `[]` is an empty array literal.\n" +
      "4. The `%Q{}` is a way to create a double-quoted string, so it allows " +
      "for string interpolation. The four empty arrays inside the string " +
      "interpolation are concatenated, resulting in the string `\"[][][][]\"`."
  },
  {
    "id": "95aef357-28a5-44af-8338-b1db5b7aa2b6",
    "question": "What will be the output of the following code?```%s[hello]```",
    "type": "mc",
    "choices": {
      "1": ":hello",
      "2": "[:hello]",
      "3": "[\"hello\"]",
      "4": "\"hello\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "%s"
    ],
    "explanation": "The `%s` notation is used to create a symbol."
  },
  {
    "id": "fed7c542-8ab3-40f3-939c-4fe050cd850a",
    "question": "What will be the output of the following code?```.%R[[0]] == /[0]/```",
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
    "explanation": "There is no %R[] notation. https://gist.github.com/jakimowicz/df1e4afb6e226e25d678"
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
    "explanation": "The output of the code will be `true` because both " +
      "`%r[[0]]` and `/[0]/` create the same regular expression, which " +
      "matches a single character '0' enclosed in square brackets."
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
    "explanation": "The `%q` notation is used in Ruby to define " +
      "single-quoted strings. The delimiter character follows the q, and the " +
      "string literal continues until a matching (unescaped) delimiter is " +
      "found. The closing delimiter otherwise matches the opening delimiter. " +
      "If you use '(', '[', '{', '<', you must close it with ')', ']', '}', " +
      "'>' respectively. You can use most other non-alphanumeric characters " +
      "as percent string delimiters, such as '%', '|', '^', etc."
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
      "intermediate-level", "%q", "%Q"
    ],
    "explanation":
      "`%q` is used to create a single-quoted string literal, which does not " +
      "support interpolation. So `%q[#{\"1\"}]` will produce the string " +
      "`'#{\"1\"}'`.\n" +
      "`%Q` is used to create a double-quoted string literal, which supports " +
      "interpolation. So `%Q[#{\"1\"}]` will interpolate the value of the " +
      "expression inside the curly braces (`{\"1\"}`) and produce the string " +
      "`'1'`.\n" +
      "https://gist.github.com/jakimowicz/df1e4afb6e226e25d678"
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
      "intermediate-level", "%q"
    ],
    "explanation": "Here, `%q` is a way to create single-quoted strings, " +
      "similar to how you would use single quotes (`''`). The characters " +
      "following `%q` (which are `[` and `%` in your case) are used as " +
      "delimiters for the string. Since both `%q[satoshi]` and `%q%satoshi%` " +
      "evaluate to the string `'satoshi'`, the comparison between them is `true`."
  },
  {
    "id": "f4e0566c-fc82-4221-b07b-258dbba10c58",
    "question": "What will be the output of the following code?\n<code>p %i{ein zwei drei}</code>",
    "type": "mc",
    "choices": {
      "1": "[:ein, :zwei, :drei]",
      "2": "[\"ein\", \"zwei\", \"drei\"]",
      "3": "Error",
      "4": "\"ein zwei drei\""
    },
    "answer": "1",
    "tags": [
      "beginner-level", "%i"
    ],
    "explanation": "`%i{}` is used to create an array of symbols."
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
    "explanation": "Ruby does not have the `%h` notation for creating a Hash. " +
      "So, the expression `%h{}` would give a syntax error in Ruby."
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
    "explanation": "This piece of code is using block parameters and block " +
      "local variables, specifically the semicolon to define the local " +
      "block variable `b`. But in this case, `b` is not being assigned any " +
      "value within the block.\n" +
      "In Ruby, the block local variables are set up at the start of the " +
      "block execution. If the variables aren't assigned any values inside " +
      "the block, they will be `nil`.\n" +
      "Therefore, the map function will return an array `[nil, nil]`. This " +
      "is because `map` invokes the given block once for each element of the " +
      "array and creates a new array containing the values returned by the block."
  },
  {
    "id": "18fc2599-fe12-4000-b8c8-b4c9d7dca04e",
    "question": "What will be the output of the following code?\n<code>2 ** (10 ** 10) < 3 ** (10 ** 10)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
      "4": "2E10000000000"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Infinity"
    ],
    "explanation": "The expression `2 ** (10 ** 10)` and `3 ** (10 ** 10)` " +
      "would attempt to calculate 2 and 3 raised to the power of (10 raised " +
      "to the power of 10). This operation results in a very large number " +
      "which exceeds the capacity of even a floating point number in most " +
      "computer systems. In Ruby, when such operations are attempted, Ruby " +
      "returns the special value `Float::INFINITY`, which represents positive " +
      "infinity.\n" +
      "The comparison `Float::INFINITY < Float::INFINITY` is not true, as " +
      "infinity is not less than infinity."
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
      "intermediate-level", "Infinity", "**"
    ],
    "explanation": "The expression `2 ** (10 ** 10)` attempts to calculate " +
      "2 raised to the power of (10 raised to the power of 10). This " +
      "operation would result in an extremely large number that exceeds the " +
      "capacity of even a floating point number in most computer systems. " +
      "Therefore, Ruby would return the special constant `Float::INFINITY`, " +
      "which represents positive infinity, as the output of this operation."
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
      "intermediate-level", "Infinity", "ZeroDivisionError", "**"
    ],
    "explanation": "The expression `1 / 0` in Ruby results in a " +
      "`ZeroDivisionError` exception being raised."
  },
  {
    "id": "f2d4ed73-cc45-48e4-a0e0-667284f7b509",
    "question": "What will be the output of the following code?\n<code>10 ** 10 ** 10 == Float::INFINITY</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Infinity", "**"
    ],
    "explanation": "The expression `10 ** 10 ** 10` would attempt to " +
      "calculate 10 raised to the power of (10 raised to the power of " +
      "10). This operation results in a very large number which exceeds the " +
      "capacity of even a floating point number in most computer systems.\n" +
      "In Ruby, when such operations are attempted, Ruby returns the special " +
      "value `Float::INFINITY`, which represents positive infinity.\n" +
      "So the comparison `10 ** 10 ** 10 == Float::INFINITY` is `true`."
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
      "beginner-level", "**"
    ],
    "explanation": "The `**` operator is right-associative. That means the " +
      "expression `2 ** 10 ** 2` is evaluated as `2 ** (10 ** 2)`.\n" +
      "\n" +
      "So, the expression `2 ** 10 ** 2` equals `2 ** (10 ** 2)` equals " +
      "`2 ** 100`."
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
      "beginner-level", "**"
    ],
    "explanation": "https://ruby-doc.org/core-2.5.0/Integer.html#method-i-2A-2A"
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
      "intermediate-level", "String"
    ],
    "explanation": "The code `'8' ** 2` would raise a `TypeError` because " +
      "the exponentiation operator (`**`) doesn't work with string operands."
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
      "advanced-level", "Float::INFINITY", "NaN"
    ],
    "explanation": "The expression `Float::INFINITY - Float::INFINITY` will " +
      "yield `NaN`, which stands for \"Not a Number\". This is because the " +
      "concept of infinity in mathematics is an undefined quantity, and " +
      "operations like subtracting infinity from infinity do not produce a " +
      "definitive or meaningful result."
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
      "beginner-level", "String#*"
    ],
    "explanation": "The expression `'8' * 4` will yield `'8888'`. In this " +
      "context, the `*` operator is the string repetition operator, not the " +
      "multiplication operator. Therefore, it repeats the string `'8'` 4 times."
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
      "intermediate-level", "String"
    ],
    "explanation": "The operation would fail with an error because division " +
      "is not a valid operation on strings."
  },
  {
    "id": "245289e0-d06d-4ef6-b3f7-0448f87ef49e",
    "question": "What will be the output of the following code?```2 ** -1```",
    "type": "mc",
    "choices": {
      "1": "1/2",
      "2": "0.5",
      "3": "Error",
      "4": "NaN"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "Rational"
    ],
    "explanation": "This will return `(1/2)`, a Rational object, which is the " +
      "equivalent of `0.5` in decimal form."
  },
  {
    "id": "92b7ffba-105b-4837-b381-178a79c31aa8",
    "question": "What will be the output of the following code?\n<code>1 / 3 * 3</code>",
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
    "explanation": "The division operation (`1 / 3`) is an integer " +
      "division, and the result is rounded down to the nearest " +
      "integer. In this case, the result of `1 / 3` is `0`. Then, " +
      "when you multiply `0` by `3`, the final result is still `0`."
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
      "intermediate-level", "ZeroDivisionError"
    ],
    "explanation": "The output of the following code `puts 1 / 0` will " +
      "result in a `ZeroDivisionError` being raised."
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
      "advanced-level", "Rational"
    ],
    "explanation": "`1/10r` and `2/10r` are rational numbers (fractions). " +
      "`1/10r` represents the rational number `1/10` and `2/10r` represents " +
      "the rational number `2/10`.\n" +
      "So the sum `1/10r + 2/10r` gives the rational number `3/10`. The " +
      "`puts` method will then convert this rational number to a string and " +
      "output it."
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
    "explanation": "The output of `0.1 + 0.2` in Ruby is `0.30000000000000004`.\n" +
      "This is due to the way floating-point numbers are represented in " +
      "computer systems. Not all decimal fractions can be represented exactly " +
      "as binary fractions, hence the small round-off error. \n" +
      "In the case of `0.1 + 0.2`, the expected mathematical result would " +
      "be `0.3`, but due to the precision limits of binary floating-point " +
      "representation, the actual result is `0.30000000000000004`."
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
      "beginner-level", "Integer#+"
    ],
    "explanation": "`1` is an integer.\n" +
      "`1.5` is a floating-point number (or \"float\").\n" +
      "When an integer and a float are used together in an operation, the " +
      "integer is automatically converted into a float so that the precision " +
      "of the float isn't lost."
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
      "intermediate-level", "Float#+"
    ],
    "explanation": "This code will throw an error. A string cannot be " +
      "coerced into a numeric value (like a float or integer) implicitly. " +
      "This means that Ruby doesn't automatically convert a string to a " +
      "number if you're trying to do arithmetic operations with it. "
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
      "intermediate-level", "String#+"
    ],
    "explanation": "The code will produce an error, specifically a " +
      "`TypeError`. You cannot directly add a string and a float or an " +
      "integer. "
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
      "intermediate-level", "Float#+"
    ],
    "explanation": "The code will produce an error, specifically a " +
      "`TypeError`. You cannot directly add a float and a boolean."
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
    "explanation": "The given code will raise an error because you're trying " +
      "to call the length method on an integer (42). The length method is " +
      "not available for integers, it's usually available for objects like " +
      "strings or arrays."
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
    "explanation": "The code will raise a `TypeError`. You can't use " +
      "arithmetic operators like `+` directly with boolean values."
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
      "intermediate-level", "Array.new", "Array#tap"
    ],
    "explanation": "The output of the given code would be `[1, 2, 3]`.\n" +
      "The `Array.new` method creates a new, empty array. The `tap` method " +
      "then yields this array to the block, which adds the elements 1, 2, and " +
      "3 to it using the `<<` operator. \n" +
      "After the block execution, `tap` returns the original object (in this " +
      "case, the array). As a result, the `print` statement outputs the " +
      "final state of the array, which is `[1, 2, 3]`."
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
    "explanation": "When defining a method, you can use a single asterisk " +
      "(`*`) before a parameter to indicate that this parameter will capture " +
      "all the arguments that are not captured by the other parameters. This " +
      "is often used to define methods that can take a variable number of " +
      "arguments.\n" +
      "In this case, the `foo` method takes three parameters: `a`, `*b`, and " +
      "`c`. \n" +
      "When `foo(1,2,3,4,5)` is called:\n" +
      "- `a` captures the first argument `1`\n" +
      "- `*b` captures all the middle arguments `2, 3, 4` and puts them into " +
      "an array\n" +
      "- `c` captures the last argument `5`"
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
    "explanation": "The second argument passed to `foo` method is __LINE__. " +
      "__LINE__ is a special constant that gives the line number of the " +
      "current line of code."
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
    "explanation": "This is an example of array deconstruction, where the " +
      "`*` prefix in front of a variable name is used to gather all " +
      "remaining items in the array into a new array."
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
    "explanation": "This is due to the way assignment works in Ruby: it " +
      "attempts to assign each element of the array to each variable on the " +
      "left side of the `=`. If there are more elements than variables, the " +
      "extra elements will be discarded. If there are fewer elements than " +
      "variables, the extra variables will be set to `nil`."
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
      "advanced-level", "lambda"
    ],
    "explanation": "Yes, the code is correct. It defines a lambda function " +
      "`l` that takes three arguments `a`, `b`, and `c`, and returns the sum " +
      "of these arguments. Then, it calls the lambda function with the " +
      "arguments 1, 2, and 3 and prints the result."
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
    "explanation": "The code `(1..3).each` returns an Enumerator object. " +
      "This is because calling `each` without a block on a Range object " +
      "returns an Enumerator which can be used to iterate over the range."
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
      "advanced-level", "Enumerator#next", "Integer#next"
    ],
    "explanation": "`[3,2,1].to_enum` turns the array `[3,2,1]` into an Enumerator object.\n" +
      "The first `.next` call will return the first item in the Enumerator, which is `3`.\n" +
      "`3.next` is `4`.\n" +
      "`4.next` is `5`.\n" +
      "`5.next` is `6`."
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
      "intermediate-level", "Array#inject", "Range#to_a", "Integer#+"
    ],
    "explanation": "The code `(1..5).to_a.inject(:+)` will return the sum of " +
      "the numbers from 1 to 5.\n" +
      "Here is a breakdown of what this code does:\n" +
      "- `(1..5).to_a` will convert the range `1..5` into an array, " +
      "resulting in `[1,2,3,4,5]`.\n" +
      "- `.inject(:+)` is a method that is called on an array. It will " +
      "combine all elements of the array by applying a binary operation that " +
      "is specified by a block or a symbol. In this case, the symbol `:+` is " +
      "provided, which stands for addition. So this operation will sum up " +
      "all elements of the array."
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
      "beginner-level", "Hash"
    ],
    "explanation": "The preferred way to write a hash in Ruby depends on the " +
      "version you are using and on the style guide you are following.\n" +
      "\n" +
      "For Ruby 1.9 and later, the new hash syntax `{a: 'b'}` is preferred " +
      "as it is more concise and looks cleaner. It was introduced in Ruby " +
      "1.9 to make the language more elegant. This syntax is also " +
      "recommended by the popular Ruby style guide, RuboCop.\n" +
      "\n" +
      "However, in some cases, like when you have non-symbol keys, you have " +
      "to use the hashrocket syntax `{ :a => 'b' }`.\n" +
      "\n" +
      "So, if you're using Ruby 1.9 or later and dealing with symbol keys, " +
      "choice \"1\" `{a: 'b'}` would be the preferred way."
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
    "explanation": "The output of the code `[1,2,3].to_s` in Ruby will be `\"[1, 2, 3]\"`.\n" +
      "\n" +
      "In Ruby, calling `to_s` on an array will convert the array to a string " +
      "representation. The resulting string includes the square brackets " +
      "denoting the array, as well as the elements of the array. The elements " +
      "are separated by commas and a space for readability."
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
    "explanation": "You can create a string from an array using the `join` " +
      "method, which concatenates the array elements into a single string.\n" +
      "`ary.to_s`: This will convert the array into a string representation " +
      "which includes square brackets and commas, so it's not the right " +
      "choice if you want to achieve 'abcde' from ['a', 'b', 'c', 'd', 'e'].\n" +
      "`ary.implode`: This would not work because `implode` is not a valid " +
      "method in Ruby. In PHP, `implode` is similar to `join` in Ruby.\n" +
      "`ary.concat`: The `concat` method is used to append the elements of " +
      "another array to an existing array. It does not return a string, so " +
      "this choice is incorrect.\n"
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
    "explanation": "The output of the code will be `0`. Here's why:\n" +
      "In this code, you're using `each` to iterate over the array `[1,2,3]`," +
      " and for each iteration you're assigning the current array element to " +
      "the block variable `i` and then doubling it with `i += i`. However, " +
      "this `i` is local to the block and does not affect the outer `i` which " +
      "was initially set to `0`.\n" +
      "So when you print `i` at the end, it is still `0` because the outer " +
      "`i` was never changed. The changes were only made to the block-local " +
      "`i`.\n" +
      "Please note that this can be a common source of confusion in Ruby. " +
      "Even though the variable `i` is defined outside of the block, the " +
      "block gets its own local scope and the `i` inside the block does not " +
      "overwrite the `i` outside of the block.\n" +
      "https://stackoverflow.com/questions/6259314/"
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
    "explanation": "This code is incorrect. Block parameters cannot be " +
      "instance variables. You'll get a syntax error if you try to run it."
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
    "explanation": "Sorted, order is insertion order\n" +
      "As of Ruby 1.9, the order in which key-value pairs are inserted into " +
      "a Hash is preserved when you iterate over that Hash. This means that " +
      "Hashes have a deterministic order and can be considered ordered " +
      "collections. This wasn't always the case in older versions of Ruby " +
      "(prior to 1.9), where Hashes were unordered."
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
    "explanation": "The `ancestors` method returns a list of modules " +
      "included in a class (including self). `BasicObject` is the parent " +
      "class of all classes in Ruby. It's the top of the Ruby class " +
      "hierarchy, so its ancestors array only includes `BasicObject` itself."
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
    "explanation": "The `instance_methods` method returns an array of symbols representing the names of the public " +
      "and protected instance methods in the receiver. This typically would be used on a class to get instance " +
      "methods defined in that class and its superclasses."
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
    "explanation": "The `String` class does not have an `each` method defined for it."
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
    "explanation": "In the given code, `'ruby'[1]` accesses the character at index 1 of the string `'ruby'`"
  },
  {
    "id": "d38defe3-65bc-4646-87ca-fa92d86be3dd",
    "question": "What will return the following code `p ->(_){->(){_*_}}[2][]`?",
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
    "explanation": "1. `->(_){->(){_*_}}` is a lambda (anonymous function) that takes one argument `_`.\n" +
      "2. When this lambda is called, it returns another lambda `->(){_*_}` that doesn't take any arguments.\n" +
      "3. This inner lambda multiplies the argument of the outer lambda by itself (`_*_`).\n" +
      "4. The outer lambda is called with the argument `2` using `[2]`.\n" +
      "5. The returned inner lambda (which now effectively represents the square function for the number 2) is immediately called using `[]`."
  },
  {
    "id": "55bb7b2f-ec26-4402-b7d4-4e69b0afc615",
    "question": "What will return the code `[1,2,3].map{|_| ->(_){->(_){_*_}[_]}[_]}`",
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
    "explanation": "1. The array `[1,2,3]` is being mapped over. So for each element in the array, the code block will execute.\n" +
      "2. Inside the block, `|_|` receives each element of the array (1, then 2, then 3).\n" +
      "3. The lambda `->(_){->(_){_*_}[_]}` is then called with the element as its argument.\n" +
      "4. This lambda, when called with an argument, returns another lambda `->(_){_*_}` that takes an argument and returns the square of that argument.\n" +
      "5. The inner lambda is then immediately invoked with the same element from the array."
  },
  {
    "id": "b28098b2-dc75-492a-a42b-67304b73252a",
    "question": "What will code output?\n<code>x = true and false\ny = true && false\nx == y</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true"
    },
    "answer": "1",
    "tags": [
      "ruby",
      "intermediate-level"
    ],
    "explanation": "Operators `and` and `&&` have different priority. Operator `and` priority lower than `=`, and " +
      "operator `&&` has higher. The code from the question can be written like this \n (x = true) and false \ny = (true && false)"
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
    "explanation": "Arrays (`ary` in this case) can contain elements of different types. Ruby is a dynamically " +
      "typed language, which means that variables do not have a fixed type, and an array can hold elements of any type."
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
    "explanation": "The code will iterate through each element of the array [1, 2, 3], and for each element that is " +
      "equal to 1, it will replace it with the string 'first'. The result will be the new array ['first', 2, 3]."
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
  },
  {
    "id": "b6a99612-2567-43d1-a0ab-2fa9fa2a7b23",
    "question": "What will return the following code?" +
      "```def foo(&b1, &b2); b1.call + b2.call; end\n" +
      "foo { 1 } { 2 }```",
    "type": "mc",
    "choices": {
      "1": "SyntaxError",
      "2": "3",
      "3": "1",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "blocks", "yield", "Proc"
    ],
    "explanation": "Ruby methods cannot accept multiple block parameters"
  },
  {
    "id": "194b274d-ffda-4189-928d-08078d2006ce",
    "question": "What will be the output the following code?" +
      "```def foo" +
      "  Proc.new { return }.call" +
      "  42" +
      "end" +
      "puts foo```",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "42",
      "3": "#<Proc:...",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "return", "Proc"
    ],
    "explanation": "The `return` statement inside the `Proc` object will " +
      "make the method `foo` return immediately, without executing any " +
      "further code within the method. This means that the number `42` will " +
      "not be reached."
  },
  {
    "id": "dbed86b5-8e67-4bdb-9c21-8843bd750131",
    "question": "What will return the following code?```'key'.object_id == 'key'.object_id```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error",
    },
    "answer": "1",
    "tags": [
      "advanced-level", "frozen-strings"
    ],
    "explanation": ""
  },
  {
    "id": "42ee6d12-e188-4242-bbec-b9ef7d0ad999",
    "question": "What will return the following code?" +
      "```# frozen_string_literal: true" +
      "'key'.object_id == 'key'.object_id```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
    },
    "answer": "1",
    "tags": [
      "advanced-level", "frozen-strings"
    ],
    "explanation": "Since the `frozen_string_literal` is set to `true`, Ruby" +
      " will reuse the frozen string literal objects for performance " +
      "reasons. This means that both occurrences of the string literal " +
      "`'key'` will have the same `object_id`."
  },
  {
    "id": "a406c95a-1d4d-4f55-bc15-89e6463eeb23",
    "question": "What will return the following code?```nil?.nil?```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
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
    "id": "2f1627b1-96c6-4ac1-819f-9d199a48e9a4",
    "question": "What will return the following code?```nil&.nil?```",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "SyntaxError",
      "3": "true",
      "4": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "safe-navigation-operator"
    ],
    "explanation": "The Ruby code `nil&.nil?` uses the safe navigation " +
      "operator `&.`. The safe navigation operator allows you to call a " +
      "method on an object only if the object is not `nil`. If the object " +
      "is `nil`, the expression will return nil without calling the method."
  },
  {
    "id": "6cf41af4-5b45-4a6d-982c-a8159445d8bb",
    "question": "What will be the output of the following code?```" +
      "p (a = -> (x){ x < 2 ? 1 : x*a[x-1]})[4]```",
    "type": "mc",
    "choices": {
      "1": "24",
      "2": "Error",
      "3": "nil",
      "4": "4"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "This code defines a lambda function `a` that takes " +
      "a single argument `x`. The lambda function is recursive and " +
      "calculates the factorial of the given number. The code then calls the " +
      "lambda function with the argument `4` and prints the result using `p`."
  },
  {
    "id": "d9a71c9e-c206-47ea-afbc-bbf5b9f1d818",
    "question": "What will return the following code?```\"0123456789\"[3.4]```",
    "type": "mc",
    "choices": {
      "1": "3",
      "2": "34",
      "3": "3456",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "String", "Float#to_int"
    ],
    "explanation": "In this code, you are attempting to access the character " +
      "at the index `3.4` in the string `\"0123456789\"`. However, the index " +
      "value should be an integer. Ruby will implicitly convert the float " +
      "`3.4` to an integer using the `to_int` method before performing the " +
      "string indexing operation. The `Float#to_int` method truncates the " +
      "float value to an integer."
  },
  {
    "id": "9f95b554-8840-414d-be43-f16fa8bac381",
    "question": "What will return the following code?```\"%.5f\" % 9.6e-05```",
    "type": "mc",
    "choices": {
      "1": "\"0.00010\"",
      "2": "\"0.00009\"",
      "3": "\"0.000096\"",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": "This code uses string formatting to format a " +
      "floating-point number with a specific number of decimal places. " +
      "In this case, the floating-point number is `9.6e-05`, which is " +
      "scientific notation for `0.000096`. The format string `\"%.5f\"` " +
      "specifies that the number should be formatted as a floating-point " +
      "number with 5 decimal places (rounded)."
  },
  {
    "id": "f1b3d535-79d4-4869-ae32-29e4a861164b",
    "question": "What will return the following code?```{a: 1}.fetch(:b)```",
    "type": "mc",
    "choices": {
      "1": "KeyError",
      "2": "nil",
      "3": "false",
      "4": ":b"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Hash#fetch"
    ],
    "explanation": "When using the `fetch` method without providing a " +
      "default value or block, it will raise a `KeyError` if the key is not " +
      "found in the hash."
  },
  {
    "id": "77f7f0b7-3f54-480e-a051-79ca3af53fc7",
    "question": "What will return the following code?```{a: 1}.fetch(:b, 2)```",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "KeyError",
      "3": "{b: 2}",
      "4": "nil",
      "5": "{a: 1, b: 2}"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Hash#fetch"
    ],
    "explanation": "The `fetch` method allows you to provide a default value " +
      "as the second argument, which will be returned if the key is not " +
      "found in the hash. In this case, the default value is `2`."
  },
  {
    "id": "6653cf97-b49d-4314-aa03-c75f2cb3385d",
    "question": "What will return the following code?```(2..4).reduce(1, :*)```",
    "type": "mc",
    "choices": {
      "1": "24",
      "2": "Error",
      "3": "6",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Range#reduce", "Proc"
    ],
    "explanation": "The `reduce` method is used to accumulate a result by " +
      "applying a binary operation to the elements of an range 2 to 4 " +
      "inclusive. In this case, the binary operation is multiplication " +
      "(`:*`), and the initial value is 1. So, 1 * (2 * 3 * 4) = 24"
  },
  {
    "id": "aac1059f-ad9e-4c43-9128-4b2235ef6294",
    "question": "What will return the following code?```[1,2,3]::size```",
    "type": "mc",
    "choices": {
      "1": "3",
      "2": "Error",
      "3": ":method",
      "4": "#<Method..."
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Class"
    ],
    "explanation": ""
  },
  {
    "id": "9fe71355-b5a6-47d1-893c-809ac079ae61",
    "question": "What will return the following code?```['abc', 'foo'][0][0][0]```",
    "type": "mc",
    "choices": {
      "1": "\"a\"",
      "2": "nil",
      "3": "Error",
      "4": "\"\""
    },
    "answer": "1",
    "tags": [
      "beginner-level", "String"
    ],
    "explanation": "`['abc', 'foo'][0]` returns the first element of the list, which is the string `'abc'`.\n" +
      "`'abc'[0]` returns the first character of the string, which is the character `'a'`.\n" +
      "`'a'[0]` also returns the first character of the string, which is again the character `'a'`."
  },
  {
    "id": "27ae7cc2-f7dc-4c89-a9e9-ab65a31a6f91",
    "question": "What will return the following code?```'' << 97```",
    "type": "mc",
    "choices": {
      "1": "\"a\"",
      "2": "Error",
      "3": "97",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "The `<<` operator is used for concatenation when applied " +
      "to strings. This code is concatenating the character with the ASCII " +
      "value of `97` to an empty string. The character with the ASCII value " +
      "of `97` is `'a'`."
  },
  {
    "id": "c8eca4b6-04a4-4c54-89e6-cfcafc90df0a",
    "question": "What will return the following code?```0.0.nan?```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "0",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Float#nan?"
    ],
    "explanation": "The `nan?` method is used to check if a float is a \"Not " +
      "a Number\" (NaN) value. In this case, you have a float `0.0`, which " +
      "is a valid number."
  },
  {
    "id": "1801892b-f079-47b5-87ec-7a43704bb39f",
    "question": "What will be the output of the following code?```(0.0 / 0.0).nan?```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "Float#nan?"
    ],
    "explanation": "Dividing 0.0 by 0.0 results in a NaN (Not a Number) " +
      "value. The nan? method checks if the float is NaN."
  },
  {
    "id": "56b47ae0-0854-4eec-a113-844ecb8391d3",
    "question": "What will be the output of the following code?```3.to_s(3)```",
    "type": "mc",
    "choices": {
      "1": "\"10\"",
      "2": "\"3\"",
      "3": "\"333\"",
      "4": "\"11\"",
      "5": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Integer#to_s"
    ],
    "explanation": "The `Integer#to_s` method is used to convert a number " +
      "to a string representation in a specified base (radix). The base 3 " +
      "numeral system only uses the digits 0, 1, and 2. So, string `'10'`, " +
      "which represents the number 3 in base 3."
  },
  {
    "id": "d7a071fd-f807-4ea3-ac21-3cd883b16e6d",
    "question": "Is this syntax valid?```def foo(*); end```",
    "type": "mc",
    "choices": {
      "1": "valid",
      "2": "invalid"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "splat"
    ],
    "explanation": "The `*` in the method definition is used to accept a " +
      "variable number of arguments, and it's sometimes called a \"splat\"" +
      " operator. The `foo` method can accept any number of arguments, but" +
      " it doesn't use or store them in a variable. This can be useful in" +
      " situations where you want a method to accept any number of arguments " +
      "but don't care about them, or when you want to override a method in a " +
      "subclass and ignore the arguments passed to the original method."
  },
  {
    "id": "25db6f0e-3b33-430b-8e46-8adb1dc38da5",
    "question": "What will return the following code?```x =* 3```",
    "type": "mc",
    "choices": {
      "1": "[3]",
      "2": "Error",
      "3": "x multiplied by 3",
      "4": "nil"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "splat"
    ],
    "explanation": "This code uses the \"splat\" operator (*) in an " +
      "assignment context. In this case, the splat operator is used to " +
      "create an array with the given value. The code `x =* 3` is equivalent " +
      "to `x = [*3]`.\n" +
      "So, `x =* 3` will assign the value `[3]` to the variable `x`. "
  },
  {
    "id": "6b865559-bbcf-4d72-a15e-ba442ebae97e",
    "question": "What will be return following code?```[1,\"nil\",2].compact```",
    "type": "mc",
    "choices": {
      "1": "[1,\"nil\",2]",
      "2": "[1,2]",
      "3": "[1,nil,2]",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Array#compact"
    ],
    "explanation": "The `compact` method is used on an array to remove all " +
      "`nil` elements. However, in this code, the element `\"nil\"` is a " +
      "string, not the actual `nil` value."
  },
  {
    "id": "496ceb23-5ddd-4f9d-a1f3-b80456d5c984",
    "question": "What code will return the result ```[1,2]```",
    "type": "mc",
    "choices": {
      "1": "[1,nil,2].compact",
      "2": "[1,nil,2].flatten",
      "3": "[1,nil,2].clear",
      "4": "[1,nil,2].collect"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Array#compact"
    ],
    "explanation": "The compact method is used on an array to remove all nil elements."
  },
  {
    "id": "d76e3b1b-53bd-46c6-8397-c3a3d68f7d1c",
    "question": "What will return the following code?```" +
      "module M1\n" +
      "  def foo;  42; end\n" +
      "end\n" +
      "\n" +
      "class C1\n" +
      "  extend M1\n" +
      "end\n" +
      "\n" +
      "C1.new.foo```",
    "type": "mc",
    "choices": {
      "1": "NoMethodError",
      "2": "42",
      "3": "nil"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Module"
    ],
    "explanation": "There is a module `M1` with a method `foo`, which " +
      "returns the integer `42`. Then, we have a class `C1` that uses the " +
      "`extend` keyword to include the methods from the `M1` module as class " +
      "methods.\n" +
      "\n" +
      "However, when we call `C1.new.foo`, we're attempting to use the " +
      "`foo` method as an instance method on a new instance of `C1`. The " +
      "`foo` method was included as a class method, not an instance method, " +
      "so we will receive a `NoMethodError`."
  },
  {
    "id": "3e30ac82-8965-46c9-92d3-818afacdf1c6",
    "question": "What will be the output of the following code?```p 42 while false```",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "42",
      "3": "SyntaxError",
      "4": "\"\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "while"
    ],
    "explanation": ""
  },
  {
    "id": "15239b55-c256-4dab-93cf-46cd0fa4c92c",
    "question": "What will be the output of the following code?```begin\n" +
      "  p 42\n" +
      "end while false```",
    "type": "mc",
    "choices": {
      "1": "42",
      "2": "nil",
      "3": "SyntaxError",
      "4": "\"\""
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "while"
    ],
    "explanation": ""
  },
  {
    "id": "8f12d9e3-b481-4d5a-83a1-97d0261b4edb",
    "question": "What will be the output of the following code?```begin p 42 end if false```",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "42",
      "3": "SyntaxError"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "https://newrelic.com/blog/best-practices/weird-ruby-begin-end"
  },
  {
    "id": "7da927d5-17e4-4e8c-add8-797c005890f6",
    "question": "What will return the following code?```[1].reduce(:a) == [1].inject(:b)```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#reduce", "Array#inject"
    ],
    "explanation": "https://ruby-doc.org/3.2.1/Enumerable.html#method-i-reduce"
  },
  {
    "id": "e2bb1729-c950-46ed-8c71-90b2091ce5ca",
    "question": "What will be the output of the following code?```2.size == 3.size```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Integer#size"
    ],
    "explanation": "Returns the number of bytes in the machine " +
      "representation of int (machine dependent)." +
      "https://ruby-doc.org/3.2.1/Integer.html#method-i-size"
  },
  {
    "id": "a2f6a894-6293-42e5-8788-748c2fac6c26",
    "question": "What will return the following code?```0.succ - 0.pred```",
    "type": "mc",
    "choices": {
      "1": "2",
      "2": "0",
      "3": "-2",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Integer#succ", "Integer#pred"
    ],
    "explanation": "`0.succ` will return `1`, as it is the next integer " +
      "after `0`. `0.pred` will return `-1`, as it is the previous integer " +
      "before `0`.\n" +
      "https://ruby-doc.org/3.2.1/Integer.html#method-i-succ"
  },
  {
    "id": "0cf7ca09-cf6b-4e5f-a8a2-ec4d445fd20a",
    "question": "What will return the following code?```p = -> { 7 }\n" +
      "p 1```",
    "type": "mc",
    "choices": {
      "1": "1",
      "2": "7",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "p"
    ],
    "explanation": ""
  },

  {
    "id": "6d29d8bd-0641-47ce-b292-7d5a377fb499",
    "question": "What will return the following code?```true if false```",
    "type": "mc",
    "choices": {
      "1": "nil",
      "2": "true",
      "3": "false",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "conditions"
    ],
    "explanation": "Since `false` is not true, the condition `if false` is " +
      "not satisfied. Therefore, the expression will not return any value, " +
      "and the result will be `nil`."
  },

  {
    "id": "19505038-553e-43fc-863d-9f510fb47e6c",
    "question": "What will return the following code?```false if true unless false```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "conditions"
    ],
    "explanation": "This can be understood as follows: " +
      "```false if (true unless false)``` and can be rewritten as " +
      "```false if (true if false)``` which is equivalent to ```false```"
  },
  {
    "id": "76f41b27-daf4-4fe6-bc7e-6bfa25946655",
    "question": "What will be the output of the following code?```{a: 3.14, b: 0}.transform_values(&:to_i)```",
    "type": "mc",
    "choices": {
      "1": "{a: 3, b: 0}",
      "2": "Error",
      "3": "[[a, 3], [b, 0]]",
      "4": "{3.14 => :a, 0 => :b}"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Hash#transform_values"
    ],
    "explanation": "The `transform_values` method applies the given block " +
      "to each value in the hash and returns a new hash with the transformed values. "
  },
  {
    "id": "aa1f843f-4422-4335-9350-360abc0619e9",
    "question": "Which method of checking file size for zero is wrong?",
    "type": "mc",
    "choices": {
      "1": "File.nil?(\"filename\")",
      "2": "File.size(\"filename\") == 0",
      "3": "File.size(\"filename\").zero?",
      "4": "File.zero?(\"filename\")"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Fixnum#zero?", "File.zero?", "File#size"
    ],
    "explanation": ""
  },
  {
    "id": "360abc0f-4422-4335-9350-619e9aa1f843",
    "question": "What will return the following code ```[1, 2, 3][-1]```",
    "type": "mc",
    "choices": {
      "1": "3",
      "2": "2",
      "3": "1",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#[]"
    ],
    "explanation": "Using a negative index in Ruby returns the element from the end of the array."
  },
  {
    "id": "a1bc360a-4422-4335-9350-619e9a0ff843",
    "question": "What will return the following code ```(1..1.0/0).take(2)```",
    "type": "mc",
    "choices": {
      "1": "[1, 2]",
      "2": "3",
      "3": "2",
      "4": "Error",
      "5": "1"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#take", "Range", "Infinity"
    ],
    "explanation": ""
  },
  {
    "id": "390418ff-8067-4296-bae4-f98de9cde9a8",
    "question": "What will return the following code ```[1, 2, 4, 2].minmax {|x| x % 2 == 0}```",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "1 4",
      "3": "1",
      "4": "4"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#minmax"
    ],
    "explanation": "https://rubyapi.org/3.2/o/array#method-i-minmax"
  },
  {
    "id": "4db11d06-8a37-4bab-b986-501f5d65007a",
    "question": "What will return the following code ```\"3D\".to_i```",
    "type": "mc",
    "choices": {
      "1": "3",
      "2": "61",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "String#to_i"
    ],
    "explanation": "https://rubyapi.org/3.2/o/string#method-i-to_i"
  },
  {
    "id": "cfac985a-020a-463c-acf3-9f208c0cefe9",
    "question": "What method should be called on `\"3D\"` string to get `(3/1)`",
    "type": "mc",
    "choices": {
      "1": "to_r",
      "2": "to_d",
      "3": "to_e",
      "4": "to_f",
      "5": "No one"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "String#to_r"
    ],
    "explanation": "https://rubyapi.org/3.2/o/string#method-i-to_r"
  },
  {
    "id": "0389ddbd-8093-4686-a0b0-420fd6c0b9bf",
    "question": "What will be the output of the following code?```5.eql?(5.0)```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true"
    },
    "answer": "1",
    "tags": [
      "beginner-level", "Integer#eql?"
    ],
    "explanation": "Returns `true` if `self` and `other` are the same " +
      "type and have equal values."
  },
  {
    "id": "61542109-e5e9-42ba-a16a-27704d2932c4",
    "question": "What will be the output of the following code?```" +
      "x = 0 / 0.0\n" +
      "x == x```",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level", "NaN"
    ],
    "explanation": ""
  },
  {
    "id": "c7f69a8b-788d-4016-bfb1-549e5fb8769f",
    "question": "What will the variable `ar` contain after executing the code?```ar = []\n" +
      "ar << true ? 1 : 2```",
    "type": "mc",
    "choices": {
      "1": "[true]",
      "2": "[1]",
      "3": "true",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#<<", "Precedence order"
    ],
    "explanation": "The statement `ar << true ? 1 : 2` is interpreted as " +
      "`(ar << true) ? 1 : 2`, due to the operator precedence rules. The " +
      "`<<` operator has higher precedence than the ternary operator `? :`."
  },
  {
    "id": "be2d0da8-6a66-49a5-b137-b2ec47275bf5",
    "question": "What will the variable `ar` contain after executing the code?```ar = []\n" +
      "ar << 1 + 2```",
    "type": "mc",
    "choices": {
      "1": "[3]",
      "2": "[1]",
      "3": "nil",
      "4": "Error"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Array#<<", "Precedence order"
    ],
    "explanation": "`1 + 2` is performed first, resulting in `3`. Then, " +
      "the `<<` operation is performed, which appends this result to the " +
      "array `ar`. Therefore, `ar` becomes `[3]`."
  },
  {
    "id": "d6e5227c-0034-4bbd-8289-e77772709eb0",
    "question": "What will be the output of the following code?```[] | [1, 2, 1] == [1, 2, 1].uniq```",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "answer": "1",
    "tags": [
      "intermediate-level", "Precedence order", "Array#uniq", "Array#|"
    ],
    "explanation": "1. `[] | [1, 2, 1]` gives `[1, 2]`.\n" +
      "2. `[1, 2, 1].uniq` also results in `[1, 2]`.\n" +
      "https://ruby-doc.org/core-3.0.0/Array.html#method-i-7C"
  },

  /*
{
  "id": "",
  "question": "What will be the output of the following code?```...```",
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

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
    "question": "What will return the following code?\n<code>3.to_a</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "[3]",
      "3": "[1,2,3]",
      "4": "[0,1,2,3]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
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
    "question": "What will return the following code?\n<code>[1...10] === [1...10]</code>",
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
    "question": "What will return the following code?\n<code>(1...10) === (1...10)</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true",
      "3": "Error"
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
    "question": "What will return the following code?\n<code>3.to_a</code>",
    "type": "mc",
    "choices": {
      "1": "Error",
      "2": "[3]",
      "3": "[1,2,3]",
      "4": "[0,1,2,3]"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "beginner-level"
    ],
    "explanation": ""
  },
  {
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
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
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
      "intermediate-level"
    ],
    "explanation": "https://apidock.com/ruby/Array/compact"
  },
  {
    "question": "What will be the output of the following code?\n<code>puts { String => -> { } }[String]</code>",
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
    "question": "What will be the output of the following code?\n<code>(lambda {}).is_a?(Proc) == true</code>",
    "type": "mc",
    "choices": {
      "1": "true",
      "2": "false",
      "3": "",
      "4": ""
    },
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
    "question": "What will be the output of the following code?\n<code>puts [1, 2] + [2, 3] === [1, 2] | [2, 3]</code>",
    "type": "mc",
    "choices": {
      "1": "false",
      "2": "true"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
    "question": "What will be the output of the following code?\n<code>puts (1..5) === 3</code>",
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
      "-level"
    ],
    "explanation": ""
  },
  {
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
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
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
    "question": "What result of<code>53.divmod(10)</code>",
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
      "intermediate-level"
    ],
    "explanation": ""
  },
  {
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
    "question": "What returns <code>(1...10) === 5</code>",
    "choices": {
      "1": "true",
      "2": "false"
    },
    "type": "mc",
    "answer": "1",
    "tags": [
      "advanced-level"
    ],
    "explanation": ""
  },
  {
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
    "explanation": ""
  }
]

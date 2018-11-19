module.exports = [
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
  {
    "question": "What will be the output of the following code?\n<code>2 ** (10 ** 10)</code>",
    "type": "mc",
    "choices": {
      "1": "Infinity",
      "2": "Error",
      "3": "2E10000000000"
    },
    "answer": "1",
    "tags": [
      "beginner-level"
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
      "-level"
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

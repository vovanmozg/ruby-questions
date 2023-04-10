module.exports = [
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
  {
    "id": "22b33837-f0e9-4eda-8983-02913d7f4ee5",
    "question": "Given these classes:\n" +
      "```.red { color: red }\n" +
      ".blue { color: blue }```\n" +
      "Which color would these divs be?\n" +
      "```<div class=\"red blue\">\n" +
      "<div class=\"blue red\">```",
    "type": "mc",
    "choices": {
      "1": "Both blue",
      "2": "Both red",
      "3": "First red, second blue",
      "4": "First blue, second red"
    },
    "answer": "1",
    "tags": [
      "intermediate-level"
    ],
    "explanation": "The order in which the rules are defined matters. The " +
      "browser will apply the last matching rule in the list (.blue)."
  },
]

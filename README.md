## Ruby Quiz Questions 🌟

This package dedicated to hosting questions for Ruby quizzes. Perfect for those wanting to test their knowledge in Ruby!

### Features:
- **JSON Structured Questions:** All questions are well-structured in JSON format, making it easy to integrate with various platforms or applications.

- **Question Anatomy:**
    - **ID:** A unique identifier for every question.
    - **Question Content:** The main quiz question.
    - **Type:** Denotes the type of question, e.g., multiple-choice (`mc`).
    - **Choices:** A set of possible answers for the user to select.
    - **Answer:** The correct answer's key.
    - **Tags:** Tags associated with the question, such as difficulty level or topic.
    - **Explanation:** A brief description explaining the correct answer.

### Sample Question:
```json
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
    "tags": ["beginner-level", "Hash", "Array"],
    "explanation": "The question focuses on understanding the structure of arrays and hashes in Ruby..."
}
```

### Usage:
Import the library and start accessing a wealth of Ruby-related questions to build your quiz application or use for educational purposes.

```javascript
import questions from 'ruby-questions';
```

### Example of using
[React-native applications for testing the knowledge of Ruby](https://github.com/vovanmozg/few-hundred)

### Contribution:
Feel free to submit pull requests for adding more questions, enhancing question quality, or improving library functionality.


### License

[MIT](https://github.com/atom/atom/blob/master/LICENSE.md)

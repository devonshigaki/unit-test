# Unit Tests with Jest

This repository contains a basic setup for unit testing using Jest. It includes simple examples of unit tests for addition, subtraction, and fetching data.

## Project Structure

```
├── src
│   └── math.js            # Contains the functions to be tested
├── tests
│   ├── add.test.js        # Unit test for the add function
│   ├── subtract.test.js   # Unit test for the subtract function
│   └── fetchData.test.js  # Unit test for the fetchData function
├── package.json           # Project configuration and dependencies
└── README.md              # Project documentation (this file)
```

## Setup

To get started with this project, you will need to have Node.js and npm (Node Package Manager) installed.

### Installing Dependencies

First, clone the repository and navigate to the project directory:

```bash
git clone https://github.com/devonshigaki/unit-tests.git
cd unit-tests
```

Then, install the required dependencies:

```bash
npm install
```

## Running Tests

To run the Jest tests, simply use the following command:

```bash
npm test
```

This will execute all test files located in the `tests` directory and display the results in the terminal.

## Functions

### `add(a, b)`

Adds two numbers and returns the result.

**Example:**

```javascript
const { add } = require('./src/math');
console.log(add(2, 3)); // 5
```

### `subtract(a, b)`

Subtracts the second number from the first and returns the result.

**Example:**

```javascript
const { subtract } = require('./src/math');
console.log(subtract(5, 3)); // 2
```

### `fetchData()`

Asynchronously fetches data and returns it.

**Example:**

```javascript
const { fetchData } = require('./src/math');
fetchData().then(data => console.log(data)); // 'data'
```

## Contributing

If you wish to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or issues, please contact [devonshigaki](https://github.com/devonshigaki).

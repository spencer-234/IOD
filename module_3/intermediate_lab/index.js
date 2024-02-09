/*
1. Create a function that takes a string as a parameter and returns the string with the first
    character of each word changed into a capital letter, as in the example below. Test it with
    different strings.
*/
    const ucFirstLetters = (words) => {
        let uppercase = words.split(" ");

        for (let i = 0; i < uppercase.length; i++) {
            uppercase[i] = uppercase[i][0].toUpperCase() + uppercase[i].substring(1);
        }
        return uppercase.join(" ");
    }

    let words = "hello my name is spencer";
 
    console.log(ucFirstLetters(words));
/*
2. Create a function truncate(str, max) that truncates a given string of text if its total
    length is greater than the max length. It should return either the truncated text, with an
    ellipsis (...) added to the end if it was too long, or the original text otherwise.

    b) Write another variant of the truncate function that uses a conditional operator.
*/
    const truncate = (str, max) => {
        if (str.length > (max)) {
            return `${str.substring(0, (max))}...`
        }
        return str;
    }

    const truncateCondition = (str, max) => {
        return str.length > max ? `${str.substring(0, (max))}...` : str
    }

    let sentence = "lorem ipsum finoewifewbfewufbfbuiewbbfuewuebfewuifbweiubfiuewfuiewfbewuibfewuibfuiewbefwui";

    console.log(truncate(sentence, 4));
    console.log(truncateCondition(sentence, 30));
/*
3. Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

    https://developer.mozilla.org/en-
    US/docs/Web/JavaScript/Reference/Global_Objects/Array

    a) Add 2 new values to the end
    b) Add 2 new values to the beginning
    c) Sort the values alphabetically
    d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
    middle of the animals array with newValue
    e) Write a function findMatchingAnimals(beginsWith) that returns a new array
    containing all the animals that begin with the beginsWith string. Try to make it work
    regardless of upper/lower case.
*/
    const animals = ['Tiger', 'Giraffe'];
    animals.push('Lion', 'Prairie Dog');
    animals.unshift('Anteater', 'Alligator');
    animals.sort();

    const replaceMiddleAnimal = (newValue) => {
        let mid = (animals.length - 1) / 2;
        if (mid % 1 !== 0) {
            mid = Math.floor(mid);
        }
        animals[mid] = newValue;
    }
    replaceMiddleAnimal('Cow');

    const findMatchingAnimals = (beginsWith) => {
        let includeString = [];
        animals.forEach(animal => {
            if (animal.startsWith(beginsWith)) {
                includeString.push(animal);
            }
        })
        return includeString;
    }
    console.log(findMatchingAnimals('A'));
/*
4. Write a function camelCase(cssProp) that changes dash-separated CSS properties like
    'margin-left' into camel-cased 'marginLeft'.
    The function should remove all dashes, and uppercase the first letter of each word after a
    dash.

    b) Create variants of the camelCase function that use different types of for loops, and
    c) with and without the conditional operator.
*/
    const camelCase = (cssProp) => {
        let separated = cssProp.split("-")
        for (let i = 1; i < separated.length; i++) {
            separated[i] = separated[i][0].toUpperCase() + separated[i].substring(1);
        }
        return separated.join("");
    }

    const camelCaseCondition = (cssProp) => {
        let separated = cssProp.split("-");
        let newSeparated = [];
        separated.forEach(word => {
            (word === separated[0])
            ? newSeparated.push(word)
            : newSeparated.push((word[0].toUpperCase() + word.substring(1)))
        })
        return newSeparated.join("");
    }

    const camelCaseWhile = (cssProp) => {
        let separated = cssProp.split("-");
        let i = 0;
        while (i !== separated.length) {
            separated[i] = separated[i][0].toUpperCase() + separated[i].substring(1);
            i++;
        }
        return separated.join("");
    }

    console.log(camelCase("margin-left"));
    console.log(camelCaseCondition("margin-right"));
    console.log(camelCaseWhile("margin-up-down-left-right"));
/*
5. a) Explain why the above code returns the wrong answer
    b) Create a function currencyAddition(float1, float2) which safely adds the two
    decimal numbers float1 and float2 and returns the correct float result.
    c) Create a function currencyOperation(float1, float2, operation) which
    safely performs the given operation (either +, -, / or *) on the two numbers and returns

    the correct float result. https://developer.mozilla.org/en-
    US/docs/Web/JavaScript/Reference/Statements/switch may be useful.
    
    d) (Extension) Extend the above function to include a fourth argument numDecimals
*/  
    let twentyCents = 0.20
    let tenCents = 0.10
    console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

    let fixedTwenty = twentyCents.toFixed(2);
    let fixedTen = tenCents.toFixed(2);
    console.log(fixedTwenty + fixedTen)

    // I. It's not working because of floating point impercision and the toFixed cuntion needs to be on the result of the addition.

    const currencyAddition = (num1, num2) => {
        return (num1 + num2).toFixed(2);
    }
    console.log(currencyAddition(twentyCents, tenCents));

    const currencyOperation = (num1, num2, operation, numDecimals) => {
        if (!Number.isInteger(numDecimals)) return "Number of decimals invalid";

        switch (operation) {
            case '+':
                return (num1 + num2).toFixed(numDecimals);
            case '-':
                return (num1 - num2).toFixed(numDecimals);
            case '/':
                return (num1 / num2).toFixed(numDecimals);
            case '*':
                return (num1 * num2).toFixed(numDecimals);
            default:
                return 'Invalid Operator';
        }
    }

    console.log(currencyOperation(tenCents, twentyCents, '+', 5));
/*
6. Create a function unique(duplicatesArray) which takes an array parameter that may
    include duplicates. Your function should return an array containing only the unique values
    from duplicatesArray.
    Test with the following arrays and create another one of your own.
*/
    const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow'];
    const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];
    const myArray = ['chicken', 'steak', 'lamb', 'veggies', 'chicken', 'pork', 'steak'];

    const unique = (arrayOfWords) => {
        return [...new Set(arrayOfWords)];
    }

    console.log(unique(colors));
    console.log(unique(testScores));
    console.log(unique(myArray));
/*
7. Use the following array of book objects to practice the array functions for map, find and
filter. Test each of your answers to the below tasks.

    a) Write a function getBookTitle(bookId) that uses the find function to return the
    title of the book object with the matching id.

    b) Write a function getOldBooks() that uses the filter function to return all book
    objects written before 1950.

    c) Write a function addGenre() that uses the map function to add a new genre property
    to all of the above books, with the value ‘classic’.

    d) (Extension) Write a function getTitles(authorInitial) that uses map and
    filter together to return an array of book titles for books written by authors whose
    names start with authorInitial.

    e) (Extension) Write a function latestBook() that uses find and forEach to get the
    book with the most recent publication date.
*/
    const books = [
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
        { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
        { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
        { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
        { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
    ];

    const getBookTitle = (bookId) => {
        let book = books.find(book => book.id === bookId);
        return book.title;
    }
    
    console.log(getBookTitle(4));

    const getOldBooks = () => {
        return books.filter(book => book.year < 1950);
    }

    console.log(getOldBooks());

    const addGenre = () => {
        books.map(book => book.genre = 'classic');
        return books;
    }

    console.log(addGenre());

    const getTitles = (authorInitial) => {
        let returnedBooks = books.filter(book => book.author.startsWith(authorInitial));
        return returnedBooks.map(book => book.title);
    }

    console.log(getTitles('H'));

    const latestBook = () => {
        let largest = 0;
        books.forEach(book => {
            if (book.year > largest) {
                largest = book.year;
            }    
        })
        return books.find(book => book.year === largest);
    }

    console.log(latestBook());
/*
8. The following code creates a new Map object for storing names beginning with A, B, or C
    with their phone numbers.

    a) Create a new phoneBookDEF Map to store names beginning with D, E or F

    b) Initialise the contents of phoneBookDEF by passing in an array of keys/values

    c) Update the phone number for Caroline

    d) Write a function printPhoneBook(contacts) that prints the names and phone
    numbers in the given Map

    e) Combine the contents of the two individual Maps into a single phoneBook Map

    f) Print out the full list of names in the combined phone book
*/
    const phoneBookABC = new Map() //an empty map to begin with
    phoneBookABC.set('Annabelle', '0412312343');
    phoneBookABC.set('Barry', '0433221117');
    phoneBookABC.set('Caroline', '0455221182');

    const phoneBookDEF = [
        {
            name: 'Dylan',
            phone: '7584679384'
        },
        {
            name: 'Evan',
            phone: '7584759384'
        },
        {
            name: 'Frank',
            phone: '7584638484'
        },
    ].reduce((acc, person) => acc.set(person.name, person.phone), new Map());
    
    const fullPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

    console.log(fullPhoneBook);
/*
9. Given the below salaries object, perform the following tasks.

    a) Write a function sumSalaries(salaries) that calculates and returns the total of all
    salaries

    b) Write a function topEarner(salaries) that calculates and returns the name of the
    person earning the highest salary
*/
    let salaries = {
        "Timothy" : 35000,
        "David" : 25000,
        "Mary" : 55000,
        "Christina" : 75000,
        "James" : 43000
    };

    const sumSalaries = (salaries) => {
        let sum = 0;
        for (let [key, value] of Object.entries(salaries)) {
            sum += value;
        }
        return sum;
    };

    console.log(sumSalaries(salaries));

    const topEarner = (salaries) => {
        let amount = 0;
        let name = "";

        for (let [key, value] of Object.entries(salaries)) {
            if (value > amount) {
                amount = value;
                name = key;
            }
        }
        return `${name} has the highest salary at $${amount}`;
    }

    console.log(topEarner(salaries));
/*
10.The following code uses the Date object to print the current time and the number of hours
    that have passed today so far. Extend the code to do the following:

    a) Print the total number of minutes that have passed so far today

    b) Print the total number of seconds that have passed so far today

    c) Calculate and print your age as: 'I am x years, y months and z days old'

    d) Write a function daysInBetween(date1, date2) which calculates and returns the
    amount of days in between the two given dates.
*/
    const today = new Date();
    console.log('Current time is ' + today.toLocaleTimeString());
    console.log(today.getHours() + ' hours have passed so far today');
    console.log(((today.getHours() * 60) + today.getMinutes()) + ' minutes have passed so far today');
    console.log(((today.getHours() * 60 * 60) + (today.getMinutes() * 60) + today.getSeconds()) + ' seconds have passed so far today');

    const daysInBetween = (date1, date2) => {
        let day1 = new Date(date1);
        let day2 = new Date(date2);

        let timeInBetween = day2.getTime() - day1.getTime();
        let daysBetween = timeInBetween / (1000 * 60 * 60 * 24);
        return `There are ${daysBetween} days between ${date2} and ${date1}`;
    }

    console.log(daysInBetween("07/13/2024", "07/15/2024"));


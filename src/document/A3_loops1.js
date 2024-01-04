import React from 'react'

const A3_loops1 = () => {

    let for1 = () => {
        const numbers = [5, 1, 8, 3, 2];
        let smallest = numbers[0];

        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] < smallest) {
                smallest = numbers[i];
            }
        }

        console.log(smallest); // Prints 1

    };

    let for2 = () => {
        for (let message = 7; message >= 1; message--) {
            // console.log(message);  
            console.log("message " + message);
        }
    };

    let for3 = () => {
        // let sum = 0;
        for (let i = 0; i <= 5; i++) {
            console.log(i);
            // sum += i; 
        }
        // console.log(sum); 
    };

    let for4 = () => {
        for (let i = 0; i < 21; i += 3) {
            console.log(i);
        }
    };

    let while1 = () => {
        let i = 2;
        while (i <= 7) {
            console.log(i);
            i++;

        }
    };

    let while2 = () => {
        let numbers = [1, 2, 3, 4, 5, 6, 7];
        let i = 3;
        while (i < numbers.length) {
            console.log(numbers[i]);
            i++;
        }
    };

    let while3 = () => {
        let sum = 0;
        let i = 1;
        while (i <= 10) {
            sum += i;
            i++;
        }
        console.log("sum of 1 to 10 is ", sum);
    };

    let dowhile1 = () => {
        let i = 1;
        do {
            console.log(i);
            i++;
        } while (i <= 10);
    };

    let dowhile2 = () => {
        let number = 10;
        do {
            if (number % 2 === 0) {
                console.log(number + "is even.");
            } else {
                console.log(number + "is odd.");
            }
            number++;
        } while (number <= 20);
    };

    let forof1 = () => {
        const fruits = ["apple", "banana", "PineApple", "Pomegranate", "Orange", "Litchi"];
        for (const anyName of fruits) {
            console.log("iterator " + anyName);
            console.log("fruits " + fruits);
        }
    };

    let forof2 = () => {
        const sentence = "This is a sentence.";
        for (const iterator of sentence) {
            console.log("1 iterator can be anyName = " + iterator);
            console.log("2 sentence = " + sentence);
        }
    };

    let forof3 = () => {
        const fruits = ["apple", "banana", "cherry"];

        for (const anyname of fruits) {
            console.log("1" + anyname); // individual name in array
            console.log("2" + fruits); // show full array  
        }

    };

    let forof4 = () => {
        const names = ["Alice", "Bob", "Charlie"];
        const ages = [25, 30, 20];
        const personInfo = {};

        for (const i in names) {
            personInfo[names[i]] = ages[i];
        }

        console.log(personInfo); // Output: { Alice: 25, Bob: 30, Charlie: 20 }


    };

    let forin1 = () => {
        const student = {
            name: "Parth Sarthi",
            age: 45,
            major: "Computer Science",
            city: "New York"
        };
        for (const key in student) {
            console.log("1 key = " + key);
            console.log("2 student = " + student);
            console.log("3 student[key] = " + student[key]);
            console.log(`4 ${key}: ${student[key]}`);
        }
    };

    let forin2 = () => {
        const fruits = ["apple", "mango", "litchi"];
        for (let anyname in fruits) {
            console.log("1 index = " + anyname);
            console.log("2 fruits = " + fruits);
            console.log("3 fruits of index = " + fruits[anyname]);
        }
    };

    let forin3 = () => {
        const message = "Welcome Everyone!";
        for (let char in message) {
            console.log("char = " + char);
            console.log("message = " + message);
            console.log("message in character = " + message[char]);
        }
    };

    let forin4 = () => {
        const name = "Bard";

        for (const key in name) {
            // console.log(key);  
            // console.log(name);
            console.log(key, name[key].charCodeAt(0));
        }
    };

    let foreach1 = () => {
        const numbers = [1, 2, 3, 4, 5];
        numbers.forEach(number => number *= 2);
        console.log(numbers); // Output: [2, 4, 6, 8, 10]

    }

    let foreach2 = () => {
        const scores = [75, 92, 88, 65];
        let highestScore = 0;
        scores.forEach(score => { 
            if (score > highestScore) highestScore = score;
        });
        console.log(highestScore); // Output: 92

    }

    let foreach3 = () => {
        const numbers = [1, 2, 3, 4, 5];
        const squaredNumbers = numbers.map(number => number * number);
        console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

    }
    return (<>
        <h2><b><u>3.loops</u></b></h2>
        {/* {for1()};  */}
        {/* {for2()}; */}
        {/* {for3()}; */}
        {/* {for4()}; */}
        {/* {while1()}; */}
        {/* {while2()}; */}
        {/* {while3()}; */}
        {/* {dowhile1()} */}
        {/* {dowhile2()} */}
        {/* {forof1()} */}
        {/* {forof2()} */}
        {/* {forof3()} */}
        {/* {forof4()} */}
        {/* {forin1()} */}
        {/* {forin2()} */}
        {/* {forin3()} */}
        {/* {forin4()} */}
        {/* {foreach1()} */}
        {/* {foreach2()} */}
        {/* {foreach3()} */}

    </>)
};

export default A3_loops1;  
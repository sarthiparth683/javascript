import React from 'react'

const A3_loops1 = () => {

    let for1 = () => {
        for (let i = 2; i <= 5; i++) {
            console.log(i);
        }
    };

    let for2 = () => {
        for (let message = 2; message <= 7; message++) {
            // console.log(message);
            console.log("message " + message);
        }
    };

    let for3 = () => {
        let sum = 0;
        for (let i = 0; i <= 5; i++) {
            sum += i;
        }
        console.log(sum);
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
            console.log("iterator can be anyName = " + iterator);
            console.log("sentence = " + sentence);
        }
    };

    let forin1 = () => {
        const student = {
            name: "John Doe",
            age: 25,
            major: "Computer Science",
            city: "New York"
        };
        for (const key in student) {
            console.log("key = " + key);
            console.log("student = " + student);
            console.log("student[key] = " + student[key]);
            console.log(`${key}: ${student[key]}`);
        }
    };

    let forin2 = () => {
        const fruits = ["apple", "mango", "litchi"];
        for (let index in fruits) {
            console.log("index = " + index);
            console.log("fruits = " + fruits);
            console.log("fruits of index = " + fruits[index]);
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
  
    return (<>
        <h2><b><u>3.1 - loops</u></b></h2>
        {/* {for1()}; */}
        {/* {for2()}; */}
        {/* {for3()}; */}
        {/* {while1()}; */}
        {/* {while2()}; */}
        {/* {while3()}; */}
        {/* {dowhile1()} */}
        {/* {dowhile2()} */}
        {/* {forof1()} */}
        {/* {forof2()} */}
        {/* {forin1()} */}
        {/* {forin2()} */}
        {/* {forin3()} */}

    </>)
};

export default A3_loops1;  
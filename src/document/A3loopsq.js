import React from 'react'

const A3loopsq = () => {
    // (I.) Examples of :- for loop

    // Example 1 :-  
    let for1 = () => {
        for (let i = 0; i <= 5; i++) {
            console.log(i);
        }
    };


    // Example 2 :-
    let for2 = () => {
        for (let message = 0; message <= 3; message++) {
            console.log("message " + message);
        }
    };


    // Example 3 :-
    let for3 = () => {
        // sum of 50 numbers 
        let sum = 0;
        for (let i = 0; i <= 50; i++) {
            sum += i;
        }
        console.log(sum);
    }


    // (II.) While loop
    // Formate :- 
    // while (condition) {
    // code to be executed repeatedly
    // }

    // Example of While loop :-
    // Example 1.
    let while1 = () => {
        let i = 1;
        while (i <= 10) {
            console.log(i);
            i++;
        }
    };

    // Example 2.
    let while2 = () => {
        let numbers = [1, 2, 3, 4, 5, 6, 7];
        let i = 0;

        while (i < numbers.length) {
            console.log(numbers[i]);
            i++;
        }
    }

    // Example 3. sum of numbers
    let while3 = () => {
        let sum = 0;
        let i = 1;
        while (i <= 10) {
            sum += i;
            i++;
        }
        console.log("sum of 1 to 10", sum);
    }

    // (III.) do while loop 
    // formate
    // do {
    //     code work
    // } while (condition);
    // Example 1.  printing numbers from 1 to 10.
    let dowhile1 = () => {
        let i = 1;
        do {
            console.log(i);
            i++;
        } while (i <= 10);
    }

    // Example 2. Checking even or odd.
    let dowhile2 = () => {
        let number = 1;
        do {
            if (number % 2 === 0) {
                console.log(number + "is even.");
            } else {
                console.log(number + "is odd.");
            }
            number++;
        } while (number <= 20);
    }

    // (IV.) For of loop :- (used mostly in array and strings).
    // syntax of (for of loop)
    // for (variable of iterable){
    // code to be executed
    // }

    // Example 1.
    let forof1 = () => {
        const fruits = ["apple", "banana", "PineApple", "Pomegranate", "Orange", "Litchi"];
        for (const iterator of fruits) {
            console.log("iterator " + iterator, "fruits " + fruits);
        }
    }

    // Example 2.
    let forof2 = () => {
        const sentence = "This is a sentence.";
        for (const iterator of sentence) {
            console.log(iterator, sentence);
            console.log("iterator" + iterator);
            console.log("sentence" + sentence);

        }
    }

    //  (v.)for in loop :- used mostly in object data types.
    let forin1 = () => {
        const student = {
            name: "John Doe",
            age: 25,
            major: "Computer Science",
            city: "New York"
        };
        for (const key in student) {
            console.log(`${key}: ${student[key]}`);
        }
    }

    return (<>
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
    </>)
};

export default A3loopsq;
import React from 'react'

const A4Arrays = () => {
    let array = () => {
        const cars = ['Volvo', 'BMW', 'Maruti', 'Tesla'];
        const fruits = ["apple", "mango", "litchi", "berry"];
        let result1 = cars[0]; //Array Indices. 
        let result2 = cars[1]; //Array Indices.
        let result3 = cars[2]; //Array Indices. 
        let result4 = cars.push("one", "two");  // add to the end. 
        let result4a = cars;
        // let result5 = cars.pop();  // delete from the end & return.
        let result6 = cars.toString();  // converts arrays to string.
        let result7 = cars.concat(fruits);  // joins multiple arrays & return result.
        let result8 = cars.unshift();  // add to start. 
        let result9 = cars.shift();  // delete from start & return. 
        let result10 = cars.slice(1, 4);//returns a piece of the array. slice(startIdx, endIdx)
        let result11 = cars.splice(0, 2); // splice(startIdx,delIdx,newIdx)(add,remove, replace)  
        // Result in console
        console.log("result 1 " + "cars[0]" + "=" + " " + result1);
        console.log("result 2 " + "cars[1] " + "=" + " " + result2);
        console.log("result 3 " + "cars[2] " + "=" + " " + result3);
        console.log("result 4 " + "cars.push() " + "=" + " " + result4);
        console.log("result 4a " + "cars.push() " + "=" + " " + result4a);
        // console.log("result 5 " + "cars.pop() " + "=" + " " + result5);
        console.log("result 6 " + "cars.toString() " + "=" + " " + result6);
        console.log("result 7 " + "cars.concat(fruits) " + "=" + " " + result7);
        console.log("result 8 " + "cars.unshift() " + "=" + " " + result8);
        console.log("result 9 " + "cars.shift() " + "=" + " " + result9);
        console.log("result 10 " + "cars.slice(1, 4)" + "=" + " " + result10);
        console.log("result 11 " + "cars.splice(0, 2)" + "=" + " " + result11);
    };

    let arrayMap1 = () => {
        const numbers = [1, 2, 3, 4];
        const doubledNumbers = numbers.map(number => number * 2);
        console.log(doubledNumbers);
    };

    let arrayMap2 = () => {
        const numbers = [1, 2, 3, 4];
        const stringNumbers = numbers.map(number => number.toString());
        console.log(stringNumbers);

    };

    let arrayMap3 = () => {
        const words = ["apple", "banana", "cherry"];
        const firstLetters = words.map(word => word[0]);
        console.log(firstLetters);
    };

    let arrayFilter2 = () => {
        const names = ["Alice", "Bob", "Charlie", "David"];
        const namesWith5Letters = names.filter(name => name.length === 5);
        console.log(namesWith5Letters);

    };

    let arrayFilter3 = () => {
        const numbers = [-2, 5, 0, -4, 10];
        const negativeNumbers = numbers.filter(number => number < 0);
        console.log(negativeNumbers);

    };

    let arrayReduce1 = () => {
        const numbers = [4, 6, 8, 10];
        const allEven = numbers.reduce((accumulator, currentValue) => accumulator && currentValue % 2 === 0, true);
        console.log(allEven); // Output: true

    };

    let arrayReduce2 = () => {
        const numbers = [1, 2, 3, 4, 5];
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum); // Output: 15

    };

    let arrayReduce3 = () => {
        const numbers = [1, 2, 3, 4, 5];
        const doubledNumbers = numbers.reduce((accumulator, currentValue) => {
            accumulator.push(currentValue * 2);
            return accumulator;
        }, []);
        console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

    };


    return (<>
        <h2><b><u>4.Arrays</u></b></h2>
        {/* {array()} */}
        {/* {arrayMap1()}  */}
        {/* {arrayMap2()} */}
        {/* {arrayMap3()} */}
        {/* {arrayFilter2()} */}
        {/* {arrayFilter3()} */}
        {/* {arrayReduce1()} */}
        {/* {arrayReduce2()} */}
        {/* {arrayReduce3()} */}

    </>)
};

export default A4Arrays;   
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
    }
    return (<>
        <h2><b><u>4. - Arrays in js.</u></b></h2>
        {array()}
    </>)
};

export default A4Arrays;   
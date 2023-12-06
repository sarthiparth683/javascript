import React from 'react'

const A4Arrays = () => {
    let array = () => {
        const cars = ['Volvo', 'BMW', 'Maruti', 'Tesla'];
        //    array indicies
        let result1 = cars[0];
        let result2 = cars[1];
        let result3 = cars[2];
        // Array methods
        let result4 = cars.push("last");  // add to the end.
        let result5 = cars.pop();  // delete from the end & return.
        let result6 = cars.toString();  // converts arrays to string.
        let result7 = cars.concat();  // joins multiple arrays & return result.
        let result8 = cars.unshift();  // add to start.
        let result9 = cars.shift();  // delete from start & return.
        let result10 = cars.slice(1, 4);//returns a piece of the array. slice(startIdx, endIdx)
        let result11 = cars.splice(0, 2); // splice(startIdx,delIdx,newIdx)(add,remove, replace) 

        // Result in console
        console.log("result1 " + result1);
        console.log("result2 " + result2);
        console.log("result3 " + result3);
        console.log("result4 " + result4);
        console.log("result5 " + result5);
        console.log("result6 " + result6);
        console.log("result7 " + result7);
        console.log("result8 " + result8);
        console.log("result9 " + result9);
        console.log("result10 " + result10);
        console.log("result11 " + result11);

    }


    return (<>
        <p><b><u>Arrays in js.</u></b></p>
        {/* {array()}   */}
 
    </>)
};

export default A4Arrays;   
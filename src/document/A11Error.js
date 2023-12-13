import React from 'react'

const A11Error = () => {
    let error1 = () => {
        let a = 5;
        let b = 10;
        console.log("a = ", a);
        console.log("b = ", b);
        console.log("a+b = ", a + b);
        try {
            // console.log("a+b = ", a + c); //error :- just bacause of error
        } catch (err) {
            console.log(err);
        }

        console.log("a+b = ", a + b); // next line form here won't run.
        console.log("a+b = ", a + b);
        console.log("a+b = ", a + b);
        console.log("a+b = ", a + b);
    }
    return (<>
        <h2><b><u>11.2 - Error in js.</u></b></h2>
        {/* {error1()} */}
    </>)
}

export default A11Error
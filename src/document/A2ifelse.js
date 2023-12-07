import React from 'react'

const A2ifelse = () => {
    let ifelse1 = () => {
        let age = 12;
        if (age <= 18) {
            console.log("junior");
        } else if (age >= 60) {
            console.log("senior citizen");
        } else {
            console.log("middle");
        }
    }

    let ternary1 = () => {
        let age = 23;
        let drive = age >= 16 ? "yes, you can drive" : "No, you canno't drive";
        console.log(drive);
    }


    return (<>
        <h2><b><u>2.Conditional Statements.</u></b></h2>
        <p>1.if else</p>
        {/* {ifelse1()} */}

        <p>2.Ternary Operator</p>
        {/* {ternary1()} */}
 
    </>)
}

export default A2ifelse;
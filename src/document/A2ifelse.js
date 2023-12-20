import React from 'react'

const A2ifelse = () => {
    let ifelse1 = () => {
        console.log("For Testing Purpose");

    }

    let ifelse2 = () => {
        let age = 25;
        let price = 100;

        if (age >= 65) {
            price *= 0.8; // apply 20% discount
            console.log(`Senior discount applied! New price: ${price}`);
        } else if (age < 18) {
            price *= 0.9; // apply 10% discount for children
            console.log(`Child discount applied! New price: ${price}`);
        } else {
            console.log(`Regular price: ${price}`);
        }

    }

    let ifelse3 = () => {
        let number = 9;

        if (number > 0) {
            console.log(`${number} is a positive number.`);
        } else if (number === 0) {
            console.log(`${number} is zero.`);
        } else {
            console.log(`${number} is a negative number.`);
        }
    }

    let ternaryOperator1 = () => {
        let age = 23;
        let drive = age >= 18 ? "yes, you can drive" : "No, you canno't drive";
        console.log(drive);
    }

    let ternaryOperator2 = () => {
        const amount = 100;
        const discount = amount >= 50 ? amount * 0.1 : 0;
        const finalPrice = amount - discount;
        console.log(`Final price: $${finalPrice}`); // Output: "Final price: $90"

    }

    let ternaryOperator3 = () => {
        const score = 95;
        const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
        console.log(`Grade: ${grade}`);
    }
    return (<>
        <h2><b><u>2.Conditional Statements.</u></b></h2>
        {/* {ifelse1()} */}
        {/* {ifelse2()} */}
        {/* {ifelse3()} */}
        {/* {ternaryOperator1()}  */}
        {/* {ternaryOperator2()}  */}
        {/* {ternaryOperator3()}  */}
    </>)
}

export default A2ifelse; 
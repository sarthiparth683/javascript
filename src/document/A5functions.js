import React from 'react'

const A5functions = () => {
    let fnc1 = () => {
        function outer() {
            let x = 10;
            function inner() {
                console.log(x);
            }
            inner();
        }
        outer();
    };
    return (<>
        <h2><b><u>5.Function</u></b></h2>
        {/* {fnc1()} */}
    </>)
}

export default A5functions; 
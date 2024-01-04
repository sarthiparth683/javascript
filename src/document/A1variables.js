import React from 'react'

const A1variables = () => {
  let variables = () => {
    var name1 = "var variable:-can be re-declared,updated and it's a global scope variable"; console.log(name1);
    let name2 = "let variable:- can be re-declared, cannot be updaated, it's a block scope variable."; console.log(name2);
    const name3 = "const variable:- cannot be re-declared or updated, it's a block scope variable."; console.log(name3);
    let name4;  // undefined
    console.log(name4);
     
  } 

  return (<div>
    <h2><b><u>1.Variables</u></b></h2>
    {/* {variables()} */}
 
  </div>) 
}  
 
export default A1variables; 
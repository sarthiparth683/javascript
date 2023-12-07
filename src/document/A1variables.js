import React from 'react'

const A1variables = () => {
  let variables = () => {
    var name1 = "var variable"; console.log(name1);
    let name2 = "let variable"; console.log(name2);
    const name3 = "const variable"; console.log(name3);
  }

  return (<div>
    <h2><b><u>1.Variables in javascript.</u></b></h2>
    {/* {variables()}*/}
    {/* {console.log(variables())};*/} 
  </div>)
} 

export default A1variables; 
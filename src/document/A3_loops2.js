import React from 'react'

const A3_loops2 = () => {

  let result = () => {
    let str = "Parth Sarthi";
    let str2 = "is a Learning.";

    let result1 = str.length;
    let result2 = str[0];
    let result3 = str[1]; //string indices.
    let result4 = str[2];
    let result5 = str[3];
    let result6 = str.toUpperCase();
    let result7 = str.toLowerCase();
    let result8 = str.trim();
    let result9 = str.slice(1, 4);  //str.slice(start,end?) returns part of string
    let result10 = str.concat(str2); // joins  str2 with str
    let result11 = str.replace("Learning", "Earning");
    let result12 = str.charAt(3);

    console.log("result 1" + " " + "=" + " " + result1);
    console.log("result 2" + " " + "=" + " " + result2);
    console.log("result 3" + " " + "=" + " " + result3);
    console.log("result 4" + " " + "=" + " " + result4);
    console.log("result 5" + " " + "=" + " " + result5);
    console.log("result 6" + " " + "=" + " " + result6);
    console.log("result 7" + " " + "=" + " " + result7);
    console.log("result 8" + " " + "=" + " " + result8);
    console.log("result 9" + " " + "=" + " " + result9);
    console.log("result 10" + " " + "=" + " " + result10);
    console.log("result 11" + " " + "=" + " " + result11);
    console.log("result 12" + " " + "=" + " " + result12);
  };

  let tempelate = () => {
    let templateLiteral = `This is a Tempealte Literal, it uses backtics. and it is different from strngs as it uses dollar sign  `;
    console.log(templateLiteral);
  }

  return (<>
    <h2><b><u>3.2 - strings</u></b></h2>
    {/* {result()} */};
    {tempelate()}
  </>)
}
 
export default A3_loops2;
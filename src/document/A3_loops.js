import React from 'react'

const A3_loops = () => {
  // Strings in js
  let str = "Parth Sarthi";
  let str2 = "is a Learning."

  let result1 = str.length;
  let result2 = str[0];
  let result3 = str[1];
  let result4 = str[2];
  let result5 = str[3];
  // some more String Method's.
  let result6 = str.toUpperCase();
  let result7 = str.toLowerCase();
  let result8 = str.trim();
  let result9 = str.slice(1, 4);  //str.slice(start,end?) returns part of string
  let result10 = str.concat(str2); // joins  str2 with str
  let result11 = str.replace("Learning", "Earning");
  let result12 = str.charAt(3);

  let result = () => {
    console.log("result1" +" " + "=" + " " +  result1);
    console.log("result2" +" " + "=" + " " +  result2);
    console.log("result3" +" " + "=" + " " +  result3); 
    console.log("result4" +" " + "=" + " " +  result4);
    console.log("result5" +" " + "=" + " " +  result5); 
    console.log("result6" +" " + "=" + " " +  result6);
    console.log("result7" +" " + "=" + " " +  result7);
    console.log("result8" +" " + "=" + " " +  result8);
    console.log("result9" +" " + "=" + " " +  result9); 
    console.log("result10" +" " + "=" + " " +  result10);
    console.log("result11" +" " + "=" + " " +  result11);
    console.log("result12" +" " + "=" + " " +  result12);

  }

  // Tempelate Literals in js :- A way to have embedded expression in strings
  // `this is an example of tempelate literals`
  // `string text ${expression} string text`


  return (<div>
    {/* {result()}     */}
    
 

  </div>)
}

export default A3_loops;
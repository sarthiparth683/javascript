import React from 'react'

const A3_string = () => {
    let result = () => {

        let str1 = "Parth Sarthi";
        let str2 = "is a Learning.";
        let result1 = str1.length;
        let result2 = str1[0];//string indices.
        let result3 = str1[1]; //string indices.     
        let result4 = str1[2];//string indices.  
        let result5 = str1[3];//string indices.  
        let result6 = str1.toUpperCase();
        let result7 = str1.toLowerCase(); 
        let result8 = str1; //.trim();
        let result9 = str1.slice(1, 4); //str.slice(start,end?) returns part of string.
        let result10 = str1.concat(str2); // joins  str2 with str
        let result11 = str1.replace("Learning", "Earning");
        let result12 = str1.charAt(3);

        console.log("result 1 " + "string.length " + "=" + " " + result1);
        console.log("result 2 " + "string indices 0" + "=" + " " + result2);
        console.log("result 3 " + "string indices 1" + "=" + " " + result3);
        console.log("result 4 " + "string indices 2" + "=" + " " + result4);
        console.log("result 5 " + "string indices 3" + "=" + " " + result5);
        console.log("result 6 " + "toUpperCase(); " + "=" + " " + result6);
        console.log("result 7 " + "toLowerCase(); " + "=" + " " + result7);
        console.log("result 8 " + "trim(); " + "=" + " " + result8);
        console.log("result 9 " + "slice(); " + "=" + " " + result9);
        console.log("result 10 " + "concat(); " + "=" + " " + result10);
        console.log("result 11 " + "replace Learning with Earning" + "=" + " " + result11);
        console.log("result 12 " + "charAt(3) " + "=" + " " + result12);
    };


    let tempelate = () => {
        let name = "$Tempealte Literal,";
        let name2 = "with $ dollar sign you can concatinate other strings."
        let templateLiteral = `This is a ${name} , ${name2}, it uses backtics. and it is different from strngs as it uses dollar sign, it's a modern way to work with strings.`;
        console.log(templateLiteral);
    };


    return (
        <>
            {/* <h2><b><u>A3.2 - strings</u></b></h2> */}
            {/* {result()} */}
            {/* {tempelate()}    */}
        </>
    )
}

export default A3_string;
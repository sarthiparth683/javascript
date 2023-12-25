import React from 'react'
import "./style1.css";

const A6DOM = () => {
  let domId1 = () => {
    var myParagraph = document.getElementById("demo");
    myParagraph.textContent = "The content has been changed!";
  };

  let domId2 = () => {
    var myParagraph = document.getElementById("demo");
    myParagraph.style.backgroundColor = "green";
    myParagraph.textContent = "The content has been changed!";
  };

  let domClass1 = () => {
    const importantButtons = document.getElementsByClassName("important");
    for (let i = 0; i < importantButtons.length; i++) {
      importantButtons[i].style.backgroundColor = "blue";
    }
  };


  return (<>
    <h2><b><u>5. DOM</u></b></h2>
    <p id="demo">This is a paragraph.</p>
    <button className='important'>Button</button>
    {/* {domId1()} */}
    {/* {domId2()} */}
    {/* {domClass1()} */}
    
  </>)
}

export default A6DOM;
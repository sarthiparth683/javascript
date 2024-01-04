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

  let domTag1 = () => {
    let paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.backgroundColor = "lightblue";
    }
  };

  let domQuery1 = () => {
    const myParagraph = document.querySelector("#myParagraph");
    myParagraph.textContent = "This text has been changed using JavaScript!";
  };

  let QuerAll1 = () => {
    
  };

  return (<>
    <h2><b><u>6.DOM</u></b></h2>
    {/* <p id="id => demo">This is a paragraph.</p>
    <button className='class => important'>Button</button>
    <p>This is the second paragraph.</p>
    <p>This is the third paragraph.</p>
    <p id='myParagraph' >ayushman Paragraph</p> */}

    {/* {domId1()} */}
    {/* {domId2()} */}
    {/* {domClass1()} */}
    {/* {domTag1()} */}
    {/*{domQuery1()}*/}
     {/*{QueryAll1()}*/}
  </>)
}

export default A6DOM;
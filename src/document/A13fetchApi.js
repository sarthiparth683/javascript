import React from 'react'

const A13fetchApi = () => {
    let fetch1 = () => {
        const URL = "https://cat-fact.herokuapp.com/facts";
        const factPara = document.querySelector("#fact");
        const btn = document.querySelector("#btn");

        // const getFacts = async () => {
        //     console.log("getting data....");
        //     let response = await fetch(URL);
        //     console.log(response); // data is in JSON format.
        //     // console.log(response.status);
        //     let data = await response.json();
        //     // console.log(data[0].text);
        //     factPara.innerText = data[0].text;
        // }
        function getFacts(params) {
            fetch(URL)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    factPara.innerText = data[2].text;
                });
        }

        btn.addEventListener("click", getFacts());
        // console.log(getFacts());
    }

    let fetch2 = () => {

    }
    return (<>
        <h2><b><u>13 - Fetch Api in js.</u></b></h2>
        {/* <button id="btn">Get a fact</button> */}
        {/* {fetch1()}  */}
         {/* {fetch2()}  */}
       
       
    </>)
}

export default A13fetchApi;
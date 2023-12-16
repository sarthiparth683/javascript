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
        <div className="container">
            <h2>Currency Converter</h2>
            <form>
                <div className="amount">
                    <p>Enter Amount</p>
                    <input value="100" type="text" />
                </div>
                <div className="dropdown">
                    <div className="from">
                        <p>From</p>
                        <div className="select-container">
                            <img src="https://flagsapi.com/US/flat/64.png" alt="" />
                            <select name="from" >
                                <option value="USD">USD</option>
                                <option value="USD">INR</option>
                                <option value="EUR">EUR</option>
                                <option value="AUD">AUD</option>
                            </select>
                        </div>
                    </div>
                    <div className="to">
                        <div className="select-container">
                            <img src="https://flagsapi.com/IN/flat/64.png" alt="" />
                            <select name="from" >
                                <option value="USD">USD</option>
                                <option value="USD">INR</option>
                                <option value="EUR">EUR</option>
                                <option value="AUD">AUD</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="msg">1USD = 80INR</div>
                <button>Get Exchange Rate</button>
            </form>
        </div>
       
    </>)
}

export default A13fetchApi;
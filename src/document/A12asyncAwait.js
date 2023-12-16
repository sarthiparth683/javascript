import React from 'react'

const A12asyncAwait = () => {
    let await1 = () => {
        async function hello() {
            console.log("hello");
        }
        console.log(hello());
    }

    let await2 = () => {
        function api(params) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Weather data");
                    resolve(200);
                }, 2000);
            });
        }
        async function getWaetherData() {
            await api();
            await api();
        }
        console.log(getWaetherData());
    }

    let await3 = () => {
        function getData(dataId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("data", dataId);
                    resolve("success");
                }, 2000);
            });
        }
        // Async-await
        async function getAllData() {
            console.log("getting data1....");
            await getData(1);
            console.log("getting data2....");
            await getData(2);
            console.log("getting data3....");
            await getData(3);
            console.log("getting data4....");
            await getData(4);
            console.log("getting data5....");
            await getData(5);
            console.log("getting data6....");
            await getData(6);
            console.log("getting data7....");
            await getData(7);
        }
        console.log(getAllData());
    }

    // let iife = () => {
    //     console.log("IIFE - Immediately Invoked Function");
    //     (async function () {
    //         console.log("getting data1....");
    //         await getData(1);
    //         console.log("getting data2....");
    //         await getData(2);
    //         console.log("getting data3....");
    //         await getData(3);
    //         console.log("getting data4....");
    //         await getData(4);
    //     })();
    // }
    return (<>
        <h2><b><u>12.4 - asyncAwait in js.</u></b></h2>
        {/* {await1()} */}
        {/* {await2()} */}
        {/* {await3()} */}
        {/* {iife()}       */}
    </>)
}

export default A12asyncAwait; 
import React from 'react'

const A12Promises = () => {
    let promise1 = () => {
        let promise = new Promise((resolve, reject) => {
            console.log("I am a Promise.");
            reject("some error occured.")
        })
    }

    let promise2 = () => {
        function getData(dataId, getNextData) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // console.log("data", dataId);
                    // resolve("success");
                    reject("error");
                    if (getNextData) {
                        getNextData();
                    }
                }, 2000);
            })
        } console.log(getData());
        let promse = getData(243);
        console.log(promse);
    }

    let promise3 = () => {
        const getPromise = () => {
            return new Promise((resolve, reject) => {
                console.log("I am a Promise.");
                resolve("success");
                // reject("Netowork error");
            });
        };
        let promise = getPromise();
        promise.then((res) => {
            console.log("promise fulfilled.");
        });

        promise.catch((err) => {
            console.log("rejected.", err);
        })

    }
    return (<>
        <h2><b><u>12.2 - Promises in js.</u></b></h2>
        {/* // {promise1()} */}
        {/* // {promise2()} */}
        {/* // {promise3()} */}
    </>)
}

export default A12Promises;
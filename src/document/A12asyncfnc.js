import React from 'react'

const A12asyncfnc = () => {
    let async1 = () => {
        function asyncFunc() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("data1");
                    resolve("success.")
                }, 2000)
            });
        }

        function asyncFunc2() {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("data2");
                    resolve("success.")
                }, 3000)
            });
        }


        console.log("fetching data1....");
        let p1 = asyncFunc();
        p1.then((res) => {
            console.log(res);
            console.log("fetching data2...");
            let p2 = asyncFunc2();
            p2.then((res) => {
                console.log(res);
            });
        });
    }

    let chaining = () => {
        function getData(dataId) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("data", dataId);
                    resolve("success");
                }, 2000);
            });
        } 
        // Promise Chain
        console.log("getting data1...");
        getData(1)
        .then((res) => {
            console.log("getting data2...");
            return getData(2);
        })
        .then((res) => {
            console.log("getting data3...");
            return getData(3);
        })
        .then((res) => {
            console.log(res);
        });

        // console.log(getData(485));
        // console.log(getData(486));
        // console.log(getData(1, getData(2)));
        // console.log(getData(1, () => {
        //     console.log("getting data2....");
        //     getData(2, () => {
        //         console.log("getting data3....");
        //         getData(3, () => {
        //             console.log("getting data4....");
        //             getData(4, () => {
        //                 console.log("getting data5....");
        //                 getData(5, () => {
        //                     console.log("getting data6....");
        //                     getData(6, () => {
        //                         console.log("getting data7....");
        //                         getData(7)
        //                     })
        //                 })
        //             })
        //         })
        //     })
        // }));

    }
    return (<>
        <h2><b><u>12.3 - Async in js.</u></b></h2>
        {/* {async1()} */}
        {/* {chaining()} */}
    </>)
}

export default A12asyncfnc;
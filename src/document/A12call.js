import React from 'react'

const A12call = () => {
  let setime1 = () => {
    let fnc = () => {
      console.log("Hello1, 2s = 2000ms");
    }
    setTimeout(fnc, 2000);
  }

  let setime2 = () => {
    setTimeout(() => {
      console.log("Hello2, 3s = 3000ms");
    }, 3000);
  }

  let Asynchoronous = () => {
    console.log("one");
    console.log("two");
    setTimeout(() => {
      console.log("it takes 3s = 3000ms");
    }, 3000);
    console.log("three");
    console.log("four");
    console.log("five");
  }

  let callBack = () => {
    function sum(a, b) {
      console.log(a + b);
    }

    function calculator(a, b, sumCallBack) {
      sumCallBack(a, b);
    }

    calculator(1, 2, sum);
  }

  let callBackHell = () => {
    function getData(dataId, getNextData) {
      setTimeout(() => {
        console.log("data", dataId);
        getNextData();
      }, 1500);
    }
    // console.log(getData(485));
    // console.log(getData(486));
    // console.log(getData(1, getData(2)));
    console.log(getData(1, () => {
      console.log("getting data2....");
      getData(2, () => {
        console.log("getting data3....");
        getData(3, () => {
          console.log("getting data4....");
          getData(4, () => {
            console.log("getting data5....");
            getData(5, () => {
              console.log("getting data6....");
              getData(6, () => {
                console.log("getting data7....");
                getData(7)
              })
            })
          })
        })
      })
    }));
  }

  return (<>
    <h2><b><u>12.1 - Callback, Promises and Async Await js.</u></b></h2>
    {/* {setime1()} */}
    {/* {setime2()} */}
    {/* {Asynchoronous()} */}
    {/* {callBack()} */}
    {/* {callBackHell()} */}
  </>)
}

export default A12call;  
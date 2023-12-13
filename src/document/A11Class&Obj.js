import React from 'react'

const A11ClassObj = () => {
    let class1 = () => {
        class ToyotaCar {
            constructor(brand, milage) {
                console.log("creating new object.");
                this.brand = brand;
                this.milagae = milage;
            }
            start() {
                console.log("start");
            }

            stop() {
                console.log("stop");
            }
            setBrand(brand) {
                this.brandName = brand;
            }
        }
        console.log(ToyotaCar);
        let fortuner = new ToyotaCar("fortuner", 10); console.log(fortuner);
        fortuner.setBrand("fortuner"); console.log(fortuner);
        let lexus = new ToyotaCar("lexus", 12); console.log(lexus);
        lexus.setBrand("lexus"); console.log(lexus);
    }

    let inherentence1 = () => {
        class Parent {
            hello() {
                console.log("hello");
            }
        }
        class Child extends Parent { }
        let obj = new Child();
    }

    let inherentence2 = () => {
        class Person {
            constructor() {
                this.species = "homo sapiens";
            }
            eat() {
                console.log("eat");
            }
            sleep() {
                console.log("sleep");
            }
        }
        class Engineer extends Person {
            work() {
                console.log("solve problems, build something");
            }
        }
        class Doctor extends Person {
            work() {
                console.log("Teaats Patients");
            }
        }
        let sarthiObj = new Engineer();
        console.log(sarthiObj.work);

        let p1 = new Person();
        console.log(p1);

        let e1 = new Engineer();
        console.log(e1);
    }


    let superClass1 = () => {
        class Person {
            constructor() {
                console.log("enter parent constructor.");
                this.species = "homo sapiens";
            }
            eat() {
                console.log("eat");
            }

        }
        class Engineer extends Person {
            constructor(branch) {
                console.log("enter child constructor");
                super(); //to invoke parent class constructor.
                this.branch = branch;
                console.log("exit child constructor.");
            }
            work() {
                console.log("solve problems, build something");
            }
        }
        // class Doctor extends Person {
        //     constructor(branch) {
        //         this.branch;
        //     }
        //     work() {
        //         console.log("Treat Patients");
        //     }
        // }

        let engObj = new Engineer("chemical engineer");
        console.log(engObj);
    }

    let superClass2 = () => {
        class Person {
            constructor(name) {
                this.species = "homo sapiens";
                this.name = name;
            }
            eat() {
                console.log("eat");
            }

        }
        class Engineer extends Person {
            constructor(name) {
                super(name); //to invoke parent class constructor.
            }
            work() {
                // eat(); // cannot acess directly.
                super.eat(); // super keyword now, you can access.
                console.log("solve problems, build something");
            }
        }
        let engObj = new Engineer("Parth Sarthi");
        console.log(engObj);
    }
    return (<>
        <h2><b><u>11. - Class & Object in js.</u></b></h2>
        {/* {class1()} */}
        {/* {inherentence1()} */}
        {/* {inherentence2()} */}
        {/* {superClass1()} */}
        {/* {superClass2()} */}

    </>)
}

export default A11ClassObj;
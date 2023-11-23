import React from 'react'

const A4Arrays = () => {
    const cars = ['Volvo', 'BMW', 'Maruti', 'Tesla'];
    // cars.unshift('Ferari');
    cars.shift(); 
    console.log(cars);
    return (
        <div>A4Arrays</div>
    )
}

export default A4Arrays;   
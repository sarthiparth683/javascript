import React, { useState } from 'react';

const MenuBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const menuItems = [
    {
      title: '1.) variables:- var, let, const',
      content: [
        'variables',

      ],
    },
    {
      title: '2.) Data Types',
      content: [
        '1.) strings :- in strings we have tempelate literals which is little different from strings since we can use variables or objects inside using $ signs',
        "2.) strings are immutable",
        "3.) Arrays are mutable",
 
      ],
    },
    {
      title: '3.) Operators',
      content: [
        'variables',

      ],
    },
    {
      title: '1.) Loops:-',
      content: [
        '1.> For loops',
        "2.> While loops",
        "3.> Do While loops",
        "4.> for of loops :- " + "used in strings and Arrays",
        "5.> for in loops :- " + "used in object(data types)",
        "6.> labeled loops",
        "7.> continue loops",
        "8.> Break Statement",
      ],
    },
    {
      title: '2.) Functions',
      content: [
        'Function has two important term , Parameter and Arguments.',
      ],
    },
    {
      title: '3.) if else',
      content: [
        'if else',
      ],
    },
    {
      title: '4.) Switch statement',
      content: [
        'Praesent et quam nec dui semper scelerisque.',
        'Donec velit odio, eget rhoncus ipsum tincidunt eu.',
        'Donec sit amet odio eget velit congue aliquam sed ut augue.',
        'Donec et sapien ut quam vulputate faucibus.',
        'Nulla facilisi. Fusce faucibus dui sed sapien condimentum, quis tincidunt nisl semper.',
      ],
    },
    {
      title: '5.)Error Handeling, Try catch blocks',
      content: [
        'Praesent et quam nec dui semper scelerisque.',
        'Donec velit odio, eget rhoncus ipsum tincidunt eu.',
        'Donec sit amet odio eget velit congue aliquam sed ut augue.',
        'Donec et sapien ut quam vulputate faucibus.',
        'Nulla facilisi. Fusce faucibus dui sed sapien condimentum, quis tincidunt nisl semper.',
      ],
    },
    
    
   
    {
      title: '9.) Ararys ',
      content: [
        "1.) use to store data",
        "2.) strings are immutable(cannot be changed)",
        "3.) Arrays are mutable(can be changed)",


      ],
    },
    {
      title: '10.) Object  ',
      content: [
        'variables',

      ],
    },
    {
      title: '11.) Event  ',
      content: [
        'variables',

      ],
    },
    {
      title: '12.) DOM  ',
      content: [
        'variables',

      ],
    },

  ];

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div>
      <ul className="menu-bar">
        {menuItems.map((menuItem) => (
          <li key={menuItem.title} className={selectedMenuItem === menuItem ? 'active' : ''}>
            <button onClick={() => handleMenuItemClick(menuItem)}>{menuItem.title}
            </button>
          </li>
        ))}
      </ul>

      {selectedMenuItem && (
        <div className="menu-content">
          {selectedMenuItem.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuBar;

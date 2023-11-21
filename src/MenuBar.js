import React, { useState } from 'react';

const MenuBar = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const menuItems = [
    {
      title: '1.) Loops:-',
      content: [
        '1.> For loops',
        "2.> While loops",
        "3.> Do While loops",
        "4.> For in loops",
        "5.> for of loops",
        "6.> labeled loops",
        "7.> continue loops",
        "8.> Break Statement",
      ],
    },
    {
      title: '2.) Functions',
      content: [
        'Functions.',
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
      title: '6.) variables:- var, let, const',
      content: [
        'variables',
        
      ],
    },
    {
      title: '7.) Data Types',
      content: [
        'variables',
        
      ],
    },
    {
      title: '8.) Operators',
      content: [
        'variables',
        
      ],
    },
    {
      title: '9.) Ararys ',
      content: [
        'variables',
        
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

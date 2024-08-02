import React from 'react';

const ingredient = ({ ingredient, addToBurger, removeFromBurger }) => {
  const handleAdd = () => {
    addToBurger(ingredient);
  };

  const handleRemove = () => {
    removeFromBurger(ingredient.id);
  };

  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {addToBurger && <button onClick={handleAdd}>+</button>}
      {removeFromBurger && <button onClick={handleRemove}>X</button>}
    </li>
  );
};

export default ingredient;
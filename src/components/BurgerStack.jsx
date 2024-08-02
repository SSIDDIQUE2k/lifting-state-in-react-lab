import React from 'react';
import Ingredient from './ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  if (stack.length === 0) {
    return <p>No Ingredients</p>;
  }

  return (
    <ul>
      {stack.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient}
          removeFromBurger={removeFromBurger}
        />
      ))}
    </ul>
  );
};

export default BurgerStack;
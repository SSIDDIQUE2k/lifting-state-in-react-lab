import React from 'react';
import Ingredient from './ingredient.jsx'

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.id}
          ingredient={ingredient}
          addToBurger={addToBurger}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
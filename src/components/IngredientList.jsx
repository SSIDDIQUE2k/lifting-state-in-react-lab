import React from 'react';
import Ingredient from './ingredient.jsx'

const IngredientList = ({  availableIngredients, addToBurger }) => {
  return (
    <ul>
        
   { availableIngredients.map((ingredient) => (

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
import { v4 as uuidv4 } from 'uuid';
import React from 'react'

const RecipeIngredients = ({ ings }) => {
    return (
        <div className="ingredients">
            <strong>Ingredients : </strong>
            <ul>
                {ings.map(ing => (
                    <li key={uuidv4()}>{ing.text}</li>
                ))}
            </ul>
        </div>

    )
}

export default RecipeIngredients

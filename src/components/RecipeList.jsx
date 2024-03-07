import { v4 as uuidv4 } from 'uuid';
import Recipe from "./Recipe";

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <Recipe key={uuidv4()} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeList

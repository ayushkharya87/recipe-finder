import { useState ,useEffect } from 'react'
import SearchFrom from "./components/SearchFrom";
import RecipeList from "./components/RecipeList";
import "./App.css";

const App = () => {
    const APP_ID = '54046520';
    const API_KEY = 'dd7634c8599138eb30d9b4a2d769e558';

    const [recipes, setRecipes] = useState([])
    const [querry, setQuerry] = useState('chicken')

    useEffect(() => {
        getRecipes()
    }, [querry])

    const getRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${API_KEY}`)

        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    return (
        <div className="App">
            <SearchFrom 
                getQuerry={(q) => setQuerry(q)} 
            />
            {querry ? 
                <RecipeList recipes={recipes}/> 
                : 
                <h1 className="type-something" >Type Something in Searchbar</h1>
            }
        </div>
    )
}

export default App;
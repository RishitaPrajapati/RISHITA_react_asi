import Header from "./context/header";
import Cocktail from "./context/cocktail";
import { createContext, useState, useEffect } from "react";

export const cocktailwrapper = createContext();

function App() {
    const [drinkName, setDrinkName] = useState(``);
    const [cocktailList, setCocktailList] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s`)
            .then((res) => res.json())
            .then((data) => {
                setCocktailList(data);
            }).catch((e) => console.log('e', e))
    }, []);

    return (
        <>
            <cocktailwrapper.Provider value={{cocktailList,isLoading,drinkName,setDrinkName}}>
                <Header />
                <Cocktail />
            </cocktailwrapper.Provider>
        </>
    );
}

export default App;

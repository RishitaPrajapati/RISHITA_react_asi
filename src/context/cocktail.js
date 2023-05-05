import React, { useState, useContext } from "react";
import { cocktailwrapper } from "../NewApps";

function Cocktail() {

    const { isLoading, CocktailList } = useContext(cocktailwrapper);

    if (isLoading) {
        return <h3 className="container">Loading</h3>
    }

    return (
        <>
            <div className="container">
                <h4>COCKTAILs</h4>
                <div className="row">
                    {
                        CocktailList.map((item, index) => {
                            const { setDrink, setDrinkThumb } = item

                            return (
                                <div className="col-md-4">
                                    <div className="card shadow">
                                        <img src={setDrinkThumb} />
                                        <div className="card-body">
                                            <h5>{setDrink}</h5>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Cocktail
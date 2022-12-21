import React from "react";
import {Meal, MenuPackages } from "../types/ruokalistat";

export default function SetMenuCard({setMenu}: {setMenu: MenuPackages}) {
    return (
        <div className="card mx-auto bg-slate-600 shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><strong>Ruokalaji:</strong> {renderFoodCategory(setMenu)}</h2>
                <p><strong>Hinta: </strong>{renderPrice(setMenu)}</p>
                {renderMeals(setMenu.meals)}
            </div>
        </div>
    )
}
function renderFoodCategory(setMenu: MenuPackages) {
    if (setMenu == null || setMenu.name == null || setMenu.name === "") {
        return <p>Ei määritetty</p>
    }
    return <p>{setMenu.name}</p>

}
function renderPrice(setMenu: MenuPackages) {
    if (setMenu == null || setMenu.price == null || setMenu.price === "") {
        return <p>Ei määritetty</p>
    }
    return <p>{setMenu.price}</p>

}
function renderMeals(meals: Array<Meal>) {
    if (meals == null || meals.length === 0) {
        return <></>
    }
    return meals.map((meal: Meal) => {
        return (
            <>
                <p><strong>Ruoka: </strong>{meal.name}</p>
                <p><strong>Kalorit: </strong>{meal.nutrients.energyCalories}</p>
                <p><strong>Proteiini: </strong>{meal.nutrients.protein}</p>
                <p><strong>Hiilihydraatit: </strong>{meal.nutrients.carbohydrates}</p>
                <p><strong>Rasva: </strong>{meal.nutrients.fat}</p>
            </>
        )
    })
}

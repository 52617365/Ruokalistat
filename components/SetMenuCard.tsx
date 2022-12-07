import React from "react";
import {Meal, SetMenu } from "../types/ruokalistat";

export default function SetMenuCard({setMenu}: {setMenu: SetMenu}) {
    return (
        // align to the middle of parent grid div
        <div className="card mx-auto w-96 bg-primary-content shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><strong>Ruokalaji:</strong> {renderFoodCategory(setMenu)}</h2>
                <p><strong>Hinta: </strong>{renderPrice(setMenu)}</p>
                {renderMeals(setMenu.Meals)}
            </div>
        </div>
    )
}
function renderFoodCategory(setMenu: SetMenu) {
    if (setMenu == null || setMenu.Name == null || setMenu.Name === "") {
        return <p>Ei määritetty</p>
    }
    return <p>{setMenu.Name}</p>

}
function renderPrice(setMenu: SetMenu) {
    if (setMenu == null || setMenu.Price == null || setMenu.Price === "") {
        return <p>Ei määritetty</p>
    }
    return <p>{setMenu.Price}</p>

}
function renderMeals(meals: Array<Meal>) {
    if (meals == null || meals.length === 0) {
        return <></>
    }
    return meals.map((meal: Meal) => {
        return (
            <>
                <p><strong>Ruoka: </strong>{meal.Name}</p>
                <p><strong>Kalorit: </strong>{meal.Nutrients.EnergyCalories}</p>
                <p><strong>Proteiini: </strong>{meal.Nutrients.Protein}</p>
                <p><strong>Hiilihydraatit: </strong>{meal.Nutrients.Carbohydrates}</p>
                <p><strong>Rasva: </strong>{meal.Nutrients.Fat}</p>
            </>
        )
    })
}

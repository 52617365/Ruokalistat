import React from "react";
import {RuokalistatResponse, SetMenu} from "../types/ruokalistat";
import SetMenuCard from "./SetMenuCard";
export default function RestaurantCard({restaurant} : {restaurant: RuokalistatResponse}) {
    return (
        <div className="mt-8 w-full card w-96 bg-primary-content shadow-xl">
            <div className="card-body">
                <h2 className="card-title"><strong>Ravintola:</strong> {restaurant.LunchMenu.Restaurant}</h2>
                {renderSetMenus(restaurant.LunchMenu.SetMenus)}
            </div>
        </div>
    )
}
function renderSetMenus(setMenu: Array<SetMenu>) {
    if (setMenu == null || setMenu.length === 0) {
        return <></>
    }
    return setMenu.map((setMenu: SetMenu) => {
        return (
                <SetMenuCard key={setMenu.Name} setMenu={setMenu}/>
        )
    })
}

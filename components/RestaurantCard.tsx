import React from "react";
import {RuokalistatResponse, MenuPackages} from "../types/ruokalistat";
import SetMenuCard from "./SetMenuCard";
export default function RestaurantCard({restaurant} : {restaurant: RuokalistatResponse}) {
    return (
        <div className="mt-8 card w-96">
            <div className="card-body">
                <h2 className="card-title"><strong>Ravintola:</strong> {restaurant.restaurant}</h2>
                {renderMenuPackages(restaurant.menuPackages)}
            </div>
        </div>
    )
}
function renderMenuPackages(setMenu: Array<MenuPackages>) {
    if (setMenu == null || setMenu.length === 0) {
        return <p>No menus found.</p>

    }
    return setMenu.map((setMenu: MenuPackages) => {
        return (
                <SetMenuCard key={setMenu.name} setMenu={setMenu}/>
        )
    })
}

import React from "react";
import {RuokalistatResponse, SetMenu} from "../types/ruokalistat";
export default function Home() {
    // send request to backend
    const [data, setData] = React.useState<Array<RuokalistatResponse>>([]);
    React.useEffect(() => {
        fetch("/api/ruokalistat")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

  return (
      <>
        <h1 className={"text-center text-2xl font-mono mt-28"}>Mitä tänään on ruokana?</h1>
          {renderFoodsFromRestaurants(data)}
      </>
  )
}

function renderFoodsFromRestaurants(restaurantFood: Array<RuokalistatResponse>) {
    if (restaurantFood == null ||restaurantFood.length === 0) {
        return <></>
    }
    return restaurantFood.map((restaurant: RuokalistatResponse) => {
        return (
            <>
                <p>Ravintola: {restaurant.LunchMenu.Restaurant}</p>
                <p>{restaurant.LunchMenu.DayOfWeek}</p>
                {renderSetMenus(restaurant.LunchMenu.SetMenus)}
            </>
    )
    })
}

function renderSetMenus(setMenu: Array<SetMenu>) {
    if (setMenu == null || setMenu.length === 0) {
        return <></>
    }
        return setMenu.map((setMenu: SetMenu) => {
                return (
                    <>
                        <p>{setMenu.Name}</p>
                        <p>{setMenu.Price}</p>
                    </>

            )
        })
}
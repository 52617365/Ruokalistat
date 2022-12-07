import React from "react";
import {RuokalistatResponse} from "../types/ruokalistat";
import RestaurantCard from "../components/RestaurantCard";
export default function Home() {
    const [data, setData] = React.useState<Array<RuokalistatResponse>>([]);
    React.useEffect(() => {
        fetch("/api/ruokalistat")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

  return (
      <>
        <h1 className={"text-center text-2xl font-mono pt-28"}>Mitä tänään on ruokana?</h1>
            <div className={"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 justify-items-center"}>
              {renderFoodsFromRestaurants(data)}
          </div>
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
                <RestaurantCard restaurant={restaurant}/>
            </>
    )
    })
}


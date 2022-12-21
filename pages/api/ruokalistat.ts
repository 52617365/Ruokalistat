// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import type {RuokalistatResponse} from '../../types/ruokalistat.d'

type RestaurantId = {
    [RestaurantName: string]: string
}

const restaurantIds : RestaurantId = {
    Felli: "0602",
    Kuukkeli: "0601",
    Tekuila: "0605",
    Petronella: "060201",
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<RuokalistatResponse>>
) {
    const foodLists = await getFoodLists()
    res.status(200).json(foodLists)
}


async function getFoodLists(): Promise<Array<RuokalistatResponse>> {
    const restaurantUrls = getRestaurantUrls()
    let restaurants = await Promise.all(restaurantUrls.map((e => {
            return (
                fetch(e.url)
                .then(response => response.json())
                .then(data => {
                    data.restaurant = e.restaurantName
                    return data
                })
            )
    })))
    return restaurants
}


type RestaurantUrl = {
    restaurantName: string,
    url: string
}


function getRestaurantUrls() {
    let urls : Array<RestaurantUrl> = [];
    for (const restaurant in restaurantIds) {
        const url = getUrlForRestaurant(restaurant);
        const restaurantInformation : RestaurantUrl = {
            restaurantName: restaurant,
            url: url
        }
        urls.push(restaurantInformation)
    }
    return urls
}

function getUrlForRestaurant(restaurant: string) {
    const date = new Date()
    const dateFormatted = date.toDateString()

    const url = `https://www.compass-group.fi/menuapi/day-menus?costCenter=${restaurantIds[restaurant]}&date=${dateFormatted}&language=fi`;
    return url;
}

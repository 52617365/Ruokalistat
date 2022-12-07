// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import type {RuokalistatResponse} from '../../types/ruokalistat.d'

type RestaurantId = {
    [RestaurantName: string]: number
}

const restaurantIds : RestaurantId = {
    Felli: 179104,
    Kuukkeli: 248238,
    Tekuila: 321719,
    Petronella: 180084,
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<RuokalistatResponse>>
) {
    const foodLists = await getFoodLists()
    res.status(200).json(foodLists)
    // res.status(200).json({ name: 'John Doe' })
}


// https://www.foodandco.fi/api/restaurant/menu/day?date=2022-12-7&language=fi&onlyPublishedMenu=true&restaurantPageId=180084
async function getFoodLists(): Promise<Array<RuokalistatResponse>> {
    let foodLists : Array<RuokalistatResponse> = [];
    const restaurantUrls = getRestaurantUrls()
    for (const restaurantUrl of restaurantUrls) {
        const data = await fetch(restaurantUrl.url)
        const deserializedData : RuokalistatResponse = await data.json()
        deserializedData.LunchMenu.Restaurant = restaurantUrl.restaurantName
        foodLists.push(deserializedData)
    }
    return foodLists
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
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return `https://www.foodandco.fi/api/restaurant/menu/day?date=${year}-${month}-${day}&language=fi&onlyPublishedMenu=true&restaurantPageId=${restaurantIds[restaurant]}`;
}
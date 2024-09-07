// import { headers, cookies } from "next/headers"
// const headersList = headers()
// const referer = headersList.get('referer')
// const cookieStore = cookies()
// const cookievalue = cookieStore.get('<cookie-name>')

import roboto from "@/utils/font"

const getPlanets = async () => {
    const res = await fetch("https://swapi.dev/api/planets", {
        next: {
            revalidate: 3600
        }
    })

    if (!res.ok) {
        throw new Error("Could not retrieve planets")
    }

    return res.json() as unknown as PlanetsResponse
}

const PlanetsList = async() => {
    const planets = await getPlanets()
    return (
        <ul className={roboto.variable}>
            {planets.results.map((planet: Planet, index: number) => {
                return <li key={index}>{ planet.name }</li>
            })}
        </ul>
    )
}

export default PlanetsList
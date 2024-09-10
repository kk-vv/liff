// import { headers, cookies } from "next/headers"
// const headersList = headers()
// const referer = headersList.get('referer')
// const cookieStore = cookies()
// const cookievalue = cookieStore.get('<cookie-name>')

// import Box from "@/componets/boxstyle"
import Card from "@/componets/card"
// import roboto from "@/utils/font"
// import Image from "next/image"

const getPlanets = async (): Promise<PlanetsResponse> => {
    const res = await fetch("https://swapi.dev/api/planets", {
        next: {
            revalidate: 3600
        }
    })

    if (!res.ok) {
        throw new Error("Could not retrieve planets")
    }

    const planetsResponse: PlanetsResponse = await res.json()

    return planetsResponse
}

const PlanetsList = async() => {
    const planetsResponse: PlanetsResponse = await getPlanets()
    const planets = planetsResponse.results
    return planets.map((planet: Planet) => {
        return <Card planet={planet} key={planet.name}></Card>
    })
    
    // return (
    //     <ul className={roboto.variable}>
    //         {planets.map((planet: Planet, index: number) => {
    //             return <li key={index}>{ planet.name }</li>
    //             // return <Box>
    //             //     <li key={index}>{ planet.name }</li>
    //             // </Box>
    //         })}
    //     </ul>
    // )
}

export default PlanetsList
// import { headers, cookies } from "next/headers"
// const headersList = headers()
// const referer = headersList.get('referer')
// const cookieStore = cookies()
// const cookievalue = cookieStore.get('<cookie-name>')

// import Box from "@/componets/boxstyle"
import Card from "@/componets/card"
import Card2 from "@/componets/card2"
import { ImageUtils } from "@/utils/images"
// import roboto from "@/utils/font"
import Image from "next/image"

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
    // return (
    //     planets.map((planet: Planet) => {
    //         return (
    //             <Card planet={planet} key={planet.name}></Card> // donot trigger ui update while inner style changed?!
    //         )
    //     })
    // )   

    return (
        <div className="grid grid-cols-4 bg-red-50 min-h-full">
            <div className="col-span-1 bg-slate-100">First Grid</div>
            {/* col-span-3 标识该列占三格 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 col-span-3 bg-slate-400"> 
            {
                planets.map((planet: Planet, index: number) => {
                    return (
                        <div className="mx-4 mt-5 relative overflow-hidden rounded">
                        <div className="flex items-center shadow-m h-32 lg:h-60 shadow-slate-400 bg-teal-600 text-white font-semibold space-x-2">
                            <Image src={ImageUtils.hodler} alt={planet.name} width={100} className="h-full" style={{objectFit: "cover"}}></Image>
                            <div>
                                <span>{planet.name}</span>
                                <span className="text-sm block uppercase">{planet.climate} {planet.terrain}</span>
                            </div>
                        </div>
                        <div className="bg-white shadow-inner shadow-amber-200 text-orange-400 text-xs uppercase font-bold rounded-full p-1 absolute top-0 right-0 mt-1 mr-1">
                            <span>Gravity: {planet.gravity}</span>
                        </div>
                        </div>
                    )    
                })
            }
            </div>
        </div>
        // card style
        // planets.map((planet: Planet) => {
        //     return (
        //         <div className="mx-4 mt-5 relative overflow-hidden rounded">
        //         <div className="flex items-center shadow-m h-32 lg:h-60 shadow-slate-400 bg-teal-600 text-white font-semibold space-x-2">
        //             <Image src={ImageUtils.hodler} alt={planet.name} width={100} className="h-full" style={{objectFit: "cover"}}></Image>
        //             <div>
        //                 <span>{planet.name}</span>
        //                 <span className="text-sm block uppercase">{planet.climate} {planet.terrain}</span>
        //             </div>
        //         </div>
        //         <div className="bg-white shadow-inner shadow-amber-200 text-orange-400 text-xs uppercase font-bold rounded-full p-1 absolute top-0 right-0 mt-1 mr-1">
        //             <span>Gravity: {planet.gravity}</span>
        //         </div>
        //         </div>
        //     )    
        // })
    )
    
    // return planets.map((planet: Planet) => {
    //     // return <Card2 planet={planet} key={planet.name}></Card2>
    //     return <>
    //     <div className="bg-teal-500">
    //     <Image src={ImageUtils.hodler} alt={planet.name}></Image>
    //     <div>
    //         <span>{planet.name}</span>
    //         <span className="text-sm block uppercase">{planet.climate} {planet.terrain}</span>
    //     </div>
    //     </div>
    //     </>
    // })
    
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
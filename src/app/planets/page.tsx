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
            <div className="col-span-1 bg-slate-100">
                <button className="text-orange-400 font-thin text-sm first-letter:uppercase px-2 m-2 border border-orange-400 -rotate-12 cursor-pointer bg-slate-200 rounded-full">
                    <svg className="w-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                    </svg>
                    login
                </button>
            </div>
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
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
                <ul className="flex justify-end">
                    <li>
                    <button className="signButton">
                    login
                    </button>
                    </li>
                </ul>
                <ul className="grid gap-1 mt-4 justify-end px-2">
                    <li>
                        <a href="" className="navMenu">
                            <svg className="w-4 mr-1" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"></path>
                            </svg>
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="navMenu">
                            <svg className="w-4 mr-1" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"></path>
                            </svg>
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="navMenu">
                            <svg className="w-4 mr-1" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                            </svg>
                            <span>Contact</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="navMenu">
                            <svg className="w-4 mr-1" data-slot="icon" fill="none" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path>
                            </svg>
                            <span>More</span>
                        </a>
                    </li>
                </ul>
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
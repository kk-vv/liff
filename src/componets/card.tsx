import { ImageUtils } from "@/utils/images"
import Image from "next/image"
import React from "react"

const Card = ({planet}: {
    planet: Planet
}) => {
    return (
        <div className="mx-4 mt-5 relative bg-slate-400">
        <div className="flex items-center overflow-hidden shadow-m h-32 lg:h-60 shadow-slate-400 bg-teal-800 text-white font-semibold space-x-2 rounded">
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
}

export default Card
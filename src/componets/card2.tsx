import { ImageUtils } from "@/utils/images"
import Image from "next/image"
import React from "react"

const Card2 = ({planet}: {
    planet: Planet
}) => {
    return (
        <div className="bg-teal-500">
            <Image src={ImageUtils.hodler} alt={planet.name}></Image>
            <div>
                <span>{planet.name}</span>
                <span className="text-sm block uppercase">{planet.climate} {planet.terrain}</span>
            </div>
        </div>
    )
}

export default Card2
"use client"

import imageLoader from "@/utils/image-loader"
import Image from "next/image"
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter()
  const startHandler = () => {
    router.push("/start")
  }
  return <div className="bg-teal-950 p-20 text-white font-semibold text-2xl">
    <h1>Hello Tailwind!</h1>
    {/* <Image src={imageLoader("/blur", 100, 100)} alt=""></Image> */}
    <button onClick={startHandler} className="rounded bg-black text-white p-2 font-sans text-14">Start</button>
  </div>
}

export default Home
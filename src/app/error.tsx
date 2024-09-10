'use client'

// import { useEffect } from "react"

const ErrorPage = ({error, reset}: {error: Error, reset: () => void}) => {
    return (
        <div className="error">
        <h3>All error occured!</h3>
        <p>{error.message}</p>
        <button className="bg-slate-500 rounded text-white font-semibold text-sm px-2" onClick={reset}> Retry </button>
        </div>
    )
}

export default ErrorPage
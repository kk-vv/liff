import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const searchParams = req.nextUrl.searchParams
    const token = searchParams.get("token")
    console.log(token)
    console.log(process.env.MY_SECRET_TOKEN)
    if (token !== process.env.MY_SECRET_TOKEN) {
        return Response.json({message: "Invalid token"}, {
            status: 401
        })
    }

    return Response.json([{name: "A"}, {name: "B"}])
}
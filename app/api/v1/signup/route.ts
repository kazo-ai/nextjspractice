import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest){
    const data = await req.json();
    console.log(data);

    // prisma.user.update({
    //         where: { id: data.id },         
    //         data: { name: data.name },
    // })
    return NextResponse.json({
    token: "dummytoken",
    user: {
      name: data.username,
      email: `${data.username}@example.com`
    }
    })
}
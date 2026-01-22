import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        user: "harkirat",
        email:"harkirat@gmail.com"
    })
}

export function PUT(){
    return NextResponse.json({
        user: "harkirat put",
        email:"harkirat@gmail.com"
    })
}
export function DELETE(){
    return NextResponse.json({
        user: "harkirat delete",
        email:"harkirat@gmail.com"
    })
}
import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const opiniones = await prisma.opinion.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(opiniones);
  } catch (error) {
    return NextResponse.error();
  }
}


export async function POST(request: Request) {
  const body = await request.json();

  try {
    const opinion = await prisma.opinion.create({
      data: {
        nombre: body.nombre,
        avatar: body.avatar,
        opinion: body.opinion,
        rate: body.rate,
        link: body.link,
        email : body.email,
      }
    });
    return NextResponse.json(opinion);
  } catch (error) {
    console.log(error)
    return NextResponse.error();
  }

}

import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const res = await prisma.categories.findMany({
    include: {
      products: true,
    },
  });

  return NextResponse.json({ data: res }, { status: 200 });
}

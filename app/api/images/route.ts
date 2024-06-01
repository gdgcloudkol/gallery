import { NextRequest, NextResponse } from 'next/server';
import { getPhoto } from '@/services/gphoto.service';

export async function POST(req: NextRequest) {
    const id = await req.json()
    const response = await getPhoto(`${process.env.GAL_API}${id}` || '')

    return NextResponse.json(response, { status: 200 });
}
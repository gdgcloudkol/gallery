import { NextRequest, NextResponse } from 'next/server';
import { getPhoto } from '@/services/gphoto.service';

export async function GET(req: NextRequest) {
    const imageURLs = await getPhoto(process.env.GAL_API || '')
    return NextResponse.json(imageURLs, {status: 200});
}
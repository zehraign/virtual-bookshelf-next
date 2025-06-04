import { NextResponse } from 'next/server';
import { shelves } from '@/lib/data';

export async function POST(req: Request) {
  const { name, description } = await req.json();

  if (name && description) {
    shelves.push({ name, description });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 400 });
}
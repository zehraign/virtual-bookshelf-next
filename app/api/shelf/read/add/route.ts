import { NextResponse } from 'next/server';
import { readBooks } from '@/lib/data';

export async function POST(req: Request) {
  const form = await req.formData();
  const title = form.get('title')?.toString();
  const author = form.get('author')?.toString();

  if (title && author) {
    readBooks.push({ title, author, rating: 3 });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ success: false }, { status: 400 });
}
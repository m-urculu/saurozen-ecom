import { NextResponse } from 'next/server';

export async function GET() {
  const imageUrl = 'https://byxndnc0mn1ughii.public.blob.vercel-storage.com/Images/sunglasses/image%20130-1m5vsJVMErHZZi7GOyZmmSwn007bAU.png';

  // Fetch the image from the URL
  const res = await fetch(imageUrl);
  if (!res.ok) {
    return NextResponse.error();
  }

  // Return the image as a response
  const imageBuffer = await res.arrayBuffer();
  return new NextResponse(imageBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
    },
  });
}

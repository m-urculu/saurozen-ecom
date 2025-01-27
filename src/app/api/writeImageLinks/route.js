import { list } from '@vercel/blob';
import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Log step-by-step
    console.log('Fetching blobs from Vercel Blob Store...');
    const { blobs } = await list({
      prefix: 'Images/sunglasses',
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });    

    console.log('Blobs fetched:', blobs);

    const imageLinks = blobs.map((blob) => blob.url);
    console.log('Image links:', imageLinks);

    // Define the path for the JSON file
    const filePath = path.join(process.cwd(), 'public', 'imageLinks.json');
    console.log('File path:', filePath);

    // Write the JSON file
    fs.writeFileSync(filePath, JSON.stringify({ images: imageLinks }, null, 2));
    console.log('File successfully written.');

    // Return success response
    return NextResponse.json({
      message: 'Image links successfully written to imageLinks.json',
      filePath: '/imageLinks.json',
    });
  } catch (error) {
    console.error('Error occurred:', error.message);
    return NextResponse.json(
      { error: 'Failed to fetch image links or write to file' },
      { status: 500 }
    );
  }
}

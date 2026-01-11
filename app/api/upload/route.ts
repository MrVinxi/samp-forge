import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { Readable } from 'stream'; // Tambahkan import ini

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Gunakan split & join untuk memastikan karakter \n terbaca benar di semua OS
        private_key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });
    
    // Konversi file ke Buffer lalu ke Stream
    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null); // Menandakan stream berakhir
    
    const response = await drive.files.create({
      requestBody: {
        name: `BUKTI_TF_${Date.now()}_${file.name}`,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID || ''], 
      },
      media: {
        mimeType: file.type,
        body: stream, // Gunakan stream yang sudah dibuat
      },
    });

    return NextResponse.json({ success: true, fileId: response.data.id });
  } catch (error: any) {
    console.error("DRIVE_ERROR:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import { Readable } from 'stream';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: "File tidak ditemukan" }, { status: 400 });
    }

    // KONFIGURASI KREDENSIAL GOOGLE DRIVE
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Perbaikan regex: Mengatasi masalah karakter newline di Vercel/Environment Variables
        private_key: process.env.GOOGLE_PRIVATE_KEY?.split(String.raw`\n`).join('\n'),
      },
      scopes: ['https://www.googleapis.com/auth/drive.file'],
    });

    const drive = google.drive({ version: 'v3', auth });
    
    // Konversi file ke Buffer dan Stream yang kompatibel dengan Drive API
    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    
    // PROSES UPLOAD
    const response = await drive.files.create({
      requestBody: {
        name: `BUKTI_TF_${Date.now()}_${file.name}`,
        // Pastikan variabel ini ada di .env.local
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID || ''],
      },
      media: {
        mimeType: file.type,
        body: stream,
      },
    });

    return NextResponse.json({ success: true, fileId: response.data.id });
  } catch (error: any) {
    // Log error lengkap di terminal console agar Anda bisa melihat penyebab pastinya
    console.error("DRIVE_UPLOAD_ERROR_DETAIL:", error.message || error);
    return NextResponse.json({ 
      error: "Gagal upload ke Drive", 
      details: error.message 
    }, { status: 500 });
  }
}
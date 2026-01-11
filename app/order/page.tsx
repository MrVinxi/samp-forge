'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function OrderPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleAutoProcess = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedFile(file);
    setIsUploading(true);

    try {
      // 1. Kirim File ke API Route (Google Drive) secara background
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error("Upload Drive Gagal");

      // 2. OTOMATIS REDIRECT KE WHATSAPP SETELAH BERHASIL
      const phoneNumber = "6285816912868";
      const message = encodeURIComponent(
        `Halo Admin SAMP-FORGE, saya sudah transfer.\n\n` +
        `✅ Bukti transfer telah terupload otomatis ke Google Drive.\n` +
        `Nama File: ${file.name}\n\n` +
        `Mohon segera diproses, terima kasih!`
      );
      
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
      
    } catch (err) {
      // Jika Drive gagal, tetap arahkan ke WA agar transaksi tidak batal
      alert("Sistem Drive sibuk, mengalihkan langsung ke WhatsApp...");
      const phoneNumber = "6285816912868";
      const message = encodeURIComponent("Halo Admin, saya ingin konfirmasi pembayaran manual.");
      window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="order-wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap');
        
        body { 
          background: #020617; 
          color: white; 
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
          margin: 0;
        }

        .glass-panel {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 32px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          position: relative;
          overflow: hidden;
        }

        .glass-panel::before {
          content: "";
          position: absolute;
          top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.03), transparent);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .qris-box {
          background: white;
          padding: 15px;
          border-radius: 24px;
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.3);
          margin-bottom: 30px;
        }

        .file-upload {
          border: 2px dashed ${isUploading ? '#3b82f6' : 'rgba(59, 130, 246, 0.3)'};
          border-radius: 16px;
          padding: 20px;
          text-align: center;
          margin-bottom: 25px;
          cursor: ${isUploading ? 'not-allowed' : 'pointer'};
          transition: 0.3s;
          background: ${isUploading ? 'rgba(59, 130, 246, 0.1)' : 'transparent'};
        }

        .file-upload:hover {
          border-color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
        }

        .btn-wa-modern {
          background: linear-gradient(45deg, #16a34a, #22c55e);
          color: white;
          border: none;
          padding: 18px;
          border-radius: 18px;
          font-weight: 800;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.4);
          cursor: pointer;
        }

        .btn-wa-modern:disabled {
          filter: grayscale(1);
          cursor: not-allowed;
        }
      `}</style>

      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-panel"
          style={{ width: '100%', maxWidth: '480px', padding: '40px' }}
        >
          {/* HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px' }}>
              {isUploading ? "Mengirim Bukti..." : "Konfirmasi Pembayaran"}
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '14px' }}>Scan QRIS di bawah dan upload fotonya</p>
          </div>

          {/* QRIS IMAGE */}
          <motion.div whileHover={{ scale: 1.02 }} className="qris-box">
            <img 
              src="/qris.jpeg" 
              alt="QRIS SAMP FORGE" 
              style={{ width: '100%', height: 'auto', borderRadius: '12px', display: 'block' }} 
            />
          </motion.div>

          {/* DETAILS */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8', fontSize: '14px' }}>Metode</span>
              <span style={{ fontWeight: 700, fontSize: '14px' }}>QRIS All Payment</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span style={{ color: '#94a3b8', fontSize: '14px' }}>Status</span>
              <span style={{ color: '#eab308', fontWeight: 700, fontSize: '14px' }}>
                {isUploading ? "● Sedang Mengupload" : "● Menunggu Pembayaran"}
              </span>
            </div>
            <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0' }} />
          </div>

          {/* UPLOAD BUKTI (OTOMATIS) */}
          <div style={{ marginBottom: '25px' }}>
            <label style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '8px', display: 'block', fontWeight: 700 }}>
              UPLOAD BUKTI UNTUK LANJUT KE WHATSAPP
            </label>
            <div className="file-upload" onClick={() => !isUploading && document.getElementById('fileInput')?.click()}>
              <input 
                id="fileInput"
                type="file" 
                hidden 
                accept="image/*"
                onChange={handleAutoProcess}
                disabled={isUploading}
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                {isUploading ? (
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    style={{ width: '24px', height: '24px', border: '3px solid #3b82f6', borderTopColor: 'transparent', borderRadius: '50%' }}
                  />
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                  </svg>
                )}
                <span style={{ fontSize: '14px', color: selectedFile ? '#60a5fa' : '#475569', fontWeight: 600 }}>
                  {isUploading ? "Sedang Menyimpan ke Drive..." : selectedFile ? `File: ${selectedFile.name}` : "Klik untuk pilih bukti bayar"}
                </span>
              </div>
            </div>
          </div>

          <p style={{ fontSize: '10px', color: '#64748b', textAlign: 'center', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '25px' }}>
            Setelah upload sukses, WhatsApp akan terbuka otomatis
          </p>

          {/* WA BUTTON (SEBAGAI CADANGAN) */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-wa-modern"
            onClick={() => window.open('https://wa.me/6285816912868', '_blank')}
            disabled={isUploading}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.747-2.874-2.512-2.96-2.626-.087-.115-.708-.943-.708-1.799 0-.856.448-1.277.607-1.45.159-.172.347-.216.463-.216.115 0 .231.001.332.006.109.004.249-.04.391.297.144.348.491 1.2.535 1.287.043.087.072.188.014.304-.058.115-.087.188-.173.289l-.26.304c-.087.101-.177.211-.077.383.1.172.443.731.952 1.185.656.584 1.209.765 1.382.851.173.086.274.072.376-.043.101-.115.433-.505.548-.679.116-.174.231-.144.39-.087.159.058 1.011.477 1.184.564.173.087.289.129.332.202.043.073.043.42-.101.825z"/>
            </svg>
            KONFIRMASI MANUAL (WA)
          </motion.button>
        </motion.div>
      </div>

      <footer style={{ textAlign: 'center', color: '#475569', fontSize: '12px', paddingBottom: '40px' }}>
        &copy; 2026 SAMP-FORGE. Secure Transaction via Google Drive API.
      </footer>
    </div>
  );
}
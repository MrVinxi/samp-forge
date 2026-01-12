'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function SampForge() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="wrapper">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&display=swap');
        
        body { 
          background-color: #020617; 
          color: #ffffff; 
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow-x: hidden;
        }

        .bg-glow {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: radial-gradient(circle at 50% -20%, #1e40af 0%, transparent 50%);
          pointer-events: none;
          z-index: -1;
        }

        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

        .glass {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 24px;
        }

        .shiny-text {
          background: linear-gradient(90deg, #fff, #3b82f6, #fff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s linear infinite;
        }

        @keyframes shine {
          to { background-position: 200% center; }
        }

        .btn-modern {
          background: linear-gradient(45deg, #2563eb, #1d4ed8);
          box-shadow: 0 10px 20px -5px rgba(37, 99, 235, 0.5);
          border: none; color: white; padding: 12px 28px;
          border-radius: 12px; font-weight: 800; cursor: pointer;
        }

        .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }
        .grid-4 { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; }

        .zoom-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.9);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: zoom-out;
        }
      `}</style>

      <div className="bg-glow" />

      {/* MODAL ZOOM TESTIMONI */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className="zoom-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img 
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{ maxWidth: '90%', maxHeight: '90vh', borderRadius: '16px', boxShadow: '0 0 40px rgba(59, 130, 246, 0.5)' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        className="glass" style={{ margin: '20px', padding: '15px 30px', position: 'sticky', top: '10px', zIndex: 1000 }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0 }}>
          <h1 style={{ fontSize: '24px', fontWeight: 800, letterSpacing: '-1px' }}>SAMP<span style={{ color: '#3b82f6' }}>-FORGE</span></h1>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <a href="#pricing" style={{ textDecoration: 'none', color: '#94a3b8', fontSize: '14px', fontWeight: 600 }}>Layanan</a>
            <Link href="/order">
              <button className="btn-modern">ORDER NOW</button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
        <motion.span 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6', padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: 700 }}
        >
          #1 PROFESSIONAL DEVELOPER SERVICE
        </motion.span>
        <motion.h2 
          initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}
          className="shiny-text" style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: 800, marginTop: '30px' }}
        >
          Solusi Scripting Untuk <br /> Server Anda
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
          style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '700px', margin: '30px auto' }}
        >
          SAMP-FORGE hadir untuk membantu pemilik server GTA San Andreas Multiplayer mewujudkan fitur impian. Kami menangani segala jenis script Pawn secara profesional.
        </motion.p>
      </section>

      {/* JASA DEVELOPER (PRICING) */}
      <section id="pricing" className="container" style={{ marginBottom: '100px' }}>
        <h3 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 800 }}>Jasa Developer Langganan</h3>
        <div className="grid-3">
          <PricingCard title="Paket Harian" price="20.000" features={["1x Update Fitur", "Bebas Perbaikan Bug", "Konsultasi Ringan"]} />
          <PricingCard title="Paket Mingguan" price="50.000" features={["6x Update Fitur", "Bebas Perbaikan Bug Sepuasnya", "Optimasi Script Ringan", "Prioritas Pengerjaan"]} highlighted={true} />
          <PricingCard title="Paket Bulanan" price="160.000" features={["24x Update Fitur", "Bebas Perbaikan Bug Sepuasnya", "Full Support Developer", "Backup Data Rutin"]} />
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          style={{ marginTop: '50px', padding: '25px', background: 'rgba(234, 179, 8, 0.05)', border: '1px solid #854d0e', borderRadius: '20px', color: '#eab308' }}
        >
          <strong>⚠️ INFO PENTING:</strong> Jika masa langganan sudah habis tetapi ada satu atau beberapa update belum dilaksanakan, maka layanan jasa developer tetap berjalan tanpa biaya tambahan.
        </motion.div>
      </section>

      {/* JASA SATUAN - UPDATED WITH BUTTONS */}
      <section style={{ background: '#070a1a', padding: '100px 0' }}>
        <div className="container">
          <h3 style={{ marginBottom: '50px', fontSize: '28px' }}>Layanan Satuan & Perbaikan</h3>
          <div className="grid-4">
            <ServiceBox title="Jasa On-Server" price="10k - 20k" desc="Pemasangan script langsung ke server host Anda." />
            <ServiceBox title="Jasa Rename" price="10k" desc="Ganti nama script, kredensial, dan branding server." />
            <ServiceBox title="Fix Bug" price="10k - 50k" desc="Perbaikan error script, crash, atau bug sistem." />
            <ServiceBox title="Update Fitur" price="20k - 100k" desc="Penambahan fitur baru sesuai permintaan Anda." />
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="container" style={{ padding: '100px 0' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>Bukti Pengerjaan & Testimoni</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[1, 2].map((i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(`/testimoni${i}.jpeg`)}
              className="glass" 
              style={{ width: '120px', height: '120px', overflow: 'hidden', cursor: 'zoom-in', border: '2px solid rgba(59, 130, 246, 0.5)' }}
            >
              <img src={`/testimoni${i}.jpeg`} alt="Testi" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
            </motion.div>
          ))}
        </div>
      </section>
        
      <footer style={{ textAlign: 'center', padding: '50px', color: '#475569', borderTop: '1px solid #1e293b' }}>
        <p>&copy; 2026 SAMP-FORGE. Professional GTA SAMP Services.</p>
      </footer>
    </div>
  );
}

function ServiceBox({ title, price, desc }: any) {
  return (
    <motion.div 
      whileHover={{ y: -5, borderColor: '#3b82f6' }} 
      className="glass" 
      style={{ padding: '25px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
    >
      <div>
        <h5 style={{ color: '#3b82f6', marginBottom: '10px' }}>{title}</h5>
        <div style={{ fontSize: '24px', fontWeight: 800, marginBottom: '10px' }}>IDR {price}</div>
        <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>{desc}</p>
      </div>
      <Link href={`/order?package=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`}>
        <button style={{ width: '100%', padding: '12px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f6', color: 'white', borderRadius: '10px', fontWeight: 700, cursor: 'pointer' }}>
          Pilih Layanan
        </button>
      </Link>
    </motion.div>
  );
}

function PricingCard({ title, price, features, highlighted = false }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass shadow-card" 
      style={{ 
        padding: '40px', position: 'relative',
        border: highlighted ? '2px solid #3b82f6' : '1px solid rgba(255,255,255,0.1)',
        boxShadow: highlighted ? '0 0 40px rgba(59, 130, 246, 0.2)' : 'none'
      }}
    >
      {highlighted && <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: '#3b82f6', padding: '5px 15px', borderRadius: '50px', fontSize: '10px', fontWeight: 900 }}>PALING POPULER</div>}
      <h4 style={{ fontSize: '20px', marginBottom: '10px' }}>{title}</h4>
      <div style={{ fontSize: '40px', fontWeight: 800, marginBottom: '30px' }}><span style={{ fontSize: '18px', color: '#3b82f6' }}>IDR</span> {price}</div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {features.map((f: string, i: number) => (
          <li key={i} style={{ marginBottom: '15px', fontSize: '14px', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#3b82f6' }}>✔</span> {f}
          </li>
        ))}
      </ul>
      <Link href={`/order?package=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`}>
        <button className="btn-modern" style={{ width: '100%', marginTop: '30px', background: highlighted ? '#3b82f6' : 'transparent', border: highlighted ? 'none' : '1px solid #3b82f6' }}>Pilih Paket</button>
      </Link>
    </motion.div>
  );
}

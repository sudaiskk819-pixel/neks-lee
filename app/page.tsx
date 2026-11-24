"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Splash from "@/components/Splash";
import Link from "next/link";
export default function Home() {
  const [dark, setDark] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShowSplash(false), 2600); return () => clearTimeout(t); }, []);
  return (
    <div style={dark ? { background: "#0B0B1A", color: "white", minHeight: "100vh" } : { background: "#F8F9FF", color: "#111827", minHeight: "100vh" }}>
      {showSplash && <Splash />}
      <Navbar dark={dark} setDark={setDark} />
      <main className="neks-hero">
        <div className="neks-hero-left">
          <span className="neks-badge">LEARN • EARN • CONNECT • GROW</span>
          <h1>Create.<br />Share.<br /><span className="neks-gradient">Connect.</span></h1>
          <p className="desc">A home for creators, videos, communities and real conversation — built for every voice, everywhere.</p>
          <div className="neks-btns">
            <Link href="/register" className="neks-btn-primary">Join NEKS-lee →</Link>
            <Link href="/media-hub" className="neks-btn-secondary">Explore Media Hub</Link>
          </div>
          <div className="neks-stats"><span><b>4.9 ★</b> • 12K+ creators</span><span>🌍 180+ countries</span><span>✅ No email verification</span></div>
        </div>
        <div className="neks-hero-right">
          <div className="neks-card"><div className="neks-card-img">🌇</div><h3>A city morning, told in light and rhythm</h3><p>Maya Rahman • 120K views</p></div>
          <div className="neks-card"><p><b>New community</b></p><p>Music Makers Worldwide • 8.2K members</p><button className="neks-join-btn">Join community</button></div>
        </div>
      </main>
      <section className="neks-section"><h2>🔥 Featured Media Hub</h2><div className="neks-grid"><div className="neks-grid-card"><div className="emoji">🎬</div><h3>City Morning Vlog</h3><p>Maya • 120K views</p></div><div className="neks-grid-card"><div className="emoji">🎵</div><h3>Beat Making Live</h3><p>Arslan • 89K views</p></div><div className="neks-grid-card"><div className="emoji">🎨</div><h3>Digital Art Process</h3><p>Sara • 65K views</p></div></div></section>
      <section className="neks-section"><h2>👥 Trending Communities</h2><div className="neks-grid"><div className="neks-grid-card"><h3>🎵 Music Makers</h3><p>8.2K members</p><button className="neks-join-small">Join</button></div><div className="neks-grid-card"><h3>🎨 Visual Artists</h3><p>6.5K members</p><button className="neks-join-small">Join</button></div><div className="neks-grid-card"><h3>📖 Storytellers</h3><p>4.1K members</p><button className="neks-join-small">Join</button></div></div></section>
      <footer style={{ textAlign: "center", padding: "20px", fontSize: "13px", color: "#888" }}>© 2026 NEKS-lee • Create. Share. Connect.</footer>
    </div>
  );
}
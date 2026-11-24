"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
export default function Navbar({ dark, setDark }: { dark: boolean, setDark: (v: boolean) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <nav className="neks-nav">
      <Link href="/" className="neks-logo" onClick={() => setOpen(false)}>
        <Logo size={42} />
        <span style={{ fontSize: "20px", fontWeight: 900 }}>NEKS<span style={{ color: "#7C3AED" }}>-lee</span></span>
      </Link>
      <div className="neks-links">
        <Link href="/" className="active">Home</Link>
        <Link href="/media-hub">Media Hub</Link>
        <Link href="/communities">Communities</Link>
        <Link href="/chat">Chat</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div className="neks-nav-right">
        <button type="button" onClick={() => setDark(!dark)} className="neks-toggle">{dark ? "☀️" : "🌙"}</button>
        <Link href="/login" className="neks-login">Log in</Link>
        <Link href="/register" className="neks-signup">Sign Up</Link>
        <button type="button" onClick={() => setOpen(!open)} className="neks-hamburger">{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", background: dark ? "#1A1A2E" : "white", borderRadius: "12px", padding: "12px", marginTop: "10px", gap: "4px" }}>
          <Link href="/" onClick={() => setOpen(false)} style={{ padding: "12px", fontWeight: 600 }}>🏠 Home</Link>
          <Link href="/media-hub" onClick={() => setOpen(false)} style={{ padding: "12px", fontWeight: 600 }}>🎬 Media Hub</Link>
          <Link href="/communities" onClick={() => setOpen(false)} style={{ padding: "12px", fontWeight: 600 }}>👥 Communities</Link>
          <Link href="/chat" onClick={() => setOpen(false)} style={{ padding: "12px", fontWeight: 600 }}>💬 Chat</Link>
          <Link href="/profile" onClick={() => setOpen(false)} style={{ padding: "12px", fontWeight: 600 }}>👤 Profile</Link>
          <div style={{ borderTop: "1px solid #eee", margin: "8px 0" }}></div>
          <Link href="/login" onClick={() => setOpen(false)} style={{ padding: "12px", textAlign: "center", borderRadius: "999px", border: "1px solid #ddd", fontWeight: 700 }}>Log in</Link>
          <Link href="/register" onClick={() => setOpen(false)} style={{ padding: "12px", textAlign: "center", borderRadius: "999px", background: "#7C3AED", color: "white", fontWeight: 700 }}>Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
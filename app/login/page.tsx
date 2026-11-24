"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
export default function Login() {
  const router = useRouter();
  const [f, setF] = useState({ emailOrUsername: "", password: "" });
  const [msg, setMsg] = useState(""); const [loading, setLoading] = useState(false);
  const submit = async (e: any) => {
    e.preventDefault(); setLoading(true); setMsg("");
    try {
      const res = await fetch("/api/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      const data = await res.json(); setLoading(false);
      if (!res.ok) { setMsg(data.error); return; }
      setMsg("Login ho gaya!"); setTimeout(() => router.push("/"), 800);
    } catch { setLoading(false); setMsg("Server se connect nahi ho raha"); }
  };
  return (
    <div style={{ display: "flex", minHeight: "100vh", flexWrap: "wrap", fontFamily: "system-ui" }}>
      <div style={{ flex: "1", minWidth: "320px", background: "linear-gradient(160deg,#6D28D9,#7C3AED,#3B82F6)", color: "white", padding: "40px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Logo size={90} />
        <h1 style={{ fontSize: "38px", fontWeight: 900, lineHeight: 1.1, marginTop: "16px" }}>Welcome back to<br />NEKS-lee.</h1>
        <p style={{ marginTop: "12px", opacity: 0.9 }}>Your creators, communities and conversations are waiting for you.</p>
        <Link href="/" style={{ marginTop: "20px", color: "white", fontSize: "14px" }}>← Back to Home</Link>
      </div>
      <div style={{ flex: "1", minWidth: "320px", background: "white", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", fontWeight: 900, fontSize: "20px" }}>
          <Logo size={44} />
          <span>NEKS<span style={{ color: "#7C3AED" }}>-lee</span></span>
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: 900, marginTop: "16px" }}>Welcome back</h1>
        <p style={{ color: "#666", fontSize: "14px", marginTop: "4px" }}>Login with email or username.</p>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "18px" }}>
          <label style={lab}>Email or Username *<input required value={f.emailOrUsername} onChange={(e) => setF({ ...f, emailOrUsername: e.target.value })} placeholder="you@example.com" style={inp} /></label>
          <label style={lab}>Password *<input required type="password" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} placeholder="Your password" style={inp} /></label>
          {msg && <p style={{ fontSize: "13px", color: msg.includes("ho gaya") ? "green" : "red" }}>{msg}</p>}
          <button disabled={loading} style={{ padding: "13px", border: "none", borderRadius: "999px", background: "#7C3AED", color: "white", fontWeight: 800, cursor: "pointer" }}>{loading ? "Logging in..." : "Log in →"}</button>
        </form>
        <p style={{ textAlign: "center", fontSize: "13px", marginTop: "14px" }}>No account? <Link href="/register" style={{ color: "#7C3AED", fontWeight: 700 }}>Sign Up</Link></p>
      </div>
    </div>
  );
}
const lab: any = { fontSize: "13px", fontWeight: 700, display: "flex", flexDirection: "column", gap: "6px" };
const inp: any = { padding: "12px", borderRadius: "12px", border: "1px solid #E5E7EB", background: "#F1F5FF", outline: "none", fontSize: "14px", fontWeight: 400 };
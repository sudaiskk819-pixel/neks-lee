import Logo from "./Logo";
export default function Splash() {
  return (
    <div style={{ background: "#0B0B1A", color: "white", position: "fixed", inset: 0, zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <Logo size={130} />
      <h1 style={{ marginTop: "20px", fontSize: "48px", fontWeight: 900 }}>NEKS<span style={{ color: "#A78BFA" }}>-lee</span></h1>
      <p style={{ marginTop: "8px", color: "rgba(255,255,255,0.7)", letterSpacing: "2px", fontSize: "14px" }}>LEARN • EARN • CONNECT • GROW</p>
      <div style={{ marginTop: "22px", width: "200px", height: "4px", background: "rgba(255,255,255,0.2)", borderRadius: "999px", overflow: "hidden" }}><div style={{ height: "100%", width: "100%", background: "linear-gradient(90deg,#A855F7,#3B82F6)" }}></div></div>
    </div>
  );
}
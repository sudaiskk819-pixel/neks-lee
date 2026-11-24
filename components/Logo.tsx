import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Image
        src="/logo.svg"
        alt="NEKS-lee Logo"
        width={size}
        height={size}
        priority
        style={{ objectFit: "contain" }}
      />
      <div style={{ lineHeight: "1", display: "flex", flexDirection: "column" }}>
        <span style={{ fontWeight: 900, fontSize: size * 0.45, letterSpacing: "1px" }}>NEKS-LEE</span>
        <span style={{ fontSize: "9px", letterSpacing: "2px", color: "#FF8C00", fontWeight: 700 }}>LEARN • EARN • CONNECT • GROW</span>
      </div>
    </div>
  );
}
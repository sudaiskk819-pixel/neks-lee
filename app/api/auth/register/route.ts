import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { username, email, password, country } = await req.json();
    if (!username || !email || !password) return NextResponse.json({ error: "Sab fields bharo" }, { status: 400 });
    if (password.length < 8) return NextResponse.json({ error: "Password kam se kam 8 characters ka ho" }, { status: 400 });
    const exists = await prisma.user.findFirst({ where: { OR: [{ email }, { username }] } });
    if (exists) return NextResponse.json({ error: "Username ya email pehle se hai" }, { status: 400 });
    const hashed = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({ data: { username, fullName: username, email, passwordHash: hashed, country: country || "Prefer not to say" } });
    return NextResponse.json({ message: "Account ban gaya", user: { id: user.id, username: user.username, email: user.email } });
  } catch (e: any) { return NextResponse.json({ error: "Server error: " + e.message }, { status: 500 }); }
}
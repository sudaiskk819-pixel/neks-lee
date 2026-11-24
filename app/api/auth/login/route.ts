import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { emailOrUsername, password } = await req.json();
    if (!emailOrUsername || !password) return NextResponse.json({ error: "Email aur password chahiye" }, { status: 400 });
    const user = await prisma.user.findFirst({ where: { OR: [{ email: emailOrUsername }, { username: emailOrUsername }] } });
    if (!user) return NextResponse.json({ error: "User nahi mila" }, { status: 404 });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return NextResponse.json({ error: "Password galat hai" }, { status: 401 });
    return NextResponse.json({ message: "Login ho gaya", user: { id: user.id, username: user.username, email: user.email } });
  } catch (e: any) { return NextResponse.json({ error: "Server error: " + e.message }, { status: 500 }); }
}
"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"; // Ensure to set this in your .env file

export async function createAccount(formData: FormData) {
  try {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
  
    if (!username || !email || !password) {
      throw new Error("Missing required form data");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.user.create({
      data: { username, email, password: hashedPassword }
    });
  } catch (error) {
    console.error("Error creating account:", error);
    redirect("/signup?Failed%20to%20create%20an%20account."); // after ?, I can add any msg to deliver to the client
  }
  redirect("/login");
}

export async function logIn(formData: FormData) {
  try {
    // Fetch user from database using email
    const user = await db.user.findFirstOrThrow({ 
      where: { 
        email: formData.get("email") as string ,
      }
    });
    const passwordMatch = await bcrypt.compare(formData.get("password") as string, user.password);

    if (passwordMatch) {
      // Generate JWT token
      // const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
      // set token in cookies using next.js
      cookies().set('user_id', String(user.id), {
        httpOnly: true,
        maxAge: 60 * 60,
        path: '/', // root path = valid for the entire domain
      });
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    console.log("USER NOT FOUND.");
    redirect("/login?error=Invalid%20email%20and%20password"); // after ?, I can add any msg to deliver to the client
  }
  redirect(`/blocks`);
}

export async function createBlock(formData: FormData) {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;
  await db.block.create({ data: { title, code } });
  redirect(`/blocks`);
}

export async function deleteBlock(formData: FormData) {
  const blockId = parseInt(formData.get("id") as string);
  await db.block.delete({ where: { id: blockId } });
  redirect("/blocks");
}

export async function editBlock(id: number, code: string) {
  const block = await db.block.update({ 
    where: { id: Number(id) }, 
    data: { code: code },
  });
  redirect(`/blocks/${block.id}`);
}

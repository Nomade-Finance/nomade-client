import { COOKIE_NAME } from "@/constant";
import { CreateUser } from "@/lib/interfaces/interfaces";
import { serialize } from "cookie";

const MAX_AGE = 60 * 60 * 24; // 24 heures
export async function registerUser(user: CreateUser) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  const cookie = serialize(COOKIE_NAME , data.token, {
    maxAge: MAX_AGE,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  document.cookie = cookie;

  return data;
}

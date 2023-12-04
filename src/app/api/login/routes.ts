import { COOKIE_NAME } from "@/constant";
import { serialize } from "cookie";
const MAX_AGE = 60 * 60 * 24; // 24 heures


export async function loginUser(user: { email: string; password: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }
  );

  if (!response.ok) {
    return {
      statusCode: response.status,
      message: "Unauthorized",
    };
  }
  const data = await response.json();

  const cookie = serialize(COOKIE_NAME , data.token, {
    maxAge: MAX_AGE,
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  document.cookie = cookie;
  return data.token;
}

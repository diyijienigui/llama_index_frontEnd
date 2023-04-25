// import type { ChatMessage } from "@/types";

export async function chat(message:string) {
  try {
    const result = await fetch("http://127.0.0.1:5000/getAnswer", {
      method: "post",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        message
      }),
    });
    const data = await result.json()
    return data;
  } catch (error) {
    throw error;
  }
}

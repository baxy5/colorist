import OpenAI from "openai";

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

if (!apiKey) console.error("OpenAi API Key didn't set.");

export const openai = new OpenAI({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true,
});

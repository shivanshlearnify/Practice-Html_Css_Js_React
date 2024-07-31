import OpenAI from "openai";
import { OPENAI_API_KEY } from "./constant";

const OpenAi = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default OpenAi;

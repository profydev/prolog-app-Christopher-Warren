import { Landing } from "@api/landing.types";
import { axios } from "./axios";

const ENDPOINT = "/content-page/home";

export async function getLanding(options?: { signal?: AbortSignal }) {
  const { data } = await axios.get<Landing>(ENDPOINT, {
    signal: options?.signal,
  });

  return data;
}

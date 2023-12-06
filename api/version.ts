import { axios } from "./axios";
import type { Version } from "@api/version.types";

export async function getVersion() {
  const { data } = await axios.get<Version>("/api/version", { baseURL: "/" });

  return data;
}

import { useQuery } from "@tanstack/react-query";
import { getVersion } from "@api/version";
import type { Version } from "@api/version.types";

export function useGetVersion() {
  return useQuery<Version, Error>(["version"], getVersion);
}

import { useQuery } from "@tanstack/react-query";
import { getLanding } from "@api/landing";
// import type { Page } from "@typings/page.types";
// import type { Issue } from "@api/issues.types";

const QUERY_KEY = "landing";

export function getQueryKey() {
  const queryKey: string[] = [QUERY_KEY];
  return queryKey;
}

export function useGetLanding() {
  const query = useQuery(
    getQueryKey(),
    ({ signal }) => getLanding({ signal }),
    { keepPreviousData: true },
  );

  return query;
}

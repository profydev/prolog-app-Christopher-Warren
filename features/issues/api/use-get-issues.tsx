import { useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getIssues } from "@api/issues";
import type { Page } from "@typings/page.types";
import type { Issue, IssuesParams } from "@api/issues.types";

const QUERY_KEY = "issues";

export function getQueryKey(params: IssuesParams) {
  const queryKey: (string | number)[] = [QUERY_KEY];
  if (!params) return queryKey;
  Object.values(params).map((param) => {
    if (param) queryKey.push(param);
  });
  return queryKey;
}

export function useGetIssues(params: IssuesParams) {
  const query = useQuery<Page<Issue>, Error>(
    getQueryKey(params),
    ({ signal }) => getIssues(params, { signal }),
    { keepPreviousData: true },
  );

  // Prefetch the next page!
  const queryClient = useQueryClient();
  useEffect(() => {
    if (query.data?.meta.hasNextPage) {
      const nextPage = params.page || 1 + 1;
      queryClient.prefetchQuery(
        getQueryKey({ ...params, page: nextPage }),
        ({ signal }) => getIssues({ ...params, page: nextPage }, { signal }),
      );
    }
  }, [query.data, params, queryClient]); // Passing in an object could cause errors here
  return query;
}

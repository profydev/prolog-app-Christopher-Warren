import { axios } from "./axios";
import type { Issue, IssuesParams } from "./issues.types";
import type { Page } from "@typings/page.types";

const ENDPOINT = "/issue";

const removeEmptyParams = (params: IssuesParams) => {
  Object.entries(params).forEach(([key, value]) => {
    if (!value) {
      delete params[key as keyof IssuesParams];
    }
  });

  return params;
};

export async function getIssues(
  params: IssuesParams,
  options?: { signal?: AbortSignal },
) {
  const parsedParams = removeEmptyParams(params);
  const { data } = await axios.get<Page<Issue>>(ENDPOINT, {
    params: parsedParams,
    signal: options?.signal,
  });

  return data;
}

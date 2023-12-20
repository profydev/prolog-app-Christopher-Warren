export enum IssueLevel {
  info = "info",
  warning = "warning",
  error = "error",
}
export enum IssueStatus {
  resolved = "resolved",
  open = "open",
}

export type IssuesParams = {
  page?: number;
  level?: string;
  status?: string;
  project?: string;
};

export type Issue = {
  id: string;
  projectId: string;
  name: string;
  message: string;
  stack: string;
  level: IssueLevel;
  numEvents: number;
  numUsers: number;
};

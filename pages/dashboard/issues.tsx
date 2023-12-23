import { PageContainer } from "@features/layout";
import { IssueList } from "@features/issues";
import type { NextPage } from "next";
import { IssueFilters } from "@features/issues/";

const IssuesPage: NextPage = () => {
  return (
    <PageContainer
      title="Issues"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueFilters />
      <IssueList />
    </PageContainer>
  );
};

export default IssuesPage;

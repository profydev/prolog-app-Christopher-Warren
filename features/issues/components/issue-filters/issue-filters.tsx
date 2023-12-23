import { Button, Input, Option, Select } from "@features/ui";
import styles from "./issue-filters.module.scss";
import { useState } from "react";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useRouter } from "next/router";

export function IssueFilters() {
  const [level, setLevel] = useState<Option | null>(null);
  const [status, setStatus] = useState<Option | null>(null);
  const [searchProject, setSearchProject] = useState<string>("");

  const issueLevels = Object.values(IssueLevel).map((value) => ({
    id: value,
    value,
  }));
  const issueStatus = Object.values(IssueStatus).map((value) => ({
    id: value,
    value: value === "open" ? "unresolved" : value,
  }));

  const router = useRouter();

  const navigateToLevel = (newLevel?: string) => {
    if (!newLevel) {
      const resetQuery = router.query;
      delete resetQuery.level;
      router.push({ pathname: router.pathname, query: resetQuery });
      return;
    }

    router.push({
      pathname: router.pathname,
      query: { ...router.query, level: newLevel },
    });
  };
  const navigateToStatus = (newStatus?: string) => {
    if (!newStatus) {
      const resetQuery = router.query;
      delete resetQuery.status;
      router.push({ pathname: router.pathname, query: resetQuery });
      return;
    }

    router.push({
      pathname: router.pathname,
      query: { ...router.query, status: newStatus },
    });
  };
  const navigateToSearchProject = (newProject?: string) => {
    if (!newProject) {
      const resetQuery = router.query;
      delete resetQuery.project;
      router.push({ pathname: router.pathname, query: resetQuery });
      return;
    }

    router.push({
      pathname: router.pathname,
      query: { ...router.query, project: newProject },
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <Button
          iconSrc="/icons/check-white-large.svg"
          color="primary"
          size="large"
        >
          Resolve selected Issues
        </Button>
      </div>
      <div className={styles.filters}>
        <Select
          placeholder="Level"
          selectedValue={level}
          onReset={() => {
            setLevel(null);
            navigateToLevel();
          }}
          onChange={(option) => {
            setLevel(option);
            navigateToLevel(option.id);
          }}
          optionsList={issueLevels}
        />

        <Select
          placeholder="Status"
          selectedValue={status}
          onReset={() => {
            setStatus(null);
            navigateToStatus();
          }}
          onChange={(option) => {
            setStatus(option);
            navigateToStatus(option.id);
          }}
          optionsList={issueStatus}
        />
        <Input
          value={searchProject}
          iconSrc="/icons/search.svg"
          onChange={(e) => {
            setSearchProject(e.currentTarget.value);
            navigateToSearchProject(e.currentTarget.value);
          }}
          placeholder="Project Name"
        />
      </div>
    </div>
  );
}

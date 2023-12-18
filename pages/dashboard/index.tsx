import type { NextPage } from "next";
import { PageContainer } from "@features/layout";
import { ProjectList } from "@features/projects";
import { Select } from "@features/ui";
import { useState } from "react";

const Home: NextPage = () => {
  const [selectedValue, setSelectedValue] = useState<{
    id: string;
    value: string;
  } | null>(null);

  return (
    <PageContainer
      title="Projects"
      info="Overview of your projects sorted by alert level."
    >
      <Select
        placeholder="do something"
        selectedValue={selectedValue}
        onChange={(option) => setSelectedValue(option)}
        onReset={() => setSelectedValue(null)}
        optionsList={[
          { id: "bob", value: "bob" },
          { id: "sally", value: "sally" },
        ]}
      />
      <ProjectList />
    </PageContainer>
  );
};

export default Home;

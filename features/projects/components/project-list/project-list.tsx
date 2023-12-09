import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { Loader } from "../../../../features/ui/loader";
import { ProjectCardError } from "../project-card-error/project-card-error";
// import { Checkbox } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error } = useGetProjects();

  // const [checked, setChecked] = useState<CheckboxState>("false");

  // return (
  //   <div>
  //     <Checkbox size="medium" />
  //     {/* <Checkbox state={checked} size="small" /> */}
  //     asd
  //   </div>
  // );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ProjectCardError error={error} />;
  }

  return (
    <ul className={styles.list}>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

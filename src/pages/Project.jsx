import { useParams } from "react-router-dom";
import TaskList from "@/components/TaskList";
import AddTaskInput from "@/components/AddTaskInput";

const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Project: {projectId}</h1>
      <AddTaskInput />
      <TaskList projectId={projectId} />
    </div>
  );
};

export default ProjectPage;
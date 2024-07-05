import { useQuery } from "@tanstack/react-query";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Edit, Trash } from "lucide-react";

const fetchTasks = async () => {
  // Replace with actual API call
  return [
    { id: 1, name: "Task 1", completed: false },
    { id: 2, name: "Task 2", completed: true },
  ];
};

const TaskList = ({ projectId }) => {
  const { data: tasks, error, isLoading } = useQuery({
    queryKey: ["tasks", projectId],
    queryFn: fetchTasks,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading tasks</div>;

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <div key={task.id} className="flex items-center justify-between p-2 border rounded">
          <div className="flex items-center space-x-2">
            <Checkbox checked={task.completed} />
            <span>{task.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon">
              <Edit className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
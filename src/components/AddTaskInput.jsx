import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const AddTaskInput = () => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    // Replace with actual API call to add task
    console.log("Adding task:", taskName);
    setTaskName("");
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      <Input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new task"
      />
      <Button onClick={handleAddTask}>Add</Button>
    </div>
  );
};

export default AddTaskInput;
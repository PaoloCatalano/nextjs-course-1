import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic"; //this page must be DYNAMIC, without this export, is gonna be STATIC, because doesn't have any server information and it will not be in synch when we generate new tasks.

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskFormCustom />
      <TaskForm />
      <TaskList />
    </div>
  );
};
export default TasksPage;

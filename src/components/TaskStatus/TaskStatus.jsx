const TaskStatus = ({ task, handleCompleteTask, removeTaskList }) => {
  const handleCompletedBtn = () => {
    handleCompleteTask(task.title);
    removeTaskList(task.title);
  };
  return (
    <div className="bg-white rounded-md shadow p-2">
      <p className="pb-2">{task.title}</p>
      <button
        onClick={handleCompletedBtn}
        className="btn w-full bg-[#02A53B] text-white"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;

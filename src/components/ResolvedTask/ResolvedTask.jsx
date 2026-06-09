const ResolvedTask = ({ taskTitles }) => {
  return (
    <div>
      <h2 className="text-xl">Resolved Task</h2>
      <p className="text-xs">No resolved tasks yet</p>
      <div>
        {taskTitles.map((taskTitle, index) => (
          <p className="bg-[#E0E7FF] p-4 mb-2 rounded-md" key={index}>
            {taskTitle}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResolvedTask;

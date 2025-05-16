export const Task = ({ id, title, completed, styles = "" }) => {
  return (
    <div
      className={`py-2 flex flex-row space-x-5 lg:space-x-20 text-sm lg:text-md w-2xs lg:w-[450px] ${styles}`}
    >
      <p className="">{id}</p>
      <p className=""> {title}</p>
      <p className=""> {completed ? "Completed" : "Pending"}</p>
    </div>
  );
};

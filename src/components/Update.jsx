export const Update = ({ title, description, styles = "" }) => {
  return (
    <div
      className={`py-2 flex flex-row space-x-5 lg:space-x-20 text-sm lg:text-md  mx-auto w-2xs lg:mx-0 lg:w-[480px] ${styles}`}
    >
      <p className="">{title}</p>
      <p className=""> {description}</p>
    </div>
  );
};

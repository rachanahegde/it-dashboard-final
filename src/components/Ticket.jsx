export const Ticket = ({ issue, status, created, styles = "" }) => {
  return (
    <div className={`${styles}`}>
      <p className=""> {issue}</p>
      <p className=""> {status}</p>
      <p className=""> {created}</p>
    </div>
  );
};

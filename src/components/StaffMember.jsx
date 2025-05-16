export const StaffMember = ({
  name,
  role,
  email,
  status,
  lastLogin,
  driveUsage,
  device,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-7 gap-2 md:gap-4 text-sm text-center px-6 py-4">
      <p className="font-semibold md:font-normal">{name}</p>
      <p className=""> {role}</p>
      <p className="md:max-w-xs md:wrap-break-word"> {email}</p>
      <p className=""> {status}</p>
      <p className=""> {lastLogin}</p>
      <p className=""> {driveUsage}</p>
      <p className=""> {device}</p>
    </div>
  );
};

import staffData from "../data/staff.json";
import { StaffMember } from "../components/StaffMember";

export default function Staff() {
  return (
    <div className="pt-6 bg-light-grey w-full md:h-screen pb-10">
      <h1 className="text-xl font-bold pl-22 lg:ml-18 w-full max-w-5xl mx-auto font-red-hat">
        Staff Directory
      </h1>
      <div className="mt-8 bg-white shadow-md rounded-md w-xs md:w-2xl lg:w-full lg:max-w-5xl mx-auto font-montserrat">
        {/* Set up grid columns */}
        <div className="hidden md:grid md:grid-cols-7 gap-4 text-md font-semibold text-center py-2 md:py-4 border-b md:px-6">
          <p className=""> Name</p>
          <p className=""> Role</p>
          <p className=""> Email </p>
          <p className=""> Status</p>
          <p className=""> Last Login</p>
          <p className=""> Storage Used</p>
          <p className=""> Device</p>
        </div>

        {/* Grid rows */}
        <div className="divide-y">
          {/* Display staff members by looping through array using map */}
          {staffData.map((staff) => (
            <StaffMember
              key={staff.id}
              name={staff.name}
              role={staff.role}
              email={staff.email}
              status={staff.status}
              lastLogin={staff.lastLogin}
              driveUsage={staff.driveUsage}
              device={staff.device}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// TODO staff directory - fix the issue where there's a chunk of white screen on the side when you scroll on TABLET

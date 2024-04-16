import React from "react";

function CompanyInformation() {
  return (
    <>
      <div className="flex justify-center items-center h-[95vh] overflow-hidden">
        <div className="flex flex-col p-2 ">
          <div className="mt-5">
            <span className="font-bold text-md">Company: </span> Geeksynergy
            Techanologies Pvt Ltd{" "}
          </div>
          <div className="mt-2">
            <span className="font-bold text-md">Address: </span> Sanjaynagar,
            Bengaluru-56
          </div>
          <div className="mt-2">
            <span className="font-bold text-md">Phone: </span> XXXXXXXXX09{" "}
          </div>
          <div className="mt-2">
            <span className="font-bold text-md">Email: </span> XXXXXX@gmail.com{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyInformation;

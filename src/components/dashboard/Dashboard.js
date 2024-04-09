import axios from "axios";
import React, { useEffect, useState } from "react";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

function Dashboard() {
  const [model, setModel] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.post("https://hoblist.com/api/movieList", [
          {
            category: "movies",
            language: "English",
            genre: "Action,Horror,Scifi",
            sort: "voting",
          },
          {
            category: "movies",
            language: "English",
            genre: "Action,Adventure,Thriller",
            sort: "voting",
          },
        ]);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  const onCloseModel = () => {
    setModel(false);
  };
  return (
    <>
      {model && <CompanyDetails onCloseModel={onCloseModel} />}
      <header className="bg-gray-600 text-center text-white min-h-[30px]">
        <h1>Company Information</h1>
      </header>
      <div className="w-full h-screen border flex justify-center items-center">
        <button
          className="bg-purple-700 p-1 rounded-md  font-bold text-white"
          onClick={() => {
            setModel(true);
          }}
        >
          Getinformation
        </button>
      </div>
    </>
  );
}

export default Dashboard;

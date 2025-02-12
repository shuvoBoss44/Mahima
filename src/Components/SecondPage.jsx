import React from "react";
import Card from "./Reuse/Card";
import data from "../api/data.json";
import { useNavigate } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen design">
      <div className=" flex flex-wrap justify-center items-center gap-6 p-6 bg-gradient-to-r from-pink-400 to-red-500">
        {data.map((currElem, index) => (
          <Card
            image={currElem.image}
            description={currElem.description}
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          />
        ))}
        <button
          className="bg-gray-600 text-white px-6 py-2 cursor-pointer rounded-lg shadow-lg hover:bg-gray-500 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          onClick={() => navigate("/third")}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SecondPage;

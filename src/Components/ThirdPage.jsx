import React from "react";
import { useNavigate } from "react-router-dom";

const ThirdPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen design flex flex-wrap justify-center  items-center gap-6 p-6 bg-gradient-to-r from-pink-400 to-red-500">
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
          <h1 className="text-center">Are you waiting for 22 December 2025?</h1>
          <div className="flex justify-center items-center gap-6">
            <button
              onClick={() =>
                alert("Wait no gurileu guri pebede. Yes sip juj guri")
              }
              className="mt-5 cursor-pointer bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
            >
              No
            </button>
            <button
              onClick={() => navigate("/fourth")}
              className="mt-5 cursor-pointer bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
            >
              Yes
            </button>
          </div>
          <div className="flex justify-center items-center gap-6 mt-5">
            <button
              className="bg-gray-600 text-white px-6 py-2 cursor-pointer rounded-lg shadow-lg hover:bg-gray-500 transition duration-300"
              onClick={() => navigate(-1)}
            >
              Previous
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;

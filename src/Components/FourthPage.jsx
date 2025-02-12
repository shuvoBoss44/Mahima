import React from "react";
import { useNavigate } from "react-router-dom";

const FourthPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen flex flex-wrap justify-center flex-col items-center gap-6 p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative">
        {/* Background Rose Image */}
        <img
          src="https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg?cs=srgb&dl=pexels-pixabay-53141.jpg&fm=jpg"
          alt="Rose Background"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Glassmorphism Card */}
        <div className="bg-opacity-10 backdrop-blur-xl border border-white border-opacity-30 rounded-2xl shadow-xl p-8 max-w-md w-full relative z-10">
          <h1 className="text-center text-white text-2xl font-semibold">
            22 December accept guribi dw?
          </h1>
          <div className="flex justify-center items-center gap-6 mt-5">
            <button
              onClick={() => navigate("/fifth")}
              className="cursor-pointer bg-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:bg-pink-500 transition-transform transform hover:scale-105"
            >
              Ode
            </button>
          </div>
          <p className="text-center italic text-gray-100 opacity-70 mt-5">
            Nade hobar hono sujog nei
          </p>
          <div className="flex justify-center items-center gap-6 mt-5">
            <button
              className="bg-gray-600 text-white px-6 py-2 rounded-lg cursor-pointer mx-6 shadow-lg hover:bg-gray-500 transition duration-300"
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

export default FourthPage;

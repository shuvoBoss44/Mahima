import React from "react";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LoveDesign = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col justify-center min-h-screen bg-gradient-to-b from-pink-200 via-pink-100 to-white p-4 relative">
      <motion.div
        className="p-6 sm:p-10 bg-white rounded-3xl shadow-2xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md sm:max-w-xl"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex-shrink-0"
        >
          <Heart size={56} color="#FF6B6B" fill="#FF6B6B" />
        </motion.div>
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-bold text-pink-600 leading-tight">
            Happy Valentine's Day, Mahima ❤️
          </h1>
          <p className="text-gray-500 text-center mt-2 text-sm sm:text-base">
            A small gift from Shuvo
          </p>
        </div>
      </motion.div>

      <button
        onClick={() => navigate("/second")}
        className=" mt-5 cursor-pointer bg-pink-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
      >
        Next
      </button>
    </div>
  );
};

export default LoveDesign;

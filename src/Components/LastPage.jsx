import React from "react";
import { useNavigate } from "react-router-dom";

const LastPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative">
      {/* Background Image */}
      <img
        src="/shuvo2.jpg"
        alt="Rose Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      <div className="flex flex-col justify-center items-center relative z-10 space-y-4">
        {/* Message Text above the Icon */}
        <div className="text-center text-white text-2xl font-bold">
          Message de jatti. Basse agong. Call dile aro bes huji om
        </div>

        {/* WhatsApp Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png" // WhatsApp icon image
          alt="WhatsApp"
          className="w-20 h-20 rounded-full shadow-lg cursor-pointer"
        />

        {/* Send Message Button */}

        <a
          href="https://wa.me/1625490792" // Replace with your phone number
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-4 bg-green-500 cursor-pointer text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-200">
            Send Message
          </button>
        </a>
        <button
          className="bg-gray-600 text-white px-6 py-2 rounded-lg cursor-pointer mx-6 shadow-lg hover:bg-gray-500 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default LastPage;

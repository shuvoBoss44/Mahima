import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Envelope = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleEnvelopeClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex flex-col justify-between items-center p-6 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Rose Image */}
      <img
        src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
        alt="Rose Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Spotlight Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none"></div>

      {/* Envelope Container */}
      <div className="flex justify-center items-center relative z-10 flex-grow">
        <div
          className="relative perspective-1000 cursor-pointer"
          onClick={handleEnvelopeClick}
        >
          {/* Envelope */}
          <div
            className={`relative w-96 h-60 transform transition-all duration-500 shadow-2xl ${
              isOpen
                ? "-translate-y-20 rotate-12 scale-95"
                : "rotate-0 hover:-translate-y-2 hover:rotate-2"
            }`}
          >
            {/* Envelope Flap - Fixed rotation */}
            <div
              className={`absolute top-0 left-0 w-full h-40 bg-gradient-to-br from-yellow-500/90 to-yellow-600 
              transform origin-bottom transition-all duration-500 ${
                isOpen ? "rotate-0 shadow-lg" : "rotate-180 shadow-2xl"
              } rounded-t-xl z-20
              before:absolute before:inset-0 before:bg-gradient-to-br before:from-yellow-600/30 before:to-yellow-500/20
              after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-11/12 after:h-1 after:bg-yellow-600/30`}
            >
              <span
                className={`text-white/90 italic tracking-wider font-bold absolute top-1/2 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300
                hover:text-white hover:scale-105 ${
                  isOpen ? "rotate-0" : "rotate-180"
                }`}
                style={{
                  textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
                }}
              >
                চিঠি খুলতে ক্লিক করুন
              </span>
            </div>

            {/* Envelope Body */}
            <div
              className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-br from-yellow-400/95 to-yellow-500/95 rounded-b-xl z-10
              shadow-[0_15px_35px_rgba(0,0,0,0.2)]
              before:absolute before:inset-0 before:bg-paper-texture before:opacity-20
              after:absolute after:inset-0 after:shadow-inner after:shadow-yellow-600/20"
            >
              {/* Seal Element - Fixed positioning */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-16 h-16 bg-red-500/90 rounded-full shadow-lg
                flex items-center justify-center z-30
                hover:scale-110 transition-transform duration-300
                before:absolute before:inset-0 before:rounded-full before:bg-radial-gradient before:from-white/30 before:to-transparent"
              >
                <span className="text-white font-bold text-lg">❤</span>
              </div>
            </div>
          </div>

          {/* Letter - Fixed orientation and rotation */}
          <div
            className={`absolute top-0 left-0 w-96 h-96 bg-white shadow-2xl transform transition-all 
            duration-500 z-40 ${
              isOpen
                ? "translate-y-0 opacity-100 rotate-[2deg]"
                : "-translate-y-32 opacity-0"
            } rounded-xl
            before:absolute before:inset-0 before:bg-paper-texture before:opacity-30
            after:absolute after:inset-0 after:shadow-inner after:shadow-gray-400/20`}
          >
            <div className="p-8 relative h-full overflow-y-auto">
              <div className="absolute top-4 right-4 w-8 h-8 bg-red-100 rounded-full shadow-sm"></div>
              <p className="text-gray-800 italic font-handwriting mb-4">
                প্রিয় মহিমা,
              </p>
              <p className="text-base text-gray-700 font-handwriting italic leading-relaxed">
                আমি জানি তুমি আমাকে পছন্দ করো না, তবুও তোমাকে আমার ভালো লাগে।
                তুমি অনেকবার আমাকে প্রশ্ন করেছো, তোমাকে কেন আমি পছন্দ করি? আমি
                কখনো ভালোভাবে উত্তর দিতে পারিনি। কারণ, সত্যিকার অর্থে আমার কাছে
                কোনো উত্তর নেই। আমি জানি না এটা কেন হয়, কারণ এটা ভেতর থেকে আসে।
                আর যদি আমার কাছে উত্তর থাকতো, তাহলে হয়তো পিছে পরে থাকতাম না।
                শুভ ভালোবাসা দিবস
              </p>
              <div className="mt-6">
                <p className="text-gray-800 italic font-handwriting mb-1">
                  ইতি,
                </p>
                <p className="text-gray-800 italic font-handwriting">
                  তোমার প্রিয় শুভ
                </p>
              </div>
              <div className="absolute bottom-4 right-4 w-12 h-12 bg-blue-100 rounded-lg shadow-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons at the bottom */}
      <div className="absolute bottom-10 flex space-x-6 z-10">
        <button
          className="bg-gray-600 text-white px-6 cursor-pointer py-2 rounded-lg shadow-lg hover:bg-gray-500 transition duration-300"
          onClick={() => navigate(-1)}
        >
          Previous
        </button>
        <button
          className="bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
          onClick={() => navigate("/last")}
        >
          Next
        </button>
      </div>

      <style jsx global>{`
        .bg-paper-texture {
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .font-handwriting {
          font-family: "Dancing Script", cursive;
        }
        .bg-radial-gradient {
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 255, 255, 0) 70%
          );
        }
      `}</style>
    </div>
  );
};

export default Envelope;

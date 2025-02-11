import React from "react";

const Card = props => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full">
      <img
        src={props.image}
        alt="Card Image"
        className="w-full h-100 object-cover rounded-xl"
      />
      <p className="text-gray-600 mt-4 text-lg">{props.description}</p>
    </div>
  );
};

export default Card;

import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const Singlebday = ({ id, name, Image, age, onDelete }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center shadow-md rounded-md p-3">
        <div className="flex gap-2 items-center">
          <img
            src={Image}
            className="w-[50px] rounded-full h-[50px] object-cover"
            alt=""
          />
          <div className="flex flex-col">
            <h4 className="text-xl">{name}</h4>
            <p>I am {age} years old</p>
          </div>
        </div>
        <FaTrash
          onClick={() => onDelete(id)}
          size={25}
          color="red"
          cursor="pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`${hovered ? "animate-bounce" : ""} transition`}
        />
      </div>
    </>
  );
};

export default Singlebday;

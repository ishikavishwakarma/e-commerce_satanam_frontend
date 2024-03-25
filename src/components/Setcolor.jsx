import React from "react";

const SetColor = ({ status }) => {
  switch (status) {
    case "dispatch":
      return (
        <span className="bg-orange-200 text-orange-600 py-1 px-3 rounded-full text-xs">
          {status}
        </span>
      );
      break;
    case "delivered":
      return (
        <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
          {status}
        </span>
      );
      break;

    case "cancelled":
      return (
        <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
          {status}
        </span>
      );
      break;
    default:
      return (
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
          {status}
        </span>
      );
  }

  return <div></div>;
};

export default SetColor;

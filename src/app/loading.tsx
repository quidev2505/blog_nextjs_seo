import React from "react";

const loading = () => {
  return (
    <button type="button" className="bg-indigo-500 ... rounded-md p-2" disabled>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
      <button className="text-white">Loading...</button>
    </button>
  );
};

export default loading;

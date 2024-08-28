import React from "react";

interface SearchInfoProps {
  keyword: string;
  setKeyword: (value: string) => void;
  onhandleSearch: (keyword: string) => void;
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  keyword,
  setKeyword,
  onhandleSearch,
}) => {
  return (
    <div className="mx-auto flex justify-end my-2">
      <input
        type="text"
        className="border-2 p-2 rounded-sm"
        placeholder="Input your keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        type="button"
        onClick={() => onhandleSearch(keyword)}
        className="bg-red-600 text-white p-2 rounded-sm"
      >
        Search
      </button>
    </div>
  );
};

export default SearchInfo;

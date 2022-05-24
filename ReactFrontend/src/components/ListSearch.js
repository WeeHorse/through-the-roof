import React from "react";
import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
const ListSearch = () => {
  const { searchTerm, setSearchTerm, setSearchCategory } =
    useContext(GlobalContext);

  return (
    <div>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        className="search-input"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default ListSearch;


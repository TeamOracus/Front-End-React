import "./SearchBar.css";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = () => {
  const [searchVAl, setSearchVal] = useState({ val: [] });

  // getItemsAsync(searchValue, cb) {
  //   let url = "https";
  //   fetch(url).then()
  // }
  return (
    <div>
      <form className="search">
        <input type="search" placeholder="Search here..." />
        <button className="search">
          <Search />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

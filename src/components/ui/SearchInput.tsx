import "@/styles/components/_search_input.scss";
import searchIcon from "@public/assets/icons/search.svg";
import React from "react";

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Pesquisar",
  value,
  onChange,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
      />
      <img
        src={searchIcon}
        alt="Buscar"
        className="search-icon"
      />
    </div>
  );
};

export default SearchInput;

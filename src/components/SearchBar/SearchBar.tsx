import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import { FiSearch } from "react-icons/fi";

import { SearchValue } from "../App/App.types";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  handleSubmit: (value: SearchValue) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ handleSubmit }) => {
  const { register, handleSubmit: onSubmit } = useForm();
  const [query, setQuery] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const submitHandler = () => {
    if (!query) {
      toast.error("Please enter a search query");
      return;
    }
    handleSubmit({ query });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  return (
    <header id="header">
      <form onSubmit={onSubmit(submitHandler)}>
        <input
          type="text"
          autoComplete="on"
          autoFocus
          placeholder="Search images and photos"
          {...register("query")}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          value={query}
        />
        <button className={css.searchBtn} type="submit">
          <FiSearch size="16px" />
        </button>
        <Toaster position="top-left" aria-label="Search" />
      </form>
    </header>
  );
};

export default SearchBar;

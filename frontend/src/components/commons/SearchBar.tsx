"use client";
import styled from "styled-components";
import {
  onSearchChange,
  onSearchClear,
  selectSearchInput,
} from "@/redux/search/search-slice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { placeHolderText } from "@/redux/search/placeHolder-slice";
import { useDispatch, useSelector } from "react-redux";

const SearchBarContainer = styled.div`
  background-color: #f5f7f9;
  border: 1px solid #d1d1d1;
  padding: 0.75rem 1.25rem;
  border-radius: 100px;
  font-size: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 435px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #f5f7f9;
  outline: none;
  width: 100%;
  font-size: 1.25rem;
`;

const ClearSearchButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #d1d1d1;
  cursor: pointer;

  &:hover {
    color: #64748b;
    transition: color 0.3s;
  }
`;

export default function SearchBar({ icon }: { icon: JSX.Element }) {
  const dispatch = useDispatch();
  const searchInput = useSelector(selectSearchInput);
  const placeHolder = useSelector(placeHolderText);

  const handleSearchInput = (event: any) => {
    event.preventDefault();
    dispatch(onSearchChange(event.target.value));
  };

  const clearSearch = () => {
    dispatch(onSearchClear());
  };

  return (
    <SearchBarContainer>
      <SearchInputContainer>
        {icon}
        <SearchInput
          type="text"
          placeholder={placeHolder}
          onChange={handleSearchInput}
          value={searchInput}
        />
      </SearchInputContainer>
      <ClearSearchButton onClick={clearSearch}>
        <FontAwesomeIcon
          icon={faXmark}
          className="hover:text-slate-400 transition"
        />
      </ClearSearchButton>
    </SearchBarContainer>
  );
}

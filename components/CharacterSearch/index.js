import React, { useState } from "react";
import { Container, Input, InputContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import customUseEffectUpdate from "../../hooks/customUseEffect";

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const setQuery = (item) => {
    setSearchQuery(item.target.value);
  };
  customUseEffectUpdate(() => {
    const timeout = setTimeout(() => {
      const query = router.query;
      query.search = searchQuery;
      router.push({
        pathname: router.pathname,
        query: query,
      });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [searchQuery]);
  return (
    <Container>
      <InputContainer>
        <FontAwesomeIcon icon={faSearch} />
        <Input value={searchQuery} onChange={setQuery} />
      </InputContainer>
    </Container>
  );
};
export default SearchBar;

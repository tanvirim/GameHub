import { Button, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useState } from "react"; // Import useState
import { BsSearch } from "react-icons/Bs";
import "../index.css";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const [searchText, setSearchText] = useState(""); // State to manage the input value

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchText); // Call the onSearch function with the current search text
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          value={searchText} // Bind the input value to the state
          onChange={(e) => setSearchText(e.target.value)} // Update the state when the input value changes
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
        <Button marginLeft={2} type="submit" borderRadius={15}>
          Search
        </Button>
      </InputGroup>
    </form>
  );
};

export default SearchInput;

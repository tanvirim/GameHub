import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/Bs";
const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        sort selector
      </MenuButton>

      <MenuList>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
        <MenuItem>1</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

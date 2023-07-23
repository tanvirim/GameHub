import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/Bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedSort: string;
}
const SortSelector = ({ onSelectSortOrder, selectedSort }: Props) => {
  const sortOrder = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Released date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];
  const currentOrder = sortOrder.find((order) => order.value === selectedSort);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentOrder?.label || "Relevance"}
      </MenuButton>

      <MenuList>
        {sortOrder.map((sort) => (
          <MenuItem
            onClick={() => onSelectSortOrder(sort.value)}
            key={sort.value}
            value={sort.value}
          >
            {" "}
            {sort.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text> {colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
